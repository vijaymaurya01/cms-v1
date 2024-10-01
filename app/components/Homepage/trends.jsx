import React from 'react';

const Trends = () => {
  const trends = ['AI and Machine Learning', 'Web Development', 'Tech Innovations', 'GEN AI'];

  return (
    <section className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 align-middle">Trending Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {trends.map((trend, index) => (
        <div key={index}class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <image class="rounded-t-lg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fweb-link.html&psig=AOvVaw2GJFsEHb6bnYhQVfzzJsQl&ust=1727870382425000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNig7fWQ7YgDFQAAAAAdAAAAABAE" alt="" />
    </a>
    <div  class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{trend}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
))}
      </div>
    </section>
  );
};

export default Trends;
