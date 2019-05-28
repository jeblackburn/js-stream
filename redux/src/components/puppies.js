import React from 'react';
import {connect} from 'react-redux';

function Puppies(props) {
  return (
    <div id="puppies">
      <img alt="Puppies!!!" src={props.cuteness}></img>
      {props.cuteness}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cuteness: state.puppiesUrl
});

export default connect(mapStateToProps)(Puppies)


