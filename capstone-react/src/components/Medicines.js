import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb';
import { MDBFormInline, MDBAlert, MDBIcon, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol ,MDBBtn, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBInput } from
"mdbreact";
import Carousel from './Carousel';
import car1 from '../img/med-car-1.jpeg'
import car2 from '../img/med-car-2.jpeg'
import car3 from '../img/med-car-3.jpeg'
import medsample from '../img/meds-sample-pic.jpeg'
import phlogo from '../img/ph-flag.png'
import biogesic from '../img/meds-bio.jpeg'
import { MDBAnimation } from "mdbreact"
import Slide from 'react-reveal/Slide'
import { userInfo } from 'os';
import alaxan from '../img/alaxan.png'
import { Link } from 'react-router-dom'

//for scrolling 
import ScrollButton from './ScrollButton'
import { stringify } from 'querystring';

class Medicines extends Component{
    constructor(props){
        super(props)
        this.state ={
            meds:[],
            meds2:[],
            allmeds:[],
            aMeds:[],
            herbal:[],
            search: [],
            value: '',
            ratingmed: 0,
            catmeds: [],
            mainmeds: 'Over the Counter'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.med_id = props;
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit = (event) => {
        console.log('Stored in state: ' +this.state.value)
        event.preventDefault();

        const mvalue = this.state.value

        //fetch from backend 
        // fetch('/search-meds', {
        //     method:   'GET',
        //     body: JSON.stringify({"user":this.state.value}),
        //     headers: {'Content-Type': 'application/json'}
        // })
        // .then(res => res.json())
        // .then(med_id => this.setState({value:med_id}))

        //second try

        // fetch('/search-meds')
        // .then(res => res.json())
        // .then(search => this.setState({search}))


        //third try 
        fetch('/search-meds',{
            method: 'POST',
            credentials: 'include',

            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            //this is first attempt
            // body: "value= "+mvalue+"" 
            //this is STRINGIFY
           body: stringify({mvalue})
           //third attemp ( did not use anything )
          // body: `v = '${this.state.value}'`
        })
        .then(res => res.json())
        .then(data => {
            this.setState({search:data})
        })  
        
    }

    componentDidMount(){
        fetch('/meds')
        .then(res => res.json())
        .then(meds => this.setState({meds}))


        fetch('/meds2')
        .then(res => res.json())
        .then(meds2 => this.setState({meds2}))

        fetch('/all-meds')
        .then(res => res.json())
        .then(allmeds => this.setState({allmeds}))

        fetch('/allergy-meds')
        .then(res => res.json())
        .then(aMeds => this.setState({aMeds}))

        //herbal 
        fetch('/herbal')
        .then(res => res.json())
        .then(herbal => this.setState({herbal}))

        //  fetch(`/med-rating/${this.med_id.allmeds.med_id}`)
        //  .then(res => res.json())
        //  .then(ratingmed => this.setState({ratingmed}))
        //  console.log('this is the average',this.state.ratingmed)

        // fetch(`/med-rating`)
        // .then(res => res.json())
        // .then(ratingmed => this.setState({ratingmed}))
        fetch('/allmeds-cat')
        .then(res => res.json())
        .then(catmeds => this.setState({catmeds}))
    } 
    searchMeds = () =>{
        fetch('/search-meds')
        //body: this.state.search = '`${search}'
        .then(res => res.json())
        .then(data => {
            console.log('Request success!',data)
        })
        .catch(error => {
            console.log('Request Failed',error)
        })

    }

    sortByAsc = () =>{
        fetch('/orderbya')
        .then(res => res.json())
        .then(allmeds => this.setState({allmeds}))
    }

    selectedCategoryDisplay = ()=>{
        const value = this.state.catmeds
        fetch(`/sort-category`)
        .then(res => res.json())
        .then(allmeds => this.setState({allmeds}))
    }

    selectedCategoryDisplay2 = ()=>{
        const value = this.state.catmeds
        fetch(`/sort-category/allergy`)
        .then(res => res.json())
        .then(allmeds => this.setState({allmeds}))
    }

    selectedCategoryDisplay3 = ()=>{
        const value = this.state.catmeds
        fetch(`/sort-category/pain`)
        .then(res => res.json())
        .then(allmeds => this.setState({allmeds}))
    }

    selectedCategoryDisplay4 = ()=>{
        const value = this.state.catmeds
        fetch(`/sort-category/vitamins`)
        .then(res => res.json())
        .then(allmeds => this.setState({allmeds}))
    }


    render(){
        document.title = "Medicines for everyone"
        if(this.state.allmeds<=0){
            return (
                <div>
                <Breadcrumb bheader="Content Not Found" bcurrent="Database Error" />
                    <div className="no-medicines-container">
                        <MDBContainer>
                        <MDBAnimation type="slideInUp">
                        <MDBContainer>
                            <MDBAlert color="danger">
                                <h4 className="alert-heading">Technical Error! <MDBIcon icon="database" /></h4>
                                <p>Our servers and databases seem to be down. Don't worry, we'll get right on it! </p>
                                <hr />
                                <p className="mb-0">You can try again later, sorry for the inconvenience.</p>
                                
                            </MDBAlert>
                            <div className="text-center">
                            <MDBBtn href="/" size="sm" outline color="danger">Go Home</MDBBtn>
                            </div>
                            </MDBContainer>
                            </MDBAnimation>
                        </MDBContainer> 
                    </div>
                    
                    
                </div>
            )
        }
        if(this.state.search!=0){
            return(
            <div>
                {this.state.search.map(search1 => 
                <Breadcrumb key={search1.med_id} bheader="Medicine Found" bcurrent={search1.name}/>
                )}
                        <MDBAnimation type="rotateInDownLeft">
                        <MDBContainer style={{'margin-top':'5%','margin-bottom':'10%'}}>
                        <h1 className="med-otc-h">Found Anything?</h1>
                        <div className="med-container">
                            <div className="search-component">
                                <MDBCol className="search-container" md="6">
                                    <div className="search-container">
                                        <form onSubmit={this.handleSubmit}>
                                            <MDBInput
                                            icon="search"
                                            style={{'width':'70%', 'border':'solid 1px white'}}
                                            type="text" value={this.state.value} onChange={this.handleChange} 
                                            label="Is this it?"
                                            />
                                            <div style={{'margin-left':'30%','margin-top':'-4%'}}>
                                                <MDBBtn size="sm" type="submit" outline color="primary">search</MDBBtn>                        
                                            </div>
                                        </form>
                                        </div>  
                                </MDBCol>
                            </div>
                        </div>
                        <MDBRow>
                        {this.state.search.map(searchs => 
                            <MDBCol style={{'margin-bottom':'5%'}} md="6" lg="3">
                               
                            <a key={searchs.med_id} className="meds-card-link" href="/meds/item">
                                <MDBCard>
                                    <MDBCardImage hover zoom className="img-fluid" src={searchs.image} waves />
                                    <MDBCardBody>
                                    <MDBCardTitle><h3 className="med-item-header">
                                        {searchs.name}
                                        </h3>
                                        </MDBCardTitle>
                                    <MDBCardText>
                                        <div className="med-content-container">
                                            <div className="grey-text text-center">
                                            <p className="med-sub-h">
                                                <MDBIcon icon="tags" />
                                                {searchs.brand}
                                                </p>
                                            </div>
                                            <div className="prizeandlogo-container">
                                                <div className="black-text text-center">
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> {searchs.price}</h4> 
                                                </div>    
                                            </div>
                                            <div className="text-center yellow-text">
                                                <MDBIcon icon="star" />
                                                <MDBIcon icon="star" />
                                                <MDBIcon icon="star" />
                                                <MDBIcon icon="star" />
                                                <MDBIcon icon="star" />
                                            </div>
                                            <div className="text-center">
                                            <MDBBtn size="sm" color="primary">add to cart</MDBBtn>
                                            </div>
                                        </div>
                                    </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                                </a>
                              
                            </MDBCol>
                            )}
                        </MDBRow>
                        </MDBContainer>
                        </MDBAnimation>
                    </div>
            )
           
        }
        if(this.state.search == null ){
            alert('error:Medicine not found')
        }
 
        return(
            <div>
           <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView src={car2}>
                    <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                    <MDBAnimation type="bounceInRight">
                    <h2 className="caption-header"> <span className="otc-header">OTC</span> <br/>Collection </h2>
                    </MDBAnimation>
                    <h5>Pharmaceutical Drugs sold "over the counter" in all pharmacies.</h5>
                    <p>Drugs that do not need a doctor's prescription.</p>
                        <MDBBtn href="#OTC-section" outline size="lg" className="mt-3" color="white">See Collection</MDBBtn>
                    </MDBMask>
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src={car1}
                        alt="Second slide"
                    />
                    <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                        <h2 className="caption-header">Herbs<br/> Collection</h2>
                        <h4>Organic medicines & remedies for the human body.</h4>
                        <p>A plant or part of a plant to use for medical purposes.</p>
                        <div className="d-flex justify-content-center">
                            <div className="p-2 text-left"><MDBBtn size="lg" className="mt-3" outline color="white">Get Remedies</MDBBtn></div>
                        </div>
                    </MDBMask>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src={car3}
                        alt="Third slide"
                    />
                    <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                        <h2 className="caption-header">Experimental <br/>Collection</h2>
                        <h4>A treatment, involves gambling to defeat sickness.</h4>
                        <p>Medical treatments not yet approved by government.</p>
                        <div className="d-flex justify-content-center">
                            <div className="p-2 text-left"><MDBBtn size="lg" className="mt-3" outline color="white">Start Gamble</MDBBtn></div>
                        </div>
                    </MDBMask>
                    </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>  
                
                
                <div className="med-container">

                    <div className="search-component">
                    <MDBCol className="search-container" md="6">
                        <div className="search-container">
                        <form onSubmit={this.handleSubmit}>
                            <MDBInput
                            icon="search"
                            style={{'width':'70%', 'border':'solid 1px white'}}
                            type="text" value={this.state.value} onChange={this.handleChange} 
                            label="Enter drug name or drug category, for what use, etc"
                            />
                            <div style={{'margin-left':'30%','margin-top':'-4%'}}>
                                <MDBBtn size="sm" type="submit" outline color="primary">search</MDBBtn>                        
                            </div>
                            </form>
                        </div>
                    </MDBCol>
                    </div>
                    <MDBContainer className="p-3">
                        <div>
                            <h4 className="text-left">
                                Browse by yourself
                            </h4>
                            <p className="text-left grey-text">
                                Choose a category you want
                            </p>
                            
                            <MDBRow>
                            
                                <MDBCol>  
                                    <a onClick={this.sortByAsc}>
                                        <MDBView zoom>
                                            <img
                                            src={biogesic}
                                            style={{'width':'100%'}}
                                            alt=""
                                            />
                                            <MDBMask style={{'width':'100%'}} overlay="black-light">
                                                <p className="white-text flex-center">A - Z</p>
                                            </MDBMask>
                                        </MDBView>
                                    </a>
                                </MDBCol>

                                {this.state.catmeds.map(categorymeds =>
                                <MDBCol>
                                    <a
                                    key={categorymeds.med_id}
                                    onClick={this.selectedCategoryDisplay(categorymeds.category)}>
                                        <MDBView zoom>
                                            <img
                                            src={biogesic}
                                            style={{'width':'100%'}}
                                            alt=""
                                            />
                                            <MDBMask style={{'width':'100%'}} overlay="black-light">
                                                <p className="white-text flex-center">{categorymeds.category}</p>
                                            </MDBMask>
                                        </MDBView>
                                    </a>
                                </MDBCol>
                                )}
{/*                           
                                {this.state.catmeds.map(categorymeds =>
                                <MDBCol>
                                    <a
                                    key={categorymeds.med_id}
                                    onClick={this.selectedCategoryDisplay(categorymeds.category)}>
                                        <MDBView zoom>
                                            <img
                                            src={biogesic}
                                            style={{'width':'100%'}}
                                            alt=""
                                            />
                                            <MDBMask style={{'width':'100%'}} overlay="black-light">
                                                <p className="white-text flex-center">{categorymeds.category}</p>
                                            </MDBMask>
                                        </MDBView>
                                    </a>
                                </MDBCol>
                                )} */}

                                {/* <MDBCol>
                                    <a
                                    onClick={this.selectedCategoryDisplay}>
                                        <MDBView zoom>
                                            <img
                                            src={biogesic}
                                            style={{'width':'100%'}}
                                            alt=""
                                            />
                                            <MDBMask style={{'width':'100%'}} overlay="black-light">
                                                <p className="white-text flex-center">Fever</p>
                                            </MDBMask>
                                        </MDBView>
                                    </a>
                                </MDBCol>

                                <MDBCol>
                                    <a
                                    onClick={this.selectedCategoryDisplay2}>
                                        <MDBView zoom>
                                            <img
                                            src={biogesic}
                                            style={{'width':'100%'}}
                                            alt=""
                                            />
                                            <MDBMask style={{'width':'100%'}} overlay="black-light">
                                                <p className="white-text flex-center">Allergy</p>
                                            </MDBMask>
                                        </MDBView>
                                    </a>
                                </MDBCol>

                                <MDBCol>
                                    <a
                                    onClick={this.selectedCategoryDisplay3}>
                                        <MDBView zoom>
                                            <img
                                            src={biogesic}
                                            style={{'width':'100%'}}
                                            alt=""
                                            />
                                            <MDBMask style={{'width':'100%'}} overlay="black-light">
                                                <p className="white-text flex-center">Pain Relievers</p>
                                            </MDBMask>
                                        </MDBView>
                                    </a>
                                </MDBCol>

                                <MDBCol>
                                    <a
                                    onClick={this.selectedCategoryDisplay4}>
                                        <MDBView zoom>
                                            <img
                                            src={biogesic}
                                            style={{'width':'100%'}}
                                            alt=""
                                            />
                                            <MDBMask style={{'width':'100%'}} overlay="black-light">
                                                <p className="white-text flex-center">New category</p>
                                            </MDBMask>
                                        </MDBView>
                                    </a>
                                </MDBCol> */}


                            </MDBRow>
                        </div>
                    </MDBContainer>

                <Slide up>
                    <h1 className="med-otc-h">{this.state.mainmeds}</h1>
                    <MDBContainer>
                        <MDBRow>
                            {this.state.allmeds.map(allmeds => 
                            <MDBCol style={{'margin-bottom':'5%'}} md="6" lg="3">
                               
                            <Link 
                            to={{
                                    pathname: `/meds/${allmeds.name}`,
                                }}
                            key={allmeds.med_id} 
                            className="meds-card-link"
                            >
                                <MDBCard>
                                    <MDBCardImage hover zoom className="img-fluid" src={allmeds.image} waves />
                                    <MDBCardBody>
                                    <MDBCardTitle><h3 className="med-item-header">
                                        {allmeds.name}
                                        </h3>
                                        </MDBCardTitle>
                                    <MDBCardText>
                                        <div className="med-content-container">
                                            <div className="grey-text text-center">
                                            <p className="med-sub-h">
                                                <MDBIcon icon="tags" />
                                                {allmeds.brand}
                                                </p>
                                            </div>
                                            <div className="prizeandlogo-container">
                                                <div className="black-text text-center">
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> {allmeds.price}</h4> 
                                                </div>    
                                            </div>
                                        </div>
                                        <div className="text-center yellow-text">
                                                <MDBIcon icon="star" />
                                                Rating:{allmeds.ratingavg}
                                            </div>
                                    </MDBCardText>
                                    </MDBCardBody>
                                    
                                </MDBCard>
                                </Link>
                              
                            </MDBCol>
                            )}
                          
                            
                        </MDBRow>
                    </MDBContainer>
                    {/* Pain Relievers */}
                    <h1 className="med-otc-h">Pain Relievers</h1>
                    <MDBContainer>
                        <MDBRow>   
                        {this.state.meds2.map(med2 => 
                            <MDBCol style={{'margin-bottom':'5%'}} md="6" lg="3">
                                <Link 
                                to={{
                                        pathname: `/meds/${med2.name}`,
                                    }}
                                key={med2.med_id} 
                                className="meds-card-link"
                                >
                                <MDBCard>
                                    <MDBCardImage hover zoom className="img-fluid" src={med2.image} waves />
                                    <MDBCardBody>
                                    <MDBCardTitle><h3 className="med-item-header">
                                        {med2.name}
                                        </h3>
                                        </MDBCardTitle>
                                    <MDBCardText>
                                        <div className="med-content-container">
                                            <div className="grey-text text-center">
                                            <p className="med-sub-h">
                                                <MDBIcon icon="tags" />
                                                {med2.brand}
                                                </p>
                                            </div>
                                            <div className="prizeandlogo-container">
                                                <div className="black-text text-center">
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> {med2.price}</h4> 
                                                </div>    
                                            </div>
                                        </div>
                                    </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                                </Link>
                              
                            </MDBCol>
                            )}
                        </MDBRow>
                    </MDBContainer>




                    {/* 
                    ========= another section of medicines ==========
                    */}
                    <h1 className="med-otc-h">Kiddie Vitamins</h1>
                    <MDBContainer>
                        <MDBRow>   
                        {this.state.meds.map(med => 
                            <MDBCol style={{'margin-bottom':'5%'}} md="6" lg="3">
                               
                                <Link 
                                to={{
                                        pathname: `/meds/${med.name}`,
                                    }}
                                key={med.med_id} 
                                className="meds-card-link"
                                >
                                <MDBCard>
                                    <MDBCardImage hover zoom className="img-fluid" src={med.image} waves />
                                    <MDBCardBody>
                                    <MDBCardTitle><h3 className="med-item-header">
                                        {med.name}
                                        </h3>
                                        </MDBCardTitle>
                                    <MDBCardText>
                                        <div className="med-content-container">
                                            <div className="grey-text text-center">
                                            <p className="med-sub-h">
                                                <MDBIcon icon="tags" />
                                                {med.brand}
                                                </p>
                                            </div>
                                            <div className="prizeandlogo-container">
                                                <div className="black-text text-center">
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> {med.price}</h4> 
                                                </div>    
                                            </div>
                                        </div>
                                    </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                                </Link>
                              
                            </MDBCol>
                            )}
                        </MDBRow>
                    </MDBContainer>


                    {/*
                        =========== HERBAL SHIT ==========
                    */}
                    <h1 className="med-otc-h">Allergy Seasons</h1>
                    <MDBContainer>
                        <MDBRow>   
                        {this.state.aMeds.map(aMed => 
                            <MDBCol style={{'margin-bottom':'5%'}} md="6" lg="3">
                               
                            <Link 
                            to={{
                                    pathname: `/meds/${aMed.name}`,
                                }}
                            key={aMed.med_id} 
                            className="meds-card-link"
                            >
                                <MDBCard>
                                    <MDBCardImage hover zoom className="img-fluid" src={aMed.image} waves />
                                    <MDBCardBody>
                                    <MDBCardTitle><h3 className="med-item-header">
                                        {aMed.name}
                                        </h3>
                                        </MDBCardTitle>
                                    <MDBCardText>
                                        <div className="med-content-container">
                                            <div className="grey-text text-center">
                                            <p className="med-sub-h">
                                                <MDBIcon icon="tags" />
                                                {aMed.brand}
                                                </p>
                                            </div>
                                            <div className="prizeandlogo-container">
                                                <div className="black-text text-center">
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> {aMed.price}</h4> 
                                                </div>    
                                            </div>
                                        </div>
                                    </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                                </Link>
                              
                            </MDBCol>
                            )}
                        </MDBRow>
                    </MDBContainer>                    
                    {
                        /*
                        Herbal Section
                        */
                    }
                    <h1 className="med-otc-h">Herbal Treatment</h1>
                    <MDBContainer>
                        <MDBRow>   
                        {this.state.herbal.map(herbs => 
                            <MDBCol style={{'margin-bottom':'5%'}} md="6" lg="3">  
                            <Link 
                            to={{
                                    pathname: `/meds/${herbs.name}`,
                                }}
                            key={herbs.med_id} 
                            className="meds-card-link"
                            >
                                <MDBCard>
                                    <MDBCardImage hover zoom className="img-fluid" src={herbs.image} waves />
                                    <MDBCardBody>
                                    <MDBCardTitle><h3 className="med-item-header">
                                        {herbs.name}
                                        </h3>
                                        </MDBCardTitle>
                                    <MDBCardText>
                                        <div className="med-content-container">
                                            <div className="grey-text text-center">
                                            <p className="med-sub-h">
                                                <MDBIcon icon="tags" />
                                                {herbs.brand}
                                                </p>
                                            </div>
                                            <div className="prizeandlogo-container">
                                                <div className="black-text text-center">
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> {herbs.price}</h4> 
                                                </div>    
                                            </div>
                                        </div>
                                    </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                                </Link>
                              
                            </MDBCol>
                            )}
                        </MDBRow>
                    </MDBContainer>

                    </Slide>
                    <ScrollButton/>
                </div>
                </div>
                
        )
    }
}
export default Medicines
