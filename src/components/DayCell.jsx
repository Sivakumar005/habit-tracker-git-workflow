export default function DayCell({ label, completed, isToday }) {
  const { Check } = require('lucide-react');
  
  return (
    <div className="flex-1 text-center">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className={`h-8 rounded-lg flex items-center justify-center ${
        completed 
          ? 'bg-green-500' 
          : isToday 
          ? 'bg-gray-300' 
          : 'bg-gray-200'
      }`}>
        {completed && <Check size={16} className="text-white" />}
      </div>
    </div>
  );
}