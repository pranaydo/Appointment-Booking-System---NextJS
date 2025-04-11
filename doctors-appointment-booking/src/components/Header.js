import { Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className=" p-4 border-b">
      <h1 className="flex justify-between items-center text-xl font-bold text-red-500">Appointments</h1>
      <div className="flex items-center gap-2">
        <Sun className="h-5 w-5" />
        <button variant="outline" size="icon" className="rounded-full bg-gray-900">
          <span className="sr-only">Toggle dark mode</span>
        </button>
        <span className="text-sm">Apply Dark Theme</span>   
      </div>
      <div>  slect rang</div>
    </header>
  );
}