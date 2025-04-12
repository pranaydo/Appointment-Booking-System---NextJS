"use client"

import { useState, useEffect } from "react"
import dayjs from "dayjs"
import { useAppointmentContext } from "@/components/Context/AppointmentContext"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function MonthView({
  allAppointments,
  selectedSlot,
  setSelectedSlot,
  setIsModalOpen,
  setEditingAppointment,
}) {
  const [currentMonth, setCurrentMonth] = useState(dayjs())
  const [calendarDays, setCalendarDays] = useState([])
  const { setAllAppointments } = useAppointmentContext()

  // Generate calendar days for the current month
  useEffect(() => {
    const startOfMonth = currentMonth.startOf("month")
    const endOfMonth = currentMonth.endOf("month")
    const startDay = startOfMonth.day() // Day of week (0-6, 0 is Sunday)
    const daysInMonth = endOfMonth.date()

    const days = []

    // Add empty cells for days before the start of the month
    for (let i = 0; i < startDay; i++) {
      days.push({
        date: startOfMonth.subtract(startDay - i, "day"),
        isCurrentMonth: false,
        hasAppointment: false,
      })
    }

    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = startOfMonth.add(i - 1, "day")
      const formattedDate = date.format("YYYY-MM-DD")
      const appointment = allAppointments.find((appt) => appt.slot?.date === formattedDate)

      days.push({
        date,
        isCurrentMonth: true,
        hasAppointment: !!appointment,
        appointment,
      })
    }

    // Add empty cells for days after the end of the month to complete the grid
    const remainingDays = 42 - days.length // 6 rows of 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: endOfMonth.add(i, "day"),
        isCurrentMonth: false,
        hasAppointment: false,
      })
    }

    setCalendarDays(days)
  }, [currentMonth, allAppointments])

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"))
  }

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"))
  }

  // Navigate to current month
  const goToCurrentMonth = () => {
    setCurrentMonth(dayjs())
  }

  // Handle cell click
  const handleCellClick = (day) => {
    if (!day.isCurrentMonth) return

    const formattedDate = day.date.format("YYYY-MM-DD")
    setSelectedSlot({ date: formattedDate })
    setEditingAppointment(day.appointment || null)
    setIsModalOpen(true)
  }

  // Get all appointments for a specific date
  const getAppointmentsForDate = (date) => {
    const formattedDate = date.format("YYYY-MM-DD")
    return allAppointments.filter((appt) => appt.slot?.date === formattedDate)
  }

  return (
    <div className="month-view w-full">
      {/* Month navigation */}
      <div className="flex justify-between items-center mb-4 px-2">
        <button onClick={goToPreviousMonth} className="px-3 py-1 border rounded hover:bg-gray-100">
          Previous
        </button>
        <h2 className="text-xl font-semibold">{currentMonth.format("MMMM YYYY")}</h2>
        <div className="flex gap-2">
          <button onClick={goToCurrentMonth} className="px-3 py-1 border rounded hover:bg-gray-100">
            Today
          </button>
          <button onClick={goToNextMonth} className="px-3 py-1 border rounded hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>

      {/* Calendar header - days of week */}
      <div className="grid grid-cols-7 text-sm font-bold text-center mb-2">
        {days.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {calendarDays.map((day, index) => {
          const appointments = getAppointmentsForDate(day.date)
          const isToday = day.date.format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD")

          return (
            <div
              key={index}
              onClick={() => handleCellClick(day)}
              className={`
                border h-28 p-2 flex flex-col text-xs cursor-pointer
                ${day.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-400"}
                ${isToday ? "border-2 border-blue-500" : ""}
                hover:bg-blue-50
              `}
            >
              <div className={`font-semibold ${isToday ? "text-blue-600" : ""}`}>{day.date.format("D")}</div>

              <div className="mt-1 overflow-y-auto max-h-20">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="mt-1 text-green-700 text-xs bg-green-50 p-1 rounded mb-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedSlot({ date: day.date.format("YYYY-MM-DD") })
                      setEditingAppointment(appointment)
                      setIsModalOpen(true)
                    }}
                  >
                    {appointment.name}
                    <br />
                    <span className="text-[10px]">
                      {appointment.startTime} - {appointment.endTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
