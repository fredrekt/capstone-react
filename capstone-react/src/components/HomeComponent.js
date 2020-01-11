import React,{ Component } from 'react'
import Jumbotron from './Jumbotron'
import Features from './Features';
import FeaturedItems from './FeaturedItems';
import Navbar from '../Navbar'
import Carousel from './Carousel'
import ScrollButton from './ScrollButton'

class HomeComponent extends Component{
    render(){
        document.title = "Welcome to Medishop"
        return(
            <div>
                <Carousel/>
                <Jumbotron/>
                <Features/>
                <FeaturedItems/>
                <ScrollButton/>
            </div>
        )
    }
}
export default HomeComponent