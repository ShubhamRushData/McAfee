import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Blog {
  id: number;
  title: string;
  description: string;
  image_url: string; // for preview
}

const BlogEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await fetch(`https://backend-code-nyz5.onrender.com/api/posts/${id}`);
      if (!res.ok) throw new Error("Failed to fetch blog");
      const data = await res.json();
      setBlog(data);
    } catch (err) {
      console.error("Error fetching blog:", err);
      setError("Failed to fetch blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blog) return;

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("description", blog.description);
    if (imageFile) {
      formData.append("image", imageFile); // "image" must match backend field name
    }

    try {
      const res = await fetch(`https://backend-code-nyz5.onrender.com/api/posts/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to update blog");
      navigate("/admin");
    } catch (err) {
      console.error("Error updating blog:", err);
      setError("Failed to update blog. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-[#4667a3] mb-6">Update Blog</h2>

      {loading ? (
        <p className="text-gray-600">Loading blog...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : blog ? (
        <form onSubmit={handleUpdate} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <ReactQuill
              theme="snow"
              value={blog.description}
              onChange={(content) => setBlog({ ...blog, description: content })}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline"],
                  [{ align: [] }],
                  [{ size: ["small", false, "large", "huge"] }],
                  ["clean"],
                ],
              }}
              formats={["header", "bold", "italic", "underline", "align", "size"]}
              style={{ minHeight: "150px" }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Upload New Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
            />
            {blog.image_url && (
              <img
                src={blog.image_url}
                alt="Current"
                className="mt-4 max-w-xs rounded shadow"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
          >
            Update Blog
          </button>
        </form>
      ) : (
        <p className="text-gray-600">Blog not found.</p>
      )}
    </div>
  );
};

export default BlogEdit;
