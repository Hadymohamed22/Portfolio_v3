type Post = {
  id: number;
  title: string;
  description: string | null;
  publishedAt: string;
  summary: string;
  image: {
    alternativeText: string;
    url: string;
  };
  blog_category: {
    name: "Development" | "Design" | "Career";
  };
  paragraphs: string[];
};

type Posts = Post[];
