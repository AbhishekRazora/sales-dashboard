import React from 'react';

function DateSelector({ onChange, selectedDates }) {
  const { date1, date2 } = selectedDates;

  const handleDateChange = () => {
    onChange({ date1, date2 });
  };

  return (
    <div className="mb-8 flex space-x-4">
      <input
        type="date"
        value={date1}
        onChange={(e) => onChange({ date1: e.target.value, date2 })}
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={date2}
        onChange={(e) => onChange({ date1, date2: e.target.value })}
        className="p-2 border rounded"
      />
      <button
        onClick={handleDateChange}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Compare
      </button>
    </div>
  );
}

export default DateSelector;
