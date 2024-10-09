"use client";

import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';

export default function BlogEditor() {
  const editorInstance = useRef(null);

  useEffect(() => {
    // Initialize Editor.js
    const editor = new EditorJS({
      holder: 'editorjs', // The container where the editor will be mounted
      tools: {
        header: Header,
        list: List,
        table: Table,
        image: ImageTool,
        embed: Embed,
      },
      autofocus: true, // Auto-focus the editor on page load
      onReady: () => {
        editorInstance.current = editor;
      },
    });

    return () => {
      // Cleanup editor on component unmount
      editorInstance.current?.destroy();
      editorInstance.current = null;
    };
  }, []);

  // Handle Preview functionality
  const handlePreview = async () => {
    const savedData = await editorInstance.current.save();
    console.log('Preview Data: ', savedData); // Show or render this data in a side screen for preview
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Write Your Blog</h1>
      
      {/* Feature Image Upload Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Feature Image</label>
        <input type="file" className="mt-1 block w-full" />
      </div>

      {/* Blog Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Blog Title</label>
        <input type="text" placeholder="Enter Blog Title" className="mt-1 block w-full border rounded-md px-3 py-2" />
      </div>

      {/* Blog Content (Editor.js Instance) */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Blog Content</label>
        <div id="editorjs" className="border rounded-md p-4"></div>
      </div>

      {/* Preview Button */}
      <div className="mb-4">
        <button
          onClick={handlePreview}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Preview Blog
        </button>
      </div>

      {/* Add a preview section */}
      <div id="blog-preview" className="border mt-4 p-4">
        <h2 className="font-bold text-xl">Preview will be displayed here...</h2>
        {/* You can add logic to display the saved blog data here */}
      </div>
    </div>
  );
}
