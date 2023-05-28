import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component {
   
    state = { advice : ''};

    componentDidMount(){
        this.fetchAdvice();
    }
   

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((Response)=>
        {
            const {advice} = Response.data.slip;
            this.setState({advice})
            console.log(advice);
        })
        .catch((error) => {
            console.log(error);
        });
    }
   
   
    render(){

        const  {advice} = this.state;

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1> 
                    <button className="button" onClick={this.fetchAdvice}>
                        <span> Give me an advice plz </span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;