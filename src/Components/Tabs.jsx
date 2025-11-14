import React, { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <div className="min-h-screen flex flex-col items-center mx-auto px-4">
      <h1 className="py-4 text-3xl">hello this is my interview question</h1>

      <div className="buttons flex items-center justify-between gap-2">
        <button
          className={`px-2 rounded-xl ${
            selectedTab === "tab1" ? "bg-green-400" : "bg-green-200"
          }`}
          onClick={() => setSelectedTab("tab1")}
        >
          Tab1
        </button>

        <button
          className={`px-2 rounded-xl ${
            selectedTab === "tab2" ? "bg-yellow-400" : "bg-yellow-300"
          }`}
          onClick={() => setSelectedTab("tab2")}
        >
          Tab2
        </button>
      </div>

      <div className="flex justify-between items-center gap-3 mt-6">
        {selectedTab === "tab1" && (
          <div className="tab-1">
            <p className="px-4 bg-green-200">this is my tab1 content ...</p>
          </div>
        )}

        {selectedTab === "tab2" && (
          <div className="tab-2">
            <p className="px-4 bg-yellow-300">this is my tab2 content ...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
