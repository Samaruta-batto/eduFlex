'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock function to simulate fetching route data from an API
const fetchRouteById = (id: string) => {
  const mockRoutes = [
    { id: 'RT-001', name: 'North City Route', busNumber: 'PB-10-AC-1234', stops: ['Stop A', 'Stop B', 'Stop C'] },
    { id: 'RT-002', name: 'South Village Route', busNumber: 'PB-10-BD-5678', stops: ['Stop X', 'Stop Y'] },
    { id: 'RT-003', name: 'Central Suburb Route', busNumber: 'PB-10-EE-9012', stops: ['Stop P', 'Stop Q', 'Stop R', 'Stop S'] },
  ];
  return mockRoutes.find((route) => route.id === id);
};

export default function EditRoutePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    busNumber: '',
    stops: [''],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const routeData = fetchRouteById(params.id);
    if (routeData) {
      setFormData(routeData);
    }
    setIsLoading(false);
  }, [params.id]);

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
    // In a real app, this is where you'd send an API call to update the route
    console.log('Updated Route Data:', formData);
    alert('Bus route updated successfully! (Mock)');
    router.push('/transport/routes');
  };

  if (isLoading) {
    return <div>Loading route data...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Bus Route</h1>
      <p className="text-gray-600 mb-4">Editing route: <span className="font-semibold">{formData.name}</span></p>

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
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Route
          </button>
        </div>
      </form>
    </div>
  );
}