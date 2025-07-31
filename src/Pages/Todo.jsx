import React, { useState } from 'react';

export default function ToDoPage() {
  const [tasks, setTasks] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim()) {
      setTasks([...tasks, { text: newItem, done: false }]);
      setNewItem('');
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div
      className="min-vh-100 py-5 px-4"
      style={{
        background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        className="text-center mb-4"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2.6rem',
          color: '#ff4d6d',
        }}
      >
        Your Soft Checklist 🧸
      </h2>

      <div className="container text-center">
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Add a tiny goal (e.g., nap, hug, eat) 🍭"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="btn btn-outline-pink" onClick={handleAdd}>
            ➕
          </button>
        </div>

        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.done ? 'bg-light text-muted text-decoration-line-through' : ''
              }`}
              style={{ borderRadius: '15px', marginBottom: '10px' }}
            >
              <span>{task.text}</span>
              <button
                className="btn btn-sm"
                onClick={() => toggleDone(index)}
                style={{
                  backgroundColor: task.done ? '#a3f7bf' : '#ffd6ec',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                }}
              >
                {task.done ? '✅ Done' : '💪 Do it'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
