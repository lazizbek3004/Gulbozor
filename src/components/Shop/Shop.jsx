import './Shop.css'
import Footer from '../Footer/Footer'
import { useState } from 'react';
import image1 from '../../images/myImage1.svg'
import image2 from '../../images/myImage4.svg'
import image3 from '../../images/myImage3.svg'
import image4 from '../../images/myImage4.svg'
import stars from '../../images/stars.svg'
import face from '../../images/Facebook.svg'
import twit from '../../images/Twitter.svg'
import lin from '../../images/Linkedin.svg'
import mes from '../../images/message1.svg'


export default function Shop(){
    const [selectedImage, setSelectedImage] = useState(3);
    const images = [
        image1,
        image2,
        image3,
        image4,
    ]

    const handleNum = (index) => {
        setSelectedImage(index)
    };

    const [green, setGreen] = useState(0)
    
    const numDiv = [
        "S",
        "M",
        "L",
        "XL"
    ]

    const changeGreen = (index) => {
        setGreen(index)
    }

    const [num, setNum] = useState(0);

    const decreaseNum = () => {
        if(num>0){
            setNum(n => n = n - 1)   
        }
    }
    const increaseNum = () => {
        if(num < 9){
            setNum(n => n = n + 1)
        }
    }
    const [isGreen, setIsGreen] = useState(0)
    const reviews = [
        "Product Description",
        "Reviews(19)"
    ]
    const changeIsGreen = (index) => {
        setIsGreen(index);
    }
  
    return(<>
        <div className='shop-container'>
            <div className='shopBuy'>
                <h1><span>Home</span>/Shop</h1>
            </div>
            <div className='selectPart'>
                <div className='selectImg'>
                    <div className='imgSelect'>
                       {images.map((image, index) => {
                        return  <img src={image} 
                        alt={`image${index}`} 
                        onClick={() => handleNum(index)} 
                        className={index === selectedImage ? "selectedPic" : ""}/>

                        })}
                    </div>
                    <div className='selectedImg'>
                        <img src={images[selectedImage]} alt="" />
                    </div>
                </div>
                <div className='daisyPart'>
                    <h1 className='barberton'>Barberton Daisy</h1>
                    <div className='dollar'>
                        <h2>$119.00</h2>
                        <img src={stars} alt="" />
                    </div>
                    <h1 className='shortDes'>Short Description:</h1>
                    <p className='theText'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                    <h2 className='size'>Size:</h2>
                    <div className='sizeContainer'>
                        {numDiv.map((little, index) => {
                            return <div className={index === green ? "innerSize innerGr" : "innerSize"} onClick={() => changeGreen(index)}>{little}</div>
                        })}
                    </div>
                    <div className='byNow'>
                        <div className="buttonsPart">
                            <button onClick={decreaseNum}>-</button>
                            <span className='middleButton'>{num}</span>
                            <button onClick={increaseNum}>+</button>
                        </div>
                        <button className='buyNw'>Buy now</button>
                        <button className="addTo">ADd to cart</button>
                        <button className='heart'>&#x2665;</button>
                    </div>
                    <div className='tags'>
                        <span>SKU: 1995751877966</span>
                        <span>Categories: Potter Plants</span>
                        <span>Tags: Home, Garden, Plants</span>
                    </div>
                    <div className='daisyFinal'>
                        <span>Share this products:</span>
                        <img src={face} alt="" />
                        <img src={twit} alt="" />
                        <img src={lin} alt="" />
                        <img src={mes} alt="" />
                    </div>
                </div>
            </div>
            <div className='middleD'>
                <div className='productTime'>
                    {reviews.map((review, index) => {
                        return <div className={index == isGreen ? "innerProduct innerGre" : "innerProduct"}
                        onClick={() => changeIsGreen(index)}>{review}</div>
                    })}
                </div>
                <div className='nextProduct'>
                   <p className='ceramic'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. <br /> <br /> Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                   <h3 className='living'>Living Room:</h3>
                   <p className='ceramic'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                   <h3 className='living'>Dining Room:</h3>
                   <p className='ceramic'>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
                   <h3 className='living'>Office:</h3>
                   <p className='ceramic'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='finalShop'>


                    
            </div>

        </div>


        <Footer />
    </>);
}
