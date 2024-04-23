const getAllPosts = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  );

  if (!result.ok) {
    throw new Error("There was an error fetcing posts");
  }

  return result.json();
};

export default getAllPosts;
