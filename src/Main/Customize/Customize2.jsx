import React from 'react';
import slugify from 'slugify';
import Features from './Features/Features'



class Customize extends React.Component {



    // options = this.props.features[this.feature].map(item => {
    //     const itemHash = slugify(JSON.stringify(item));
    //     return itemHash;
    // });

    render(props) {
    //     const features = Object.keys(this.props.features).map((feature, idx) => {
    //         const featureHash = feature + '-' + idx;
    //         return featureHash
    // });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features 
                Features={this.features}
                Options={this.options}
                slugify={() => slugify()}
                updateFeature={(feature, newValue) => { this.updateFeature(feature, newValue) }}/>
            </form>
        );
    }
}


export default Customize;
