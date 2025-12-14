export default function HabitCard({ habit, selectedDate, onDelete, onToggleCompletion }) {
  const streak = getStreak(habit);
  const last7Days = getLast7Days();
  const isCompleted = habit.completedDates.includes(selectedDate);

  return (
    <div className="bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-gray-100 transition-colors">
      <HabitHeader habit={habit} streak={streak} onDelete={onDelete} />
      <WeekCalendar habit={habit} last7Days={last7Days} />
      <CompletionButton 
        isCompleted={isCompleted}
        onToggle={() => onToggleCompletion(habit.id, selectedDate)}
      />
    </div>
  );
}