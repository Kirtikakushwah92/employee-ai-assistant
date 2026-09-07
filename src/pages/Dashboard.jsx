import {
  Users,
  UserCheck,
  Building2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";
import { useEmployees } from "../context/EmployeeContext";

function Dashboard() {
  // Get shared employee data
  const { employeeList } = useEmployees();

  // Total employees
  const totalEmployees = employeeList.length;

  // Departments
  const departments = [
    ...new Set(
      employeeList.map((employee) => employee.department)
    ),
  ];

  // Active employees
  // If your employee data has an "active" field,
  // count only active employees.
  // Otherwise, currently all employees are treated as active.
  const activeEmployees = employeeList.filter(
    (employee) => employee.active !== false
  ).length;

  const stats = [
    {
      title: "Total Employees",
      value: totalEmployees,
      change: "Current",
      icon: Users,
    },
    {
      title: "Active Employees",
      value: activeEmployees,
      change: "Currently active",
      icon: UserCheck,
    },
    {
      title: "Departments",
      value: departments.length,
      change: "Current",
      icon: Building2,
    },
    {
      title: "AI Conversations",
      value: "—",
      change: "Coming soon",
      icon: MessageSquare,
    },
  ];

  return (
    <DashboardLayout title="Dashboard">

      {/* Welcome */}
      <section className="mb-8">

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Good morning, Kirtika 👋
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          Here's what's happening in your workplace today.
        </p>

      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {stat.change}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Icon size={21} />
                </div>

              </div>

            </div>
          );
        })}

      </section>

      {/* Main Cards */}
      <section className="mt-6 grid gap-6 lg:grid-cols-3">

        {/* AI Assistant */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 lg:col-span-2">

          <div className="flex items-start justify-between">

            <div>
              <div className="flex items-center gap-2">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <MessageSquare size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    AI Assistant
                  </h3>

                  <p className="text-xs text-emerald-600">
                    ● Online
                  </p>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-5 dark:bg-slate-800">

            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Ask the AI assistant about employees, company policies,
              documents or workplace information.
            </p>

            <a
              href="/chat"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Start Conversation
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <h3 className="font-semibold text-slate-900 dark:text-white">
            Quick Actions
          </h3>

          <div className="mt-5 space-y-3">

            <a
              href="/employees"
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50 dark:border-slate-700 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10"
            >
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                View Employees
              </span>

              <ArrowRight
                size={17}
                className="text-slate-400"
              />
            </a>

            <a
              href="/analytics"
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50 dark:border-slate-700 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10"
            >
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                View Analytics
              </span>

              <ArrowRight
                size={17}
                className="text-slate-400"
              />
            </a>

            <a
              href="/settings"
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50 dark:border-slate-700 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10"
            >
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Profile Settings
              </span>

              <ArrowRight
                size={17}
                className="text-slate-400"
              />
            </a>

          </div>

        </div>

      </section>

    </DashboardLayout>
  );
}

export default Dashboard;