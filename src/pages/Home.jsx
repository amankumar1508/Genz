import React from 'react'
import Hero from "../components/Hero"
import Footer from '../components/Footer'
import Teams from '../components/Teams'
import Work from '../components/Work'
import Partner from '../components/Partner'
import Container from '../components/Container'


export default function Home() {
  return (
    <>
      <Hero/>
      <Partner/>
      <Container/>
      <Teams/>
      <Work/>
      <Footer/>
    </>
  )
}