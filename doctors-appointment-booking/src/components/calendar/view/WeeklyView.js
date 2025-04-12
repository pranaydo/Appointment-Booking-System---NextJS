'use client';

import React from "react";
import dayjs from "dayjs";

const hours = [];
for (let h = 9; h <= 16; h++) {
  hours.push(`${String(h).padStart(2, "0")}:00`);
  if (h !== 16) hours.push(`${String(h).padStart(2, "0")}:30`);
}

export default function WeekView({
  allAppointments,
  selectedSlot,
  setSelectedSlot,
  setIsModalOpen,
  setEditingAppointment,
  dateRange
}) {
  const start = dateRange?.[0];
  const end = dateRange?.[1];

  const rangeDays = [];
  let current = start;

  while (current.isBefore(end) || current.isSame(end, "day")) {
    rangeDays.push(current);
    current = current.add(1, "day");
  }

  const handleSlotClick = (date, time) => {
    const foundAppt = allAppointments.find(
      (appt) => appt.slot?.date === date.format("YYYY-MM-DD") && appt.slot?.time === time
    );
    setSelectedSlot({ date: date.format("YYYY-MM-DD"), time });
    setEditingAppointment(foundAppt || null);
    setIsModalOpen(true);
  };

  return (
    <div
      className="min-w-[600px] grid text-sm"
      style={{
        gridTemplateColumns: `70px repeat(${rangeDays.length}, minmax(80px, 1fr))`,
      }}
    >
      <div className="border bg-white h-10 sticky top-0 z-20" />
      {rangeDays.map((day) => (
        <div
          key={day.format()}
          className="border p-2 text-center font-semibold bg-gray-50 sticky top-0 z-20"
        >
          {day.format("ddd, D MMM")}
        </div>
      ))}

      {/* Time Rows */}
      {hours.map((time) => (
        <React.Fragment key={time}>
          <div className="border bg-white text-center p-2 font-medium sticky left-0 z-10">
            {time}
          </div>
          {rangeDays.map((day) => {
            const dateStr = day.format("YYYY-MM-DD");
            const isSelected = selectedSlot.date === dateStr && selectedSlot.time === time;
            const appointment = allAppointments.find(
              (appt) => appt.slot?.date === dateStr && appt.slot?.time === time
            );

            return (
              <div
                key={`${dateStr}-${time}`}
                onClick={() => handleSlotClick(day, time)}
                className={`border h-12 flex items-center justify-center text-xs px-1 cursor-pointer ${
                  isSelected ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                } ${appointment ? "bg-green-100 text-green-800" : ""}`}
              >
                {appointment ? (
                  <>
                    {appointment.name}
                    <br />
                    <span className="text-[10px]">
                      {appointment.startTime} - {appointment.endTime}
                    </span>
                  </>
                ) : isSelected ? "+" : null}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
