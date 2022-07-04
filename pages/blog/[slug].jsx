import Link from "next/link";
import Image from "next/image";
import { getAllSlugs, getPostData } from "../../lib/posts";
import styles from "../../styles/BlogPost.module.css";

export default function BlogPost(props) {
  const { postData } = props;
  return (
    <div className={styles.container}>
    <div style={{ maxWidth: "600px", marginTop: "20px"}}>
      <Image src={postData.coverImage} alt={postData.title} layout="fixed" width={400} height={400}/>
      <h1>{postData.title}</h1>
      <p>
        {postData.author} / {postData.publishDate}
      </p>
      <p>{postData.content} </p>
      <div style={{marginTop: "50px "}}></div>
        <Link href="/">
          <a>⬅&nbsp;&nbsp;Back to Home</a>
        </Link>
    </div>
    </div>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};
