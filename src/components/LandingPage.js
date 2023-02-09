import React from 'react'
import PageLoading from "./PageLoading";
import Home from "./Home";
import Desc from "./Desc";
import Features from "./Features";
import Section from "./Section";
import Clique from "./Clique";
import Topevents from "./Topevents";
import Footer from "./Footer";
import Copyright from "./Copyright"


export default function LandingPage() {
  return (
    <>
    <PageLoading/>
    <Home/>
    <Desc/>
    <Features/>
    <Section />
    <Clique/>
    <Topevents/>
    <Footer/>
    <Copyright/>
  </>
  )
}
