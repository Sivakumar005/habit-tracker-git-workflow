export default function WeekCalendar({ habit, last7Days }) {
  const today = getDateString(new Date());

  return (
    <div className="flex gap-2 mb-3">
      {last7Days.map(day => {
        const completed = habit.completedDates.includes(day.date);
        const isToday = day.date === today;
        
        return (
          <DayCell
            key={day.date}
            label={day.label}
            completed={completed}
            isToday={isToday}
          />
        );
      })}
    </div>
  );
}