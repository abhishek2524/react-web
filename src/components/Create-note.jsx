import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props)=>{
    const [expand,setExpand] = useState(false);
    const [note, setNote]=useState({
        title:'',
        description:''
    });
    const eventListen = (event)=>{
        const {name,value}=event.target;
        setNote(
            (prevData)=>{
                return ({
                    ...prevData,
                    [name]:value
                })
            }
        );
    }
    const addEvent = ()=>{
        props.passNote(note);
        setNote({
            title:'',
            description:''
        })
    }
    const expandIt = ()=>{
        setExpand(true);
    }
    return(
        <div>
            <div className='row' style={{padding:'50px'}}>
                <div className="col-md-6 mr-auto ml-auto mt-1 create-notes">
                    <form>
                        {expand?<input type='text' name="title" value={note.title} className="form-control mb-1" placeholder="Title" onChange={eventListen} autoComplete="off" required/>:null}
                        <textarea onClick={expandIt} rows="5" name="description" value={note.description} className="form-control" cols="10" style={{width:'100%'}} onChange={eventListen} placeholder="Write a note" required></textarea>
                        {expand?<button type="button" onClick={addEvent}  className="btn btn-warning"><AddIcon/></button>:null}
                    </form>
                </div>
            </div>
        </div>
    )
};
export default CreateNote;