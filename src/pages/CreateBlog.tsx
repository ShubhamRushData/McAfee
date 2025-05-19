import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);
    if (imageFile) {
      formData.append("image", imageFile); // field name must match backend
    }

    try {
      const res = await fetch("https://backend-code-nyz5.onrender.com/api/posts", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create post");

      navigate("/admin");
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Failed to create post. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold text-[#4667a3] mb-4">Create New Blog Post</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Write your blog content here..."
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 px-4 py-2 rounded bg-white"
            />
            {imageFile && (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                className="mt-4 max-w-xs rounded shadow"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-[#4667a3] hover:bg-[#36548c] text-white px-6 py-2 rounded font-semibold transition duration-200"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
