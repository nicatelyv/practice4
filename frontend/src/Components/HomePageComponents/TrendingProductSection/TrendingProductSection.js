import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function TrendingProductSection() {
    const [data, setData] = useState([])

    function getfuncs() {
        fetch("http://localhost:5555/api")
            .then(res => res.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        getfuncs()
    }, [])

    const handleDelete = (_id) => {
        axios.delete(`http://localhost:5555/api/${_id}`).then(() => {
            getfuncs()
        })
    }
    function handleSort() {
        setData([...data.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? 1 : -1))])
    }
    return (
        <section className='trendingSection'>
            <div className='trendingMain'>
                <p>Popular Item in the market</p>
                <h2>Trending <h2>Product</h2></h2>
                <button onClick={() => handleSort()}>Filter by Price</button>
                <div className='cards'>
                    {data.map(element => (
                        <div className='card'>
                            <img alt='foto' src={element.imgUrl} />
                            <p>{element.title}</p>
                            <h3 className='trendName'>{element.name}</h3>
                            <h4 className='cardPrice'>${element.price}.00</h4>
                            <Link to={'/details/' + element._id}><button>Details</button></Link>
                            <button id='deletebtn' onClick={() => (handleDelete(element._id))}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrendingProductSection