import React from 'react';
import axios from "axios";

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summary_text: "",
        };
      }
    handleSubmit = (e) => {
        e.preventDefault();
        let formdata = new FormData(document.getElementById("textform"));
        let content = formdata.get("content")
        axios.get('http://localhost:8000/summary/'+ content).then(
            res => this.setState({summary_text: res.data})
        )
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-floating mt-3 ms-5 d-inline-block h-100" style={{width: "45%"}}>
                        <form onSubmit={this.handleSubmit} id="textform">
                            <textarea className="form-control" name="content" placeholder="Enter text here" id="doc" style={{height: "500px"}}></textarea>
                            <button className="btn btn-success mt-2" type="submit">Generate Summary</button>
                        </form>
                    </div>
                    <div className="form -floating ms-auto mt-3 me-5 d-inline-block h-100" style={{width: "45%"}}>
                        <textarea className="form-control" placeholder="Summary" id="summary" style={{height: "500px"}} defaultValue={this.state.summary_text}></textarea>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Summary;
