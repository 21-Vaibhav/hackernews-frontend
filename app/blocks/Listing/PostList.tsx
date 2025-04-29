import React from "react";

const posts = [
  {
    id: 1,
    title: "Qwen3: Think deeper, act faster",
    url: "https://qwenlm.github.io/",
    points: 410,
    author: "syntheticwave",
    time: "6 hours ago",
    comments: 164,
  },
  {
    id: 2,
    title: "The 12-bit rainbow palette",
    url: "https://iamkate.com/",
    points: 125,
    author: "rguiscard",
    time: "3 hours ago",
    comments: 14,
  },
  {
    id: 3,
    title: "Widespread power outage in Spain and Portugal",
    url: "https://bbc.com/",
    points: 1244,
    author: "ilemis",
    time: "16 hours ago",
    comments: 911,
  },
  {
    id: 4,
    title: "I built a hardware processor that runs Python",
    url: "https://runpyxl.com/",
    points: 844,
    author: "hypotherm",
    time: "15 hours ago",
    comments: 227,
  },
  {
    id: 5,
    title: "One Million Chessboards",
    url: "https://onemillionchessboards.com/",
    points: 139,
    author: "chunkles",
    time: "7 hours ago",
    comments: 32,
  },
  {
    id: 6,
    title: "The One-Person Framework in Practice",
    url: "https://mail.beehiveivy.com/",
    points: 69,
    author: "fran5",
    time: "4 hours ago",
    comments: 28,
  },
  {
    id: 7,
    title: "Why did Windows 7 log on slower for months if you had a solid color background?",
    url: "https://microsoft.com/",
    points: 42,
    author: "zdv3",
    time: "3 hours ago",
    comments: 8,
  },
  {
    id: 8,
    title: "Running Clojure in WASM with GraalVM",
    url: "https://romaniutikov.com/",
    points: 98,
    author: "romani0a",
    time: "7 hours ago",
    comments: 16,
  },
  {
    id: 9,
    title: "Rad Type – Can we make gamepad typing fast?",
    url: "https://tyleo.com/",
    points: 9,
    author: "tyleo",
    time: "1 hour ago",
    comments: 11,
  },
  {
    id: 10,
    title: "Migrating away from Just Read",
    url: "https://deadmoney.gg/",
    points: 432,
    author: "rc00",
    time: "7 hours ago",
    comments: 387,
  },
  {
    id: 11,
    title: "A pure WebGL image editor with filters, crop and perspective correction",
    url: "https://github.com/xdadda",
    points: 159,
    author: "axelM",
    time: "10 hours ago",
    comments: 48,
  },
  {
    id: 12,
    title: "Legal path for forgery, for the sake of movies (2014)",
    url: "https://vanityfair.com/",
    points: 204,
    author: "theneedl4",
    time: "5 hours ago",
    comments: 14,
  },
  {
    id: 13,
    title: "Packed Data Support in Haskell",
    url: "https://amthi-chaud.github.io/",
    points: 37,
    author: "cat_5",
    time: "5 hours ago",
    comments: 18,
  },
  {
    id: 14,
    title: "Requirements change until they don’t",
    url: "https://buttondown.com/hillelwayne",
    points: 26,
    author: "zhlenley",
    time: "5 hours ago",
    comments: 1,
  },
  {
    id: 15,
    title: "Tiny-LLM – a course of serving LLM on Apple Silicon for systems engineers",
    url: "https://github.com/skyzh",
    points: 227,
    author: "sarkyr",
    time: "15 hours ago",
    comments: 24,
  },
  {
    id: 16,
    title: "Sim Studio – Open-Source Agent Workflow GUI",
    url: "https://github.com/simstudioai",
    points: 123,
    author: "waledaltdf",
    time: "10 hours ago",
    comments: 40,
  },
  {
    id: 17,
    title: "What are you working on? (April 2025)",
    url: "https://news.ycombinator.com/item?id=40123456",
    points: 284,
    author: "david9t2",
    time: "1 day ago",
    comments: 859,
  },
  {
    id: 18,
    title: "Why Momentum Works (2017)",
    url: "https://distill.pub/",
    points: 55,
    author: "vector_spaces",
    time: "8 hours ago",
    comments: 7,
  },
  {
    id: 19,
    title: "Web-eval-agent – Let the coding agent debug itself",
    url: "https://github.com/operative-sh",
    points: 60,
    author: "nervestive8",
    time: "11 hours ago",
    comments: 9,
  },
  {
    id: 20,
    title: "Reports of the death of California High-Speed Rail have been greatly exaggerated",
    url: "https://asteriskmag.com/",
    points: 124,
    author: "spruchkat8",
    time: "8 hours ago",
    comments: 277,
  },
  {
    id: 21,
    title: "What the heck is AEAD again?",
    url: "https://ochagavia.nl/",
    points: 87,
    author: "cody01",
    time: "12 hours ago",
    comments: 33,
  },
  {
    id: 22,
    title: "From C to Rust: Embedded Migration",
    url: "https://embedded.rs/",
    points: 198,
    author: "tanya00",
    time: "9 hours ago",
    comments: 50,
  },
  {
    id: 23,
    title: "Rethinking MVP in product development",
    url: "https://productthoughts.com/",
    points: 47,
    author: "makersmith",
    time: "6 hours ago",
    comments: 12,
  },
  {
    id: 24,
    title: "How old software survives",
    url: "https://longsoftwarereport.com/",
    points: 312,
    author: "archbyte",
    time: "11 hours ago",
    comments: 79,
  },
  {
    id: 25,
    title: "Compiler Explorer for Python?",
    url: "https://godbolt.org/python",
    points: 34,
    author: "gordie",
    time: "2 hours ago",
    comments: 5,
  },
];


const PostList: React.FC = () => {
  return (
    <main className="bg-[#f6f6ef]  max-w-7xl mx-auto px-4 py-2 text-sm text-black">
      {posts.map((post, index) => (
        <div key={post.id} className="mb-1">
          <div className="flex items-start gap-1">
            <span className="text-gray-500">{index + 1}.</span>
            <a
              href={post.url}
              className="text-black hover:underline font-medium"
            >
              {post.title}
            </a>
          </div>
          <div className="pl-5 text-gray-600">
            {post.points} points by {post.author} {post.time} | {post.comments}{" "}
            comments
          </div>
        </div>
      ))}
    </main>
  );
};

export default PostList;
