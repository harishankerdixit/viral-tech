import React, { useState } from 'react';
import "./Services.css";

export const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='services section' id='services'>
        <h2 className='section_title font-bold mb-1' style={{ fontSize: "21px" }}>Building Our Expertise For You</h2>
        {/* <span className='section_subtitle'>What we offer</span> */}
    
    <div className="services_container container grid">
        <div className="services_content">
            <div>
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services_title">Laravel Development</h3>
                <p className='text-xs mr-1'>We often used laravel for complex projects due to its security and high performance and it is very easy to maintain the website built on laravel. We also provide backend to manage the website.</p>
            </div>

            <span className="services_button text-blue-600" onClick={() => toggleTab(1)}>View More <i className="uil-arrow-right-services_button-icon">

            </i></span>

            <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title"><u>Laravel Development</u></h3>
                    <div className="text-center">
                        <span className="text-blue-600">Why we suggest you to choose Laravel</span>
                    </div>
                    <p className="services_modal-description">
                    If you are planning to make your business processes automated? We have chosen Laravel as the best PHP framework. Laravel has lots of unique qualities, which simplify all the tough activities, reduce development cost and save time.
                    </p>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Laravel eCommerce Development.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Laravel API Development.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Laravel Data Migration.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Laravel CRM Development.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Custom Laravel Development.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Laravel Support & Maintenance.
                                </p>
                            </i>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
            <div>
                <i className="uil uil-arrow services_icon"></i>
                <h3 className="services_title">Mobile App Development</h3>
                <p className='text-xs mr-1'>Our expert developers are ready to build your APP and that will be compatible for both iOS and Android devices. We always create wireframes to outline the APP's structure and flow.</p>
            </div>

            <span className="services_button text-blue-600" onClick={() => toggleTab(2)}>View More <i className="uil-arrow-right-services_button-icon">

            </i></span>

            <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content" style={{ maxHeight: "65vh", overflowY: "auto" }}>
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title"><u>Mobile App Development</u></h3>
                    <div className="text-center">
                        <span>Android Development</span>
                    </div>
                    <p className="services_modal-description">
                    Mobile apps are one of the potential tools, which make our life colorful, easier and faster. While a customer finds the most interactive mobile-friendly app, it makes him delighted. Now, if you have chosen Android as the target platform, you are on the right platform. There is no need to hit other sites to search for mobile app development companies.
                    </p>

                    <div className="text-left">
                        <span className="text-blue-600 text-sm"><u>Have Continued Business Growth With Result-Driven Android App</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Skilled Developers.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Money And Time Saving.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Assured Result.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Constant Communication.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-left">
                        <span className="text-blue-600 text-sm"><u>Build your app with latest technologies</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    M-commerce
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Design and ideas
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Custom app
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Augmented Reality
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Wearable
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Gaming app
                                </p>
                            </i>
                        </li>
                    </ul>



                    <div className="text-center">
                        <span>iPhone Development</span>
                    </div>
                    <p className="services_modal-description">
                    Our iPhone app development company never limits its services only to the developmental or testing solutions. We like to get engaged with you actively to form the best tactics. From conceptualization to prototyping and the ultimate launch- at every step, our team communicates with you. Our app developers engineer iOS applications, which influence the mind of your customers.
                    </p>

                    <div className="text-left">
                        <span className="text-blue-600 text-sm"><u>Work Management</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Identify the Potentials.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Effective Marketing
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Checking the Trends
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Send your requirements
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Set timelines
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Pay our team
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-left">
                        <span className="text-blue-600 text-sm"><u>It’s Time to Add More Business Values And Gain More Revenues</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Deep Insight
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    100% Fulfillment
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Think Innovatively
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    High Programming Skills
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Web-based iPhone App
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Native iPhone App
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Hybrid and Cross-platform Apps
                                </p>
                            </i>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <div className="services_content">
            <div>
                <i className="uil uil-edit services_icon"></i>
                <h3 className="services_title">CRM Development</h3>
                <p className='text-xs mr-1'>CRM development involves creating software solutions that help organizations manage their interactions with customers, streamline processes, and improve overall customer satisfaction.</p>
            </div>

            <span className="services_button text-blue-600" onClick={() => toggleTab(3)}>View More <i className="uil-arrow-right-services_button-icon">

            </i></span>

            <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">CRM Development</h3>
                    <div className="text-center">
                        <span className="text-blue-600">CRM Maintenance</span>
                    </div>
                    <p className="services_modal-description">
                        No time to update and maintain your CRM tools? Hire our custom CRM development company. As a Custom Web Application Development Company, we develop various modules for CRM tools.
                    </p>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Sales Managing System.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Manage Products
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Control Leads
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Saves time
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Better communication
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Improved customer assistance
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Task Automation
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Higher efficiency
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Simple reporting
                                </p>
                            </i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
            <div>
                <i className="uil uil-dashboard services_icon"></i>
                <h3 className="services_title">Ecommerce</h3>
                <p className='text-xs mr-1'>Complete e-Commerce Development Package We are the one-stop solution for all your e-Commerce web development needs.</p>
            </div>

            <span className="services_button text-blue-600" onClick={() => toggleTab(4)}>View More <i className="uil-arrow-right-services_button-icon">

            </i></span>

            <div className={toggleState === 4 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content" style={{ maxHeight: "65vh", overflowY: "auto" }}>
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">Ecommerce</h3>
                    <p className="services_modal-description">
                    We develop a customer-centric ecommerce website which suits the current and future needs of your online eCommerce store. Our specialist team works on different platforms like WordPress, Shopify, Laravel, Opencart, Magento in order to satisfy the complete requirements of our clients.
                    </p>

                    <div className="text-center">
                        <span className="text-black-600">eCommerce Website Design</span>
                    </div>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Features of our eCommerce website design</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Custom eCommerce web design.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Responsive and user friendly website design.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Unlimited category and products.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Multiple language & currency support.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Online sales reports
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Customer admin panel.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    User friendly checkout page.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Custom Filters for various products.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Our Process</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Show you samples.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Distinctive requirements.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Ecommerce development platform choice.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Sketching your site.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Developing the final site.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Launching the product.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span className="text-black-600">eCommerce Development</span>
                    </div>

                    <div className="text-left">
                        <span className="text-blue-600"><u>What is unique in our ecommerce development</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Capable of integrating various apps and systems to ecommerce portal.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Agile methodology ecommerce solutions.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Reasonable rates for every custom ecommerce development order.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Cross-functional ecommerce development team, comprising several professionals with diverse talents.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Best approach for developing ecommerce portal.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    High competence and skills to deal with Magento, OpenCart, Drupal and various other frameworks.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Transparent, communicative and collaborative team.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Rigorous QA testing process before launching the product.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Meet our targets and increase your revenue.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Seo Friendly.
                                </p>
                            </i>
                        </li>
                    </ul>


                    <div className="text-center">
                        <span className="text-black-600">eCommerce Developer</span>
                    </div>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Still Have Confusion on Why to Rely on Our eCommerce Dedicated Developer?</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    We realize your thoughts and tune up your online business with our precise solutions.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Our thorough testing process for every product helps us to create an advanced-quality solution.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Our professionals have confidence to accentuate and focus on the innovative systems.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    We are genuine to implement everything that we have promised to you.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                 From a superb home page to the product presentations pages, your site will present the best background for shopping.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Matured development processes of our experienced web developers.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Good solutions for managing logistics with third party system integration..
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    We create an easily navigable and searchable website.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span><u>The Best App with website Under One Roof</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Business type Wireframe
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Real-time Tracking
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Alerts & Notifications
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Rating & Feedback
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Technical Support
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Years Of Expertise
                                </p>
                            </i>
                        </li>
                    </ul>

                </div>
            </div>
        </div>




        <div className="services_content">
            <div>
                <i className="uil uil-browser services_icon"></i>
                <h3 className="services_title">Web Application</h3>
                <p className='text-xs mr-1'>The process of designing, building, testing and deploying web-based applications.</p>
            </div>

            <span className="services_button text-blue-600" onClick={() => toggleTab(5)}>View More <i className="uil-arrow-right-services_button-icon">

            </i></span>

            <div className={toggleState === 5 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content" style={{ maxHeight: "65vh", overflowY: "auto" }}>
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">Web Application Design & Development</h3>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Clean, fresh design.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Mobile-responsive sites.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Use of updated technologies.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Brilliant team members.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Timely solutions
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    24-hour service
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    No compromise over quality
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Facts Of Our Website Design</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Customized Website
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Enterprise-Standard Web Development
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Web Apps
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    CMS Development
                                </p>
                            </i>
                        </li>
                    </ul>


                    <div className="text-center">
                        <span className="text-black-600">Web Developer</span>
                    </div>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Still Have Confusion on Why to Rely on Our Web Dedicated Developer?</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    We realize your thoughts and tune up your online business with our precise solutions.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Our thorough testing process for every product helps us to create an advanced-quality solution.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Our professionals have confidence to accentuate and focus on the innovative systems.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    We are genuine to implement everything that we have promised to you.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                 From a superb home page to the product presentations pages, your site will present the best background for shopping.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Matured development processes of our experienced web developers.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Good solutions for managing logistics with third party system integration..
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    We create an easily navigable and searchable website.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span><u>The Best App with website Under One Roof</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Business type Wireframe
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Real-time Tracking
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Alerts & Notifications
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Rating & Feedback
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Technical Support
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Years Of Expertise
                                </p>
                            </i>
                        </li>
                    </ul>

                </div>
            </div>
        </div>


        <div className="services_content">
            <div>
                <i className="uil uil-laptop services_icon"></i>
                <h3 className="services_title">Other</h3>
                <p className='text-xs mr-1'>Digital Marketing, Google Ads, SEO, Graphics & video Editing, Devops, AWS, Content Writing, Database Stracture</p>
            </div>

            <span className="services_button text-blue-600" onClick={() => toggleTab(6)}>View More <i className="uil-arrow-right-services_button-icon">

            </i></span>

            <div className={toggleState === 6 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content" style={{ maxHeight: "65vh", overflowY: "auto" }}>
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <div className="text-center">
                        <span><u>Digital Marketing</u></span>
                    </div>

                    <p className="text-sm">Digital marketing refers to the use of digital channels such as social media, email, search engines, and websites to promote products or services.</p>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Points:</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Utilizes various online platforms for advertising and promotion.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Includes strategies like social media marketing, content marketing, email marketing, and search engine optimization (SEO).
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Focuses on reaching target audiences and driving conversions through digital channels.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span><u>Google Ads</u></span>
                    </div>

                    <p className="text-sm">Google Ads, formerly known as Google AdWords, is an online advertising platform developed by Google. It allows businesses to display ads on Google's search results and advertising network.</p>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Points:</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Enables businesses to create and manage pay-per-click (PPC) advertising campaigns.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Provides targeting options based on keywords, demographics, interests, and more.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Offers various ad formats including text ads, display ads, video ads, and shopping ads.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span><u>SEO (Search Engine Optimization)</u></span>
                    </div>

                    <p className="text-sm">SEO is the process of optimizing websites and content to improve their visibility and rankings on search engine results pages (SERPs). It involves various strategies aimed at enhancing organic (non-paid) search traffic.</p>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Points:</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Focuses on factors such as keyword optimization, quality content creation, website structure, and backlink building.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Aims to increase website authority and relevance to improve search engine rankings.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Involves both on-page optimization (e.g., content optimization, meta tags) and off-page optimization (e.g., link building, social signals).
                                </p>
                            </i>
                        </li>
                    </ul>


                    <div className="text-center">
                        <span><u>Graphics & Video Editing</u></span>
                    </div>

                    <p className="text-sm">Graphics and video editing involve the creation, manipulation, and enhancement of visual content for various purposes, including marketing, entertainment, and communication.</p>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Points:</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Includes software tools like Adobe Photoshop, Illustrator, Premiere Pro, After Effects, and others.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Used to design graphics, logos, illustrations, animations, and edit photos and videos.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Requires creativity, technical skills, and an understanding of design principles and visual communication.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span><u>DevOps</u></span>
                    </div>

                    <p className="text-sm">DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to improve collaboration, automation, and efficiency in the software delivery process.</p>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Points:</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Aims to shorten development cycles, increase deployment frequency, and deliver high-quality software products.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Involves automation of build, test, deployment, and monitoring processes.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Promotes cultural changes, collaboration, and shared responsibility among development and operations teams.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span><u>AWS (Amazon Web Services)</u></span>
                    </div>

                    <p className="text-sm">AWS is a cloud computing platform offered by Amazon. It provides a wide range of cloud services, including computing power, storage, database, networking, machine learning, and more.</p>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Points:</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Offers scalable and flexible cloud infrastructure for businesses of all sizes.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Provides a comprehensive set of services for building, deploying, and managing applications in the cloud.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Includes popular services like Amazon EC2 (Elastic Compute Cloud), S3 (Simple Storage Service), RDS (Relational Database Service), and Lambda (serverless computing).
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span><u>Content Writing</u></span>
                    </div>

                    <p className="text-sm">Content writing involves creating written content for various purposes, including websites, blogs, articles, social media, marketing materials, and more.</p>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Points:</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Focuses on producing high-quality, engaging, and relevant content that meets the needs of the target audience.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Requires strong writing skills, creativity, and the ability to research and understand different topics.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Plays a crucial role in digital marketing, SEO, branding, and communication strategies.
                                </p>
                            </i>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span><u>Database Structure</u></span>
                    </div>

                    <p className="text-sm">Database structure refers to the organization, design, and architecture of a database system, including tables, fields, relationships, and constraints.</p>

                    <div className="text-left">
                        <span className="text-blue-600"><u>Key Points:</u></span>
                    </div>

                    <ul className="services_modal-services grid pt-5">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Determines how data is stored, retrieved, and managed in a database.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Involves defining data models, entities, attributes, and their interconnections.
                                </p>
                            </i>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon">
                                <p className="services_modal-info">
                                    Requires considerations for data integrity, performance, scalability, security, and efficiency.
                                </p>
                            </i>
                        </li>
                    </ul>

                </div>
            </div>
        </div>


    </div>
    </section>
  )
}


