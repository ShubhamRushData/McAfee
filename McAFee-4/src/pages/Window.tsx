// import React from "react";

const Window = () => {
  const summary = {
    title: "Windows Operating System Summary",
    content: [
      "Windows is an operating system developed by Microsoft, designed for personal computers, laptops, and servers. It provides a user-friendly graphical interface, multitasking capabilities, and support for various applications. Over the years, Windows has evolved through multiple versions, each bringing improvements in performance, security, and features.",
      "Early versions like Windows 1.0 to 3.1 were based on MS-DOS and provided a basic GUI. Windows 95 introduced the Start Menu and Taskbar, making navigation easier. Windows 98 and ME improved USB support but faced stability issues. Windows XP became one of the most popular versions due to its reliability and user-friendly design. Windows Vista introduced the Aero UI but struggled with performance issues. Windows 7 refined the interface, offering a stable and efficient experience. Windows 8 removed the Start Menu, leading to criticism, which was later addressed in Windows 8.1. Windows 10 introduced a unified platform across devices with regular updates. Windows 11 modernized the UI with a centered Start Menu, improved multitasking, and Android app support.",
      "Despite improvements, Windows faces common issues. Slow performance can result from excessive startup programs, low storage, or outdated hardware. The Blue Screen of Death (BSOD) often occurs due to faulty drivers or hardware failure. Network problems may arise due to outdated drivers or misconfigured settings. Software compatibility issues can be resolved by running programs in compatibility mode. Windows Update errors can be fixed using the troubleshooter or clearing the update cache. Startup failures may require Safe Mode or system repair tools. Disk errors can be checked using built-in utilities like CHKDSK. Keeping the system updated and maintaining good storage and security practices helps ensure smooth performance."
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#95857e] text-center py-10">
        <h1 className="text-xl font-semibold">
          Windows 1.0 to 3.1 introduced a basic GUI over MS-DOS.
        </h1>
        <button className="bg-[#54331c] text-white px-6 py-2 rounded mt-4">
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
        <h2 className="text-lg font-semibold text-center">
          https://www.microsoft.com/en-in/microsoft-365
        </h2>
        {summary.content.map((item, index) => (
          <p key={index} className="mt-2 text-[#ece5e5]">{item}</p>
        ))}
        <img className="w-sm md:w-full" src="/winver.png" alt="" />
      </div>
    </div>
  );
};

export default Window;
