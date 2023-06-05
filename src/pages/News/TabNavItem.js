import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={`${activeTab === id ? "text-purple-700" : ""} my-2 hover:text-purple-700 cursor-pointer`}>
      {title}
    </li>
  );
};
export default TabNavItem;
