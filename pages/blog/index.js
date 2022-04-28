import Head from"next/head";
import Image from "../../comps/Image/Image";
import { getAllPosts } from "../../lib/posts";

const Blog = () => {
  const posts = getAllPosts();
  return (
    <div className= "container">
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        <h1>Blog</h1>
      </div>
      <div>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} />
        ))}
      </div>
    </div>

  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ maxWidth: "400px", marginBottom: "50px"}}>
      <Image src={data.coverImage} alt={data.title} layout="fill"/>
      <h2>{data.title}</h2>
      <div>{data.publishDate}</div>
      <p>
        {data.excerpt}
      </p>
    </div>

  );
};

export default Blog;

