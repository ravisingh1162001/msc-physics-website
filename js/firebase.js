// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIyuelAwOEHValFaPNMF5G3d3NtTt-TSA",
  authDomain: "msc-physics-website.firebaseapp.com",
  projectId: "msc-physics-website",
  storageBucket: "msc-physics-website.firebasestorage.app",
  messagingSenderId: "147129104294",
  appId: "1:147129104294:web:103de3f75f5eb05ff3c167",
  measurementId: "G-TRH00J1990"
};

// ✅ Initialize Firebase ONCE
const app = initializeApp(firebaseConfig);

// ✅ Exports
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
