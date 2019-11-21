import React, { Component } from 'react';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            msg:""
        }
    }

    Submit(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    Loginnow(event) {
        if(!this.state.email==""){
            if(!this.state.password==""){
                if(this.state.email=="admin@gmail.com" && this.state.password=="1234"){
                    window.location="/home"

                }else{
                    this.setState({
                        msg:"please fill the correct email ang password "
                    })
                }
            }else{
                this.setState({
                    msg:"please fill the correct  password "
                })
            }
        }else{
            this.setState({
                msg:"please fill the correct email  "
            })
        }
     
            

       
    }
    render() {
        return (
            <div >
                <center>
               <input type="Email" placeholder="Enter email" name="email" onChange={this.Submit.bind(this)} value={this.state.email} required="required"/>
               <br/>
               <input type="password" placeholder="Enter password" name="password" onChange={this.Submit.bind(this) } value={this.state.password}  required="required"/>
               <br/>
               <button onClick={this.Loginnow.bind(this)}>Login now</button>
               <h1 style={{color:'red'}}>{this.state.msg}</h1>
               </center>
            </div>
        )
    }
}
