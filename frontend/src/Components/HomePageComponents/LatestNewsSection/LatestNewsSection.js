import React from 'react'
import './style.scss'

function LatestNewsSection() {
    return (
        <section className='latestNewsSection'>
            <div className='latestNewsMain'>
                <p>Popular Item in the market</p>
                <h2>Latest <h2>News</h2></h2>
                <div className='latestItem'>
                    <div id='latestcard'>
                        <img alt='foto' src='https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp' />
                        <div id='byadmincmnt'>
                            <p id='byadmin'>By Admin</p><p id='byadmin'>2 Comments</p>
                        </div>
                        <h2 id='latesth2'>The Richland Center Shooping News and weekly shooper</h2>
                        <p id='latestP'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <a href='/'><button>Read More </button></a>
                    </div>
                    <div id='latestcard'>
                        <img alt='foto' src='https://preview.colorlib.com/theme/aroma/img/blog/blog2.png.webp' />
                        <div id='byadmincmnt'>
                            <p id='byadmin'>By Admin</p><p id='byadmin'>2 Comments</p>
                        </div>
                        <h2 id='latesth2'>The Shopping News also offers top-quality printing services</h2>
                        <p id='latestP'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <a href='/'><button>Read More </button></a>
                    </div>
                    <div id='latestcard'>
                        <img alt='foto' src='https://preview.colorlib.com/theme/aroma/img/blog/blog3.png.webp' />
                        <div id='byadmincmnt'>
                            <p id='byadmin'>By Admin</p><p id='byadmin'>2 Comments</p>
                        </div>
                        <h2 id='latesth2'>Professional design staff and efficient equipment you’ll find we offer</h2>
                        <p id='latestP'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <a href='/'><button>Read More </button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestNewsSection