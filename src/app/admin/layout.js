"use client";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const [hasPermission, setHasPermission] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const password = "laranjada";

  useEffect(() => {
    const storedPermission = localStorage.getItem("Permission");
    const expirationTime = localStorage.getItem("PermissionExpiration");

    if (
      storedPermission === "true" &&
      expirationTime &&
      new Date().getTime() < parseInt(expirationTime, 10)
    ) {
      setHasPermission(true);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleButtonClick = () => {
    if (inputValue === password) {
      setHasPermission(true);
      localStorage.setItem("Permission", "true");
      localStorage.setItem(
        "PermissionExpiration",
        String(new Date().getTime() + 3600000) // 1 hour in milliseconds
      );
      router.push("/admin");
    } else {
      alert("Password errada");
    }
  };

  return (
    <div className={styles.container}>
      {hasPermission ? (
        children
      ) : (
        <div className={styles.loginContainer}>
          <h1>Acesso Admin</h1>
          <div className={styles.dadosLogin}>
            <input
              type="password"
              value={inputValue}
              onChange={handleInputChange}
              className={styles.inputField}
              placeholder="Introduza a password"
            />
            <br />
            <button className={styles.buttonEntrar} onClick={handleButtonClick}>
              Entrar
            </button>
            {error && <p className={styles.errorMessage}>{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
