import React, { Component } from 'react'
import axios from "axios";

export default class Keywords extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let formdata = new FormData(document.getElementById("textform"));
        let content = formdata.get("content")
        axios.post('https://localhost:8000/summarize', { content }).then(res=>{
            console.log(res.data);
          })
    }
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="form-floating mt-3 ms-5 d-inline-block h-100" style={{width: "30%"}}>
                <form onSubmit={this.handleSubmit} id="textform">
                    <textarea className="form-control" name="content" placeholder="Enter text here" id="doc" style={{height: "500px"}}></textarea>
                    <button className="btn btn-primary mt-2" type="submit">Get keywords</button>
                </form>
            </div>
                <div className="form-floating ms-auto mt-3 me-5 d-inline-block h-100" style={{width: "30%"}}>
                    <textarea className="form-control" placeholder="Enter text here" id="keywords" style={{height: "500px"}}></textarea>
                    <label htmlFor="fsummary">Summary</label>
                </div>
                
            </div>
            </div>
        )
    }
}