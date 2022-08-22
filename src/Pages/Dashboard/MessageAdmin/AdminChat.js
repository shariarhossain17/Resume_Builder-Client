import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import UserInformation from '../../../Hook/UserInformation';
import axiosPrivate from '../../Api/axiosPrivate';
import AdminConvarsation from './ConvarSation/AdminConvarsation';
import './message.css';

const AdminChat = () => {
    const [user] = useAuthState(auth)
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [admin,setAdmin] = useState([])
    const socket = useRef();
    const [users] = UserInformation(user)
    const scrollRef = useRef();

    useEffect(()=> {
        if(users?._id){
            axiosPrivate.get(`/chat/${users?._id}`)
            .then(res => {
                setConversations(res.data)
            })
        }
    },[users])

   
    return (
        <>
           <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for Admin" className="chatMenuInput" />
            {conversations.map((c) => (
                <AdminConvarsation conversation={c} currentUser={users} />
              
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {/* {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))} */}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            {/* <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            /> */}
          </div>
        </div>
      </div>
        
        </>
    );
};

export default AdminChat;