import React from 'react';


function CaseStudy(props){
    return(
        <div className="case-study">
            <h1 className="title">{props.title}</h1>
            <a href={props.link} target="_blank"><h3 style={{color:'#23D9B7'}} className="subtitle caption">View Project</h3></a>
            <p>{props.content}</p>
            <div dangerouslySetInnerHTML={{ __html: props.media }}></div>
        </div>
    )
}

export default CaseStudy;