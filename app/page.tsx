import React from 'react'
import NavigationBar from '@/components/nav-bar/NavigationBar'
import FooterBar from '@/components/footer-bar/FooterBar'
import PostList from '@/app/blocks/Listing/PostList'

const RootPage = () => {
  return (
    <>
      <NavigationBar />
      <PostList />
      <FooterBar />
    </>
  );
}

export default RootPage