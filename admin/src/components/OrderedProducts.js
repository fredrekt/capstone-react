import React, { Component } from 'react'
import { MDBIcon, MDBContainer, MDBTableHead, MDBTable, MDBTableBody, MDBBtn } from 'mdbreact'
import { readdirSync } from 'fs'
// toastify
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


class OrderedProducts extends Component{
    constructor(props){
        super(props)
        this.state ={
            orders: [],
            qty:[],
            message: null
        }
    }
    componentDidMount(){
        fetch('/all-orders')
        .then(res => res.json())
        .then(data => this.setState({orders: data}))
    }

    //Toastify Error Handling

    notifySuccess = () => {
        toast.success(<div>
            <MDBIcon size="lg" icon="check-circle" />
            <span> Purchase Approved! </span>
        </div>, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1500
          });
    }

    notifyError = () =>{
        toast.error(<div><MDBIcon size="lg" icon="exclamation-circle" />
        <span> Insufficient Stock</span>
        </div>, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500

          });
    }

   /* approveMeds = () =>{
        fetch('/all-orders/update')
        .then(res => res.json())
        .then(data => this.setState({qty:data}))
        window.location.reload()
        
    }*/
    handleInput = async(e) =>{
      //  console.log(e.target.value);
       // fetch(`/all-orders/update/${e.target.value}`)
       // .then(res => res.json())
        //.then(data => this.setState({message:data.message}))
        //window.location.reload()
        const url = `/all-orders/update/${e.target.value}`;
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        try{
            const response = await fetch(url, settings);
            const json = await response.json();
            console.log(json);
            // window.location.reload()
            this.setState({message: json.message})
            if(this.state.message == 'success'){
                this.notifySuccess()
                setTimeout(()=>{                
                    window.location.reload()
            },2000)
            }
            else{
                this.notifyError()
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            }
            
        }catch (error){
            console.log(error);
        }
    }

    render(){
        return(
            <div style={{'margin-left':'15%'}}>
            <ToastContainer/>
                <MDBContainer>
                <h1 className="admin-prod-h text-left">
                     Ordered Inventory
                </h1>
                    <MDBTable hover>
                            <MDBTableHead>
                                <tr>
                                <th>ORDER ID</th>
                                <th>USER ID</th>
                                <th>MED ID</th>
                                <th>MEDICINE NAME</th>
                                <th>QTY</th>
                                <th>STOCK AVAILABLE</th>
                                <th>STATUS</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.state.orders.map(order =>
                                
                                <tr key={order.order_id}>
                                <td>{order.order_id}</td>
                                <td>{order.user_id}</td>
                                <td>{order.med_id}</td>
                                <td>{order.name}</td>
                                <td>{order.qty}</td>
                                <td>{order.stock}</td>
                                <td>
                                    <MDBBtn
                                    color="success"
                                    size="sm"
                                    onClick={this.handleInput}
                                    value={order.med_id}
                                    >
                                        Approve
                                    </MDBBtn>
                                </td>
                                </tr>
                                )}
                            </MDBTableBody>
                            </MDBTable>
                </MDBContainer>
            </div>
        )
    }
}
export default OrderedProducts