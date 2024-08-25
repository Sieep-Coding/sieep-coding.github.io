import React, { useState } from "react";

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Hire Me</h1>
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span className="font-medium mb-4">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-secondary dark:border-dk-secondary rounded"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibol mb-4">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-secondary dark:border-dk-secondary rounded"
            placeholder="Your Email"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibol mb-4">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border border-secondary dark:border-dk-secondary rounded"
            placeholder="Your Message"
            required
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 border-2 rounded text-primary dark:text-dk-primary border-primary dark:border-dk-primary bg-secondary dark:bg-dk-secondary hover:bg-accent dark:hover:bg-dk-accent hover:text-primary dark:hover:text-primary"
        >
          Send Message
        </button>
        {status && <p className="text-center text-lg">{status}</p>}
      </form>
    </div>
  );
}
