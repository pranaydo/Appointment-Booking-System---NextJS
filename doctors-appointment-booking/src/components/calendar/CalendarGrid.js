import DayCell from './DayCell';

export default function CalendarGrid() {
  const totalDays = 35;
  const startDay = 27;

  return (
    <div className="grid grid-cols-7 border-l border-t">
      {[...Array(totalDays)].map((_, idx) => {
        const day = (startDay + idx) % 31 || 31;
        return <DayCell key={idx} day={day} />;
      })}
    </div>
  );
}
