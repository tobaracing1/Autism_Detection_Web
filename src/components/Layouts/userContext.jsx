
import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../script/firebase_key'; 
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const unsubscribe =  onAuthStateChanged(auth, async (currentUser) => {
      try {
        if(currentUser){
          setLoading(true)
          setUser(currentUser)
        }
        else{
          console.log("no user")
        }
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false)
      }
      
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};