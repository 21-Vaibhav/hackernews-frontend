import React from "react";

const FooterBar: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto border-t-2 border-orange-500 bg-[#f6f6ef] text-center text-sm text-gray-600 px-4 py-6 space-y-4">
      <div>
        Join us for{" "}
        <a href="#" className="underline font-medium text-black">
          AI Startup School
        </a>{" "}
        this June 16–17 in San Francisco!
      </div>
      <div className="space-x-2 font-medium text-black">
        <a href="#">Guidelines</a> |<a href="#">FAQ</a> |<a href="#">Lists</a> |
        <a href="#">API</a> |<a href="#">Security</a> |<a href="#">Legal</a> |
        <a href="#">Apply to YC</a> |<a href="#">Contact</a>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-gray-600">Search:</span>
        <input
          type="text"
          className="border border-gray-400 px-2 py-1 rounded-sm focus:outline-none"
        />
      </div>
    </footer>
  );
};

export default FooterBar;
