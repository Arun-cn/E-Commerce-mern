import React, { Children } from 'react'
import Footer from './Footer'
import Headers from './Headers'
import{ Helmet} from 'react-helmet'

function Layout({children, title, description, keywords, author}) {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
        <Headers/>
        <main style={{minHeight :"80vh"}}>
           {children}
        </main>
        <Footer/>
        
    </div>
  )
};
Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "arun",
};


export default Layout