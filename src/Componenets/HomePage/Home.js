import React from 'react'
import { useState ,useEffect } from 'react'
import heroImage from './back.png'
import categorie1 from './imgs/coffee1.jpg'
import categorie2 from './imgs/coffee2.jpg'
import categorie3 from './imgs/coffee3.jpg'
import coffe4 from './imgs/coffee4.png'
import product1 from './imgs/normal4.png'
import product2 from './imgs/coffee7.jpg.png'
import product3 from './imgs/normal2.png'
import product4 from './imgs/caffee8.jpg.png'
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import { motion, useAnimation } from 'framer-motion';
import people from './imgs/people1.jpg'
import people2 from './imgs/people2.jpg'
import people3 from './imgs/people3.jpg'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [likes3, setLikes3] = useState(0);
  const [likes4, setLikes4] = useState(0);
  const incrementLikes1 = () => {
    setLikes1(likes1 + 1);
  };
  const incrementLikes2 = () => {
    setLikes2(likes2 + 1);
  };
  const incrementLikes3 = () => {
    setLikes3(likes3 + 1);
  };
  const incrementLikes4 = () => {
    setLikes4(likes4 + 1);
  };
  const controls = useAnimation();
 // Fonction pour détecter le défilement et animer les éléments
 const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Vous pouvez ajuster ces valeurs selon vos besoins
  const triggerPosition = windowHeight * 0.5; // Position où l'animation est déclenchée

  if (scrollY > triggerPosition) {
    controls.start({ opacity: 1, y: 0 }); // Animation lorsque l'élément est visible
  } else {
    controls.start({ opacity: 0, y: 50 }); 
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 5, y: 0, transition: { duration:2 } }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (

   <div>
     {/*Hero section */}
     {/** section1 */}
     <motion.div
  variants={itemVariants}
  initial="hidden"
  animate="visible"
  className='hero'
>
       <div className='hero-text'>
            <h1>Good Coffee Will<br></br>
            ALways Find The<br></br>
            Audience
            </h1>
            <p>We provide A variety of Unique and best Coffes</p>
            <br></br><Link to='/coffee'><button>Order Now</button></Link> 
            </div>
           <img src={heroImage}/>
       
       </motion.div>


     {/** section2 */}
     <h1 className='title-cat'>Top Categories</h1>
       <motion.div 

animate={controls}

transition={{ duration: 0.5 }}
       className='categories'>
    
          <div><img src={categorie1}/><p>Coffee Mocha </p> <button>View More</button></div>
          <div><img src={categorie2}/><p>Espresso Americano </p> <button>View More</button></div>
          <div><img src={categorie3}/><p>Cappuccino </p> <button>View More</button></div>
       </motion.div>
   {/** section3 */}
       <div className='section-3'>
        <div>  <p>Check Out Our</p> <p>Best Coffee Shop</p><br></br><button>Explore Products </button></div>
       
         <img src={coffe4} className=''/>
       </div>
         {/** section4 */}
         <h1 className='title-Products'>Our Special Products</h1>
      <motion.div animate={controls} className='products'>
        <div className='product-card'>
          <FaRegHeart className='heart' onClick={incrementLikes1} /><p>{likes1} J'aime</p>
          <img src={product1} alt="Product 1" />
          <h2>Caramel Macchiato</h2>
          <span>4.44$/cup</span>
        </div>

        <div className='product-card'>
          <FaRegHeart className='heart' onClick={incrementLikes2} /><p>{likes2} J'aime</p>
          <img src={product2} alt="Product 2" />
          <h2>Ice Coffee</h2>
          <span>3.89$/cup</span>
        </div>

        <div className='product-card'>
          <FaRegHeart className='heart' onClick={incrementLikes3} /><p>{likes3} J'aime</p>
          <img src={product3} alt="Product 3" />
          <h2>Pumpkin Spice Latte</h2>
          <span>4.99$/cup</span>
        </div>

        <div className='product-card'>
          <FaRegHeart className='heart' onClick={incrementLikes4} /><p>{likes4} J'aime</p>
          <img src={product4} alt="Product 4" />
          <h2>Viennese Coffee</h2>
          <span>5.04$/cup</span>
        </div>
      </motion.div>
      <div className="testimonials">
      <h2 className="testimonials-title">What Our Customers Say About Our Website</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
        <img src={people}/>
        <span><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
          <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit eget magna condimentum tincidunt."</p>
          <p className="testimonial-author">- John Doe</p>
        </div>
        <div className="testimonial-card">
          <img src={people2}/>
          <span><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
          <p className="testimonial-text">"Vestibulum ac magna in est posuere suscipit. Integer sit amet vestibulum purus. Sed et mauris non sapien placerat sodales."</p>
          <p className="testimonial-author">- Jane Smith</p>
        </div>
        <div className="testimonial-card">
        <img src={people3}/>
        <span><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
          <p className="testimonial-text">"Vestibulum ac magna in est posuere suscipit. Integer sit amet vestibulum purus. Sed et mauris non sapien placerat sodales."</p>
          <p className="testimonial-author">- David Johnson</p>
        </div>
       

      </div>
    </div>
    <center className='title-pub'> <h2>Join in and get 15% OFF!</h2>
<p>Sed et mauris non sapien placerat sodales.</p>
<div className='c'>
<input type='text' placeholder='enter your email'/>
<button>Subscribe</button>
</div>
</center>
    <div className='container-pub'>

    </div>
    <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h2>About Us</h2>
      <p>We are passionate about coffee and committed to providing the best coffee experiences to our customers.</p>
    </div>
    <div className="footer-section">
      <h2>Opening Hours</h2>
      <p>Mon - Fri: 7:00 AM - 7:00 PM</p>
      <p>Sat - Sun: 8:00 AM - 6:00 PM</p>
    </div>
    <div className="footer-section">
      <h2>Contact Us</h2>
      <p>Email: info@Coffe.com</p>
      <p>Phone: +123456789</p>
    </div>
    <div className="footer-section">
      <h2>Our Social Media </h2>
      <span><FaFacebook className='social-icons'/>
      <FaInstagram  className='social-icons' />
     <FaWhatsapp  className='social-icons' />
     <MdSms  className='social-icons' />
     </span>
      
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Our Coffee. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Home
