import React from 'react';
import './aboutus.css';
import AboutChef1 from '../../assets/aboutus.png';

export function AboutUsTemp() {
  return (
    <section className='about-page bg-blue-500' id='about-us'>
      <header className='mt-5'>
        <div className='container h-100 flex items-center justify-center'>
          <h1 className='text-4xl font-bold mt-5'>About Us</h1>
        </div>
      </header>

      <div className='container my-5'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className=' text-center md:text-left mb-4 md:mb-0'>
            <img
              src={AboutChef1}
              className='object-cover object-center mb-5'
              alt=''
            />
          </div>
          <div className='md:w-1/2 md:pl-8 text-center md:text-left'>
          <p className='mb-4 paragraph-text'>
              We are a well-established organization and are being managed by a team of IT professionals for more than 7+ years. We are a one stop destination for Web & App Development services. Our business domain knowledge, proven methodologies and technology expertise of skilled professionals yields high-quality solutions that adds value to businesses.
            </p>
            <p className='mb-4 paragraph-text'>
            Overall e-business solutions to combined e-Commerce websites design and development through Internet, We are not only makes the coding for generating online business but we suggest this as a business consultant
            </p>

            <ul className="services_modal-services grid pt-5 text-white">
                  <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon">
                          <p className="services_modal-info">
                            Dynamic and professional simultaneously
                          </p>
                      </i>
                  </li>

                  <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon">
                          <p className="services_modal-info">
                            Always quality-focused to give the best solutions to all the small and big enterprises
                          </p>
                      </i>
                  </li>

                  <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon">
                          <p className="services_modal-info">
                            Capability to offer relevant services
                          </p>
                      </i>
                  </li>

                  <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon">
                          <p className="services_modal-info">
                            Accommodating unique resources for your needs
                          </p>
                      </i>
                  </li>

                  <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon">
                          <p className="services_modal-info">
                            Committed to excellence, ensuring that every service provided exceeds industry standards.
                          </p>
                      </i>
                  </li>

                  <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon">
                          <p className="services_modal-info">
                            Customizes solutions to address both the immediate and long-term goals of clients.
                          </p>
                      </i>
                  </li>

            </ul>

            {/* <button className='bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full know-more'>
              Know More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
