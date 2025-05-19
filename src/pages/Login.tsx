import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Simple admin check (customize as needed)
    if (email === "rushclick@gmail.com" && password === "rushclick@123") {
       const user = {
    email: "rushclick@gmail.com",
    role: "admin",
  };
  localStorage.setItem("user", JSON.stringify(user));
  navigate("/admin");










    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Navbar />
      <div className="py-44 pt-40">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-[#4667a3]">
            Welcome Back
          </h2>
          <input
            type="email"
            placeholder="Email/User Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#4667a3] text-white p-3 rounded hover:bg-[#3a5b8d]"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
