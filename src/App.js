import { useState} from 'react';
import './App.css';
import Note from './Note';

function App() {
  const [noteItems, setnoteItems] = useState(()=>{
    return [];
  });

  const remove =(k)=>{
    setnoteItems(noteItems.filter(item => k!==item));
  }
  const addNote = () =>{
    setnoteItems([...noteItems,crypto.randomUUID()]);
  }
  return (
    <div>
      <button id='add-note' onClick={addNote}>+Add note</button>
      <div className='container'>{noteItems.map(note => <Note key={note} val={note} removefun={remove}/>)}
      </div>
    </div>
  );
}

export default App;
