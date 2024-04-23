import Comments from "@/app/components/Comments";
import getPost from "@/lib/getPost";
import getPostComment from "@/lib/getPostComment";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

const page = async ({ params }) => {
  const { id } = params;

  const postPromise = getPost(id);
  const commentPromise = getPostComment(id);

  const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-xl text-blue-700">{post.title}</h2>
      <p>{post.body}</p>
      <hr />

      <Suspense fallback="<h1>Loading Comments...</h1>">
        <Comments promise={commentPromise} />
      </Suspense>
    </div>
  );
};

export default page;
