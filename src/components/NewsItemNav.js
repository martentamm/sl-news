import React, { Component } from 'react';
import './Nav.css';
import { Link, withRouter } from 'react-router-dom';


class NewsItemNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalLink: this.props.location.item.url,
    };
  }

  render() {
    return (
      <nav className='item-page-nav'>
        <Link to="/news/" state={this.state}>
          <img src={require("../img/backarrow.png")} alt="backarrow-icon" className="ico" />
        </Link>
        <p className='nav-title'>News Reader</p>
        <a href={this.state.externalLink}>
          <img src={require("../img/openbrowser.png")} alt="open-browser-icon" className="ico" />
        </a>
      </nav>
    );
  }
}
export default withRouter(NewsItemNav);
