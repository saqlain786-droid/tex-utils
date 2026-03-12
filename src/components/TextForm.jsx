import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const wordCount = text.trim().split(/\s+/).filter((element) => element.length !== 0).length;

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to UpperCase
                </button>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLowClick}>
                    Convert to LowerCase
                </button>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>

                <p>{wordCount} words and {text.length} characters</p>

                <p>{0.008 * wordCount} Minutes read</p>

                <h2>Preview</h2>

                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}