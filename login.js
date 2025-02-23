import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("login-btn").addEventListener("click", async () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const message = document.getElementById("login-message");

    if (!email || !password) {
        message.style.color = "red";
        message.innerText = "Email and password are required.";
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        message.style.color = "green";
        message.innerText = "Login successful! Redirecting...";
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } catch (error) {
        message.style.color = "red";
        message.innerText = "Login failed: " + error.message;
    }
});
