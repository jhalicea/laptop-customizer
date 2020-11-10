import React from 'react';
// import Options from '../Options/Options';

class Features extends React.Component {
  render(props) {
    const features = Object.keys(this.props.updateFeature).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.Feature}</h3>
        </legend>
        {/* <Options  */}
        slugify={this.slugify}
        features={features}/>
      </fieldset>
      )
});

    return (
      {features}
    )
  }


}

export default Features;