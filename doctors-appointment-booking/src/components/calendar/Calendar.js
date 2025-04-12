'use client';

import { useState } from 'react';
import CalendarLayout from './CalendarLayout';
import CalendarHeader from '../CalendarHeader';


export default function Calendar() {
  const [view, setView] = useState('WEEK');

  return (
    <div className="p-4 max-w-7xl mx-auto overflow-hidden">
      <CalendarHeader view={view} setView={setView} />
      <CalendarLayout view={view} />
    </div>
  );
}
