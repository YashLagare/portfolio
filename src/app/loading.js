import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-primary flex flex-col justify-center items-center relative z-50">
      <div className="w-16 h-16 border-4 border-[#915EFF]/20 border-t-[#915EFF] rounded-full animate-spin"></div>
      <p className="text-[#915EFF] mt-6 text-lg font-semibold tracking-widest uppercase animate-pulse">Loading...</p>
    </div>
  );
};

export default Loading;
