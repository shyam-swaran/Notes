import React ,{useState,useRef} from 'react'

export default function Note(props) {
    const textareaRef=useRef();
    const [color, setColor] = useState("");
    
    const generateColor = () => {
      setColor(generateRandomColor());
    }; 
    const generateRandomColor = () => {
        const randomNumber = Math.floor(Math.random() * 16777215);
        const hexString = randomNumber.toString(16);
        const paddedHexString = "000000" + hexString;
        textareaRef.current.focus();
        return "#"+paddedHexString.slice(-6);
    };
    const callback =()=>{
        props.removefun(props.val);
    }
    const focusBtn = ()=>{
        textareaRef.current.focus();
    }

  return (
    <div className='notes-container'>
        <div className='header' onLoad={generateColor} style={{backgroundColor:color}}>
            <button className='header-btns'>
                {/* eslint-disable-next-line */}
                <img src={require('./images/edit.png')} onClick={focusBtn}/>
            </button>
            <button className='header-btns' onClick={callback}>
                {/* eslint-disable-next-line */}
                <img src={require('./images/delete.png')} /> 
            </button>
        </div>
        <textarea ref={textareaRef} name="" id=""></textarea>  
    </div>
  )
}
