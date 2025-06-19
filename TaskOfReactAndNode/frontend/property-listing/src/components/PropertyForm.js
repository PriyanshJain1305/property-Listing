// src/components/PropertyForm.js
import React, { useState, useEffect } from 'react';
import './PropertyForm.css';

function PropertyForm({ property, token, onSaved, onCancel }) {
  const [form, setForm] = useState({ title: '', description: '', price: '' });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (property.id) setForm(property);
    if (property.imageUrl) setPreview(property.imageUrl);
  }, [property]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    ['title', 'description', 'price'].forEach(key => data.append(key, form[key]));
    if (imageFile) data.append('image', imageFile);

    const url = property.id
      ? `http://localhost:5000/api/properties/updateProperties/${property.id}`
      : 'http://localhost:5000/api/properties/createProperties';

    const res = await fetch(url, {
      method: property.id ? 'PUT' : 'POST', // ✅ fix: use PUT if updating
      headers: { Authorization: `Bearer ${token}` },
      body: data
    });


    if (res.ok) onSaved();
  };

  return (
    <div className="form-overlay">
      <form className="prop-form" onSubmit={handleSubmit}>
        <h3>{property.id ? 'Edit' : 'Add'} Property</h3>

        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />

        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />

        <input type="file" accept="image/*" onChange={handleImage} />
        {preview && <img src={preview} alt="Preview" className="img-preview" />}

        <div className="form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default PropertyForm;
