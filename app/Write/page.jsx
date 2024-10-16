"use client";

import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';

export default function BlogEditor() {
  const editorInstance = useRef(null);
  const [previewData, setPreviewData] = useState(null);
  const [title, setTitle] = useState('');
  const [featureImage, setFeatureImage] = useState(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: Header,
        list: List,
        table: Table,
        image: ImageTool,
        embed: Embed,
      },
      autofocus: true,
      onReady: () => {
        editorInstance.current = editor;
      },
    });

    return () => {
      editorInstance.current?.destroy();
      editorInstance.current = null;
    };
  }, []);

  // Handle Preview functionality
  const handlePreview = async () => {
    if (!title || !featureImage) {
      alert('Please add a title and feature image');
      return;
    }
    const savedData = await editorInstance.current.save();
    setPreviewData({ title, featureImage, content: savedData.blocks });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFeatureImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Render content blocks from Editor.js
  const renderContent = (blocks) => {
    return blocks.map((block, index) => {
      switch (block.type) {
        case 'header':
          return <h2 key={index} className="font-bold text-2xl mb-4">{block.data.text}</h2>;
        case 'paragraph':
          return <p key={index} className="text-gray-700 mb-4">{block.data.text}</p>;
        case 'list':
          return (
            <ul key={index} className="list-disc list-inside mb-4">
              {block.data.items.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          );
        case 'table':
          return (
            <table key={index} className="table-auto mb-4 border">
              <tbody>
                {block.data.content.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border p-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        case 'image':
          return (
            <img key={index} src={block.data.file.url} alt={block.data.caption || 'Image'} className="w-full mb-4" />
          );
        case 'embed':
          return (
            <div key={index} className="embed-responsive mb-4">
              <iframe
                src={block.data.embed}
                frameBorder="0"
                allowFullScreen
                title={block.data.caption}
                className="w-full h-64"
              />
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Blog Post</h1>
      <div className="lg:flex lg:space-x-8">
        {/* Editor Section */}
        <div className="lg:w-2/3">
          {/* Feature Image Upload Section */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Feature Image</label>
            <input type="file" className="mt-1 block w-full" onChange={handleImageChange} />
          </div>

          {/* Blog Title */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Blog Title</label>
            <input
              type="text"
              placeholder="Enter Blog Title"
              className="mt-1 block w-full border rounded-md px-3 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Blog Content (Editor.js Instance) */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Blog Content</label>
            <div id="editorjs" className="border rounded-md p-4"></div>
          </div>

          {/* Preview Button */}
          <div className="mb-6 text-right">
            <button
              onClick={handlePreview}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Preview Blog
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="lg:w-1/3 lg:sticky lg:top-6 bg-gray-100 p-6 rounded-md shadow-lg">
          <h2 className="font-bold text-2xl mb-4 text-center">Live Preview</h2>
          {previewData ? (
            <div>
              <img
                src={previewData.featureImage}
                alt="Feature"
                className="mb-4 w-full h-64 object-cover rounded-md"
              />
              <h1 className="font-bold text-3xl mb-4">{previewData.title}</h1>
              {/* Render the saved blog content */}
              <div className="text-gray-700">
                {renderContent(previewData.content)}
              </div>
            </div>
          ) : (
            <p className="text-gray-600 text-center">Your blog preview will appear here.</p>
          )}
        </div>
      </div>
    </div>
  );
}
