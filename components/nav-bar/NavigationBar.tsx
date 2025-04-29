// NavigationBar.tsx
import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-orange-600 text-white flex items-center justify-between px-4 py-1 text-sm font-sans mt-5 ">
      <div className="flex items-center space-x-2">
        <div className="bg-white text-orange-600 font-bold px-1">Y</div>
        <span className="font-bold">Hacker News</span>
        <a href="#" className="text-white hover:underline">
          new
        </a>
        <span>|</span>
        <a href="#" className="text-white hover:underline">
          past
        </a>
        <span>|</span>
        <a href="#" className="text-white hover:underline">
          comments
        </a>
        <span>|</span>
        <a href="#" className="text-white hover:underline">
          ask
        </a>
        <span>|</span>
        <a href="#" className="text-white hover:underline">
          show
        </a>
        <span>|</span>
        <a href="#" className="text-white hover:underline">
          jobs
        </a>
        <span>|</span>
        <a href="#" className="text-white hover:underline">
          submit
        </a>
      </div>
      <a href="#" className="text-black hover:underline">
        login
      </a>
    </div>
  );
};

export default NavigationBar;
