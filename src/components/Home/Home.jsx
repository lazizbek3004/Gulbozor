import './Home.css'
import flower1 from '../../images/flower1.svg'
import Shop from '../Shop/Shop'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image12 from '../../images/image12.svg'
import daisy1 from '../../images/image 1.png'
import daisy2 from '../../images/daisy2.png'
import daisy4 from '../../images/daisy4.png'
import daisy3 from '../../images/daisy3.png'
import daisy5 from '../../images/daisy5.png'
import daisy6 from '../../images/daisy6.png'
import daisy7 from '../../images/daisy7.png'
import daisy8 from '../../images/daisy8.png'
import daisy9 from '../../images/daisy9.png'
import stroke1 from '../../images/Stroke 1.svg'
import flower3 from '../../images/image14.png'
import flower2 from '../../images/image15.png'
import cactus1 from '../../images/01.png'
import cactus2 from '../../images/02.png'
import cactus3 from '../../images/03.png'
import cactus4 from '../../images/04.png'
import Footer from '../Footer/Footer.jsx'


export default function Home(){
    let dots = document.querySelectorAll('.dot')
    const [price, setPrice] = useState()
    
    function changeColor(e){
        dots.forEach((el) => {
            el.style.backgroundColor = 'rgba(70, 163, 88, 0.3)'
        })
        e.target.style.backgroundColor = 'rgb(70, 163, 88)'

    }
    const navigate = useNavigate()
    function shopNow(){
        navigate("/shop")
    }
    function greenNum(e){
        let targetE = e.taget;
        targetE.classList.add("greenN")
    }

    function changePrice(event){
        setPrice(event.target.value)
    }
    const [myNum, setMyNum] = useState(0);
    const flow = [
        "All Plants",
        "New Arrivals",
        "Sale"
    ]
    const changeMyNum = (index) => {
        setMyNum(index)
    }
    const [exact, setExact] = useState(0)
    const numbers = [
        "1",
        "2",
        "3",
        "4"
    ]
    const changeExact = (index) => {
        setExact(index)
    }
    const nextExact = () => {
        if(exact == 3){
            setExact(0)
        }else{
            setExact(e => e + 1)
        }
    }
    return(<>
       
        <div className='container'>
            <section className='section1'>
                <div className="make">
                    <h4>WELCOME TO GREENSHOP</h4>
                    <h1>LET'S MAKE A</h1>
                    <h1>BETTER <span>PLANET</span></h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <button onClick={shopNow}>SHOP NOW</button>
                </div>
                <img src={flower1} alt="flower" />
                <div className='dots'>
                    <div className="dot" ></div>
                    <div className="dot" ></div>
                    <div className="dot"></div>
                </div>
            </section>
            <section className='section2'>
                <div className="categories">
                    <div className='categ'>
                        <h1>Categories</h1>
                        <div className='wrapEach'>
                            <div className='each each1'>
                                <span>House Plants</span>
                                <p>(33)</p>
                            </div>
                            <div className='each'>
                                <span>Potter Plants</span>
                                <p>(12)</p>
                            </div>
                            <div className='each'>
                                <span>Seeds </span>
                                <p>(65)</p>
                            </div>
                            <div className='each'>
                                <span>Small Plants</span>
                                <p>(39)</p>
                            </div>
                            <div className='each'>
                                <span>Big Plants</span>
                                <p>(23)</p>
                            </div>
                            <div className='each'>
                                <span>Succelents</span>
                                <p>(17)</p>
                            </div>
                            <div className='each'>
                                <span>Treririmous</span>
                                <p>(19)</p>
                            </div>
                            <div className='each'>
                                <span>Gardening</span>
                                <p>(13)</p>
                            </div>
                            <div className='each'>
                                <span>Accessories</span>
                                <p>(18)</p>
                            </div>
                        </div>
                        <div className='priceRange'>
                            <h2>Price Range</h2>
                            <input type="range"
                            onChange={changePrice}
                            min={0}
                            max={12}
                            className='rangePrice' />
                            <p>Price:<span>${price}00</span></p>
                            <button>Filter</button>
                        </div>
                        <div className='sizePart'>
                            <h1>Size</h1>
                            <div className='each'>
                                <span>Small</span>
                                <p>(119)</p>
                            </div>
                            <div className='each'>
                                <span>Medium</span>
                                <p>(87)</p>
                            </div>
                            <div className='each'>
                                <span>Large</span>
                                <p>(78)</p>
                            </div>
                        </div>
                    </div>
                        <div className='superSale'>
                            <h1>Super Sale</h1>
                            <h2>Up to 75% off</h2>
                            <img src={image12} alt="finalFlower" />
                        </div>

                </div>
                <div className='flowers'>
                    <div className='flowerTop'>
                        <div className='flowerList'>
                            {/* allPlants className */}
                            <ul>
                                {flow.map((fl, index) => {
                                    return <li key={index}
                                    className={index == myNum ? "allPlants" : ""}
                                    onClick={() => changeMyNum(index)}>{fl}</li>
                                })}
                            </ul>
                        </div>
                        <div className='flowerSort'>
                            Short by: Default sorting
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div className='flowerBottom'>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy1} alt="" />
                            </div>
                            <h2>Barberton Daisy</h2>
                            <span>$119.00</span>
                        </div>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy2} alt="" />
                            </div>
                            <h2>Angel Wing Begonia</h2>
                            <span>$169.00</span>
                        </div>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy3} alt="" />
                            </div>
                            <h2>African Violet</h2>
                            <span>$199.00</span>
                        </div>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy4} alt="" />
                            </div>
                            <h2>Beach Spider Lily</h2>
                            <span>$129.00</span>
                        </div>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy5} alt="" />
                            </div>
                            <h2>Blushing Bromeliad</h2>
                            <span>$139.00</span>
                        </div>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy6} alt="" />
                            </div>
                            <h2>Aluminum Plant</h2>
                            <span>$179.00</span>
                        </div>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy7} alt="" />
                            </div>
                            <h2>Bird's Nest Fern</h2>
                            <span>$99.00</span>
                        </div>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy8} alt="" />
                            </div>
                            <h2>Broadleaf Lady Palm</h2>
                            <span>$59.00</span>
                        </div>
                        <div className="theSame">
                            <div className='innerTop'>
                                <img src={daisy9} alt="" />
                            </div>
                            <h2>Chinese Evergreen</h2>
                            <span>$39.00</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section3'>
                <div className='numContainer'>
                    {numbers.map((nums, index) => {
                        return <div className={index == exact ? "numbers greenDiv" : "numbers"}
                        onClick={() => changeExact(index)}>{nums}</div>
                    })}
                </div>
                <div className="strokeImg" onClick={nextExact}><img src={stroke1} alt="" /></div>
            </section>
            <section className="section4">
                <div className="leftSec">
                    <h1>Summer Cactus</h1>
                    <h1>&Succelents</h1>
                    <p>We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
                    <button>Find More</button>
                    <img src={flower3} className='imageP1' alt="" />
                </div>
                <div className='rightSec'>
                <h1>Summer Cactus</h1>
                    <h1>&Succelents</h1>
                    <p>We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
                    <button>Find More</button>
                    <img src={flower2} className='imageP2' alt="" />
                </div>
            </section>
            <section className="section5">
                <h1 className='our'>Our Blog Posts</h1>
                <p className='online'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                <div className='containerFlow'>
                    <div className='cactus'>
                        <img src={cactus1} alt="" />
                        <div className='restCactus'>
                            <h2>September 12  I Read in 6 minutes</h2>
                            <h1>Cactus & Succulent <br /> Care Tips</h1>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <span>Read More</span>

                        </div>
                    </div>
                    <div className='cactus'>
                        <img src={cactus2} alt="" />
                        <div className='restCactus'>
                            <h2>September 13  I Read in 12 minutes</h2>
                            <h1>Top 10 Succulents for <br /> Your Home</h1>
                            <p>Best in hanging baskets. Prefers medium to high light.</p>
                            <span>Read More</span>

                        </div>
                    </div>
                    <div className='cactus'>
                        <img src={cactus3} alt="" />
                        <div className='restCactus'>
                            <h2>September 15  I Read in 3 minutes</h2>
                            <h1>Cacti & Succulent <br /> Care Tips</h1>
                            <p>Cacti and succulents thrive in containers and because most are..</p>
                            <span>Read More</span>

                        </div>
                    </div>
                    <div className='cactus'>
                        <img src={cactus4} alt="" />
                        <div className='restCactus'>
                            <h2>September 15  I Read in 2 minutes</h2>
                            <h1>Best Houseplants <br /> Room by Room</h1>
                            <p>The benefits of houseplants are endless. In addition to..</p>
                            <span>Read More</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <Footer />
        </>);
}
