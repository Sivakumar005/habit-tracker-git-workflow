
import React, { useState, useEffect } from 'react';
import HabitInput from './components/AddHabit';
import Header from './components/Header';
import HabitsList from './components/HabitsList';
import DateSelector from './components/DateSelector';

export default function App() {
  const { habits, addHabit, deleteHabit, toggleHabitCompletion } = useHabits();
  const [selectedDate, setSelectedDate] = useState(getDateString(new Date()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <Header />
          <HabitInput onAddHabit={addHabit} />
          <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          <HabitsList 
            habits={habits}
            selectedDate={selectedDate}
            onDeleteHabit={deleteHabit}
            onToggleCompletion={toggleHabitCompletion}
          />
        </div>
      </div>
    </div>
  );
}