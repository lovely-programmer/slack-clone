import React, { useState } from "react";
import db from '../firebase'
import {useDataLayerValue} from '../StateProvider'
import firebase from "firebase";
import './ChatInput.css'

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{user}] = useDataLayerValue()

  const sendMessage = (e) => {
    e.preventDefault();
    if(channelId){
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userImage: user.photoURL,
            username: user.displayName,
        })
    }
  };

  return (
    <div className="chatInput">
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button>SEND</button>
      </form>
    </div>
  );
}

export default ChatInput;
