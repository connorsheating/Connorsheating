import React from 'react';

const Homepage = () => {
    return (
        <div className="container mx-auto">
            {/* Hero Section */}
            <section className="hero bg-blue-500 text-white py-20 text-center">
                <h1 className="text-4xl font-bold">Welcome to Connor's Heating</h1>
                <p className="mt-4 text-lg">Your comfort is our priority</p>
                <button className="mt-6 bg-white text-blue-500 font-semibold px-4 py-2 rounded">Get a Free Estimate</button>
            </section>

            {/* Services Grid */}
            <section className="services mt-12">
                <h2 className="text-3xl font-bold text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="service bg-gray-100 p-6 rounded shadow">
                        <h3 className="font-semibold text-xl">Heating Repair</h3>
                        <p>Fast and reliable heating repair services to keep your home warm.</p>
                    </div>
                    <div className="service bg-gray-100 p-6 rounded shadow">
                        <h3 className="font-semibold text-xl">AC Installation</h3>
                        <p>Professional air conditioning installation for optimal comfort.</p>
                    </div>
                    <div className="service bg-gray-100 p-6 rounded shadow">
                        <h3 className="font-semibold text-xl">Maintenance</h3>
                        <p>Regular maintenance checks to prevent costly repairs.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials mt-12 bg-gray-200 p-6 rounded">
                <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
                <div className="mt-4">
                    <p className="italic">"Excellent service! Highly recommend Connor's Heating!" - Jane Doe</p>
                    <p className="italic">"Prompt and professional, will use again!" - John Smith</p>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="newsletter mt-12 text-center">
                <h2 className="text-3xl font-bold">Stay Updated!</h2>
                <p>Sign up for our newsletter to receive updates and special offers.</p>
                <form className="mt-4">
                    <input type="email" placeholder="Enter your email" className="p-2 border rounded" />
                    <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded ml-2">Subscribe</button>
                </form>
            </section>

            {/* Contact Information */}
            <section className="contact mt-12 text-center">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p>Email: contact@connorsheating.com</p>
                <p>Phone: (123) 456-7890</p>
            </section>
        </div>
    );
};

export default Homepage;