import React, { Component } from 'react'
import { MDBContainer, MDBJumbotron} from 'mdbreact'
import { MDBAnimation } from "mdbreact"

class About extends Component{
    render(){
        return(
                <MDBJumbotron>
                    <div className="about-mtmb">
                        <MDBContainer>
                            <MDBAnimation type="bounce">
                            <h1 className="a-header mb-4">
                                About Medishop
                            </h1>
                            </MDBAnimation>
                            <p className="a-content">
                                As humanity goes on and things become more and more advanced. People now live in a society where people rely on technology to succeed and live their lives or simply make life easier. Things you had to do step by step and have to do things differently than today. Now the new age of technology has improved our lives and made it more stress free and you can do a lot of stuff with your time. Today a lot of things have changed, you don't have to do stuff manually, by manually I mean that you have to physically move and there are lots of processes to be done to achieve and get what you want. This is a growing world and full of opportunities and improvements. Everything around us can be improved and there are lots of time to improve it. Technology has been a been a boost to humanity. It has provided us enough to help ourselves and enjoy life as we know it. Philippines is catching up with the world and its rise are bringing a lot of good in its provinces. Even though our internet is so slow, we strive harder to achieve our goals and dreams. Since internet is important to society we need it for our everyday lives and it is making our lives easier. Communication is vital to humanity because without it we are no different than animals. Communication has come a long way since the past. Now it is easier to communicate from people all around the world. It is now more hassle free and efficient. There are people all around the world that needs help. People who are sick, people who can’t get up go somewhere they need to be. Medicine in people's lives are important and can maintain people's health and nourish lives. Medicines are drugs used to diagnose, cure, treat, or prevent disease. Drug therapy is an important part of the medical field and relies on the science of pharmacology for continual advancement and on pharmacy for appropriate management. Drugs are classified in various ways. Medishop is an application that will help you with your medicines. Keep track of what you are taking and not physically going to the pharmacies or hospitals. The purpose of Medishop is to help everyone in the world to simplify their lives that are in need of medicines. Especially the old ones because it is a great pain to them to physically go to pharmacies and etc. And lastly Medishop educates people about Pharmaceutical Drugs or Medicines.
                            </p>
                        </MDBContainer>
                    </div>
                </MDBJumbotron>      
        )
    }
}
export default About