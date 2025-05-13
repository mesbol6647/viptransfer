//AuthContext

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({email:"", pass:""});
  const values={
    user,
    setUser,  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthcontext=()=>{
  return useContext(AuthContext)
}

export default AuthProvider;
