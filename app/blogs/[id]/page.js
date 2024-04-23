import { notFound } from "next/navigation";

const page = ({ params }) => {
  const { id } = params;

  if (id === "3") {
    notFound();
  }

  return <div className="mt-6">The blog id is {id}</div>;
};

export default page;
