import React, { useState } from 'react';
import { supabase } from '../supabaseClient';


export default function GrievancePage() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { name, type, message } = formData;

    const { error, data } = await supabase.from('grievances').insert([
      {
        name,
        type,
        message,
      },
    ]);

    setSubmitting(false);

    if (error) {
      console.error('Supabase Error:', error);
      alert('❌ Oops! Failed to submit grievance. Try again later.');
    } else {
      console.log('Grievance saved:', data);
      alert(`✅ Grievance received 😢\nI’ll work on it ASAP 💖`);
      setFormData({ name: '', type: '', message: '' });
    }
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: 'linear-gradient(135deg, #ffd6ec, #f3c6ff)',
        fontFamily: "'Poppins', sans-serif",
        padding: '20px',
      }} id='gre'
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-5 rounded-5 w-100"
        style={{ maxWidth: '550px' }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: '#ff4d6d',
          }}
        >
          😤 File Your Grievance
        </h2>

        <div className="mb-3">
          <label className="form-label">Why are you upset in one word ?</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="What are you mad at? 😅"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Grievance Type</label>
          <select
            className="form-select"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
           <option value="">Select type 💭</option>
<option value="i_hurt_you">I hurt you 😢</option>
<option value="i_ignored_you">I ignored you 🙁</option>
<option value="i_broke_promise">I broke my promise 💔</option>
<option value="other">Something else I did 😓</option>

          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">What Happened?</label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            placeholder="Tell me everything 💌"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn w-100"
          disabled={submitting}
          style={{
            backgroundColor: '#ff4d6d',
            color: 'white',
            borderRadius: '999px',
            padding: '12px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
        >
          {submitting ? 'Submitting...' : 'Submit Grievance 💔'}
        </button>
      </form>
    </div>
  );
}
