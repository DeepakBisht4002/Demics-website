import { useParams } from "react-router-dom";
import { blogsData } from "../../data/blogData";

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogsData.find((blog) => blog.id === Number(id));
  if (!blog) return <h1>Blog not found</h1>;
  return (
    <div className="min-h-screen w-1/2 flex flex-col items-center justify-center p-4">
      <div className="w-[500px]">
        <img
          src={blog.image}
          alt="blog-img"
          className="w-full h-auto object-contain shadow-lg"
        />
      </div>

      <section className="mt-5">
        <div>
          <h1 className="text-3xl font-semibold text-white">
            {blog.title}
          </h1>
          <p className="text-white">
            {blog.content}
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-semibold text-white">
            The Evolution of Mobile App Design with AI
          </h2>
          <p className="text-white">
            {blog.content}
          </p>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
