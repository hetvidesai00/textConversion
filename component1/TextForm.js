import React, {useState} from 'react'

export default function TextForm(props){
    const [text, setText] = useState('');
    const handleChange = (event) =>{
        setText(event.target.value)
    }

    const handleUpChange = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Message is converted to upper case", "success")
    }

    const handleLowerChange = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Message is converted to lower case", "success")
    }

    const clearClick = ()=>{
        let newText = ('');
        setText(newText);
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text); //navigator.clipboard.writeText copies the specified test to clipboard
    }
    return (
        <>
        <div className="container">
            <div className='mb-3'>
                <label htmlFor="myBox" className='form-label'>{props.title}</label>
                <textarea className='form-control' id="myBox" value={text} onChange={handleChange} rows="3"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpChange}>Convert to upper case</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLowerChange}>Convert to lower case</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={clearClick}>Clear</button>

        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        </div>
        </>
    )
}