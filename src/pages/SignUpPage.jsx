import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";
import { firebaseAuth } from "../configs/firebase";

export default function SignUpPage() {
  const { isLoggedIn, login, logout } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => login())
      .catch((error) => {
        const errorMessage = error.message;
        logout()
        console.log(errorMessage);
      });
  };

  // null is that small window where firebase is still trying to auth you
  if (isLoggedIn === null) {
    return (
      <div>
        <h1>Authenticating...</h1>
      </div>
    );
  }

  if (isLoggedIn === true) {
    return (
      <div>
        <h1>Already logged in</h1>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Email</label>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <button
          onClick={registerUser}
          style={{
            fontSize: "21px",
            padding: "10px",
          }}
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}
