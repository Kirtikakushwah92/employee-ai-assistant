import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

console.log(
  "Gemini API key loaded:",
  Boolean(process.env.GEMINI_API_KEY)
);

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const {
      message,
      previousInteractionId,
      employees = [],
    } = req.body;

    console.log("User message:", message);
    console.log("Employees received:", employees.length);

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    const employeeContext = `
You are an Employee AI Assistant.

Your job is to answer questions about the company and its employees.

Here is the current employee directory:

${JSON.stringify(employees, null, 2)}

Important instructions:

1. Use the employee directory above when answering employee-related questions.
2. Do not invent employee names, departments, positions, or emails.
3. If the requested information is not available in the employee directory, clearly say that the information is not available.
4. Give concise and helpful answers.
5. You can answer questions about:
   - Total number of employees
   - Departments
   - Employees in a department
   - Employee names
   - Employee positions
   - Employee emails
6. For questions unrelated to employees, answer normally when possible.
`;

    const interaction = await ai.interactions.create({
      model: "gemini-3.8-flash",

      input: `${employeeContext}

User question:
${message}`,

      ...(previousInteractionId
        ? {
            previous_interaction_id:
              previousInteractionId,
          }
        : {}),
    });

    console.log("Gemini response received");

    return res.json({
      response:
        interaction.output_text ||
        "I couldn't generate a response.",

      interactionId: interaction.id,
    });
  } catch (error) {
    console.error("GEMINI ERROR:", error);

    return res.status(500).json({
      error:
        error.message ||
        "Gemini API request failed.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});