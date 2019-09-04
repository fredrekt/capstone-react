import React,{ Component } from 'react'
import Jumbotron from './Jumbotron'
import Features from './Features';
import FeaturedItems from './FeaturedItems';
import Navbar from '../Navbar'
import Carousel from './Carousel'
class HomeComponent extends Component{
    render(){
        return(
            <div>
                <Carousel/>
                <Jumbotron/>
                <Features/>
                <FeaturedItems/>
            </div>
        )
    }
}
export default HomeComponent