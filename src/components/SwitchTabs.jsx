import  { useState } from "react";

const SwitchTabs = () => {
  const [tab, setTab] = useState("movies");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div className=" w-48 h-8 bg-white flex text-black justify-between rounded-full">
      <button
        onClick={() => handleTabChange("movies")}
        className={tab === "movies" ? " bg-orange-600 text-md text-white rounded-full px-7 py-1" : "px-6 py-1"}
      >
        Movies
      </button>
      <button
        onClick={() => handleTabChange("tv Shows")}
        className={tab === "tv Shows" ? "bg-orange-600 text-white  rounded-full px-9  py-1" : "px-6 py-1"}
      >
        Tv 
      </button>
    </div>
  );
};

export default SwitchTabs;
