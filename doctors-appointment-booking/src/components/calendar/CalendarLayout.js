// components/calendar/CalendarLayout.js

'use client';

import React, { useState } from "react";
import AppointmentModal from "../utils/AppointmentModal";
import { useAppointmentContext } from "../Context/AppointmentContext";
import MonthView from "./view/MonthlyView";
import WeekView from "./view/WeeklyView";


export default function CalendarLayout({ view }) {
  const [selectedSlot, setSelectedSlot] = useState({ day: "", time: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const { allAppointments } = useAppointmentContext();

  return (
    <div className="w-full border border-gray-200 rounded-lg p-2">
      {view === "WEEK" ? (
        <WeekView
          allAppointments={allAppointments}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          setIsModalOpen={setIsModalOpen}
          setEditingAppointment={setEditingAppointment}
        />
      ) : (
        <MonthView
          allAppointments={allAppointments}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          setIsModalOpen={setIsModalOpen}
          setEditingAppointment={setEditingAppointment}
        />
      )}

      <AppointmentModal
        selectedSlot={selectedSlot}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSelectedSlot={setSelectedSlot}
        editingAppointment={editingAppointment}
        setEditingAppointment={setEditingAppointment}
      />
    </div>
  );
}
