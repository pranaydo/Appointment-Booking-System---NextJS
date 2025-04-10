// "use client";
 
// import React from "react";
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// const times = [
//   "09:00", "09:30", "10:00", "10:30", "11:00",
//   "11:30", "12:00", "12:30", "13:00", "13:30",
//   "14:00", "14:30", "15:00", "15:30", "16:00"
// ];

// export default function Calendar() {
//   return (
//     <div className="bg-white rounded-md shadow border text-sm">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 border-b">
//         <h2 className="text-lg font-bold text-red-500">Appointments</h2>
//         <div className="flex items-center gap-4">
//           <select className="border px-2 py-1 rounded">
//             <option>This week: October 30 - October 16</option>
//           </select>
//           <div className="flex gap-2">
//             <button className="px-3 py-1 bg-gray-100 rounded">Day</button>
//             <button className="px-3 py-1 bg-red-500 text-white rounded">Week</button>
//             <button className="px-3 py-1 bg-gray-100 rounded">Month</button>
//           </div>
//           <label className="flex items-center gap-1">
//             <span className="text-sm">Apply Dark Theme</span>
//             <input type="checkbox" className="toggle" />
//           </label>
//         </div>
//       </div>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-[80px_repeat(7,_1fr)] border-t">
//         {/* Days Header */}
//         <div></div>
//         {days.map((day, idx) => (
//           <div key={idx} className="border-l p-2 text-center font-medium">{day}</div>
//         ))}

//         {/* Time slots and empty cells */}
//         {times.map((time, timeIndex) => (
//           <React.Fragment key={timeIndex}>
//             {/* Time column */}
//             <div className="border-t px-2 py-1 text-right text-xs">{time}</div>
//             {/* Day columns */}
//             {days.map((_, dayIdx) => (
//               <div key={dayIdx} className="border-t border-l h-16 relative">
//                 {/* TODO: Inject appointments here */}
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>

//       {/* Legend */}
//       <div className="flex justify-center gap-6 py-4 text-xs">
//         <div className="flex items-center gap-2"><span className="w-3 h-3 bg-indigo-500 rounded-full"></span>Emergency</div>
//         <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded-full"></span>Examination</div>
//         <div className="flex items-center gap-2"><span className="w-3 h-3 bg-purple-500 rounded-full"></span>Consultation</div>
//         <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span>Routine Checkup</div>
//         <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-400 rounded-full"></span>Sick Visit</div>
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";

const days = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
];

const times = [
  "09:00", "09:30", "10:00", "10:30", "11:00",
  "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00",
]; 

export default function Calendar() {
  return (<>
  <div className="border h-15">
        Header
      </div>
    <div className="flex flex-col h-[calc(100vh-80px)] bg-white rounded-md shadow border text-sm">
      {/* Header */}
      
      <div className="flex justify-between items-center p-4 border-b shrink-0">
        <h2 className="text-lg font-bold text-red-500">Appointments</h2>
        <div className="flex items-center gap-4">
          <select className="border px-2 py-1 rounded text-sm">
            <option>This week: October 30 - October 16</option>
          </select>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-100 rounded">Day</button>
            <button className="px-3 py-1 bg-red-500 text-white rounded">Week</button>
            <button className="px-3 py-1 bg-gray-100 rounded">Month</button>
          </div>
          <label className="flex items-center gap-1 text-sm">
            <span>Dark Theme</span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-[80px_repeat(7,_1fr)] h-full">
          {/* Day Headers */}
          <div className="bg-white"></div>
          {days.map((day, idx) => (
            <div
              key={idx}
              className="border-l p-2 text-center font-medium bg-white"
            >
              {day}
            </div>
          ))}

          {/* Grid Rows */}
          {times.map((time, timeIndex) => (
            <React.Fragment key={timeIndex}>
              <div className="border-t px-2 text-right text-xs py-1">
                {time}
              </div>

            
              {days.map((_, dayIdx) => (
                <div
                  key={dayIdx}
                  className="border-t border-l h-[calc((100vh-160px)/16)] relative"
                ></div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

   
      <div className=" flex justify-center gap-6 py-2 text-xs border-t bg-white" >
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded-full"></span>Examination</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-indigo-500 rounded-full"></span>Emergency</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-purple-500 rounded-full"></span>Consultation</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span>Routine Checkup</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-400 rounded-full"></span>Sick Visit</div>
      </div>
    </div>
    </>
  );
}
