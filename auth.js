import { auth , db } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Get elements safely
const logoutBtn = document.getElementById("logout-btn");
const loginLink = document.getElementById("login-link");
const userNameElement = document.getElementById("user-name");
const userDobElement = document.getElementById("user-dob");

onAuthStateChanged(auth, async (user) => {
    if (user) {
        if (loginLink) loginLink.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline-block";

        // Fetch user data from Firestore
        const userDocRef = doc(db, "users", user.uid);
        try {
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                if (userNameElement) userNameElement.innerText = `Name: ${userData.fullname}`;
                if (userDobElement) userDobElement.innerText = `DOB: ${userData.dob}`;
            } else {
                console.error("No such user document!");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    } else {
        if (loginLink) loginLink.style.display = "inline-block";
        if (logoutBtn) logoutBtn.style.display = "none";

        // Redirect to login if user is not logged in
        window.location.href = "login.html";
    }
});

// Ensure logout button works properly
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("user");
                window.location.href = "login.html"; // Redirect to login page
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    });
}
