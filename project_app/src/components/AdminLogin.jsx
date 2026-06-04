import { useState } from "react";

export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  const response = await fetch(
    "http://localhost:8081/api/admin/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const result = await response.json();

  console.log("LOGIN RESULT:", result);

  if (result.token) {
    localStorage.setItem(
      "token",
      result.token
    );

    window.location.href = "/admin";
  } else {
    alert("Login Failed");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white/5 p-10 rounded-3xl w-full max-w-md">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-black/30 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-black/30 mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 py-3 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>
  );
}