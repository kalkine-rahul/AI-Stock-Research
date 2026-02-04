"use client";
import { useState } from 'react';

export default function AIChat() {
  const [input, setInput] = useState('');

  return (
    <div className="border border-gray-200 rounded-lg bg-white h-[600px] flex flex-col shadow-sm">
      <div className="p-4 border-b border-gray-100 bg-gray-50 font-semibold text-gray-700">
        Ask Iris (AI Insights)
      </div>
      <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-600">
        <div className="bg-gray-100 p-3 rounded-lg mb-4 max-w-[80%]">
          Hello Rahul! Ask me anything about stocks or market trends.
        </div>
      </div>
      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <input 
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#00D09C]"
            placeholder="Type your query..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-[#00D09C] text-white px-4 py-2 rounded-md text-sm font-medium">Send</button>
        </div>
      </div>
    </div>
  );
}