import React from 'react';
import { connect } from 'react-redux';


const AdditionalFeature = props => {
  console.log("props in AdditionalFeature.js", props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log("State in mapStateToProps in AdditionalFeature.js", state)
}

export default connect(mapStateToProps, {})(AdditionalFeature);
