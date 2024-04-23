const Comments = async ({ promise }) => {
  const comments = await promise;
  return (
    <div className="mt-4">
      <h1 className="mt-4 text-2xl">Comment</h1>
      <ul>
        {comments.map((comment, idx) => (
          <li key={idx}>{comment.body}</li>
        ))}
        {comments.map((comment, idx) => (
          <li className="text-blue-600 text-xl" key={idx}>
            {comment.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
