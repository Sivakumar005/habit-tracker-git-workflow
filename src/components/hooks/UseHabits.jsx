import { useState, useEffect } from 'react';

export default function useHabits() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('habits');
    if (saved) {
      setHabits(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (habits.length > 0) {
      localStorage.setItem('habits', JSON.stringify(habits));
    }
  }, [habits]);

  const addHabit = (name) => {
    setHabits([...habits, {
      id: Date.now(),
      name,
      completedDates: []
    }]);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(h => h.id !== id));
  };

  const toggleHabitCompletion = (habitId, date) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const isCompleted = habit.completedDates.includes(date);
        return {
          ...habit,
          completedDates: isCompleted
            ? habit.completedDates.filter(d => d !== date)
            : [...habit.completedDates, date]
        };
      }
      return habit;
    }));
  };

  return { habits, addHabit, deleteHabit, toggleHabitCompletion };
}