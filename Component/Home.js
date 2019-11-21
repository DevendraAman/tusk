import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class Bootstrap extends Component {
    constructor(props){
        super(props);
        this.state={
            news:[]
        }
    }
    componentDidMount(){
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5dec7d196bea466692fedbf002918c7c")
        .then(givendata=>{
            this.setState({news:givendata.data.articles})
            console.log(givendata.data.articles)
        })
    }
    render() {
        return (
            <div>
             
                  <div className="Strap">
                     <h3> Latest </h3>
                  </div>
                  
                  <center>
                  {this.state.news.map(seeken =>
                  <div key={Math.random()}>

                  <h2 className="header">{seeken.description}</h2>
                  </div> )}
                  </center>
                  
                  {this.state.news.map(seeken =>
                  <div className="img"  key={Math.random()}>
                      <img src={seeken.urlToImage} width="300px" height="100px"/>
                      <h4 style={{color:"white"}}>{seeken.title}</h4>
                  </div> )}

                  {this.state.news.map(seeken =>
                  <div className="text"  key={Math.random()}>
                     
                  </div>)}

                  <center>
                  <div className="footer">
                      COPYRIGHT NEWS
                  </div>
                  </center>
            </div>
        )
    }
}
