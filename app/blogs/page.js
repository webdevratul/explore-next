import Link from "next/link";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      description: "Blog 1 description",
    },

    {
      id: 2,
      title: "blog 2",
      description: "blog 2 description",
    },
  ];

  return (
    <main className="mt-10">
      <div>Blogs page</div>

      <ul>
        {blogs.map((blog, idx) => (
          <li className="mb-4" key={idx}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default page;
