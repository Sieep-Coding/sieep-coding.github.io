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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
   <div className="flex items-center justify-center h-screen">
    <div className="w-full max-w-[500px] h-full max-h-[500px] bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-6">
      <h1 className="text-4xl font-extrabold text-center text-primary dark:primary">Hire Me</h1>
      <p className="text-lg text-center text-primary dark:secondary">
        Fill out the form below and I'll get back to you to set up a free 30-minute call.
      </p>
      <form
        className="flex flex-col space-y-6"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span className="font-semibold text-lg mb-2 text-primary dark:secondary">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:secondary"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold text-lg mb-2 text-primary dark:secondary">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:secondary"
            placeholder="Your Email"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold text-lg mb-2 text-primary dark:secondary">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dk-accent"
            placeholder="Your Message"
            rows={6}
            required
          />
        </label>
        <fieldset className="flex flex-col">
          <legend className="font-semibold text-lg mb-2 text-primary dark:secondary">Type of Project:</legend>
          <label className="flex items-center text-primary dark:secondary">
            <input
              type="checkbox"
              name="projectType"
              value="Web Development"
              checked={formData.projectType.includes("Web Development")}
              onChange={handleChange}
              className="mr-2 text-primary dark:secondary"
            />
            Web Development
          </label>
          <label className="flex items-center text-primary dark:secondary">
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
          <label className="flex items-center text-primary dark:secondary">
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
          <label className="flex items-center text-primary dark:secondary">
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
          className="px-6 py-3 bg-primary text-white dark:secondary dark:text-gray-900 font-semibold rounded-lg shadow-md hover:bg-accent dark:hover:bg-dk-accent focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dk-accent transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
        {status && <p className="text-center text-lg font-semibold text-accent dark:text-dk-accent">{status}</p>}
      </form>
    </div>
     </div>
  );
}
