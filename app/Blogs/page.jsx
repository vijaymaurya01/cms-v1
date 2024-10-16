// app/blogs/page.js
"use client";
import Link from 'next/link';
import Blogs from '../BlogMainpage/page';

const blogs = [
    { id: 1, title: "Blog Post 1", content: "This is the content for blog post 1." },
    { id: 2, title: "Blog Post 2", content: "This is the content for blog post 2." },
    // Add more blogs as needed
];

export default function Blog() {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
          <Blogs/>
        </div>
    );
}
