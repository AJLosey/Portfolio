import React from 'react';
import Card from 'react-bootstrap/Card';

export function Project(props) {
    return (
        <Card className="card col-5 purp-border">
            <img src={props.img} className="card-img-top"
                alt={props.imgAlt} />
            <div className="card-body">
                <p className="card-text h3">props.title</p>
                <p className="card-text"><a href={props.deployLink} target="_blank"
                    rel="noopener noreferrer">Link to page</a><br></br><a href={props.repoLink}
                        target="_blank" rel="noopener noreferrer">Link to github repository</a></p>
            </div>
        </Card>
    )
}