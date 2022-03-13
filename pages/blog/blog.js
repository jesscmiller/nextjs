import Head from"next/head";
import { getAllPosts } from "../../lib/posts";
import Image from "next/image";

function Blog() {
  const posts = getAllPosts();
  return (
    <div className="container">
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
      <Image src={data.coverImage} alt={data.title} width={600} height={400}/>
      <h2>{data.title}</h2>
      <div>{data.publishDate}</div>
      <p>
        {data.excerpt}
      </p>
    </div>

  );
};

export default Blog;

