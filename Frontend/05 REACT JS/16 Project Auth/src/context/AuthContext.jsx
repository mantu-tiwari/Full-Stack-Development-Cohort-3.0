import { createContext, useState } from "react";

export const AuthShop = createContext();

export const AuthProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [loggedInData, setLoggedInData] = useState(JSON.parse(localStorage.getItem('loggedInUser')) || null);

  console.log(registrationData);
  // console.log(loggedInData);

  return (
    <AuthShop.Provider
      value={{
        loggedInData,
        setLoggedInData,
        registrationData,
        setRegistrationData,
      }}
    >
      {" "}
      {children}{" "}
    </AuthShop.Provider>
  );
};
