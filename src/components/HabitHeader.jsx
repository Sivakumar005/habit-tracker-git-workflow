
export default function HabitHeader({ habit, streak, onDelete }) {
  return (
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{habit.name}</h3>
        <p className="text-sm text-gray-600">
          🔥 {streak} day{streak !== 1 ? 's' : ''} streak
        </p>
      </div>
      <button
        onClick={() => onDelete(habit.id)}
        className="text-red-500 hover:text-red-700 transition-colors p-2"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}