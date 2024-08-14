import React, { useState } from "react";

const ContactForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="comments"
        value={form.comments}
        onChange={handleChange}
        placeholder="Comments"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
