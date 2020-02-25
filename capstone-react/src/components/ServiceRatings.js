import React, { Component }  from 'react'
import { MDBContainer, MDBIcon, MDBJumbotron } from 'mdbreact'
class ServiceRatings extends Component{
    constructor(props){
        super(props)
        this.state = {
            serviceratings: [],
            rating:[]
        }   
    }
    
    componentDidMount(){
        fetch('/service-ratings')
        .then(res => res.json())
        .then(serviceratings => this.setState({serviceratings}))
       
        fetch('/overall-rating')
        .then(res => res.json())
        .then(rating => this.setState({rating}))
    }

    render(){
        return(
            <div>
                <h2 className="fi-header">
                    Service Ratings
                </h2>
                <hr style={{'width':'30%'}}/>
                <p className="grey-text text-center w-responsive mx-auto mb-5">
                   All our customers ratings from using this application.
                </p>
                <MDBContainer>
                    <h1>Comments</h1>
                    {this.state.serviceratings.map(ratings =>
                    <ul key={ratings.service_id}>
                        <li>{ratings.comment} by {ratings.user_id}</li>
                        <li>{ratings.rating}</li>
                    </ul>
                    )}
                    {this.state.serviceratings.map(sr=>
                    <MDBJumbotron>
                        <div style={{'margin-top':'-3%'}} className="img-comment">
                            <MDBIcon size="3x" icon="user-circle" />
                            <div style={{'margin-top':'-3.5%','margin-left':'5%'}}>
                                <span className="text-name">
                                    {sr.user_id}
                                </span>
                            </div>
                        </div>
                        <div style={{'margin-top':'5%'}}>
                            <h4>Comment</h4>
                            <p>
                                {sr.comment}
                            </p>
                            <h4>Rating</h4>
                            <p>
                                {sr.rating}
                            </p>
                        </div>
                        <div>

                        </div>
                            
                        </MDBJumbotron>
                        )}

                    <h1 className='fi-header'>Ratings</h1>
                    {this.state.rating.map(rts =>
                    <h4 style={{'margin-bottom':'5%'}} className="text-center">{rts.ratingf}<span>  is the average rating of the users who rated Medishop</span></h4>
                    
                    )}
                        

                </MDBContainer>
            </div>
        )
    }
}

export default ServiceRatings