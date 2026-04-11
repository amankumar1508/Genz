import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Support() {
    return (
        <>
            <Nav />
            <div className="w-full min-h-screen flex flex-col items-center justify-center py-32 px-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Support</h1>
                <p className="text-gray-500 text-lg max-w-xl text-center mb-8">
                    Need help? Reach out to us and our team will get back to you as soon as possible.
                </p>
                <form className="w-full max-w-lg flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border-2 border-amber-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border-2 border-amber-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
                    />
                    <textarea
                        rows={5}
                        placeholder="Describe your issue..."
                        className="border-2 border-amber-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500 resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-amber-400 font-semibold px-6 py-3 rounded-full hover:bg-amber-500 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}
