import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Footer from "../component/Footer";
import { Menu } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://backend-code-nyz5.onrender.com/api/posts");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setBlogs(data);
    } catch (err: any) {
      console.error("Failed to fetch blogs:", err);
      setError("Failed to fetch blogs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (blogId: number) => {
    try {
      const res = await fetch(`https://backend-code-nyz5.onrender.com/api/posts/${blogId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete blog");
      }
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError("Failed to delete blog. Please try again.");
    }
  };

  return (
    <div className="min-h-screen  bg-gray-100">
      {/* <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#4667a3]">Admin Dashboard</h2>
        <Link
          to="/create"
          className="bg-[#4667a3] text-white px-4 py-3 rounded-lg hover:bg-[#36548c] font-semibold transition duration-200"
        >
          + Create New Post
        </Link>
      </div> */}



          <nav className="bg-[#4667a3] shadow-md px-6 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <a href="/">
            <img className="w-14 sm:w-16" src="/logo-icon.png" alt="McAfee Activate" />
          </a>
          <h1 className="text-xl sm:text-2xl font-serif">Admin Dashboard</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/demo">
            <button className="hover:bg-red-600 transition-colors py-2 px-4 rounded-lg font-medium">
              Get Download
            </button>
          </a>

          <button
            onClick={() => navigate("/blog")}
            className="hover:bg-red-600 transition-colors py-2 px-4 rounded-lg font-medium"
          >
            Blog
          </button>

          <Link to="/#Contacts">
            <button className="hover:bg-red-600 transition-colors py-2 px-4 rounded-lg font-medium">
              Contacts
            </button>
          </Link>

          <Link
            to="/create"
            className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg font-semibold transition duration-200"
          >
            + Create New Post
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#36548c] w-full px-6 py-4 gap-2">
          <a
            href="/demo"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-red-600 py-2 px-4 rounded-lg transition-colors"
          >
            Get Download
          </a>
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/blog");
            }}
            className="hover:bg-red-600 py-2 px-4 rounded-lg transition-colors text-left"
          >
            Blog
          </button>
          <Link
            to="/#Contacts"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-red-600 py-2 px-4 rounded-lg transition-colors"
          >
            Contacts
          </Link>
          <Link
            to="/create"
            onClick={() => setMenuOpen(false)}
            className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg font-semibold transition-colors"
          >
            + Create New Post
          </Link>
        </div>
      )}
    </nav>
      {loading ? (
        <p className="text-gray-600">Loading blogs...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : blogs.length === 0 ? (
        <p className="text-gray-600">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-4 shadow-md rounded-lg border border-gray-200 pt-14 flex flex-col"
            >
              <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-red-600 mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-3">
                {blog.description.length > 150
                  ? blog.description.slice(0, 150) + "..."
                  : blog.description}
              </p>
              <div className="mt-auto flex space-x-4">
                <Link
                  to={`/edit/${blog.id}`}
                  className="text-white px-3 py-2 rounded-lg bg-[#2633c4] hover:bg-[#5555a2] font-semibold"
                >
                   Update
                </Link>
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="text-white px-3 py-2 rounded-lg bg-[#aa2e23] hover:bg-[#dc7a7ad0] font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}


      <Footer/>
    </div>
  );
};

export default AdminDashboard;
