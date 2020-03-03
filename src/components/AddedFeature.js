import React from 'react';
import { connect } from 'react-redux';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps = state => {
  console.log("State in mapStateToProps in AddedFeature.js", state)
}

export default connect(mapStateToProps, {})(AddedFeature);

