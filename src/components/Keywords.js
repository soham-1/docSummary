import React, { Component } from 'react'
import axios from "axios";

export default class Keywords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: "",
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let formdata = new FormData(document.getElementById("keywords"));
        let content = formdata.get("content")
        axios.get('http://localhost:8000/keywords/'+ content).then(
            res => this.setState({keywords: res.data})
        )
    }
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="form-floating mt-3 ms-5 d-inline-block h-100" style={{width: "30%"}}>
                <form onSubmit={this.handleSubmit} id="keywords">
                    <textarea className="form-control" name="content" placeholder="Enter text here" id="doc" style={{height: "500px"}}></textarea>
                    <button className="btn btn-primary mt-2" type="submit">Get keywords</button>
                </form>
            </div>
                <div className="form-floating ms-auto mt-3 me-5 d-inline-block h-100" style={{width: "30%"}}>
                    <textarea className="form-control" placeholder="Enter text here" id="keywords" style={{height: "500px"}} defaultValue={this.state.keywords}></textarea>
                </div>
                
            </div>
            </div>
        )
    }
}