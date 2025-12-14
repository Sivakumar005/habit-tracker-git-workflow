import { useState } from "react";
import { Plus } from 'lucide-react';
export default function HabitInput({ onAddHabit }) {
  const [newHabit, setNewHabit] = useState('');

  const handleSubmit = () => {
    if (newHabit.trim()) {
      onAddHabit(newHabit);
      setNewHabit('');
    }
  };

  return (
    <div className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Enter a new habit..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <Plus size={20} />
          Add
        </button>
      </div>
    </div>
  );
}