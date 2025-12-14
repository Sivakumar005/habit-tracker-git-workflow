export default function HabitsList({ habits, selectedDate, onDeleteHabit, onToggleCompletion }) {
  if (habits.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="text-lg">No habits yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {habits.map(habit => (
        <HabitCard
          key={habit.id}
          habit={habit}
          selectedDate={selectedDate}
          onDelete={onDeleteHabit}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </div>
  );
}