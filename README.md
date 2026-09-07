# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Employee AI Assistant

A modern and responsive employee management dashboard with an integrated AI assistant. The application allows users to manage employees, view analytics, interact with an AI assistant, and configure profile/settings preferences.

## 🚀 Features

### 🏠 Landing Page
- Modern responsive landing page
- AI assistant introduction
- Feature highlights
- Call-to-action buttons
- Smooth animations

### 🤖 AI Chat Assistant
- Chat with an AI assistant
- Gemini API integration
- Employee-related questions
- Conversation history using localStorage
- Loading state
- Error handling
- Clear chat option
- Suggested prompts
- Responsive chat interface

Example questions:

- How many employees are there?
- How many employees are in Engineering?
- Who works in HR?
- Show all employees.
- Tell me about the Engineering team.

### 👥 Employee Directory
- View employee cards
- Search employees
- Filter by department
- Add new employees
- Delete employees
- Empty state
- Responsive layout

### 📊 Analytics Dashboard
- Total employees
- Active employees
- Total departments
- Employee distribution by department
- Bar chart
- Pie chart
- Responsive analytics layout

### ⚙️ Profile Settings
- Update profile information
- Theme toggle
- Dark mode
- Notification preferences
- Responsive settings page

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Lucide React
- Framer Motion
- Recharts

### Backend
- Node.js
- Express.js
- CORS
- dotenv
- Google Gemini API

### State Management
- React Context API
- React Hooks
- localStorage

## 📁 Project Structure

```text
employee-ai-assistant/
│
├── public/
│
├── server/
│   └── index.js
│
├── src/
│   ├── components/
│   │   ├── DashboardLayout.jsx
│   │   ├── EmployeeCard.jsx
│   │   ├── EmptyState.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   └── Toggle.jsx
│   │
│   ├── context/
│   │   ├── EmployeeContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── data/
│   │   └── employees.js
│   │
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Chat.jsx
│   │   ├── Employees.jsx
│   │   ├── Analytics.jsx
│   │   └── Settings.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


----------------- APPLICATION FLOW -----------

Landing Page
     │
     ▼
Dashboard
     │
     ├── Employee Directory
     │       │
     │       ├── Search
     │       ├── Filter
     │       ├── Add Employee
     │       └── Delete Employee
     │
     ├── Analytics
     │
     ├── AI Chat Assistant
     │       │
     │       ▼
     │    Gemini API
     │
     └── Settings
