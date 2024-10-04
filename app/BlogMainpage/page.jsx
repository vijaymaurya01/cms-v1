import React from 'react'
import BlogBanner from '../components/Banner/BlogBanner'
// import BlogContent from '../components/Blog/BlogContent'
import BlogList from '../components/BlogList/BlogList'
// import Categories from '../components/Categories/Categories'
import CategoriesPage from '../components/Categories/CategoriesPage'

export default function BlogMainPage() {
  return (
    <div>
      <BlogBanner/>
      <CategoriesPage/>
      <BlogList/>
    {/* <BlogContent/> */}
    </div>
  )
}
