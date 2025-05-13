
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; // ✅ Firestore kayıt işlemleri için
import { auth, db } from "../firebase"; // ✅ Auth ve Firestore bağlantısı

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async ({ email, password }) => {
    dispatch(fetchStart());
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      dispatch(loginSuccess(user));
      toastSuccessNotify("Giriş başarılı");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Giriş başarısız: " + error.message);
    }
  };

  const register = async ({ email, password, username, firstName, lastName }) => {
    dispatch(fetchStart());
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Firestore'a kullanıcı bilgilerini kaydet
      await setDoc(doc(db, "users", user.uid), {
        username,
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });

      dispatch(registerSuccess(user));
      toastSuccessNotify("Kayıt başarılı");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Kayıt başarısız: " + error.message);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await signOut(auth);
      dispatch(logoutSuccess());
      toastSuccessNotify("Çıkış yapıldı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Çıkış başarısız: " + error.message);
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
