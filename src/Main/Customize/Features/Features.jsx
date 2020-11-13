import React from 'react';
import Options from '../Options/Options';
import FEATURES from './FeaturesFile';

class Features extends React.Component {
  render(props) {
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
          
        </legend>
        <Options usCurrencyFormat={this.props.usCurrencyFormat} 
          state={this.props.state} 
          feature={feature} 
          features={FEATURES}
          updateFeature={(feature, newValue) => { this.props.updateFeature(feature, newValue) }}/>
      </fieldset>

      )
});
    return (
      <>
        {features}
      </>
      
    )
  }


}

export default Features;