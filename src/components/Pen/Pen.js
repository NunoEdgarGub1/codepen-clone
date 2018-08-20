import React from 'react';
import {Link} from 'react-router-dom';

export default function Pen(props) {
    const srcDoc = `${props.html}<style>${props.css}</style><script>${props.js}</script>`
    return (
        <div className="showPen">
            <Link to={`/editor/${props.id}`}>
            <div className="overlayContainer">
                <div className="overlayContainer">
                    <div className="pen-iframe-container">
                        <iframe scrolling="no" className="pen-iframe" srcDoc={srcDoc}></iframe>
                    </div>
                    <div className="overlay">
                        <div className="text">This is a description a very long description thei aslfkjas fl sfas flk f sf aslkfj sdlfk sf  f sfkl sfkljs dfk f dksf kasldf sl;fd sl;df sf ksf lksf </div>
                    </div>
                </div>
            </div>
            </Link>
            <div className="penInfoContainer">
                <div className="penInfo">
                    <img className="profilePicture" src={props.profilePicture} alt="" />
                    <div>
                        <h3 id="displayUserName">{props.penName}</h3>
                        <h5>{props.username}</h5>
                    </div>
                </div>
                <div className="penPopularity">
                    <h3><i className="fa fa-eye"></i>{props.views}</h3>
                    <img src="https://www.drupal.org/files/issues/comment_6.png" alt="" />
                    <h3>{props.commentsNum}</h3>
                    <img src="http://www.clker.com/cliparts/H/J/r/l/7/T/grey-heart-hi.png" alt="" />
                    <h3>{props.loves}</h3>
                </div>
            </div>
        </div>
    )
}