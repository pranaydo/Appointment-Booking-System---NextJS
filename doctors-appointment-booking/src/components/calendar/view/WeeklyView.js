'use client';

import React from "react";

const hours = [];
for (let h = 9; h <= 16; h++) {
  hours.push(`${String(h).padStart(2, "0")}:00`);
  if (h !== 16) hours.push(`${String(h).padStart(2, "0")}:30`);
}

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeekView({
  allAppointments,
  selectedSlot,
  setSelectedSlot,
  setIsModalOpen,
  setEditingAppointment,
}) {
  const handleSlotClick = (day, time) => {
    const foundAppt = allAppointments.find(
      (appt) => appt.slot?.day === day && appt.slot?.time === time
    );
    setSelectedSlot({ day, time });
    setEditingAppointment(foundAppt || null);
    setIsModalOpen(true);
  };

  return (
    <div className="min-w-[600px] grid grid-cols-[70px_repeat(7,minmax(80px,1fr))] text-sm">
      <div className="border bg-white h-10 sticky top-0 z-20" />
      {days.map((day) => (
        <div
          key={day}
          className="border p-2 text-center font-semibold bg-gray-50 sticky top-0 z-20"
        >
          {day}
        </div>
      ))}

      {hours.map((time) => (
        <React.Fragment key={time}>
          <div className="border bg-white text-center p-2 font-medium sticky left-0 z-10">
            {time}
          </div>
          {days.map((day, idx) => {
            const isSelected = selectedSlot.day === day && selectedSlot.time === time;
            const appointment = allAppointments.find(
              (appt) => appt.slot?.day === day && appt.slot?.time === time
            );

            return (
              <div
                key={`${time}-${idx}`}
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
