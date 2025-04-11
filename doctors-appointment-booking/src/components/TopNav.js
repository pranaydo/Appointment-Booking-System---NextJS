export default function Header() {
  return (
    <header className="m-4 w-auto flex items-center justify-between px-4 py-3 bg-gray-100 rounded-xl shadow">
      {/* Search Bar */}
      <div className="flex-1 max-w-md relative mr-4">
        <input
          type="text"
          placeholder="Search pathology results"
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M5.5 11a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"
            />
          </svg>
        </span>
      </div>

      {/* Icon */}
      <div className="mr-4">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
        <div className="text-right">
          <div className="text-sm font-medium text-gray-800">Ola Boluwatife</div>
          <div className="text-xs text-purple-700 font-semibold">PATIENT</div>
        </div>
      </div>
    </header>
  );
}
