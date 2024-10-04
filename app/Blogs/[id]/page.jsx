// app/blogs/[id]/page.js
"use client";
// app/blogs/[id]/page.js
import Link from 'next/link';

const blogs = [
    { id: 1, title: "Blog Post 1", content: "This is the content for blog post 1." },
    { id: 2, title: "Blog Post 2", content: "This is the content for blog post 2." },
    // Add more blogs as needed
];

const features = [
    { title: "Feature 1", description: "Description of feature 1." },
    { title: "Feature 2", description: "Description of feature 2." },
    // Add more features as needed
];

const relatedBlogs = [
    { id: 2, title: "Blog Post 2" },
    { id: 3, title: "Blog Post 3" },
    // Add more related blogs as needed
];

export default function BlogPost({ params }) {
    const { id } = params; // Extracting the id from params

    const blog = blogs.find((b) => b.id == id);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="mt-4">{blog.content}</p>

            {/* Features Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Features</h2>
                <ul className="space-y-4 mt-4">
                    {features.map((feature, index) => (
                        <li key={index} className="border p-4">
                            <h3 className="font-bold">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Call to Action (CTA) */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Call to Action</h2>
                <p className="mt-4">Join us now and get access to exclusive content!</p>
                <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded">Join Now</button>
            </div>

            {/* Related Blogs Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Related Blogs</h2>
                <ul className="space-y-4 mt-4">
                    {relatedBlogs.map((related) => (
                        <li key={related.id}>
                            <Link href={`/blogs/${related.id}`} className="text-indigo-600">
                                {related.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
