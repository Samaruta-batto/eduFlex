'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewRoutePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    busNumber: '',
    stops: [''], // Start with one empty stop
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStopChange = (index: number, value: string) => {
    const newStops = [...formData.stops];
    newStops[index] = value;
    setFormData({ ...formData, stops: newStops });
  };

  const addStop = () => {
    setFormData({ ...formData, stops: [...formData.stops, ''] });
  };

  const removeStop = (index: number) => {
    const newStops = formData.stops.filter((_, i) => i !== index);
    setFormData({ ...formData, stops: newStops });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would make an API call here.
    console.log('Form Submitted:', formData);
    alert('Bus route added successfully! (Mock)');
    // Redirect back to the routes list after submission
    router.push('/transport/routes');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Bus Route</h1>
      <p className="text-gray-600 mb-4">Define a new transport route with bus details and stops.</p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          {/* Route Details Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Route Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-gray-700">Route Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Bus Number</span>
                <input
                  type="text"
                  name="busNumber"
                  value={formData.busNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
          </div>

          {/* Stops Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Route Stops</h2>
            <p className="text-gray-500 text-sm mb-4">Add the sequence of stops for this route.</p>
            {formData.stops.map((stop, index) => (
              <div key={index} className="flex items-center space-x-2 mb-4">
                <label className="flex-1">
                  <span className="sr-only">Stop {index + 1}</span>
                  <input
                    type="text"
                    value={stop}
                    onChange={(e) => handleStopChange(index, e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder={`Stop ${index + 1} Name`}
                    required
                  />
                </label>
                {formData.stops.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStop(index)}
                    className="px-3 py-2 text-sm text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addStop}
              className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              + Add Another Stop
            </button>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Create Route
          </button>
        </div>
      </form>
    </div>
  );
}