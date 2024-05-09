import './Footer.css'
import whole1 from '../../images/Frame.png'
import whole12 from '../../images/Frame (1).png'
import flow1 from '../../images/Group 18.png'
import flow2 from '../../images/Group 19.png'
import myLogo from '../../images/Logo.svg'
import myLocation from '../../images/Stroke 3.svg'
import myMessage from '../../images/Message.svg'
import myCalling from '../../images/Calling.svg'
import image16 from '../../images/image 16.png'
import facebook from '../../images/Facebook.png'
import instagram from '../../images/Instagram.png'
import twitter from '../../images/Twitter.png'
import linkedin from '../../images/Linkedin.png'
import union from '../../images/Union.png'


function Footer(){

    return(<>
        <footer>
            <div className='topFooter'>
                <div className='flowerBox'>
                    <div className='imagesBox'>
                        <img src={whole1} alt="" />
                        <img src={whole12} alt="" />
                    </div>
                    <h1>Garden Care</h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className='flowerBox'>
                    <img src={flow1} alt="" />
                    <h1>Plant Renavotion</h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className='flowerBox'>
                    <img src={flow2} alt="" />
                    <h1>Watering Garden</h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className="finalFlow">
                    <h1>Would you like to join newsletters?</h1>
                    <div className='inputPart'>
                        <input type="text" placeholder='Enter your email address...' />
                        <button>Join</button>
                    </div>
                    <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                </div>
            </div>
            <div className='middleFooter'>
                <div className='logo'>
                    <img src={myLogo} alt="" />
                </div>
                <div className='west'>
                    <img src={myLocation} alt="" />
                    <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
                </div>
                <div className='west'>
                    <img src={myMessage} alt="" />
                    <p>contact@greenshop.com</p>
                </div>
                <div className='west'>
                    <img src={myCalling} alt="" />
                    <p>+88 01911 717 490</p>
                </div>
            </div>
            <div className='bottomFooter'>
                <div className='myAccount'>
                    <h1>My Account</h1>
                    <ul>
                        <li>My Account</li>
                        <li>Our stories</li>
                        <li>Contact us</li>
                        <li>Career</li>
                        <li>Specials</li>
                    </ul>
                </div>
                <div className='myAccount'>
                    <h1>Help & Guide</h1>
                    <ul>
                        <li>Help center</li>
                        <li>How to buy</li>
                        <li>Shipping & Delivery</li>
                        <li>Product Policy</li>
                        <li>How to Return</li>
                    </ul>
                </div>
                <div className='myAccount'>
                    <h1>Categories</h1>
                    <ul>
                        <li>House Plants</li>
                        <li>Potter Plants</li>
                        <li>Seeds</li>
                        <li>Small Plants</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className='finalist'>
                    <h1>Social Media</h1>
                    <div className='socialMedias'>
                        <div className='quti'>
                            <img src={facebook} alt="" />
                        </div>
                        <div className='quti'>
                            <img src={instagram} alt="" />
                        </div>
                        <div className='quti'>
                            <img src={twitter} alt="" />
                        </div>
                        <div className='quti'>
                            <img src={linkedin} alt="" />
                        </div>
                        <div className='quti'>
                            <img src={union} alt="" />
                        </div>
                    </div>
                    <h2>We accept</h2>
                    <img src={image16} alt="" />
                </div>
            </div>
            <p className='rights'>© 2021 GreenShop. All Rights Reserved.</p>
        </footer>
    </>);
}

export default Footer
