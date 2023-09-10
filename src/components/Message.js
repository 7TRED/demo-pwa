

export default function Message ({text, sender, time, ref }){

    return (
        <div className={`message ${sender === "user" ? "user-message" : "assistant-message"} shadow-lg`}>
            <p className="message-text">{text}</p>
            <div className="message-time">{time}</div>
        </div>
    );
}