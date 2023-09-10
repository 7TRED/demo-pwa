import React, { useRef } from "react";


export default function ChatInput({onSend}){
    
    const [input, setInput] = React.useState("");
    const inputRef = useRef(null);

    const handleChange = (event)=>{
        setInput(event.target.value);
    }

    const handleSubmit = () => {
        console.log(input);
        if(input){
            onSend(input);
            setInput("");
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            if(event.shiftKey){
                return;
            }
            handleSubmit();
            event.preventDefault();
        }
    }

    return (
        <div className = "chat-input fixed shadow-md bottom-5 left-50 container flex-end">
            <textarea
                value={input} 
                onChange={handleChange} 
                onKeyDown={handleKeyPress}
                placeholder="Type you messsage here..."
                className="container outline-none"
            />

            <button onClick={(e)=>handleSubmit()}>Send</button>
        </div>
    )
}