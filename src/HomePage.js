import React from 'react';
import Categories from './Categories'
import newWave_name from './newWave_name.png'


function HomePage({ filteredByCat, selectedCat, setSelectedCat, catClicked, setCatClicked, filterChange, setFilterChange, setSaleChange, saleTypeSelection}){

    
    return (
        <>
        
        {!catClicked ? <div id="homepage">
            <br></br>
            <div className="welcome-message">
                <h1>Welcome to </h1><img className="bannerlogo" src={newWave_name} />
            </div>
            <h3>Buy Instruments. Trade Instruments. Make Music. </h3>
            {/* bootstrap image courousel */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2500">
                        <img src="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/istock_000014434210small.jpg?itok=yeQKpkoh" className="d-block w-100" alt="fingers on a piano"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img src="https://www.naeyc.org/sites/default/files/styles/page_header_media_large/public/032018/families-banner35.jpg?itok=sV5DiTr6&timestamp=1521137942" className="d-block w-100" alt="father and daughter paly guitar together"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img src="https://news.fretello.com/content/images/assets-old/adult-african-african-descent-1537171-1024x683.jpg" className="d-block w-100" alt="woman playing ukulele on the beach"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img src="https://pianopower.org/wp-content/uploads/2018/05/shutterstock_310945214.jpg" className="d-block w-100" alt="child with a guitar"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img src="https://ofmvc40dolyrl7u9xigg5kyy-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/harp-3961060_1280-1024x682.jpg" className="d-block w-100" alt="woman playing harp"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img src="https://www.careersinmusic.com/wp-content/uploads/2019/01/how-to-produce-music.jpg" className="d-block w-100" alt="array of electronics for music"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br></br>
            <h1>Browse our Items</h1>
            <body>
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                    <Categories 
                    filteredByCat={filteredByCat} 
                    selectedCat={selectedCat} 
                    setSelectedCat={setSelectedCat} 
                    catClicked={catClicked} 
                    setCatClicked={setCatClicked} 
                    filterChange={filterChange}
                    setFilterChange={setFilterChange}
                    setSaleChange={setSaleChange}
                    saleTypeSelection={saleTypeSelection}/>
            </body>
            </div> : <Categories 
                        filteredByCat={filteredByCat} 
                        selectedCat={selectedCat} 
                        setSelectedCat={setSelectedCat} 
                        catClicked={catClicked} 
                        setCatClicked={setCatClicked} 
                        filterChange={filterChange}
                        setFilterChange={setFilterChange}
                        setSaleChange={setSaleChange}
                        saleTypeSelection={saleTypeSelection}/>}
        </>
    )
}












export default HomePage