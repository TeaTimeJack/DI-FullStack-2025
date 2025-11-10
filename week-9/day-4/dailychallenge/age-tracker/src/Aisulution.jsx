import React, { useState } from 'react';
// Removed Redux imports to resolve module resolution errors.
// Functionality is now implemented using native React hooks.

// --- Utility for simulating an async delay (e.g., an API call) ---
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// --- Main App Component (Refactored to use useState) ---
function AgeTrackerApp() {
  // Local state to manage age, operation status, and errors
  const [age, setAge] = useState(25);
  const [status, setStatus] = useState("idle"); // idle | loading | succeeded | failed
  const [error, setError] = useState(null);
  
  // Flag to check if the state is currently loading
  const isLoading = status === 'loading';

  // Async function to handle aging up
  const handleClickUp = async () => {
    if (isLoading) return;

    setStatus('loading');
    setError(null);

    try {
      // Simulate a 2-second network delay
      await wait(2000); 
      
      // Update state upon success
      setAge(prevAge => prevAge + 1);
      setStatus('succeeded');
    } catch (e) {
      // Handle potential failure (though unlikely with setTimeout)
      setStatus('failed');
      setError('Failed to age up asynchronously.');
    }
  };

  // Async function to handle aging down
  const handleClickDown = async () => {
    if (isLoading) return;
    
    setStatus('loading');
    setError(null);

    try {
      // Simulate a 2-second network delay
      await wait(2000); 
      
      // Update state upon success
      setAge(prevAge => prevAge - 1);
      setStatus('succeeded');
    } catch (e) {
      setStatus('failed');
      setError('Failed to age down asynchronously.');
    }
  };

  // --- UI Feedback for Status ---
  const statusMessage = () => {
    switch (status) {
      case 'loading':
        return <p className="text-yellow-500 font-semibold flex items-center justify-center space-x-2">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Updating age (2s delay)...
        </p>;
      case 'failed':
        return <p className="text-red-500 font-semibold">Error: {error}</p>;
      case 'succeeded':
        return <p className="text-green-500 font-semibold">Update successful!</p>;
      default:
        return <p className="text-gray-500">Click a button to change the age.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
        
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Async Age Tracker
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          React State with Async Simulation
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg mb-6 shadow-inner">
          <h2 className="text-6xl font-black text-indigo-600">
            {age}
          </h2>
          <p className="text-lg font-medium text-indigo-700 mt-1">
            Current Age
          </p>
        </div>

        <div className="space-y-4 mb-6 h-6">
          {statusMessage()}
        </div>

        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleClickDown}
            disabled={isLoading}
            className={`
              flex items-center justify-center px-6 py-3 rounded-xl font-bold transition duration-300 transform hover:scale-[1.02] 
              ${isLoading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-red-500 text-white shadow-lg hover:bg-red-600 active:bg-red-700'}
            `}
          >
            {isLoading ? 'Processing...' : 'Age Down (Async)'}
          </button>
          
          <button 
            onClick={handleClickUp}
            disabled={isLoading}
            className={`
              flex items-center justify-center px-6 py-3 rounded-xl font-bold transition duration-300 transform hover:scale-[1.02] 
              ${isLoading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-500 text-white shadow-lg hover:bg-green-600 active:bg-green-700'}
            `}
          >
            {isLoading ? 'Processing...' : 'Age Up (Async)'}
          </button>
        </div>

        {/* Display Current Status for Debugging */}
        <p className="mt-6 text-xs text-gray-400">
            Status: {status}
        </p>
      </div>
    </div>
  );
}

// Export the main component
export default AgeTrackerApp;