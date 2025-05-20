import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmfEbHOufpg3-HO5Rb_uxDbBhcIy1jxVs",
  authDomain: "netflix-clone-7308a.firebaseapp.com",
  projectId: "netflix-clone-7308a",
  storageBucket: "netflix-clone-7308a.firebasestorage.app",
  messagingSenderId: "173058546477",
  appId: "1:173058546477:web:9ed85b3c051c477e4dd1a4",
  measurementId: "G-4YWZQV7KM7"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)


const signup= async (name,email,password)=>{
    try {
      const res=  await createUserWithEmailAndPassword(auth,email,password)
      const user=res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      })
    } catch (error) {
        console.log(error);
        alert(error)
    }
}
const login =async(email,password)=>{
    try {
      await  signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
    }
}
const logout=()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}