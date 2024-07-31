import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../configs/firebase'
import { useAuth } from '../hooks/useAuth';

export default function SignInPage() {
  const navigate = useNavigate()
  const { isLoggedIn, login, logout, load } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginUser = () => {
    setError("");
    load()

    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        login()
        navigate("/jedi/1");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        logout()
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
      {error.length > 0 && (
        <h2 style={{ color: "red", fontWeight: "bold" }}>{error}</h2>
      )}
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
          onClick={loginUser}
          style={{
            fontSize: "21px",
            padding: "10px",
          }}
        >
          LOGIN NA SIGE NA
        </button>
      </div>
    </div>
  );
}
