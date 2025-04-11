'use client';
import Calendar from '@/components/calendar/Calendar';
import CalendarHeader from '@/components/CalendarHeader';

import { useState } from 'react';


export default function HomePage() {
  const [view, setView] = useState('week');
  const [currentWeek, setCurrentWeek] = useState('This week: October 10 - October 16');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const appointments = [/*...same mock data as before*/];
  return (
    <div className="flex flex-col h-full max-h-screen bg-white">
      <CalendarHeader />
      <div>
        <Calendar />
      </div>

    </div>
  );
}