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
    <div className="flex flex-col w-600 h-300 p-4 md:p-6 rounded-lg space-y-4 md:space-y-6">
      <p className="text-base md:text-lg text-center text-black font-semibold">
        Fill out the form below and I'll get back to you to set up a free 30-minute call.
      </p>
      <form
        className="flex flex-col space-y-4 md:space-y-6"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <p className="text-base md:text-lg text-left text-black font-semibold">Name:</p>
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
          <p className="md:text-lg text-left text-black font-semibold">Email:</p>
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
          <p className="text-black font-semibold text-black md:text-lg text-left">Message:</p>
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
          <p className="text-black font-semibold md:text-lg text-left">Type of Project:</p>
          {["Web/App/Mobile Development","Business Intelligence","Career"].map((type) => (
            <label key={type} className="flex items-center text-black font-semibold mb-2">
              <input
                type="checkbox"
                name="projectType"
                value={type}
                checked={formData.projectType.includes(type)}
                onChange={handleChange}
                className="mr-2"
              />
              <p className="text-base md:text-lg text-center text-black font-semibold">{type}</p>
            </label>
          ))}
        </fieldset>
        <button
          type="submit"
          className="px-4 py-2 md:px-6 md:py-3 text-black font-semibold bg-accent rounded-lg shadow-md hover:bg-dk-accent dark:hover:bg-dk-accent focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dk-accent transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
        {status && <p className="text-center text-base md:text-lg font-semibold text-accent dark:text-dk-accent">{status}</p>}
      </form>
    </div>
  );
}