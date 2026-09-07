import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  User,
  Sparkles,
  Trash2,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";
import { useEmployees } from "../context/EmployeeContext";

function Chat() {
  const { employeeList } = useEmployees();

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");

    if (savedMessages) {
      try {
        return JSON.parse(savedMessages);
      } catch {
        return [];
      }
    }

    return [
      {
        id: 1,
        role: "assistant",
        content:
          "Hello! I'm your Employee AI Assistant. You can ask me about employees, departments, positions, or the employee directory.",
      },
    ];
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Save chat history
  useEffect(() => {
    localStorage.setItem(
      "chatMessages",
      JSON.stringify(messages)
    );
  }, [messages]);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Add message
  const addMessage = (role, content) => {
    setMessages((previous) => [
      ...previous,
      {
        id: Date.now() + Math.random(),
        role,
        content,
      },
    ]);
  };

  // Get employee-related answer
  const getEmployeeAnswer = (question) => {
    const text = question.toLowerCase().trim();

    // --------------------------------
    // Total Employees
    // --------------------------------

    if (
      text.includes("how many employees") ||
      text.includes("total employees") ||
      text.includes("number of employees") ||
      text.includes("employee count")
    ) {
      return `There are ${employeeList.length} employees in the company.`;
    }

    // --------------------------------
    // Total Departments
    // --------------------------------

    if (
      text.includes("how many departments") ||
      text.includes("total departments") ||
      text.includes("number of departments")
    ) {
      const departments = [
        ...new Set(
          employeeList.map(
            (employee) => employee.department
          )
        ),
      ];

      return `There are ${departments.length} departments in the company.`;
    }

    // --------------------------------
    // List Departments
    // --------------------------------

    if (
      text.includes("list departments") ||
      text.includes("show departments") ||
      text.includes("what departments")
    ) {
      const departments = [
        ...new Set(
          employeeList.map(
            (employee) => employee.department
          )
        ),
      ];

      if (departments.length === 0) {
        return "There are currently no departments available.";
      }

      return `Departments:\n${departments
        .map(
          (department, index) =>
            `${index + 1}. ${department}`
        )
        .join("\n")}`;
    }

    // --------------------------------
    // Department Questions
    // --------------------------------

    const department = employeeList.find((employee) =>
      text.includes(employee.department.toLowerCase())
    );

    if (
      department &&
      (text.includes("how many") ||
        text.includes("who works") ||
        text.includes("employees in") ||
        text.includes("people in"))
    ) {
      const departmentEmployees = employeeList.filter(
        (employee) =>
          employee.department.toLowerCase() ===
          department.department.toLowerCase()
      );

      if (text.includes("how many")) {
        return `There are ${departmentEmployees.length} employees in ${department.department}.`;
      }

      if (
        text.includes("who works") ||
        text.includes("employees in") ||
        text.includes("people in")
      ) {
        if (departmentEmployees.length === 0) {
          return `There are no employees in ${department.department}.`;
        }

        const names = departmentEmployees
          .map((employee) => employee.name)
          .join(", ");

        return `Employees in ${department.department}: ${names}.`;
      }
    }

    // --------------------------------
    // Show All Employees
    // --------------------------------

    if (
      text.includes("show all employees") ||
      text.includes("list all employees") ||
      text.includes("all employees") ||
      text.includes("employee list")
    ) {
      if (employeeList.length === 0) {
        return "There are currently no employees in the directory.";
      }

      return employeeList
        .map(
          (employee, index) =>
            `${index + 1}. ${employee.name} — ${employee.position} (${employee.department})`
        )
        .join("\n");
    }

    // --------------------------------
    // Employee Name Search
    // --------------------------------

    const employeeByName = employeeList.find((employee) =>
      text.includes(employee.name.toLowerCase())
    );

    if (employeeByName) {
      if (
        text.includes("email") ||
        text.includes("mail")
      ) {
        return `${employeeByName.name}'s email is ${employeeByName.email}.`;
      }

      if (
        text.includes("position") ||
        text.includes("role") ||
        text.includes("job")
      ) {
        return `${employeeByName.name} works as ${employeeByName.position}.`;
      }

      if (
        text.includes("department") ||
        text.includes("team")
      ) {
        return `${employeeByName.name} works in the ${employeeByName.department} department.`;
      }

      return `${employeeByName.name} works as ${employeeByName.position} in the ${employeeByName.department} department.\nEmail: ${employeeByName.email}`;
    }

    // --------------------------------
    // Position Search
    // --------------------------------

    const employeeByPosition = employeeList.find((employee) =>
      text.includes(employee.position.toLowerCase())
    );

    if (employeeByPosition) {
      const employeesWithPosition = employeeList.filter(
        (employee) =>
          employee.position.toLowerCase() ===
          employeeByPosition.position.toLowerCase()
      );

      return employeesWithPosition
        .map(
          (employee) =>
            `${employee.name} — ${employee.department} — ${employee.email}`
        )
        .join("\n");
    }

    return null;
  };

  // Send message
  const sendMessage = (customMessage) => {
    const userMessage = (
      customMessage ?? input
    ).trim();

    if (!userMessage || loading) {
      return;
    }

    setInput("");
    addMessage("user", userMessage);
    setLoading(true);

    const employeeAnswer =
      getEmployeeAnswer(userMessage);

    setTimeout(() => {
      if (employeeAnswer) {
        addMessage(
          "assistant",
          employeeAnswer
        );
      } else {
        addMessage(
          "assistant",
          "I can currently help with employee directory questions such as employee count, departments, employee names, positions, and emails. Try asking: \"How many employees are there?\""
        );
      }

      setLoading(false);
    }, 500);
  };

  // Submit message
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  // Clear chat
  const clearChat = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the chat?"
    );

    if (!confirmed) {
      return;
    }

    const welcomeMessage = {
      id: Date.now(),
      role: "assistant",
      content:
        "Hello! I'm your Employee AI Assistant. You can ask me about employees, departments, positions, or the employee directory.",
    };

    setMessages([welcomeMessage]);
    setInput("");

    // Immediately update localStorage
    localStorage.setItem(
      "chatMessages",
      JSON.stringify([welcomeMessage])
    );
  };

  // Suggested prompts
  const suggestedPrompts = [
    "How many employees are there?",
    "How many departments are there?",
    "Who works in Engineering?",
    "Show all employees",
  ];

  return (
    <DashboardLayout title="AI Assistant">
      <div className="mx-auto flex h-[calc(100vh-8rem)] max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Bot size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Employee AI Assistant
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ask questions about your employees
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={clearChat}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-500/10 dark:hover:text-red-400"
          >
            <Trash2 size={17} />

            <span className="hidden sm:inline">
              Clear Chat
            </span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6">
          {messages.map((message) => {
            const isUser =
              message.role === "user";

            return (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  isUser
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {!isUser && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <Bot size={18} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[70%] ${
                    isUser
                      ? "rounded-br-md bg-indigo-600 text-white"
                      : "rounded-bl-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  }`}
                >
                  {message.content}
                </div>

                {isUser && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                    <User size={18} />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading */}
          {loading && (
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Bot size={18} />
              </div>

              <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 dark:bg-slate-800">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />

                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />

                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-700">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Sparkles size={14} />
            Suggested questions
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {suggestedPrompts.map(
              (prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() =>
                    sendMessage(prompt)
                  }
                  disabled={loading}
                  className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
                >
                  {prompt}
                </button>
              )
            )}
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-slate-200 p-4 dark:border-slate-700 sm:p-5"
        >
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:focus-within:ring-indigo-500/20">
            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Ask about employees..."
              disabled={loading}
              className="min-w-0 flex-1 bg-transparent px-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-white"
            />

            <button
              type="submit"
              disabled={
                !input.trim() || loading
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default Chat;