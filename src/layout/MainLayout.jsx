import React from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer'
function MainLayout({children}) {
    return (
        <>
            <header className='w-full bg-red-500 text-xl capitalize font-semibold'>
                <Header/>
            </header>
            <main>{children}</main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default MainLayout