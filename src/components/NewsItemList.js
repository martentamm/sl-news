import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './NewsItem.css';

export default class NewsItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: Array,
      dataLoaded: false
    };
  }



  static getDerivedStateFromProps(props, state) {
    if (props.parentProps.itemList !== state.itemList) {
      return {
        itemList: props.parentProps.itemList,
        dataLoaded: props.parentProps.dataLoaded,
      };
    }

    // Return null to indicate no change to state.
    return null;
  }


  render() {

    if (this.state.dataLoaded) {
      return (
        <div>
          <Nav />
          <div className='news-item-list'>

            {
              this.state.itemList.map(item => {
                return (
                  <div key={item.id} className='news-item'>
                    <Link to={{ pathname: `/${item.id}`, state: this.state, item: item}} className="link" >
                      <img src={item.img} alt='' />
                      <p>{item.title}</p>
                    </Link>
                  </div>
                );
              })}

            <p className="no-content">No new content...</p>
          </div>
        </div>

      );
    } else {

      return (
        <div>
          <Nav />
          <div className="loading-items">
            Loading...
        </div>
        </div>

      )
    }
  }
}