import React from 'react'

const TextForm = () => {
    return (
        <div className="container">
        <div className="row">
            <div class="form-floating mt-3 ms-5 d-inline-block h-100" style={{width: "30%"}}>
                <textarea class="form-control" placeholder="Enter text here" id="doc" style={{height: "500px"}}></textarea>
                <label for="doc">Enter text</label>
                <button className="btn btn-primary mt-2" type="submit">Generate Summary</button>
            </div>
            <div class="form-floating ms-auto mt-3 me-5 d-inline-block h-100" style={{width: "30%"}}>
                <textarea class="form-control" placeholder="Enter text here" id="summary" style={{height: "500px"}}></textarea>
                <label for="fsummary">Summary</label>
            </div>
        </div>
        </div>
    )
}

export default TextForm;
