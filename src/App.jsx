import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

function App() {
  const activeMenu = false;
  return (
    <>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background: 'blue', borderRadius: '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="fixed sidebar dark:bg-secondary-dark-bg bg-white w-72" >Sidebar</div>
            ) : (
              <div className="dark:bg-secondary-dark-bg w-0" >Sidebar</div>
          )}
          <div className={
            `w-full dark:bg-main-bg bg-main-bg min-h-screen ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className="fixed md:static bg-main-bg navbar w-full">Navbar</div>

          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
