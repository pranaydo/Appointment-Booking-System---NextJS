import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
// import Legend from './Legend';

export default function Calendar() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <CalendarHeader />
      <CalendarGrid />
      {/* <Legend /> */}
    </div>
  );
}
