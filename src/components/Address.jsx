import React, { Component } from 'react'

export default class Address extends Component{
    render(){
        return(
            <div className="accountPage">
                <div className="accountInform">
                    <h2 className="h2MyAccount">My Account Info</h2>
                    <p className="pParagraph">Already have an account with us?</p>
                    <input className="inputAccount" type='text' placeholder='First Name' />
                    <input className="inputAccount1" type='text' placeholder='Last Name' /><br/>
                    <input className="emailAccount" type='text' placeholder='Email' /><br/>
                    <input className="emailAccount" type='number' placeholder='Phone' />
                    <div className="border1"></div>
                </div>
                <div className="shipAddress">
                    <h2 className="shipBillAddress">Ship Address</h2>
                    <input className="inputAccount" type='text' placeholder='First Name' />
                    <input className="inputAccount1" type='text' placeholder='Last Name' /><br/>
                    <input className="emailAccount" type='text' placeholder='Street'/><br/>
                    <input className="emailAccount" type='text' placeholder='Apt/Suite(Optional)'/><br/>
                    <input className="emailAccount" type='text' placeholder='City'/><br/>
                    <input className="inputAccount" type='text' placeholder='State'/>
                    <input className="inputAccount1" type='text' placeholder='Zipcode'/>

                </div>
                <div className="billAddress">
                    <h2 className="shipBillAddress">Use different billing address</h2>
                    <input className="inputAccount" type='text' placeholder='First Name' />
                    <input className="inputAccount1" type='text' placeholder='Last Name' /><br/>
                    <input className="emailAccount" type='text' placeholder='Street'/><br/>
                    <input className="emailAccount" type='text' placeholder='Apt/Suite(Optional)'/><br/>
                    <input className="emailAccount" type='text' placeholder='City'/><br/>
                    <input className="inputAccount" type='text' placeholder='State'/>
                    <input className="inputAccount1" type='text' placeholder='Zipcode'/>
                    
                </div>
                <div>
                    <h2 className="shipBillAddress">I would like to pay with</h2>
                </div>
            </div>
        )
    }
}