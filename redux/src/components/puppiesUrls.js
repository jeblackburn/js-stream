import React, {Component} from 'react';
import {connect} from "react-redux";

export class PuppiesUrls extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      urlsList: []
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.puppiesUrl !== prevProps.puppiesUrl) {
      this.setState({urlsList: [...this.state.urlsList, this.props.puppiesUrl]});
    }
  }

  render() {
    return (
      <div id="puppies-urls">
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
  puppiesUrl: state.puppiesUrl
});

export default connect(mapStateToProps)(PuppiesUrls)
