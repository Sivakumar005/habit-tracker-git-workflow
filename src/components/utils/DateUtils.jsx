export function getDateString(date) {
  return date.toISOString().split('T')[0];
}

export function getLast7Days() {
  const days = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    days.push({
      date: getDateString(date),
      label: i === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' })
    });
  }
  return days;
}

export function getStreak(habit) {
  let streak = 0;
  const today = new Date();
  const sortedDates = [...habit.completedDates].sort().reverse();
  
  for (let i = 0; i < 30; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() - i);
    const dateStr = getDateString(checkDate);
    
    if (sortedDates.includes(dateStr)) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }
  return streak;
}
