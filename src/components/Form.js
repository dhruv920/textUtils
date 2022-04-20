import React,{useState} from 'react';


export default function Form(prop){
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{  
        let newText = text.toUpperCase();
        setText(newText)
        prop.showAlert('Text Converted to UpperCase','success');
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        prop.showAlert('Text Converted to LowerCase','success');
    }

    const handleClear =()=>{
        let newText='';
        setText(newText)
    }

    const copyText = ()=>{
        let newText = text;
        navigator.clipboard.writeText(newText);
        alert("Text is Copied!");
    }

    const removeSpace = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }

    const[text,setText]=useState('');

    return(
        <>
    
        <div className="container" style={{color:prop.mode==='light'?'black':'white'}}>
            <h1>{prop.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{background:prop.mode==='light'?'white':'grey',color:prop.mode==='light'?'black':'white'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleDownClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleClear} >ClearText</button>
            <button className="btn btn-primary mx-1 my-2" onClick={copyText} >CopyText</button>
            <button className="btn btn-primary mx-1 my-2" onClick={removeSpace} >ClearExtraSpaces</button>
        </div>

        <div className="container my-2" style={{color:prop.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').filter((elemant)=>{return elemant.length!==0}).length} words And {text.length} Characters</p>
            <p>{0.08 * text.split(' ').filter((elemant)=>{return elemant.length!==0}).length} Minutes to Read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:'Enter Something in the text area to preview it here'}</p>
        </div>
        </>
    )
        
     

}