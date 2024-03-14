
import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../script/firebase_key'; 

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [page, setPage] = useState("halamanUtama");

  useEffect(() => {

    const unsubscribe =  onAuthStateChanged(auth, async (currentUser) => {
      try {
        if(currentUser){
          const fetchedToken = await currentUser.getIdToken();
          setUser(currentUser)
          setToken({
            headers:{
              bearer: `Bearer ${fetchedToken}`
            }
          });

          const refreshInterval = setInterval(async () => {
            const newToken = await currentUser.getIdToken(/* forceRefresh */ true);
            setToken(newToken);
          }, 55 * 60 * 1000); // 55 minutes

          //clear
          return () => clearInterval(refreshInterval);
        }
      } catch (error) {
        console.error(error);
      }
      
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, page, setPage, token, setToken}}>
      {children}
    </UserContext.Provider>
  );
};