import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation checks, API calls, etc.
    console.log("Form submitted:", { email, password, rememberMe });
    // Reset form fields
    setEmail("");
    setPassword("");
    setRememberMe(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2 mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded p-2 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <a href="/forgot-password" className="text-blue-500">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="mt-2">
            Not have an account?{" "}
            <a href="/sign-up" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
