import React from 'react';
import Customize from './Customize/Customize';
import Cart from './Cart/Cart';


const FEATURES = {
    Processor: [
        {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
        },
        {
            name: 'Professor X AMD Fire Breather with sidewinder technology',
            cost: 1200
        }
    ],
    "Operating System": [
        {
            name: 'Ubuntu Linux 16.04',
            cost: 200
        },
        {
            name: 'Bodhi Linux',
            cost: 300
        }
    ],
    "Video Card": [
        {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
        },
        {
            name: 'Mind mild breeze 2000',
            cost: 1345
        }
    ],
    Display: [
        {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
        },
        {
            name: '15.3" HGTV (3840 x 2160) Home makeover edition',
            cost: 1400
        },
    ]
};

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


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
        // this.updateFeature = this.updateFeature.bind(this)
    }

    updateFeature = (feature, newValue) => {
        const copy = Object.assign({}, this.state.selected);
        copy[feature] = newValue;
        this.setState({
            selected:copy
        });
    };

    componentDidMount() {
        console.log('DidMount');
    }

    componentDidUpdate(){
        console.log(this.state.selected);
    }

    render() {
        return (
            <main>
                    <Customize
                        features={FEATURES}
                        usCurrencyFormat={USCurrencyFormat}
                        state={this.state}
                        updateFeature={(feature, newValue) => { this.updateFeature(feature, newValue) }}
                    />

                    <Cart
                        features={FEATURES}
                        usCurrencyFormat={USCurrencyFormat}
                        state={this.state}
                        // updateFeature={(feature, newValue) => { this.updateFeature(feature, newValue) }}
                    />
            </main>
        )
    }
}

export default Main;