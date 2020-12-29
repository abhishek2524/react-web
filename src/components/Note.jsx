import React from 'react';
import MediaCard from './Card';
const Note = (props)=>{
    return(
        <>
                <div className="col-md-3 mb-2">
                    <MediaCard data={props}/>
                </div>
        </>
    )
};
export default Note;