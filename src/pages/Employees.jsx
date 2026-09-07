import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Users,
  Plus,
  X,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";
import EmployeeCard from "../components/EmployeeCard";
import EmptyState from "../components/EmptyState";

import { useEmployees } from "../context/EmployeeContext";

function Employees() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  // Get shared employee data from EmployeeContext
  const {
    employeeList,
    addEmployee,
    deleteEmployee,
  } = useEmployees();

  // Add employee modal
  const [showForm, setShowForm] = useState(false);

  // New employee form
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "Engineering",
    position: "",
    email: "",
  });

  // Get unique departments
  const departments = [
    "All",
    ...new Set(
      employeeList.map((employee) => employee.department)
    ),
  ];

  // Search + filter
  const filteredEmployees = useMemo(() => {
    return employeeList.filter((employee) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(searchText) ||
        employee.email.toLowerCase().includes(searchText) ||
        employee.position.toLowerCase().includes(searchText);

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employeeList, search, department]);

  // Clear filters
  const clearFilters = () => {
    setSearch("");
    setDepartment("All");
  };

  // Handle form input
  const handleNewEmployeeChange = (e) => {
    const { name, value } = e.target;

    setNewEmployee((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Add employee
  const handleAddEmployee = (e) => {
    e.preventDefault();

    const employee = {
      name: newEmployee.name.trim(),
      department: newEmployee.department,
      position: newEmployee.position.trim(),
      email: newEmployee.email.trim(),
    };

    addEmployee(employee);

    // Reset form
    setNewEmployee({
      name: "",
      department: "Engineering",
      position: "",
      email: "",
    });

    // Close modal
    setShowForm(false);
  };

  // Delete employee
  const handleDeleteEmployee = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) return;

    deleteEmployee(id);
  };

  return (
    <DashboardLayout title="Employee Directory">

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="flex items-center gap-3">

              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Users size={22} />
              </div>

              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Employee Directory
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Find and manage employee information.
                </p>
              </div>

            </div>
          </div>

          {/* Count + Add button */}
          <div className="flex items-center gap-3">

            <div className="text-sm text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">
                {filteredEmployees.length}
              </span>{" "}
              employees
            </div>

            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
            >
              <Plus size={18} />

              <span className="hidden sm:inline">
                Add Employee
              </span>

              <span className="sm:hidden">
                Add
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="flex flex-col gap-3 md:flex-row">

          {/* Search */}
          <div className="relative flex-1">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email or position..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-700 dark:focus:ring-indigo-500/20"
            />

          </div>

          {/* Department Filter */}
          <div className="relative md:w-64">

            <SlidersHorizontal
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-700 dark:focus:ring-indigo-500/20"
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "All Departments" : item}
                </option>
              ))}
            </select>

          </div>

        </div>

      </div>

      {/* Employee Cards */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={handleDeleteEmployee}
            />
          ))
        ) : (
          <EmptyState onClear={clearFilters} />
        )}

      </div>

      {/* Add Employee Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">

          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800">

            {/* Modal Header */}
            <div className="mb-6 flex items-center justify-between">

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Add New Employee
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Enter employee information.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
              >
                <X size={20} />
              </button>

            </div>

            {/* Form */}
            <form
              onSubmit={handleAddEmployee}
              className="space-y-4"
            >

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleNewEmployeeChange}
                  placeholder="Enter employee name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 dark:focus:ring-indigo-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleNewEmployeeChange}
                  placeholder="employee@company.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 dark:focus:ring-indigo-500/20"
                />
              </div>

              {/* Position */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Position
                </label>

                <input
                  type="text"
                  name="position"
                  value={newEmployee.position}
                  onChange={handleNewEmployeeChange}
                  placeholder="e.g. Software Developer"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 dark:focus:ring-indigo-500/20"
                />
              </div>

              {/* Department */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Department
                </label>

                <select
                  name="department"
                  value={newEmployee.department}
                  onChange={handleNewEmployeeChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                >
                  <option value="Engineering">
                    Engineering
                  </option>

                  <option value="Sales">
                    Sales
                  </option>

                  <option value="Finance">
                    Finance
                  </option>

                  <option value="HR">
                    HR
                  </option>

                  <option value="Marketing">
                    Marketing
                  </option>

                  <option value="Operations">
                    Operations
                  </option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Add Employee
                </button>

              </div>

            </form>
          </div>
        </div>
      )}

    </DashboardLayout>
  );
}

export default Employees;