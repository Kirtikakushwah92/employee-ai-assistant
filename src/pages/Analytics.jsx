// import {
//   Users,
//   UserCheck,
//   Building2,
// } from "lucide-react";

// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";

// import DashboardLayout from "../components/DashboardLayout";
// import StatCard from "../components/StatCard";

// function Analytics() {
//   // Mock statistics
//   const stats = [
//     {
//       title: "Total Employees",
//       value: "128",
//       change: "+8% from last month",
//       icon: Users,
//     },
//     {
//       title: "Active Employees",
//       value: "112",
//       change: "+5% from last month",
//       icon: UserCheck,
//     },
//     {
//       title: "Departments",
//       value: "8",
//       change: "+1 this month",
//       icon: Building2,
//     },
//   ];

//   // Bar chart data
//   const departmentData = [
//     {
//       name: "Engineering",
//       employees: 45,
//     },
//     {
//       name: "Sales",
//       employees: 28,
//     },
//     {
//       name: "Finance",
//       employees: 20,
//     },
//     {
//       name: "HR",
//       employees: 15,
//     },
//     {
//       name: "Marketing",
//       employees: 12,
//     },
//     {
//       name: "Operations",
//       employees: 8,
//     },
//   ];

//   // Pie chart data
//   const pieData = [
//     {
//       name: "Engineering",
//       value: 45,
//     },
//     {
//       name: "Sales",
//       value: 28,
//     },
//     {
//       name: "Finance",
//       value: 20,
//     },
//     {
//       name: "HR",
//       value: 15,
//     },
//     {
//       name: "Marketing",
//       value: 12,
//     },
//     {
//       name: "Operations",
//       value: 8,
//     },
//   ];

//   const pieColors = [
//     "#4f46e5",
//     "#7c3aed",
//     "#0891b2",
//     "#059669",
//     "#d97706",
//     "#dc2626",
//   ];

//   return (
//     <DashboardLayout title="Analytics">

//       {/* Page Header */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//           Analytics Dashboard
//         </h2>

//         <p className="mt-2 text-sm text-slate-500 sm:text-base">
//           Monitor employee statistics and department insights.
//         </p>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {stats.map((stat) => (
//           <StatCard
//             key={stat.title}
//             {...stat}
//           />
//         ))}
//       </div>

//       {/* Charts */}
//       <div className="mt-6 grid gap-6 xl:grid-cols-2">

//         {/* Bar Chart */}
//         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-slate-900">
//               Employees by Department
//             </h3>

//             <p className="mt-1 text-sm text-slate-500">
//               Number of employees in each department.
//             </p>
//           </div>

//           <div className="h-80 w-full">
//             <ResponsiveContainer
//               width="100%"
//               height="100%"
//             >
//               <BarChart
//                 data={departmentData}
//                 margin={{
//                   top: 10,
//                   right: 10,
//                   left: -20,
//                   bottom: 60,
//                 }}
//               >
//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   vertical={false}
//                 />

//                 <XAxis
//                   dataKey="name"
//                   angle={-35}
//                   textAnchor="end"
//                   interval={0}
//                   tick={{ fontSize: 11 }}
//                 />

//                 <YAxis
//                   allowDecimals={false}
//                   tick={{ fontSize: 12 }}
//                 />

//                 <Tooltip />

//                 <Bar
//                   dataKey="employees"
//                   fill="#4f46e5"
//                   radius={[6, 6, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Pie Chart */}
//         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-slate-900">
//               Department Distribution
//             </h3>

//             <p className="mt-1 text-sm text-slate-500">
//               Employee distribution across departments.
//             </p>
//           </div>

//           <div className="h-80 w-full">
//             <ResponsiveContainer
//               width="100%"
//               height="100%"
//             >
//               <PieChart>

//                 <Pie
//                   data={pieData}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="45%"
//                   outerRadius="65%"
//                   label={({ name, percent }) =>
//                     `${name} ${(percent * 100).toFixed(0)}%`
//                   }
//                   labelLine={false}
//                 >
//                   {pieData.map((item, index) => (
//                     <Cell
//                       key={item.name}
//                       fill={
//                         pieColors[
//                           index % pieColors.length
//                         ]
//                       }
//                     />
//                   ))}
//                 </Pie>

//                 <Tooltip />

//                 <Legend
//                   verticalAlign="bottom"
//                   height={36}
//                   wrapperStyle={{
//                     fontSize: "12px",
//                   }}
//                 />

//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//       </div>

//     </DashboardLayout>
//   );
// }

// export default Analytics;

import { useMemo } from "react";

import {
  Users,
  UserCheck,
  Building2,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import DashboardLayout from "../components/DashboardLayout";
import StatCard from "../components/StatCard";

import employees from "../data/employees";

function Analytics() {
  // Total employees
  const totalEmployees = employees.length;

  // Get unique departments
  const departments = [
    ...new Set(
      employees.map((employee) => employee.department)
    ),
  ];

  // Total departments
  const departmentCount = departments.length;

  // Statistics
  const stats = [
    {
      title: "Total Employees",
      value: totalEmployees,
      change: "Current employee count",
      icon: Users,
    },
    {
      title: "Active Employees",
      value: totalEmployees,
      change: "Based on employee records",
      icon: UserCheck,
    },
    {
      title: "Departments",
      value: departmentCount,
      change: "Current departments",
      icon: Building2,
    },
  ];

  // Department-wise employee count
  const departmentData = useMemo(() => {
    const departmentMap = {};

    employees.forEach((employee) => {
      if (departmentMap[employee.department]) {
        departmentMap[employee.department] += 1;
      } else {
        departmentMap[employee.department] = 1;
      }
    });

    return Object.entries(departmentMap).map(
      ([name, employees]) => ({
        name,
        employees,
      })
    );
  }, []);

  // Pie chart data
  const pieData = departmentData.map((item) => ({
    name: item.name,
    value: item.employees,
  }));

  // Pie chart colors
  const pieColors = [
    "#4f46e5",
    "#7c3aed",
    "#0891b2",
    "#059669",
    "#d97706",
    "#dc2626",
    "#db2777",
    "#2563eb",
  ];

  return (
    <DashboardLayout title="Analytics">

      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Analytics Dashboard
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          Monitor employee statistics and department insights.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-6 xl:grid-cols-2">

        {/* Bar Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Employees by Department
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Number of employees in each department.
            </p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={departmentData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 60,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="name"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  tick={{ fontSize: 11 }}
                />

                <YAxis
                  allowDecimals={false}
                  tick={{ fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="employees"
                  fill="#4f46e5"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Department Distribution
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Employee distribution across departments.
            </p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  outerRadius="65%"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {pieData.map((item, index) => (
                    <Cell
                      key={item.name}
                      fill={
                        pieColors[
                          index % pieColors.length
                        ]
                      }
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  height={36}
                  wrapperStyle={{
                    fontSize: "12px",
                  }}
                />

              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Analytics;