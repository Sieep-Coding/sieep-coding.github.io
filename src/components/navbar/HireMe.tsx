import React, { useState } from "react";

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: [],
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prevState => ({
        ...prevState,
        projectType: checked
          ? [...prevState.projectType, value]
          : prevState.projectType.filter(item => item !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xpwakglp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", projectType: [] });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-4 md:p-6 rounded-lg shadow-lg space-y-4 md:space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary dark:text-primary">Hire Me</h1>
      <p className="text-base md:text-lg text-center text-primary dark:text-secondary">
        Fill out the form below and I'll get back to you to set up a free 30-minute call.
      </p>
      <form
        className="flex flex-col space-y-4 md:space-y-6"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-primary dark:text-secondary">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 md:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dk-accent"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-primary dark:text-secondary">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 md:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dk-accent"
            placeholder="Your Email"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-primary dark:text-secondary">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 md:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dk-accent"
            placeholder="Your Message"
            rows={4}
            required
          />
        </label>
        <fieldset className="flex flex-col">
          <legend className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-primary dark:text-secondary">Type of Project:</legend>
          {["Web Development", "Mobile App Development (Flutter)", "Data Analysis", "Other"].map((type) => (
            <label key={type} className="flex items-center text-primary dark:text-secondary mb-2">
              <input
                type="checkbox"
                name="projectType"
                value={type}
                checked={formData.projectType.includes(type)}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm md:text-base">{type}</span>
            </label>
          ))}
        </fieldset>
        <button
          type="submit"
          className="px-4 py-2 md:px-6 md:py-3 bg-primary text-white dark:bg-secondary dark:text-gray-900 font-semibold rounded-lg shadow-md hover:bg-accent dark:hover:bg-dk-accent focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dk-accent transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
        {status && <p className="text-center text-base md:text-lg font-semibold text-accent dark:text-dk-accent">{status}</p>}
      </form>
    </div>
  );
}