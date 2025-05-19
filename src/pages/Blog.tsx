import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../component/Footer";
import { Menu } from "lucide-react";

interface Post {
  id: string;
  title: string;
  description: string;
  image_url: string;
  date?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPosts, setCurrentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(6);
  const navigate = useNavigate();
   const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios
      .get<Post[]>("https://backend-code-nyz5.onrender.com/api/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, posts]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleNewPostClick = () => {
    const isAdmin = localStorage.getItem("isAdmin") === "false";
    if (isAdmin) {
      navigate("/create");
    } else {
      navigate("/login", { state: { from: "/create" } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <nav className="bg-[#5364cd] shadow-md px-6 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img className="w-16" src="/logo-icon.png" alt="McAfee Activate" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
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

          <button
            onClick={handleNewPostClick}
            className="bg-red-600 hover:bg-red-700 transition-colors py-2 px-4 rounded-lg font-semibold"
          >
            + New Post
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#2f4a7a] w-full px-6 py-4 gap-2 z-40">
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
          <button
            onClick={() => {
              setMenuOpen(false);
              handleNewPostClick();
            }}
            className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg font-semibold transition-colors"
          >
            + New Post
          </button>
        </div>
      )}
    </nav>


      {/* Main layout with sidebar on right */}
      <div className="flex flex-col lg:flex-row p-6 pt-20  gap-6">
        {/* Blog posts */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {loading ? (
            <p className="text-center text-gray-600 col-span-full">Loading blog posts...</p>
          ) : currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition duration-200 flex flex-col"
              >
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl font-bold text-red-600 mb-2">
                       <Link
                      to={`/readmore/${post.id}`}
                      className=" hover:underline font-medium"
                    >
                      
                      {post.title}
                    </Link>
                      </h2>
                    <p className="text-gray-700 text-base mb-4">
                      {post.description
                        ? `${post.description.substring(0, 100)}...`
                        : "No description available."}
                    </p>
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <Link
                      to={`/readmore/${post.id}`}
                      className="text-red-600 hover:underline font-medium"
                    >
                      Read More →
                    </Link>
                    {post.date && (
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No blog posts found.</p>
          )}
        </main>

        {/* Old Blog Posts - Right Sidebar */}
    
{/* Right Sidebar: Show posts from page 2 (index 6 to 11), max 5 posts */}
<aside className="w-full lg:w-1/3 bg-white border border-gray-200 shadow p-4 rounded-lg h-fit">
  <h2 className="text-xl font-semibold mb-4 text-[#4667a3]">Previous Updates</h2>
  <div className="space-y-4">
    {posts
      .slice(6, 12) // posts for page 2 (index 6 to 11)
      .slice(0, 5)   // max 5 posts, safe fallback
      .map((post) => (
        <Link
          to={`/blog/${post.id}`}
          key={post.id}
          className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded"
        >
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="w-24 h-16 object-cover rounded border"
            />
          )}
          <div className="flex  items-center">
            <Link
                      to={`/readmore/${post.id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >

            <p className="text-lg font-semibold hover:text-[blue] text-black">
              {post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}
            </p>
                    </Link>
            {/* {post.date && (
              <p className="text-xs border text-black mt-10">
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )} */}
          </div>
        </Link>
      ))}
  </div>
</aside>


      </div>

      {/* Pagination */}
      <div className="flex justify-center my-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#29326c] text-white rounded-l-md disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-2 text-[blue] font-semibold">
          Page {currentPage} of {Math.ceil(posts.length / postsPerPage)}
        </span>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * postsPerPage >= posts.length}
          className="px-4 py-2 bg-[#182676] text-white rounded-r-md disabled:opacity-50"
        >
          Next
        </button>
      </div>


 <Footer/>


    </div>
  );
};

export default Blog;
