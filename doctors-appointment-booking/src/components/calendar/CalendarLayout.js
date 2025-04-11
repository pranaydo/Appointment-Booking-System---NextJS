
import React, { useContext, useState } from "react";
import AppointmentModal from "../utils/AppointmentModal";
import { useAppointmentContext } from "../Context/AppointmentContext";

const hours = [];
for (let h = 9; h <= 16; h++) {
  hours.push(`${String(h).padStart(2, "0")}:00`);
  if (h !== 16) hours.push(`${String(h).padStart(2, "0")}:30`);
}
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function BookingCalendar() {
  const [selectedSlot, setSelectedSlot] = useState({ day: "", time: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { allAppointments, setAllAppointmen } = useAppointmentContext();
  console.log('STATE',allAppointments);
  

  const handleSlotClick = (day, time) => {
    setSelectedSlot({ day, time });
    setIsModalOpen(true)

  };

  const handleSubmit = () => {
    console.log("New Appointment:", {
      ...formData,
      slot: selectedSlot,
    });
    setIsModalOpen(false);
    setFormData({
      name: "",
      category: null,
      doctor: null,
      startTime: null,
      endTime: null,
    });
  };

  return (
    <div className="w-full max-h-[80vh] overflow-auto border border-gray-200 rounded-lg">
      <div className="min-w-[600px] grid grid-cols-[70px_repeat(7,minmax(80px,1fr))] text-sm">
        <div className="border border-gray-200 bg-white h-10 sticky top-0 z-20"></div>
        {days.map((day) => (
          <div
            key={day}
            className="border border-gray-200 p-2 text-center font-semibold bg-gray-50 sticky top-0 z-20"
          >
            {day}
          </div>
        ))}

        {hours.map((time) => (
          <React.Fragment key={time}>
            <div className="border border-gray-200 bg-white text-center p-2 font-medium sticky left-0 z-10">
              {time}
            </div>

            {days.map((day, idx) => {
              const isSelected = selectedSlot.day === day && selectedSlot.time === time;
              return (
                <div
                  key={`${time}-${idx}`}
                  onClick={() => handleSlotClick(day, time)}
                  className={`border border-gray-200 h-12 text-center transition-colors cursor-pointer select-none ${
                    isSelected ? "bg-blue-500 text-white" : "hover:bg-blue-100 active:bg-blue-200"
                  }`}
                >
                  {isSelected && <div className="text-center">+</div>}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      <AppointmentModal
        selectedSlot={selectedSlot}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
