import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions/index.js';
import {useDispatch} from 'react-redux';

const AddedFeature = props => {
  const dispatch = useDispatch();
  const remove = feature =>dispatch(removeFeature(feature))
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick ={()=>remove(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};
const mapDispatchToProps = {removeFeature}
export default connect(null, mapDispatchToProps)(AddedFeature);
