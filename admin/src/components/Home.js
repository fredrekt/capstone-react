import React, { Component } from 'react'

class Home extends Component{
    render(){
        return(
            <div>
                <h1 className="p-3">Welcome Admin!</h1>
                    <p className="grey-text">
                        You are entitled to these admin priviledges.  
                    </p>
                    <h4 className="p-3">
                        You control everything
                    </h4>
                    <ul>
                        <li>You can add products</li>
                        <li>You can approve orders</li>
                        <li>You can track orders</li>
                        <li>You can update the stocks</li>
                        <li>You can see whatever the hell's going on with the client side of the application</li>
                    </ul>
            </div>
        )
    }
}
export default Home