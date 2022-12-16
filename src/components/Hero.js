import "./HeroStyles.css"


function Hero(){
    return(
        <div className="hero">
            <h2 className="hero_text">Search Your Next <br/>Home</h2>
            <p>Find new & featured property locared in your local city.</p>
            <form>
                <div>
                    <h5>City/Street</h5>
                    <input placeholder="Location" type="text" />
                </div>
                <div>
                    <h5>Property Type</h5>
                    <input placeholder="Property Type" type="text" />
                </div>
                <div>
                    <h5>Price Range</h5>
                    <input placeholder="Price Range" type="text" />
                </div>
                <div>
                    <h3>Advance Filter</h3>
                    <span class="material-symbols-outlined">search</span>
                </div>
            </form>
        </div>

    )
}

export default Hero;