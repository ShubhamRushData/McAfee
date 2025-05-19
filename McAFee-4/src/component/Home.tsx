import  { useState, useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import { Check } from "lucide-react";
import Footer from "./Footer";
import { LucideMenu } from "lucide-react";
// import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  const images = [
    { src: "/home1.webp", padding: "pt-32 pr-20", width: "w-[650px]", height: "h-[450px]" },
    { src: "/img2.png", padding: "pt-32 pr-20", width: "w-[650px]", height: "h-[450px]" },
    // { src: "/img3.png", padding: "pt-32 pr-20", width: "w-[650px]", height: "h-[450px]" },
    { src: "/img4.png", padding: "pt-32 pr-20", width: "w-[650px]", height: "h-[450px]" },
  ];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        // setCurrentImageIndex(nextImageIndex);

        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsFading(false);
      }, 3000); // fade duration
    }, 2000); // change every 6 sec

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  // const current = images[currentImageIndex];
  const next = images[nextImageIndex];

  return (
    <div className="min-h-screen bg-[#5364cd] text-gray-800 relative overflow-hidden">

      
 {/* Next Image on top */}
      <img
        src={next.src}
        alt="Hero next"
        className={`fixed top-0  right-0 hidden md:block rounded-4xl z-0 object-contain object-center 
          transition-opacity duration-[2000ms] ease-in-out
          ${next.padding} ${next.width} ${next.height} max-w-[50%]
          ${isFading ? "opacity-100" : "opacity-0"}`}
      />
      {/* Next Image on top */}
       <nav id="homeStart" className="fixed top-0 left-0 w-full z-20 bg-[#5364cd] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 ">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <a href="/">

          <img className="w-20" src="/logo-icon.png" alt="McAfee Activate" />
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center text-xl font-medium gap-4">
          <a href="#Start-Download">
            <button className="hover:bg-red-600 py-3 px-4 rounded-lg">Get Download</button>
          </a>
          <button className="hover:bg-red-600 py-3 px-4 rounded-lg" onClick={() => navigate("/blog")}>Blog</button>
          <a href="#Contacts">
            <button className="hover:bg-red-600 py-3 px-4 rounded-lg">Contacts</button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LucideMenu />
        </button>
      </div>

      {/* Mobile menu dropdown */}
    {menuOpen && (
  <div className="absolute top-full left-0 w-full md:hidden bg-[#252c61] text-white text-lg px-4 py-4 flex flex-col gap-2 z-30">
    <a
      href="#Start-Download"
      onClick={() => setMenuOpen(false)}
      className="hover:bg-red-600 py-2 px-4 rounded-lg transition-colors duration-200"
    >
      Get Download
    </a>
    <button
      onClick={() => {
        setMenuOpen(false);
        navigate("/blog");
      }}
      className="hover:bg-red-600 py-2 px-4 rounded-lg transition-colors duration-200 text-left"
    >
      Blog
    </button>
    <a
      href="#Contacts"
      onClick={() => setMenuOpen(false)}
      className="hover:bg-red-600 py-2 px-4 rounded-lg transition-colors duration-200"
    >
      Contacts
    </a>
  </div>
)}


    </nav>

      {/* Content Wrapper */}
      <div className="relative  z-10 pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20 py-16  text-white">
  {/* Left Text Section */}
  <div className="w-full md:w-1/2 max-w-xl">
    <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
    Step to Use Your Retail Card's 25-Digit Code to Activate McAfee LiveSafe
    </h1>
    <p className="text-lg mb-6">
    Follow this guide to quickly and securely activate your McAfee protection.
    </p>
    <button
      onClick={() => navigate("/entercode")}
      className="bg-red-600 hover:bg-red-700 transition-all text-white px-6 py-3 rounded font-semibold"
    >
      Submit Activation Code
    </button>
  </div>

  {/* Right Image Section */}
  
</section>


        {/* Steps Overview */}
        <section className="bg-white py-14 flex flex-col justify-center items-center px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl font-bold text-[#333]  ">Step-by-Step: Activating Your McAfee Product</h2>
          <p className="text-md md:text-xl pt-4 md:w-5/6  mb-12 ">To ensure optimal protection and uninterrupted service, follow these structured steps to successfully activate your McAfee antivirus software:</p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-2">Step 1:  Retrieve Your Activation Code</h3>
              <ul className="list-disc ml-6">
               <li> The activation code is a 25-character alphanumeric key required to initiate the setup.</li>
               <li>For online purchases, this code is typically provided in your confirmation email.</li>
               <li>For retail purchases, you can find it on the product card or inside the packaging.</li> 
             




              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold  mb-2">Step 2: Access the Official Activation Portal</h3>
              <ul className="list-disc ml-6">
                <li>Navigate to the official McAfee activation page: <a href="https://www.mcafee.com/en-in/index.html">
                  <p className="text-[#3030c3]">
                  www.mcafee.com/activate.
                  </p>
                  </a>
                </li>
                <li>Always ensure the website URL is correct to avoid phishing or fraudulent websites.</li>
              

              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Step 3:  Sign In or Create a McAfee Account</h3>
              <ul className="list-disc ml-6">
                <li>              Log in with your existing McAfee credentials.
                </li>
                <li>If you are a new user, create a McAfee account using a valid and accessible email address.</li>
                <li>Your account will serve as the central hub for managing your subscriptions and devices.</li>





              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Step 4: Enter the Activation Details</h3>
              <ul className="list-disc ml-6">
                <li>Input the 25-digit activation code in the designated field.</li>
                <li>Select your preferred country and language settings.</li>
                <li >
  Click <span className="font-bold">Submit</span> to validate and link the code with your McAfee account.
</li>





              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Step 5:  Download and Install the Software</h3>
              <ul className="list-disc ml-6">
                <li>Once activation is complete, proceed to download the McAfee software.
                </li>
                <li>Follow the on-screen installation prompts to install the program on your device.</li>
                <li>Upon successful installation, restart your system if prompted to finalize setup.</li>
              



              </ul>
            </div>
          </div>
        </section>

        {/* Visual Steps Section */}
        <section id="Start-Download" className="py-10 bg-gray-50 px-6 md:px-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Visual Guide</h2>
          <div className="max-w-4xl mx-auto">
            <img src="/EmbeddedImage copy.png" alt="McAfee Steps" className="rounded-lg w-full" />
            <div className="flex justify-center">
              <button
                className="bg-[#e62626] hover:bg-[#fa3c58] font-bold text-white px-6 py-3 rounded-lg"
                onClick={() => navigate('/demo')}
              >
                Start Download
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-14 flex flex-col items-center justify-center px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Top Reasons to Trust McAfee</h2>
          <p className="  lg:px-48  mb-10  mx-auto">McAfee is a trusted name in cybersecurity, offering comprehensive protection for your devices and personal data. Here’s a step-by-step explanation of why McAfee stands out:</p>
          <ul className="list-decimal space-y-4 text-gray-700 max-w-4xl mx-auto">
            
            <li > <span className="font-bold  ">
             Real-Time Threat Protection:
              </span> McAfee continuously monitors your system, detecting and blocking viruses, malware, and ransomware in real-time.
            </li>
            <li >
              <span className="font-bold  ">
              
              Multi-Device Support:
              </span> You can secure multiple devices (PCs, smartphones, tablets) under one subscription, ensuring safety across all platforms.</li>
            <li>
              <span className="font-bold  ">
                Identity Theft Protection:
              </span> McAfee provides tools to safeguard personal information, including credit monitoring and alerts for suspicious activity.</li>
            <li >
              <span className="font-bold  ">
              User-Friendly Interface:
              </span> The software is easy to install and use, with a dashboard that makes managing security settings simple for any user.</li>
            <li >
              <span className="font-bold  ">
           Web and Wi-Fi Security:
              </span> It blocks dangerous websites and protects you when using public Wi-Fi, preventing hackers from accessing your data.</li>
            <li >
              <span className="font-bold  ">
              Regular Updates:
              </span>
              McAfee updates frequently to stay ahead of evolving threats, keeping your devices secure at all times.</li>
          </ul>
        </section>

        {/* Redeem Card Section */}
        <section className="bg-white py-16 flex flex-col items-center justify-center px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl  font-bold  mb-5">How to Redeem Your McAfee Card – Step-by-Step</h2>
          <div className="max-w-4xl mx-auto space-y-6  text-gray-700">
            <p className="md:px-7">
            Redeeming your McAfee card is simple if you follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li><span className="font-bold">

                Locate Your Product Key:
                </span> Find the 25-digit activation code on your McAfee card (e.g., XXXXX-XXXXX-XXXXX-XXXXX-XXXXX).
              </li>
              <li>
              <span className="font-bold"> 

                Visit the Redemption Site:
              </span> Go to <a href="https://www.mcafee.com/en-in/index.html" className="text-[#2525d1]">
              www.mcafee.com/activate
              </a> using your preferred web browser.
                </li>
              <li>
              <span className="font-bold"> 

                Enter the Code:
              </span> Type in your activation code exactly as shown on your card and click <span className="font-bold">
                
                Submit
                </span>
              </li>
              <li>
              <span className="font-bold">
                
                Sign In or Create an Account:
                 </span> If you already have a McAfee account, sign in. If not, create a new account using your email address and a secure password.
              </li>
              <li>
              <span className="font-bold"> 

                Download and Install:
              </span> After redeeming the code, follow the on-screen instructions to download and install McAfee on your device.
              </li>
              <li><span className="font-bold"> 

            Activate Your Protection:
              </span> Once installed, open the app and ensure your subscription is active.

            </li>
            </ol>
            <p>
            Your McAfee protection is now ready and working to keep your devices secure.

            </p>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="bg-gray-50 py-16 px-6 flex flex-col items-center justify-center  md:px-20">
          <h2 className="text-2xl md:text-4xl font-bold  mb-3">Activation Not Working? Here's What to Do</h2>
          <p className="   mb-10">Activating software can sometimes be tricky. Let’s break it down step-by-step :
          </p>
          <div className=" flex-col items-center flex justify-center space-y-8 text-gray-700">
            <ul className="list-decimal text-lg space-y-8">
              <li ><span className="font-bold">
              Invalid Key
                </span> : Double-check the license key . Copy-paste errors or typos are common.
              <p className="flex flex-row ">
              <Check className="text-green-600  w-10  text-2xl h-5" /> Fix: Re-enter the key carefully. Ensure no extra spaces.
              </p></li>
           
            {/* <div> */}
              <li >
                <span className="font-bold">
                No Internet Connection
                </span> : Activation often requires a stable internet connection.
              
              <p className="flex flex-row ">
              <Check className="text-green-600  w-10  text-2xl h-5" /> Fix: Reconnect to the internet and retry.

              </p></li>
            {/* </div> */}
            
           
              <li>
                <span className="font-bold">
                Exceeded Device Limit
                </span> : Some licenses are restricted to a set number of devices.
              
              <p className="flex flex-row ">
              <Check className="text-green-600  w-10  text-2xl h-5" /> Fix: Deactivate unused devices or upgrade your license.

              </p>
              </li>
           
           
              <li >
                <span className="font-bold">
                Firewall or Antivirus Block
                </span> : Security software might block activation servers.
              
              <p className="flex flex-row ">
              <Check className="text-green-600  w-10  text-2xl h-5" /> Fix: Temporarily disable firewalls or whitelist the app.

              </p>
              </li>
           

            
              <li >
                <span className="font-bold"> Server Issues
                  </span> : Sometimes, the activation server is down.

              
              <p className="flex flex-row ">
              <Check className="text-green-600  w-10  text-2xl h-5" /> Fix: Wait and try again later.

              </p>
              </li>
            
            </ul>
            <p className="flex flex-row ">
              <Check className="text-white bg-green-500  w-5  text-2xl h-5 mr-3 rounded-md" /> Always refer to the official support page if problems persist.
            These steps help most users activate without hassle! </p>
          </div>
        </section>

        {/* Support Section */}
        <section id="Contacts" className="bg-gray-100 py-14 px-6 md:px-20 md:py-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Need Help?</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-700 mb-4">
            If you run into any issues during activation or installation, our experts are available to help.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/entercode")}
              className="bg-[#3b82f6] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
            >
              Contact Support
            </button>
          </div>
        </section>

        {/* Disclaimer */}
        {/* <footer className=" px-32 py-8 bg-[#121024]  text-sm text-gray-300">
          <p>
            Disclaimer: This website operates independently and has no connection to McAfee or its parent companies. This website is an independent resource and is not affiliated with McAfee or Intel Security. All product names, logos, and trademarks are the property of their respective owners.
          </p>
        </footer> */}

        <Footer/>
      </div>
    </div>
  );
};

export default Home;
