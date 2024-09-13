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
      setFormData({
        ...formData,
        projectType: checked
          ? [...formData.projectType, value]
          : formData.projectType.filter((item) => item !== value),
      });
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
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-full max-w-[90vw] h-full max-h-[90vw] p-6 rounded-lg shadow-lg space-y-6">
        <h1 className="text-4xl font-extrabold text-center">Hire Me</h1>
        <p className="text-lg text-center">
          Fill out the form below and I'll get back to you to set up a free 30-minute call.
        </p>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="font-semibold text-lg mb-2">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your Name"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold text-lg mb-2">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your Email"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold text-lg mb-2">Message:</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your Message"
              rows={6}
              required
            />
          </label>
          <fieldset className="flex flex-col">
            <legend className="font-semibold text-lg mb-2">Type of Project:</legend>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="projectType"
                value="Web Development"
                checked={formData.projectType.includes("Web Development")}
                onChange={handleChange}
                className="mr-2"
              />
              Web Development
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="projectType"
                value="Mobile App Development"
                checked={formData.projectType.includes("Mobile App Development")}
                onChange={handleChange}
                className="mr-2"
              />
              Mobile App Development (Flutter)
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="projectType"
                value="Data Analysis"
                checked={formData.projectType.includes("Data Analysis")}
                onChange={handleChange}
                className="mr-2"
              />
              Data Analysis
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="projectType"
                value="Other"
                checked={formData.projectType.includes("Other")}
                onChange={handleChange}
                className="mr-2"
              />
              Other
            </label>
          </fieldset>
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Send Message
          </button>
          {status && <p className="text-center text-lg font-semibold text-accent">{status}</p>}
        </form>
      </div>
    </div>
  );
}
