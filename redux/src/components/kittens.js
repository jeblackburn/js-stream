import React from 'react';
import {connect} from 'react-redux';

function Kittens(props) {
  return (
    <div id="kittens">
      <img alt="Kittens!!!" src={props.cuteness}></img>
      {props.cuteness}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cuteness: state.kittensUrl
});

export default connect(mapStateToProps)(Kittens)




