import { useState } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateNote from './components/Create-note';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [addItem,setAddItem] = useState([]);
  const addNote = (note)=>{
    setAddItem((prevData)=>{
      return([
        ...prevData,
        note
      ])
    })
  };
  const onDelete = (id)=>{
    setAddItem((oldData)=>{
      return(
        oldData.filter((curData,index,arr)=>{
          return index != id;
        })
      )
    })
  }
  return (
    <div className='bg-light-gray'>
      <div className='container'>
        <Header/>
        <CreateNote passNote={addNote}/>
        <div className="row">
        {
            addItem.map((val,index)=>{
              return <Note deleteItem={onDelete} key={index} id={index} data={val}/>
            })
        }
        </div>
        <br/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
