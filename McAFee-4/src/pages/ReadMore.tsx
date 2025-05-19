import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  description: string;
  image_url: string;
  date?: string;
}

const ReadMore = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get<Post>(`https://backend-code-nyz5.onrender.com/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6 text-center">Loading post...</p>;

  if (!post) return <p className="p-6 text-center text-red-600">Post not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <article className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4 text-[#4667a3]">{post.title}</h1>
        {post.date && (
          <p className="text-sm text-gray-500 mb-4">
            {new Date(post.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}
        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full max-h-96 object-cover rounded mb-6"
          />
        )}
        <p className="text-gray-800 whitespace-pre-line">
          {/* {post.description} */}
          </p>
        <div dangerouslySetInnerHTML={{ __html: post.description }} />

      </article>
    </div>
  );
};

export default ReadMore;
