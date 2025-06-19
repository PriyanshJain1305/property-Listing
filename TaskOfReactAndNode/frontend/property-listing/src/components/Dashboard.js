// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import PropertyForm from './PropertyForm';
import './Dasboard.css';

function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [editing, setEditing] = useState(null);
  const token = localStorage.getItem('token');

  const fetchProperties = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/properties/getProperties', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (res.ok && Array.isArray(json.data?.properties)) {
        setProperties(json.data.properties); // ✅ FIXED
      } else {
        console.error('Unexpected response format:', json);
      }
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    fetchProperties();
  }, []);

  const onEdit = (prop) => setEditing(prop);
  const onDelete = async (id) => {
    if (!window.confirm('Delete this property?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/properties/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 204) {
        fetchProperties();
      } else {
        console.error('Failed to delete property');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onSaved = () => {
    setEditing(null);
    fetchProperties();
  };

  return (
    <div className="dash-container">
      <h2>Your Properties</h2>
      <button onClick={() => setEditing({})}>Add Property</button>

      {(editing !== null) && (
        <PropertyForm property={editing} token={token} onSaved={onSaved} onCancel={() => setEditing(null)} />
      )}

      <div className="property-list">
        {properties.map(p => (
          <div key={p.id} className="property-card">
            <h3>{p.title}</h3>
            {p.image && <img src={`http://localhost:5000/uploads/${p.image}`} alt={p.title} />}
            <p>{p.description}</p>
            <p><b>₹ {p.price}</b></p>
            <div className="actions">
              <button onClick={() => onEdit(p)}>Edit</button>
              <button onClick={() => onDelete(p.id)}>Delete</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Dashboard;
