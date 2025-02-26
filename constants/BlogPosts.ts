export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  tag: string;
  image: string;
}

export const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Building a Responsive Portfolio with Next.js",
    content:
      "Learn how to create a modern, responsive portfolio website using Next.js and Tailwind CSS.",
    date: "2024-02-26",
    tag: "Project",
    image: "/blog/portfolio-nextjs.jpg",
  },
  {
    id: "2",
    title: "Exploring AWS Lambda for Serverless Computing",
    content:
      "Dive into the world of serverless computing with AWS Lambda and discover its potential for your projects.",
    date: "2024-02-20",
    tag: "Tech",
    image: "/blog/aws-lambda.jpg",
  },
  {
    id: "3",
    title: "The Power of Design Thinking in Software Development",
    content:
      "Explore how design thinking principles can revolutionize your approach to software development.",
    date: "2024-02-15",
    tag: "Inspiration",
    image: "/blog/design-thinking.jpg",
  },
  {
    id: "4",
    title: "Implementing CI/CD with GitHub Actions",
    content:
      "Learn how to set up a robust CI/CD pipeline for your projects using GitHub Actions.",
    date: "2024-02-10",
    tag: "Project",
    image: "/blog/github-actions.jpg",
  },
  {
    id: "5",
    title: "The Future of Web Development: Web Assembly",
    content:
      "Explore the potential of Web Assembly and how it's shaping the future of web development.",
    date: "2024-02-05",
    tag: "Tech",
    image: "/blog/web-assembly.jpg",
  },
  {
    id: "6",
    title: "Mastering Data Structures and Algorithms",
    content:
      "Discover the key concepts of data structures and algorithms to level up your programming skills.",
    date: "2024-01-30",
    tag: "Tech",
    image: "/blog/data-structures.jpg",
  },
  {
    id: "7",
    title: "The Art of Debugging: Strategies for Success",
    content:
      "Learn essential debugging strategies and techniques to tackle bugs and errors in your code effectively.",
    date: "2024-01-25",
    tag: "Tech",
    image: "/blog/debugging.jpg",
  },
  {
    id: "8",
    title: "Building Scalable Web Applications with Microservices",
    content:
      "Explore the world of microservices architecture and learn how to build scalable web applications.",
    date: "2024-01-20",
    tag: "Tech",
    image: "/blog/microservices.jpg",
  },
  {
    id: "9",
    title: "The Rise of NoSQL Databases: A Paradigm Shift",
    content:
      "Understand the evolution of NoSQL databases and their impact on modern application development.",
    date: "2024-01-15",
    tag: "Tech",
    image: "/blog/nosql-databases.jpg",
  },
  {
    id: "10",
    title: "Empowering Teams with Agile Methodologies",
    content:
      "Discover the benefits of Agile methodologies and how they can empower your team to deliver high-quality software.",
    date: "2024-01-10",
    tag: "Inspiration",
    image: "/blog/agile-methodologies.jpg",
  },
  {
    id: "11",
    title: "The Art of Code Review: Best Practices and Guidelines",
    content:
      "Master the art of code review with best practices and guidelines to enhance code quality and collaboration.",
    date: "2024-01-05",
    tag: "Tech",
    image: "/blog/code-review.jpg",
  },
  {
    id: "12",
    title: "Creating Stunning Visuals with CSS Animation",
    content:
      "Learn how to create stunning visuals and animations using CSS to enhance your web projects.",
    date: "2023-12-30",
    tag: "Tech",
    image: "/blog/css-animation.jpg",
  },
  {
    id: "13",
    title: "The Future of AI: Machine Learning and Deep Learning",
    content:
      "Explore the future of AI with machine learning and deep learning technologies that are transforming industries.",
    date: "2023-12-25",
    tag: "Tech",
    image: "/blog/ai-future.jpg",
  },
];

const BlogPosts = { POSTS };
export default BlogPosts;
