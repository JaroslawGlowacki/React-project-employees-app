import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { authContext } from "./helpers/authContent";
import EmpoyeesList from "./components/EmployeesList/EmployeesList";
import HomePage from "./components/HomePage/HomePage";
import VacationsPage from "./components/VacationsPage/VacationPage";
import SalarysPage from "./components/SalarysPage/SalarysPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={loggedIn}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<EmpoyeesList />} />
            <Route path="/vacations" element={<VacationsPage />} />
            <Route path="/salarys" element={<SalarysPage />} />
          </Routes>
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
