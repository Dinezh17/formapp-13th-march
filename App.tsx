import React, { createContext, useState, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';
import HomePage from './HomePage';

interface UserData {
  fullName: string;
  email: string;
  phoneNumber: number;
  age: number;
  favoriteLanguage: string;
}

interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserContext = createContext<UserContextType>({
  userData: {
    fullName: '',
    email: '',
    phoneNumber: 0,
    age: 0,
    favoriteLanguage: '',
  },
  setUserData: () => {},
});

function App() {
  const [userData, setUserData] = useState<UserData>({
    fullName: '',
    email: '',
    phoneNumber: 0,
    age: 0,
    favoriteLanguage: '',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;