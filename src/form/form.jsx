import { useState } from "react";
import "./form.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
       <h2>Kontaktformulär🐧</h2>
      <label>Namn:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>E-post:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Meddelande:</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

    </form>
  );
};

export default ContactForm;
