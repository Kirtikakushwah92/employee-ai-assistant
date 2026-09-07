import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot,
  FileSearch,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";

import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

function Landing() {
  const features = [
    {
      icon: Bot,
      title: "AI Employee Assistant",
      description:
        "Ask questions and get intelligent answers with our AI-powered workplace assistant.",
    },
    {
      icon: FileSearch,
      title: "Smart Document Search",
      description:
        "Find important company information quickly using intelligent search.",
    },
    {
      icon: Users,
      title: "Employee Directory",
      description:
        "Search employees, departments, positions and contact information easily.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "View employee statistics and organizational insights through interactive charts.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">

        {/* Background decoration */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Sparkles size={16} />
              AI-Powered Employee Assistant
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Smart
              <span className="block text-indigo-600">
                Workplace Assistant
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              Get instant answers, find employee information, explore
              organizational insights and make your everyday work easier
              with an intelligent AI assistant.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Explore Features
              </a>

            </div>
          </motion.div>

          {/* AI Illustration / Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-full max-w-lg"
          >

            <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-6">

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <Bot size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Employee AI
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Online
                  </div>
                </div>

              </div>

              {/* Messages */}
              <div className="space-y-4 py-5">

                <div className="flex gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Bot size={16} />
                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-slate-700">
                    Hello! 👋 How can I help you today?
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-indigo-600 px-4 py-3 text-sm text-white">
                    Show me today's employee analytics.
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Bot size={16} />
                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-slate-700">
                    Sure! You currently have 128 employees across 8 departments.
                  </div>
                </div>

              </div>

              {/* Input Preview */}
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2">

                <MessageSquare
                  size={18}
                  className="ml-2 text-slate-400"
                />

                <span className="flex-1 text-sm text-slate-400">
                  Ask your AI assistant...
                </span>

                <div className="rounded-lg bg-indigo-600 p-2 text-white">
                  <ArrowRight size={16} />
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >

            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Powerful Features
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need in one place
            </h2>

            <p className="mt-4 text-slate-500">
              A modern workspace designed to help employees work faster,
              smarter and more efficiently.
            </p>

          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-indigo-600 px-6 py-14 text-center text-white sm:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to work smarter?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            Start using your AI-powered employee assistant and simplify
            your everyday workplace tasks.
          </p>

          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            Launch Assistant
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">

          <div className="flex items-center gap-2 font-semibold">
            <Bot size={20} className="text-indigo-600" />
            EmployeeAI
          </div>

          <p className="text-sm text-slate-500">
            © 2026 EmployeeAI. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Landing;