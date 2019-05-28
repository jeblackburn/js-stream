import React, {Component} from 'react';
import {connect} from "react-redux";

class KittensUrls extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      urlsList: []
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.kittensUrl !== prevProps.kittensUrl) {
      this.setState({urlsList: [...this.state.urlsList, this.props.kittensUrl]});
    }
  }

  render() {
    return (
      <div id="kittens-urls">
        {
          <ul>
            {this.state.urlsList.map((url) => (
              <li key={url} className="url-list-item">{url}</li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  kittensUrl: state.kittensUrl
});

export default connect(mapStateToProps)(KittensUrls)
