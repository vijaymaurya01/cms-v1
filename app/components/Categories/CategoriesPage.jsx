import React from 'react';
import Categories from './Categories';

const categoriesData = [
  { 
    name: 'AI and Machine Learning', 
    slug: 'ai-and-machine-learning', 
    imageUrl: 'https://images.unsplash.com/photo-1581093458798-5e15f9d60170?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    description: 'Discover the latest trends in AI and how machine learning is shaping the future.' 
  },
  { 
    name: 'Web Development', 
    slug: 'web-development', 
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    description: 'Explore modern web development techniques and frameworks.' 
  },
  { 
    name: 'Tech Innovations', 
    slug: 'tech-innovations', 
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    description: 'Stay updated with breakthrough innovations in the tech world.' 
  },
  { 
    name: 'GEN AI', 
    slug: 'gen-ai', 
    imageUrl: 'https://images.unsplash.com/photo-1581092334613-df92ed486174?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    description: 'Explore the impact of generative AI on various industries.' 
  },
  { 
    name: 'Cloud Computing', 
    slug: 'cloud-computing', 
    imageUrl: 'https://images.unsplash.com/photo-1592609933593-032232cc4acb?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    description: 'Dive into the world of cloud infrastructure and services.' 
  },
  { 
    name: 'Cybersecurity', 
    slug: 'cybersecurity', 
    imageUrl: 'https://images.unsplash.com/photo-1504600772164-603812cd8462?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    description: 'Learn how to secure systems and data in a growing cyber threat landscape.' 
  },
  { 
    name: 'Blockchain', 
    slug: 'blockchain', 
    imageUrl: 'https://images.unsplash.com/photo-1606940738470-42b7b2d71a7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    description: 'Understand the transformative power of blockchain technology.' 
  },
  { 
    name: 'Big Data', 
    slug: 'big-data', 
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    description: 'Harness the power of big data analytics to drive business insights.' 
  },
];

const CategoriesPage = () => {
  return (
    <div>
      <Categories categories={categoriesData} />
    </div>
  );
};

export default CategoriesPage;
