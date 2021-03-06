
const posts = [
    {
        id: 1,
        title: "Portsmouth favourite images",
        publishDate: "13th March 2022",
        author: "Jessica Miller",
        coverImage: "/blogimages/webSt-Michaels-Mount.jpg",
        excerpt: 
            "This is where a short excerpt will be",
        content: 
            "This will be where the main body of the text will be",
        slug: "favourite-portsmouth-photos",
    },
    {
        id: 2,
        title: "Cornwall",
        publishDate: "13th March 2022",
        author: "Jessica Miller",
        coverImage: "/blogimages/webSt-Michaels-Mount.jpg",
        excerpt: 
            "This is where a short excerpt will be",
        content: 
            "This will be where the main body of the text will be",
        slug: "cornwall-photos",
    },
]

export function getAllPosts() {
    return posts;
}

export function getAllSlugs() {
    let slugs = [];
    getAllPosts().map(p => slugs.push(`/blog/${p.slug}`));
    return slugs;
}

export function getPostData(slug){
    let post = null;
    getAllPosts().map((p) => {
        if (p.slug === slug) {
            post = p;
            return;
        }
    });
    return post;
}