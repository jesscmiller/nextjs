import Head from"next/head";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        <h1>Blog</h1>
      </div>  
      <div> 
          <BlogPostPreview/>
      </div>
    </div>
  
  );
}

const BlogPostPreview = () => {
  return (
    <div style={{ maxWidth: "400px"}}>
      <Image src="./blogimages/bwsteps1.jpg" alt="black and white steps" width={400} />
      <h2>Portsmouth images blog</h2>
      <div>13 March 2022</div>
      <p>This is where the excerpt text will be</p>
    </div>

  );
};

export default Blog; 
