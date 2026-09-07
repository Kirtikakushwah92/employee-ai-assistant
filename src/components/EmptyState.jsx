import { SearchX } from "lucide-react";

function EmptyState({ onClear }) {
  return (
    <div className="col-span-full flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <SearchX size={26} />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        No employees found
      </h3>

      <p className="mt-2 max-w-sm text-sm text-slate-500">
        We couldn't find any employees matching your search or department
        filter.
      </p>

      <button
        onClick={onClear}
        className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Clear Filters
      </button>

    </div>
  );
}

export default EmptyState;
