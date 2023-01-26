import React, { useEffect, useState } from 'react'
import Footer from '../../Layout/Footer/Footer'
import Navbar from '../../Layout/Navbar/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './style.scss'
import { Link, useParams } from 'react-router-dom';

function DetailsPage() {
    const [datam, setDatam] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5555/api/${id}`)
        .then(res=>res.json())
        .then(datam=> setDatam(datam))
    },[id])
    return (

        <>
            <HelmetProvider>
                <Helmet>
                    <title>Details Page</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />

            <section className='detailpage'>
                <img alt='foto' src={datam.imgUrl}/>
                <h1>{datam.name}</h1>
                <h3>${datam.price}.00</h3>
                <Link to={'/'}><button>Back To Site</button></Link>
            </section>

            <Footer />
        </>
    )
}

export default DetailsPage