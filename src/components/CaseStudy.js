import React from 'react';


function CaseStudy(props){
    return(
        <div className="case-study">
            <h1 className="title">{props.title}</h1>
            <a href="{props.link}" target="_blank"><h3 style={{color:'#23D9B7'}} className="subtitle caption">View App</h3></a>
            <h3>Problem</h3>
            <p>{props.problem}</p>
            <h3>Solution</h3>
            <p>{props.solution}</p>
            <h3>Interface Design</h3>
            <p>{props.interface}</p>
            <div dangerouslySetInnerHTML={{ __html: props.media }}></div>
        </div>
    )
}

export default CaseStudy;