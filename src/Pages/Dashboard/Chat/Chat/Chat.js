import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { io } from "socket.io-client";
import auth from "../../../../firebase.init";
import UserInformation from "../../../../Hook/UserInformation";
import axiosPrivate from "../../../Api/axiosPrivate";
import ChatBox from "../ChatBox/ChatBox";
import Conversation from "../Conversation/Conversation";
import "./Chat.css";

const Chat = () => {
  const [user] = useAuthState(auth);
  const [users] = UserInformation(user);
  const [chats, setChat] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  const socket = useRef();

  useEffect(() => {
    const getChats = () => {
    if(users?._id){
      try {
        axiosPrivate.get(`/admin/chat/${users?._id}`).then((res) => {
          setChat(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    }
    getChats();
  }, [users]);
  useEffect(() => {
    socket.current = io("https://chat-server-06.herokuapp.com/");
    if (users?._id) {
      socket.current.emit("new-user-add", users?._id);
      socket.current.on("get-users", (users) => {
        setOnlineUsers(users);
      });
    }
  }, [users]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);
  // Get the message from socket server
  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recived-message", (data) => {
      console.log("connect backend")
      setReceivedMessage(data);
    }

    );
  }, []);


  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        {/* <LogoSearch /> */}
        <div className="Chat-container">
          <h2 className="text-center">Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation
                  key={chat._id}
                  data={chat}
                  currentUserId={users?._id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}></div>
        <ChatBox
          chat={currentChat}
          currentUser={users?._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
