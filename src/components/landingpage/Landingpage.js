import './Landingpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';


// let slideIndex = 1;

// function nextSlide(n) {
//     showSlides(slideIndex += n)
// }
 
// const Testimonials= (props) => {
//     const [presentIndex, setPresentIndex] = useState(0);
    
//     const nextSlide = () => {
//         setPresentIndex((prevIndex) => 
//             prevIndex + 1 === props.length ? 0 : prevIndex + 1);
//     }

// }


const Landingpagedesign = (props) => {
    // const navigate = useNavigate();

    return(
        <div className='layout' id='home'>          
            <div className='navbar'>
                <div className='nav'>
                    <div className='logo'>
                        <img src='./logo.png' alt='logo' className='logo-img'/>
                        <p className='logo-name'>SugrMe</p>
                    </div>
                    <nav className='nav-name'>
                <AnchorLink href='#home' className='navs active'>Home</AnchorLink>
                <AnchorLink href='#about' className='navs'>About</AnchorLink>
                <AnchorLink href='#features' className='navs'>Features</AnchorLink>
                <AnchorLink href='#product' className='navs'>Product</AnchorLink>
                <AnchorLink href='#testimonal' className='navs'>Testimonial</AnchorLink>
                <AnchorLink href='#faq' className='navs'>FAQ</AnchorLink>
                    </nav>
                </div>
            <div className='login'>
                <button className='demo-button'>Request a Demo</button>
                <button className='login-button'>Login</button>    
            </div>    
            </div>                    
            <div className='heroSection' >
                <div className='heromsg'>
                    <div className='herotext'>
                    <p className='herotext1'>Track your sugar levels over time and see your progress.</p>
                    <p className='herotext2'>Get actionable insights into your sugar levels to manage your diabetes better</p>
                    </div>
                    <button className='mainbutton'>Get Started</button>
                </div>
                <div className='heroframe'>
                    <img src="./heroimage.jpg" alt='hero' className='heroimage'/>
                </div>
            </div>
            <div className='aboutsection' id='about'>            
                <h1>About</h1>
                <p className='about-content'>We provide people with diabetes the necessary guidiance to manage their condition and stay healthy. 
                By tracking their blood sugar levels over time, people with diabetes can identify patterns and trends, which can help them to make informed decisions about their diet, exercise, and medication.  
                Our easy-to-use tracker allows you to log your blood sugar levels manually or by uploading data from your blood glucose meter. 
                You can also track other factors that can affect your blood sugar levels, such as diet, exercise, and medication.</p>
            </div>
            <div className='features' id='features'>
                <h1 className='features-title'>Features</h1>
                <div className='features-frame'>
                <div className='features-frame1'>
                <div className='features-frame1a'> 
                    <img src='./Ellipse1.png' alt='ellipse' className='ellipse'/>
                    <p className='ellipse-content'>Blood sugar logging. We track your sugar level for results</p>
                </div>
                <div className='features-frame1a'> 
                    <img src='./Ellipse2.png' alt='ellipse' className='ellipse'/>
                    <p className='ellipse-content'>Medical Consultations
                    Access to medical consultations with experts</p>
                </div>
                </div>
                <div className='features-frame2'>
                    <img src='./featuregroup.png' alt='featuregroup'/>
                </div>
                <div className='features-frame3'>
                <div className='features-frame3a'> 
                    <img src='./Ellipse4.png' alt='ellipse' className='ellipse'/>
                    <p className='ellipse-content'>Health Tips
                    Subscription to health tips for healthy living</p>
                </div>
                <div className='features-frame3a'> 
                    <img src='./Ellipse3.png' alt='ellipse' className='ellipse'/>
                    <p className='ellipse-content'>Good referrals
                    Get referrals to medical centre </p>
                </div>
                </div>
                </div>
            </div>
            <div className='product' id='product'>
                <h1>Product</h1>
                <div className='productsection'>
                    <img src='productimage.png' alt='productimage' className='productimage'/>
                    <div className='productmessage'>
                        <p className='product-content'>Get the best experince form SugrMe mobile app. 
                            You get to log your blood sugar level result into our mobile application and explore all the amazing features that we have</p>
                        <div className='action'>
                            <button className='demobutton'>Request a Demo</button>
                            <button className='downloadbutton'>Download App</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonials' id='testimonal'>
                <h1>Testimonials</h1>
                <div className='main'>
                    <div className='circle-left'>
                        <div className='circle'>
                        {/* <a className="prev" onclick="nextSlide(-1)" href=''>&#10094;</a> */}
                        <FontAwesomeIcon icon={faAngleLeft} className="prev"/>
                        </div>
                    </div>
                    <div className='testimonials-card' props>
                    <div className='quote1'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='leftquote'/>
                    </div>
                    <div className='quote2'>
                        <FontAwesomeIcon icon={faQuoteRight} className='rightquote'/>
                    </div>
                    <p className='testimonials-content'>This app has been a lifesaver for me. I was struggling to keep track of my blood sugar levels, and this app has made it so easy. 
                    I can now see my trends and patterns, which has helped me to make better decisions about my diabetes management</p>
                    <div className='divider'></div>
                    <div className='testimonal-avatar'>
                        <img src='Ellipse5.png' alt='testimonal-avatar' className='avatar'/>
                        <div className='avatar-details'>
                            <p className='avatar-title'>Grace Julie</p>
                            <p className='avatar-role'>Food Specialist</p>
                        </div>
                    </div>
                </div>
                {/* <div className='testimonials-card'>
                    <div className='quote1'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='leftquote'/>
                    </div>
                    <div className='quote2'>
                        <FontAwesomeIcon icon={faQuoteRight} className='rightquote'/>
                    </div>
                    <p className='testimonials-content'>This app has been a lifesaver for me. I was struggling to keep track of my blood sugar levels, and this app has made it so easy. 
                    I can now see my trends and patterns, which has helped me to make better decisions about my diabetes management</p>
                    <div className='divider'></div>
                    <div className='testimonal-avatar'>
                        <img src='Ellipse5.png' alt='testimonal-avatar' className='avatar'/>
                        <div className='avatar-details'>
                            <p className='avatar-title'>Grace Julie</p>
                            <p className='avatar-role'>Food Specialist</p>
                        </div>
                    </div>
                </div> */}
                <div className='circle-right'>
                        <div className='circle'>
                        {/* <a className="prev" onclick="nextSlide(-1)" href=''>&#10094;</a> */}
                        <FontAwesomeIcon icon={faAngleRight} className="next"/>
                        </div>
                    </div>
                </div>
                <div className="dotIndicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            </div>
            <div className='faqsection' id='faq'>
                <h1>Frequently Asked Questions</h1>
                <div className='faq-container'>
                <div className='faq active'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                        <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                <div className='faq'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                    <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                <div className='faq'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                    <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                <div className='faq'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                    <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                <div className='faq'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                    <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                </div>                
            </div>
        </div>
    )
}
export default Landingpagedesign;