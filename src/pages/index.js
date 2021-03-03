import React from "react"
import { Link } from "gatsby"
//import NavigationHeader from '../components/NavigationHeader'
//import Footer from '../components/Footer'

//import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import Banner from '../components/Banner'
import About from '../components/About'
//import HottestSection from '../components/HottestSection'
import CarouselContainer from '../modules/CarouselContainer'

const IndexPage = () => (
    <HeaderFooterLayout activeTab = "Home">
    <Banner/>
    <About/>
    <CarouselContainer/>
    </HeaderFooterLayout>
)

export default IndexPage
