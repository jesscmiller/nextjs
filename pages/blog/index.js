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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <div> 
          <BlogPostPreview/>
        </div>
      </div>
    </div>
  
  );
}

const BlogPostPreview = () => {
  return (
    <div style={{ maxWidth: "400px"}}>
      <Image src="/bwsteps1.jpg" alt="black and white steps" style= {{ width: "100%"}} />
    </div>
  );
};

export default Blog; 
