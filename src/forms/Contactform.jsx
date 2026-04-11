import React from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contactform() {

  // Initial form values

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    adress: "",
    message: ""
  }

  const validationSchema = Yup.object({

    firstname: Yup.string()
      .max(15, 'Max 15 characters')
      .required('First name is required'),

    lastname: Yup.string()
      .max(20, 'Max 20 characters')
      .required('Last name is required'),

    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),

    gender: Yup.string()
      .required('Please select a gender'),

    adress: Yup.string()
      .required('Address is required'),

    message: Yup.string()
      .required('Please write a message'),

  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values);
      alert('Form Submitted Successfully');
    }
  });
  return (
    <div>

      {/* Hero Section with full image */}
      <div
        className="w-full min-h-screen bg-cover bg-center relative flex items-center justify-center mt-[100px]"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1e]/70 to-black/45 backdrop-blur-[2px]" />

        <div className="relative z-10 w-full flex flex-col items-center px-4 pt-[60px] pb-[80px]">

          {/* Heading */}
          <div className="text-center text-white mb-9">
            <h1 className="text-5xl font-extrabold tracking-widest uppercase mb-3 bg-gradient-to-r from-white via-white to-[#ffcb05] text-transparent bg-clip-text">Contact Us</h1>
            <p className="text-lg text-white/80 font-light">We'd love to hear from you. Send us a message!</p>
          </div>

          {/* Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] px-10 py-11 w-[90%] max-w-[560px]">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-7 text-center tracking-wide border-b-[3px] border-[#ffcb05] pb-3">Send a Message</h2>

            <form onSubmit={formik.handleSubmit}>

              <div className="flex flex-col sm:flex-row gap-4 mb-5">
                <div className="flex flex-col flex-1">
                  <label htmlFor="firstname" className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">First Name</label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="John"
                    className="w-full px-3.5 py-3 border-[1.8px] border-gray-200 rounded-lg text-[0.95rem] text-[#1a1a2e] bg-gray-50 focus:border-[#ffcb05] focus:ring-[3px] focus:ring-[#ffcb05]/20 focus:bg-white transition-all outline-none"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                  {formik.touched.firstname && formik.errors.firstname && (
                    <p className="text-[#e53935] text-xs mt-1 font-medium">{formik.errors.firstname}</p>
                  )}
                </div>

                <div className="flex flex-col flex-1">
                  <label htmlFor="lastname" className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Last Name</label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Doe"
                    className="w-full px-3.5 py-3 border-[1.8px] border-gray-200 rounded-lg text-[0.95rem] text-[#1a1a2e] bg-gray-50 focus:border-[#ffcb05] focus:ring-[3px] focus:ring-[#ffcb05]/20 focus:bg-white transition-all outline-none"
                    onChange={formik.handleChange}

                    value={formik.values.lastname}
                  />
                  {formik.touched.lastname && formik.errors.lastname && (
                    <p className="text-[#e53935] text-xs mt-1 font-medium">{formik.errors.lastname}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col mb-5">
                <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="aman@gmail.com"
                  className="w-full px-3.5 py-3 border-[1.8px] border-gray-200 rounded-lg text-[0.95rem] text-[#1a1a2e] bg-gray-50 focus:border-[#ffcb05] focus:ring-[3px] focus:ring-[#ffcb05]/20 focus:bg-white transition-all outline-none"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-[#e53935] text-xs mt-1 font-medium">{formik.errors.email}</p>
                )}
              </div>


              <div className="flex flex-col mb-5">
                <label htmlFor="gender" className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="w-full px-3.5 py-3 border-[1.8px] border-gray-200 rounded-lg text-[0.95rem] text-[#1a1a2e] bg-gray-50 focus:border-[#ffcb05] focus:ring-[3px] focus:ring-[#ffcb05]/20 focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                >
                  <option value="">— Select Gender —</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.gender && formik.errors.gender && (
                  <p className="text-[#e53935] text-xs mt-1 font-medium">{formik.errors.gender}</p>
                )}
              </div>


              <div className="flex flex-col mb-5">
                <label htmlFor="adress" className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Address</label>
                <input
                  id="adress"
                  type="text"
                  name="adress"
                  placeholder="123 Main Street, City"
                  className="w-full px-3.5 py-3 border-[1.8px] border-gray-200 rounded-lg text-[0.95rem] text-[#1a1a2e] bg-gray-50 focus:border-[#ffcb05] focus:ring-[3px] focus:ring-[#ffcb05]/20 focus:bg-white transition-all outline-none"
                  onChange={formik.handleChange}
                  value={formik.values.adress}
                />
                {formik.touched.adress && formik.errors.adress && (
                  <p className="text-[#e53935] text-xs mt-1 font-medium">{formik.errors.adress}</p>
                )}
              </div>


              <div className="flex flex-col mb-5">
                <label htmlFor="message" className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full min-h-[110px] px-3.5 py-3 border-[1.8px] border-gray-200 rounded-lg text-[0.95rem] text-[#1a1a2e] bg-gray-50 focus:border-[#ffcb05] focus:ring-[3px] focus:ring-[#ffcb05]/20 focus:bg-white transition-all outline-none resize-y"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-[#e53935] text-xs mt-1 font-medium">{formik.errors.message}</p>
                )}
              </div>

              <button type="submit" className="w-full mt-2 py-3.5 bg-gradient-to-r from-[#ffcb05] to-amber-500 text-[#1a1a2e] text-base font-bold tracking-wide uppercase rounded-lg cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,203,5,0.45)] active:translate-y-0 transition-transform">
                Send Message ✉
              </button>

            </form>
          </div>

        </div>
      </div>

    </div>
  )
}
