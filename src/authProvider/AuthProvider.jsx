import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
   const name = "khan";

   const authentication = {
       name, 
   }


    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
   children: PropTypes.object,
}

export default AuthProvider;