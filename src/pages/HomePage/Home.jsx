import React from 'react'
import Categories from '../../components/categories/Categories'
import Email from '../../components/Email/Email'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Main from '../../components/places/Main'

function Home() {
  return (
    <div>
        <Header/>
        <Featured/>
        <Categories/>
        <Main/>
        <Email/>
    </div>
  )
}

export default Home