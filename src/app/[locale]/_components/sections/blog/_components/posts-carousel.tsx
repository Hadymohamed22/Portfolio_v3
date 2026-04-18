import PostsCarouselContent from "./posts-carousel-content";

export default async function PostsCarousel() {
  const initialPosts: Posts = [
    {
      id: 11,
      title: "Mastering React Performance in 2026",
      description: null,
      publishedAt: "2026-04-18T09:56:06.671Z",
      summary:
        "Why slow components are killing your\nconversion rate and how to fix it with\nmemoization.",
      image: {
        alternativeText:
          "Colorful computer code displayed on a dark screen, showing programming language syntax.",
        url: "https://res.cloudinary.com/dxpyhzyat/image/upload/v1776506068/6990b21c860bec3ba35448571b60641e26c861dd_0db6eee718.png",
      },
      blog_category: {
        name: "Development",
      },
      paragraphs: [],
    },
    {
      id: 11,
      title: "Mastering React Performance in 2026",
      description: null,
      publishedAt: "2026-04-18T09:56:06.671Z",
      summary:
        "Why slow components are killing your\nconversion rate and how to fix it with\nmemoization.",
      image: {
        alternativeText:
          "Colorful computer code displayed on a dark screen, showing programming language syntax.",
        url: "https://res.cloudinary.com/dxpyhzyat/image/upload/v1776506068/6990b21c860bec3ba35448571b60641e26c861dd_0db6eee718.png",
      },
      blog_category: {
        name: "Design",
      },
      paragraphs: [],
    },
    {
      id: 11,
      title: "Mastering React Performance in 2026",
      description: null,
      publishedAt: "2026-04-18T09:56:06.671Z",
      summary:
        "Why slow components are killing your\nconversion rate and how to fix it with\nmemoization.",
      image: {
        alternativeText:
          "Colorful computer code displayed on a dark screen, showing programming language syntax.",
        url: "https://res.cloudinary.com/dxpyhzyat/image/upload/v1776506068/6990b21c860bec3ba35448571b60641e26c861dd_0db6eee718.png",
      },
      blog_category: {
        name: "Career",
      },
      paragraphs: [],
    },
  ];

  return <PostsCarouselContent posts={initialPosts} />;
}
