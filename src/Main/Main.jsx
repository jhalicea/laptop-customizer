import React from 'react';
import Customize from './Customize/Customize';
import Cart from './Cart/Cart';

// This object will allow us to
// easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: {
                Processor: {
                    name: '17th Generation Intel Core HB (7 Core with donut spare)',
                    cost: 700
                },
                'Operating System': {
                    name: 'Ubuntu Linux 16.04',
                    cost: 200
                },
                'Video Card': {
                    name: 'Toyota Corolla 1.5v',
                    cost: 1150.98
                },
                Display: {
                    name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
                    cost: 1500
                }
            }
        }
    }

    updateFeature = (feature, newValue) => {
        const copy = Object.assign({}, this.state.selected);
        copy[feature] = newValue;
        this.setState({
            selected:copy
        });
    };

    USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    render() {
        return (
            <main>
                    <Customize
                        usCurrencyFormat={this.USCurrencyFormat}
                        state={this.state}
                        updateFeature={(feature, newValue) => { this.updateFeature(feature, newValue) }}
                    />

                    <Cart
                        usCurrencyFormat={this.USCurrencyFormat}
                        state={this.state}
                    />
            </main>
        )
    }
}

export default Main;