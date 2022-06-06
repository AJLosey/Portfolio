import React from 'react';

function Project(props) {
    <div class="card col-5 purp-border ">
        <img src={props.img} class="card-img-top"
            alt={props.imgAlt} />
        <div class="card-body">
            <p class="card-text h3">props.title</p>
            <p class="card-text"><a href={props.deployLink} target="_blank"
                rel="noopener noreferrer">Link to page</a><br></br><a href={props.repoLink}
                    target="_blank" rel="noopener noreferrer">Link to github repository</a></p>
        </div>
    </div>
}