
import React from "react";

// 30-minute time slots from 09:00 to 16:00
const hours = [];
for (let h = 9; h <= 16; h++) {
  hours.push(`${String(h).padStart(2, "0")}:00`);
  if (h !== 16) hours.push(`${String(h).padStart(2, "0")}:30`);
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarHeader() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-[70px_repeat(7,minmax(80px,1fr))] text-sm">
        {/* Header Row */}
        <div className="border border-gray-200 bg-white h-10"></div>
        {days.map((day) => (
          <div
            key={day}
            className="border border-gray-200 p-2 text-center font-semibold bg-gray-50"
          >
            {day}
          </div>
        ))}

        {/* Time Rows */}
        {hours.map((time) => (
          <React.Fragment key={time}>
            {/* Time column */}
            <div className="border border-gray-200 bg-white text-center p-2 font-medium sticky left-0 z-10">
              {time}
            </div>

            {/* Time slots for each day */}
            {days.map((day, idx) => (
              <div
                key={`${time}-${idx}`}
                className="border border-gray-200 h-12 text-center hover:bg-blue-100 active:bg-blue-200 transition-colors cursor-pointer"
              >
                {/* Appointment content placeholder */}
              T
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
