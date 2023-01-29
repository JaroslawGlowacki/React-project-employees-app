import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCcV6UA4KRrMvyDRllJJ5dsa7vdbwAM5Q",
  authDomain: "my-own-project-employees-app.firebaseapp.com",
  projectId: "my-own-project-employees-app",
  storageBucket: "my-own-project-employees-app.appspot.com",
  messagingSenderId: "421629743600",
  appId: "1:421629743600:web:fbaaa4bba5b67c45cc8d35",
  measurementId: "G-2M7E953Q9P",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
