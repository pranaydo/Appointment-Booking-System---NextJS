export default function CalendarHeader() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
    return (
      <div className="grid grid-cols-7 bg-gray-100 rounded-t-lg text-center text-sm font-semibold">
        {days.map((day) => (
          <div key={day} className="py-3">
            {day}
          </div>
        ))}
      </div>
    );
  }
  