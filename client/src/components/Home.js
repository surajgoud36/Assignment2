import React from 'react';
import p from '../images/rsg.jpg';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            name: "Suraj",
        description : "I am a graduate student at UAlabny in the field of Computer Science. I am passionate about Data Structures and Algorithms and would like to do research in that domain."
    };
    this.handleName= this.handleName.bind(this);
    this.handleD= this.handleD.bind(this);
    }
    handleName(event){
        this.setState({name: event.target.value});
        event.preventDefault();
    }
    handleD(event){
        this.setState({description: event.target.value});
        event.preventDefault();
    }

    render() {
        return (
            <div class="row g-0">
        <div class=" col-md-4 d-flex justify-content-center">
            <img src={p} class="img-fluid rounded-start " alt="dada" width="300px" height="300px"/>
        </div>
        <div class=" col-md-6 row g-4">
            <div class="card-body">
                <h5 class="d-flex flex-row " type="text" name="Nam" id="name">{this.state.name}</h5>
                <p class="text-start border border-dark border-2 p-2">{this.state.description}</p>
                
                
       
            </div>
        </div>
        <div class="input-group col-md-6 mb-3 mt-3 ">
            <div class="input-group-prepend">
                <span class="input-group-text">Edit Name</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" value={this.state.name} onChange={this.handleName}></textarea>
        </div>
        
    <div class="input-group col-md-6 ">
            <div class="input-group-prepend">
                <span class="input-group-text">Edit Description</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" value={this.state.description} onChange={this.handleD}></textarea>
        </div>
        

    </div>
        )
    }
}
export default Home;