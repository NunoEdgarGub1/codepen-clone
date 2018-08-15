import React, {Component} from 'react';
import Pen from '../Pen/Pen';

export default class Pens extends Component {
    constructor() {
        super();

        this.state = {
            pens: [{
                id: 1,
                url: "http://i63.tinypic.com/bfnxv4.jpg",
                profile: "http://i65.tinypic.com/25grn8k.jpg",
                username: "Erin Hales", 
                penName: "Weather Application",
                views: 23,
                commentsNum: 1,
                loves: 3
            },
            {   
                id: 2,
                url: "http://i63.tinypic.com/iqvj49.jpg",
                profile: "http://i66.tinypic.com/5fkgw5.jpg",
                username: "Erin Hales", 
                penName: "Weather Application",
                views: 23,
                commentsNum: 1,
                loves: 3
            },
            {
                id: 3,
                url: "http://i63.tinypic.com/iqvj49.jpg",
                profile: "http://i66.tinypic.com/5fkgw5.jpg",
                username: "Erin Hales", 
                penName: "Weather Application",
                views: 23,
                commentsNum: 1,
                loves: 3
            },
            {
                id: 4,
                url: "http://i63.tinypic.com/iqvj49.jpg",
                profile: "http://i66.tinypic.com/5fkgw5.jpg",
                username: "Erin Hales", 
                penName: "Weather Application",
                views: 23,
                commentsNum: 1,
                loves: 3
            },
            {
                id: 5,
                url: "http://i63.tinypic.com/iqvj49.jpg",
                profile: "http://i66.tinypic.com/5fkgw5.jpg",
                username: "Erin Hales", 
                penName: "Weather Application",
                views: 23,
                commentsNum: 1,
                loves: 3
            },
            {
                id: 6,
                url: "http://i63.tinypic.com/iqvj49.jpg",
                profile: "http://i66.tinypic.com/5fkgw5.jpg",
                username: "Erin Hales", 
                penName: "Weather Application",
                views: 23,
                commentsNum: 1,
                loves: 3
            }]
        }
    }


    render() {
        // let {url, profile, username, penName, views, commentsNum, loves} = this.state.
        let pensList = [];
        this.state.pens.forEach(pen => {
            let {id, url, profile, username, penName, views, commentsNum, loves} = pen;
            return pensList.push(<Pen key={id} url={url} profile={profile} username={username} penName={penName} views={views} commentsNum={commentsNum} loves={loves} />);
        })
        return (
            <div className="pensView">
                <div className="pensHeader">
                    <h1>Explore Pens</h1>
                    <h4>View More Pens</h4>
                </div>
                <div className="pensDisplay">
                    {pensList}
                </div>
                <button>Next</button>
            </div>
        )
    }
}