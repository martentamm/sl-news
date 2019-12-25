import React, { Component } from 'react'
import NewsItemNav from './NewsItemNav';
import './NewsItem.css'
import { Link } from 'react-router-dom';


export default class NewsItemPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            itemList: this.props.location.state.itemList,
            dataLoaded: this.props.location.state.dataLoaded,
        }

    }


    render() {

        this.state.itemList.map(item => {
            return (
                <div key={item.id} className='news-item'>
                    <Link to={{ pathname: `/${item.id}`, state: this.state, item: item }} className="link" >
                        <img src={item.img} alt='' />
                        <p>{item.title}</p>
                    </Link>
                </div>
            );
        })

        var item = this.props.location.item;


        return (
            <div>


                <NewsItemNav parentProps={this.state} />
                <div >
                    <div className="news-item-page">
                        <h1 >{item.title}</h1>
                        <img className="page-img" src={item.img} alt='' />
                        <p className="page-content">{item.content}</p>
                    </div>
                    <p className="comment-count">{item.comments.length} {item.comments.length === 1 ? "Comment" : "Comments"}</p>

                    {item.comments.map(comment => {
                        return (
                            <div className="comment-box" key={comment.id}>
                                <img src={require("../img/user.png")} alt="user" className="user-ico" />
                                <div>
                                    <p className="username" key={comment.email}>{comment.email}</p>
                                    <p className="comment" key={comment.id}>{comment.content}</p>
                                </div>
                            </div>)
                    })}

                </div>
            </div>

        )
    }
}
