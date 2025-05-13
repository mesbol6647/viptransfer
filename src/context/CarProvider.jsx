//AuthContext

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const CarContext = createContext();

const CarProvider = ({ children }) => {
    const [startdate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const cars = (data) => {
    setStartDate(data);
    setEndDate;
    navigate("/");
  };

  return (
    <CarContext.Provider value={{ user, login }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;