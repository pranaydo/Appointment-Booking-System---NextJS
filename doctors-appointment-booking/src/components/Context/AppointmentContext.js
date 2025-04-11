'use client';

import { createContext, useContext, useState } from 'react';

const AppointmentContext = createContext();

export const ContextProvider = ({ children }) => {
  const [allAppointments, setAllAppointments] = useState([]);

  return (
    <AppointmentContext.Provider value={{ allAppointments, setAllAppointments }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointmentContext = () => useContext(AppointmentContext);