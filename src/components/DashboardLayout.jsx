import { useState } from "react";
import { Menu, Bell, User } from "lucide-react";
import Sidebar from "./Sidebar";

function DashboardLayout({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Area */}
      <div className="min-w-0 lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-lg dark:border-slate-700 dark:bg-slate-900/90 sm:px-6">
          
          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
          >
            <Menu size={22} />
          </button>

          {/* Page Title */}
          <div className="hidden lg:block">
            <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
              {title}
            </h1>
          </div>

          {/* Right Side */}
          <div className="ml-auto flex items-center gap-2 sm:gap-4">

            {/* Notification */}
            <button className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-600" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-2 border-l border-slate-200 pl-3 dark:border-slate-700 sm:pl-4">
              
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <User size={18} />
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  Kirtika
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Employee
                </p>
              </div>

            </div>
          </div>
        </header>

        {/* Content */}
        <main className="min-w-0 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;