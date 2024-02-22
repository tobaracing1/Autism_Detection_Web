
import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../script/firebase_key'; 

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [page, setPage] = useState("halamanUtama");

  useEffect(() => {

    const unsubscribe =  onAuthStateChanged(auth, async (currentUser) => {
      try {
        if(currentUser){
          setUser(currentUser)
        }
      } catch (error) {
        console.error(error);
      }
      
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, page, setPage}}>
      {children}
    </UserContext.Provider>
  );
};