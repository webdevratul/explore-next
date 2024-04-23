import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

const page = async () => {
  const posts = await getAllPosts();

  return (
    <div className="mt-6">
      <h1>All Posts</h1>

      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
