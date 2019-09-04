import React,{ Component } from 'react'
import Jumbotron from './Jumbotron'
import Features from './Features';
import FeaturedItems from './FeaturedItems';
import Navbar from '../Navbar'
class HomeComponent extends Component{
    render(){
        return(
            <div>
                <Jumbotron/>
                <Features/>
                <FeaturedItems/>
            </div>
        )
    }
}
export default HomeComponent