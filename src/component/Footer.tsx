const Footer = () => {
  return (
    <footer className="bg-[#121024] text-white pt-8 ">
      <div className="max-w-7xl pb-8 mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Company Info */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-indigo-500">McAfee</h3>
          <p className="mt-2 text-sm text-gray-400">
            Leading solutions in software development, antivirus activation, and IT services.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6  md:grid-cols-4">
          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-500">Company</h4>
            <ul>
              <li><a href="#" className="text-sm hover:text-indigo-300">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-500">Support</h4>
            <ul>
              <li><a href="#" className="text-sm hover:text-indigo-300">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-500">Products</h4>
            <ul>
              <li><a href="#" className="text-sm hover:text-indigo-300">Antivirus</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">VPN</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Microsoft Office</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-500">Contact</h4>
            <ul>
              <li><a href="mailto:support@mscodes.com" className="text-sm hover:text-indigo-300">support@mcafee.com</a></li>
              <li><a href="tel:+1234567890" className="text-sm hover:text-indigo-300">+1 234 567 890</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      
      <footer className=" px-14 py-2 text-sm bg-[#121024] text-[#aaa9a9]">
          <p>
            Disclaimer: This website operates independently and has no connection to McAfee or its parent companies. This website is an independent resource and is not affiliated with McAfee or Intel Security. All product names, logos, and trademarks are the property of their respective owners.
          </p>
        </footer>
        <div className=" bg-[#121024] py-4 mt-8 text-center">
        <p className="text-sm text-gray-400">&copy; 2025 McAfee. All rights reserved.</p>
      </div>
    </footer>
    
  );
};

export default Footer;
