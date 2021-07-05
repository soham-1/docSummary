import React, { Component } from 'react'
import axios from "axios";
import marked from 'marked';

export default class Ner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ner_output: "",
        };
    }
    // marked.setOptions({
    //     gfm: true,
    //     tables: true,
    //     breaks: false,
    //     pedantic: false,
    //     sanitize: true,
    //     smartLists: true,
    //     smartypants: false
    // });
    handleSubmit = (e) => {
        e.preventDefault();
        let formdata = new FormData(document.getElementById("Ner"));
        let content = formdata.get("content")
        axios.get('http://localhost:8000/Ner/'+ content).then(
            res => this.setState({Ner_output: marked(res.data)})
        )
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="form-floating mt-3 ms-5 d-inline-block h-100" style={{width: "30%"}}>
                        <form onSubmit={this.handleSubmit} id="Ner">
                            <textarea className="form-control" name="content" placeholder="Enter text here" id="doc" style={{height: "500px"}}></textarea>
                            <button className="btn btn-primary mt-2" type="submit">Get keywords</button>
                        </form>
                    </div>
                <div className="form-floating ms-auto mt-3 me-5 d-inline-block h-100" style={{width: "30%"}}>
                    <div className="form-control" id="Ner_output" style={{height: "500px"}} dangerouslySetInnerHTML={{__html: this.state.Ner_output}}></div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
