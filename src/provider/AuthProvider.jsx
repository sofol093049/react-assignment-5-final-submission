
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../public/firebase/firebase.config";
export const AuthContext=createContext(null);

function AuthProvider({children}) {
const [user,setUser]=useState(null);
const[user_g,setUser_g]=useState(null);
    const googleProvider= new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    const loginWithGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub=()=>{
        return signInWithPopup(auth, githubProvider);
     }
    const logOutUser=()=>{
        return signOut(auth);
    }
    const createUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            var user_g = userCredential.user;
            console.log(user_g);
            // ...
          });
        
    }
    const userGeneralSign=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            var user_g = userCredential.user;
           
            console.log(user_g);
            // ...
          });;
       
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser);
    setUser_g(currentuser);
        })
        return ()=>unsubscribe();
    },[]);
    return (
        <div>
            <AuthContext.Provider value={{loginWithGoogle,user,logOutUser,createUser,loginWithGithub,userGeneralSign,user_g}}> 
 {children}
            </AuthContext.Provider>
        </div>
    );
}

export default AuthProvider;