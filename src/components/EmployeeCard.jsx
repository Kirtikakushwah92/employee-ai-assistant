import { Mail, BriefcaseBusiness, Trash2 } from "lucide-react";

function EmployeeCard({ employee, onDelete }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Top */}
      <div className="flex items-start justify-between gap-4">

        {/* Employee Info */}
        <div className="flex min-w-0 items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
            {employee.name.charAt(0)}
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-slate-900">
              {employee.name}
            </h3>

            <p className="mt-1 text-sm text-indigo-600">
              {employee.department}
            </p>
          </div>

        </div>

        {/* Delete Button */}
        <button
          type="button"
          onClick={() => onDelete(employee.id)}
          className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
          title="Delete employee"
          aria-label={`Delete ${employee.name}`}
        >
          <Trash2 size={18} />
        </button>

      </div>

      {/* Details */}
      <div className="mt-5 space-y-3">

        {/* Position */}
        <div className="flex items-center gap-3 text-sm text-slate-600">

          <BriefcaseBusiness
            size={17}
            className="shrink-0 text-slate-400"
          />

          <span className="truncate">
            {employee.position}
          </span>

        </div>

        {/* Email */}
        <div className="flex items-center gap-3 text-sm text-slate-600">

          <Mail
            size={17}
            className="shrink-0 text-slate-400"
          />

          <span className="truncate">
            {employee.email}
          </span>

        </div>

      </div>

    </div>
  );
}

export default EmployeeCard;