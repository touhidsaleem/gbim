import React, { useState } from "react";
import "./Tab.css";

const Tab = ({ variant = "dark" }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs =
    variant === "dark"
      ? [
        { name: "All Projects", icon: "📊" },
        { name: "Keyword Research", icon: "🔑" },
        { name: "Competitive Research", icon: "📈" },
        { name: "Website Audit", icon: "🖥️" },
        { name: "DM Captain Enterprise", icon: "📄" },
      ]
      : [
        { name: "Overview" },
        { name: "Performance Monitoring" },
        { name: "Indexing" },
        { name: "Core Web Vitals" },
        { name: "Site Health" },
      ];

  return (
    <div className={`tab-container ${variant}`}>
      {tabs?.map((tab, index) => (
        <div
          key={index}
          className={`tab-item ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {tab?.icon && <span className="icon">{tab?.icon}</span>}
          {tab?.name}
        </div>
      ))}
    </div>
  );
};

export default Tab;
