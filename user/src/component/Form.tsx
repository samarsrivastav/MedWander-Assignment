import React, { useState } from "react";

const ComplaintForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Product",
    priority: "Low",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Complaint submitted successfully!");
        setFormData({
          title: "",
          description: "",
          category: "Product",
          priority: "Low",
        });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert("An error occurred while submitting the complaint.");
    }
  };

  return (
    <div className="flex justify-center items-center h-100 ">
      <form
        className="w-full max-w-lg bg-[rgb(241,245,250)] rounded-lg shadow-3xl shadow-gray-800 p-8 border-[rgb(113,113,122)] border-2"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700  font-medium mb-2"
          >
            Complaint Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300  rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300  rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-medium mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="Product">Product</option>
            <option value="Service">Service</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 font-medium mb-2">Priority</p>
          <div className="flex items-center space-x-4">
            {["Low", "Medium", "High"].map((level) => (
              <label
                key={level}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="priority"
                  value={level}
                  checked={formData.priority === level}
                  onChange={handleChange}
                  className="focus:ring focus:ring-blue-500"
                />
                <span className="text-gray-700">{level}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[rgb(113,113,122)] text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-[rgb(22,173,204)]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
