import React from 'react'
import Add from '../../Components/AddPageComponents/Add'
import Footer from '../../Layout/Footer/Footer'
import Navbar from '../../Layout/Navbar/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';


function AddPage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Add Page</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <Add />
            <Footer />
        </>
    )
}

export default AddPage