import React, { Children } from 'react'
import Footer from './Footer'
import Headers from './Headers'


function Layout({children}) {
  return (
    <div>
        <Headers/>
        <main style={{minHeight :"80vh"}}>
           {children}
        </main>
        <Footer/>
        
    </div>
  )
}

export default Layout