import React from 'react';
//import './Hire.css';
import laravel from "../../assets/laravel.png"
import php from "../../assets/php.png"
import wordpress from "../../assets/wordpress.png"
import reactjs from "../../assets/reactjs.png"
import nodejs from "../../assets/nodejs.png"
import android from "../../assets/android.png"
import ios from "../../assets/ios.png"
import python from "../../assets/python.png"
import mysql from "../../assets/mysql.png"
import devops from "../../assets/devops.png"
import uiux from "../../assets/uiux.png"
import graphics from "../../assets/graphics.png"
import flutter from "../../assets/flutter.png"
import seo from "../../assets/seo.jfif"
import deskApp from "../../assets/deskApp.png"
import ads from "../../assets/ads.png"

export const Hire = () => {
    return (
        <section className="section" id='developers'>
            <h2 className="section_title font-bold text-2xl mb-4">We work on below emerging technologies & Hire dedicated developers for your business</h2>
            <p className="section_subtitle text-sm mb-8">
                Our developers are adept in the latest technologies, frameworks, and programming languages essential for modern mobile app, web development, <br /> and application development. They possess a profound understanding of how to leverage these technologies to build scalable, robust, and efficient solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 m-5 cards-section-center">
                {/* Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap0 card">
                    <img src={laravel} alt="Laravel" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Laravel Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap card">
                    <img src={php} alt="PHP" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire PHP Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap1 card">
                    <img src={wordpress} alt="Wordpress" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Wordpress Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap2 card">
                    <img src={reactjs} alt="ReactJS" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire ReactJS Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 m-5 cards-section-center">
                {/* Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap0 card">
                    <img src={nodejs} alt="NodeJS" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire NodeJS Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap card">
                    <img src={android} alt="Android" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Android Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap1 card">
                    <img src={ios} alt="IOS" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire IOS Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap2 card">
                    <img src={python} alt="Python" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Python Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 m-5 cards-section-center">
                {/* Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap0 card">
                    <img src={mysql} alt="Database" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Database Engineer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap card">
                    <img src={devops} alt="Devops" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Devops Engineer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap1 card">
                    <img src={uiux} alt="UI/UX" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire UI/UX Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap2 card">
                    <img src={graphics} alt="Graphic/Video" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Graphic/Video Editor</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 m-5 cards-section-center">
                {/* Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap0 card">
                    <img src={flutter} alt="Flutter" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Flutter Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap card">
                    <img src={deskApp} alt="Desktop App" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Desktop App Developer</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap1 card">
                    <img src={seo} alt="SEO" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire SEO Specialist</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-xs cards-gap2 card">
                    <img src={ads} alt="Digital Marketing/Ads" className="w-full h-24 object-cover" />
                    <div className="p-4 flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">Hire Digital Marketing/Ads</h5>
                        <a href="#contact" className="btn btn-primary py-1 px-3 rounded-lg text-sm">Hire Now</a>
                    </div>
                </div>
            </div>

        </section>
    );
};
