export default function CompletionButton({ isCompleted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`w-full py-3 rounded-lg font-medium transition-colors ${
        isCompleted
          ? 'bg-green-500 text-white hover:bg-green-600'
          : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-purple-500'
      }`}
    >
      {isCompleted ? 'Completed ✓' : 'Mark as Complete'}
    </button>
  );
}