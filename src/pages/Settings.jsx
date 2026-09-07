import { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  Building2,
  Moon,
  Sun,
  Bell,
  Bot,
  Users,
  CalendarDays,
  Save,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";
import Toggle from "../components/Toggle";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { theme, toggleTheme } = useTheme();

  const [profile, setProfile] = useState({
    name: "Kirtika Kushwah",
    email: "kirtika@example.com",
    position: "Software Developer",
    department: "Engineering",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    aiAlerts: true,
    employeeUpdates: false,
    weeklySummary: true,
  });

  const [saved, setSaved] = useState(false);

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSave = (event) => {
    event.preventDefault();

    localStorage.setItem("profile", JSON.stringify(profile));

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const toggleNotification = (key) => {
    setNotifications((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  return (
    <DashboardLayout title="Settings">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Profile Settings
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Manage your profile, appearance and notification preferences.
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6">
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <User size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Personal Information
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Update your profile information.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSave}>
              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label
                    htmlFor="position"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Position
                  </label>

                  <div className="relative">
                    <Briefcase
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="position"
                      name="position"
                      type="text"
                      value={profile.position}
                      onChange={handleProfileChange}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label
                    htmlFor="department"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Department
                  </label>

                  <div className="relative">
                    <Building2
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      id="department"
                      name="department"
                      value={profile.department}
                      onChange={handleProfileChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                    >
                      <option>Engineering</option>
                      <option>Sales</option>
                      <option>Finance</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>Operations</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Save */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
                >
                  <Save size={17} />
                  Save Changes
                </button>

                {saved && (
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Profile updated successfully!
                  </p>
                )}
              </div>
            </form>
          </section>

          {/* Appearance Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                  {theme === "dark" ? (
                    <Moon size={20} />
                  ) : (
                    <Sun size={20} />
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Appearance
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Choose how the application looks.
                  </p>
                </div>
              </div>

              <Toggle
                enabled={theme === "dark"}
                onChange={toggleTheme}
              />
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Dark Mode
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {theme === "dark"
                    ? "Dark theme is currently enabled."
                    : "Use dark theme for a darker interface."}
                </p>
              </div>

              <span className="text-sm font-semibold capitalize text-indigo-600 dark:text-indigo-400">
                {theme}
              </span>
            </div>
          </section>

          {/* Notifications */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Bell size={20} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Notifications
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Manage how you receive notifications.
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-700">
              {/* Email Notifications */}
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-center gap-3">
                  <Mail
                    size={19}
                    className="shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      Email Notifications
                    </p>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Receive important updates through email.
                    </p>
                  </div>
                </div>

                <Toggle
                  enabled={notifications.email}
                  onChange={() => toggleNotification("email")}
                />
              </div>

              {/* AI Alerts */}
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-center gap-3">
                  <Bot
                    size={19}
                    className="shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      AI Assistant Alerts
                    </p>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Get alerts and suggestions from the AI assistant.
                    </p>
                  </div>
                </div>

                <Toggle
                  enabled={notifications.aiAlerts}
                  onChange={() => toggleNotification("aiAlerts")}
                />
              </div>

              {/* Employee Updates */}
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-center gap-3">
                  <Users
                    size={19}
                    className="shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      Employee Updates
                    </p>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Receive updates about employee activity.
                    </p>
                  </div>
                </div>

                <Toggle
                  enabled={notifications.employeeUpdates}
                  onChange={() =>
                    toggleNotification("employeeUpdates")
                  }
                />
              </div>

              {/* Weekly Summary */}
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={19}
                    className="shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      Weekly Summary
                    </p>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Receive a weekly analytics summary.
                    </p>
                  </div>
                </div>

                <Toggle
                  enabled={notifications.weeklySummary}
                  onChange={() =>
                    toggleNotification("weeklySummary")
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;