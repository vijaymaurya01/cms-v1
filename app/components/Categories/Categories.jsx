import React from 'react';
import Link from 'next/link';

const Categories = ({ categories }) => {
  return (
    <section className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative max-w-sm h-64 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <Link href={`/category/${category.slug}`}>
              {/* Background Image */}
              <img
                src={category.imageUrl}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              {/* Text Content */}
              <div className="relative z-10 p-4 h-full flex flex-col justify-end items-center text-center">
                <h5 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                  {category.name}
                </h5>
                <p className="text-sm text-gray-200 mt-2">
                  {category.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
