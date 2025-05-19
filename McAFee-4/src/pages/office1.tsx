// import React from "react";

const office1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#95857e] text-center py-10">
        <h1 className="text-xl font-semibold">
        Microsoft is integrating AI (Copilot) into Office apps
        </h1>
        <button className="bg-[#5a3424] text-white px-6 py-2 rounded mt-4">
          GET STARTED
        </button>
      </section>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center py-6 px-4">
        <p className="text-sm text-gray-600">
          This website provides step-by-step guidance...
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-[#95857e] p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center">https://www.microsoft.com/en-in/microsoft-365</h2>
        

        {/* Download Instructions */}
        <div className="mt-4">



        <h3 className="text-md font-semibold mt-4">Versions of Microsoft Office:</h3>
          <ul className="list-disc list-inside text-[#e9e6e6]">
            <li><strong>Microsoft 365</strong> – Subscription-based with cloud integration.</li>
            <li><strong>Microsoft Office 2021</strong> – One-time purchase, offline usage.</li>
            <li><strong>Microsoft Office Online</strong> – Free web-based version with limited features.</li>
          </ul>

          <h3 className="text-md font-semibold mt-4">Key Features & Benefits:</h3>
          <ul className="list-disc list-inside text-[#e9e6e6]">
            <li>Cross-platform support (Windows, macOS, iOS, Android).</li>
            <li>AI-powered tools for smart document suggestions.</li>
            <li>Cloud storage for real-time collaboration.</li>
            <li>Security features for data protection.</li>
            <li>Integration with third-party apps and services.</li>
          </ul>

          <h3 className="text-md font-semibold mt-4">Who Uses Microsoft Office?</h3>
          <ul className="list-disc list-inside text-[#e9e6e6]">
            <li><strong>Students & Educators</strong> – Assignments, reports, and learning.</li>
            <li><strong>Businesses & Enterprises</strong> – Documentation, presentations, and data analysis.</li>
            <li><strong>Freelancers & Writers</strong> – Content creation and communication.</li>
            <li><strong>Developers & Analysts</strong> – Automation and data processing.</li>
          </ul>
          <h3 className="text-lg font-semibold">How to Download MS Office</h3>
          <ul className="list-disc list-inside text-[#e9e6e6]">
            <li>Sign in to your MS Office account.</li>
            <li>Go to the 'My Account' section.</li>
            <li>Download the MS Office setup file.</li>
          </ul>
        </div>

        {/* Installation Instructions */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Steps forMS Office Installation</h3>
          <ul className="list-disc list-inside text-[#e9e6e6]">
            <li>Locate the downloaded setup file.</li>
            <li>Double-click to run the installer.</li>
            <li>Follow the on-screen instructions.</li>
          </ul>
        </div>

        {/* Activation Key */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Redeem MS Office Activation Key</h3>
          <p className="text-[#e9e6e6]">Enter the activation key found on the retail card.</p>
        </div>

        {/* Activation Steps */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Steps for MS Office Activation</h3>
          <ul className="list-disc list-inside text-[#e9e6e6]">
            <li>Open MS Office software.</li>
            <li>Go to the activation section.</li>
            <li>Enter the activation key.</li>
            <li>Complete the activation process.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        Disclaimer: This website is for educational purposes only.
      </footer>
    </div>
  );
};

export default office1;
