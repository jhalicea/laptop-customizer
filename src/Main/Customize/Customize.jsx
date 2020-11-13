import React from 'react';
import Features from './Features/Features';



class Customize extends React.Component {
    render(props) {
        return (

            <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
            usCurrencyFormat={this.props.usCurrencyFormat} 
            state={this.props.state} 
            updateFeature={(feature, newValue) => { this.props.updateFeature(feature, newValue) }} />
          </form>
        );
       
    }
}


export default Customize;
