import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import InputEmoji from "react-input-emoji";
import demoUser from "../../../../assets/demo_user.png";
import axiosPrivate from "../../../Api/axiosPrivate";
import "./Chatbox.css";
const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState("");

  const handleChange = (newMessage) => {
    setNewMessages(newMessage);
  };
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        if (userId) {
          axiosPrivate.get(`/conversationuser/${userId}`).then((res) => {
            setUserData(res.data);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  //   fetching data for message
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        if (chat?._id) {
          axiosPrivate.get(`/message/${chat?._id}`).then((res) => {
            setMessages(res.data);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) fetchMessage();
  }, [chat]);
  // text handle click
  // Always scroll to last Message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //   send msg

  const handleSend = (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };
    const receiverId = chat?.members.find((id) => id !== currentUser);

    setSendMessage({ ...message, receiverId });

    // send database
    if (currentUser && chat._id) {
      try {
        axiosPrivate.post("/message", message).then((res) => {
          setNewMessages("");
          try {
            if (chat?._id) {
              axiosPrivate.get(`/message/${chat?._id}`).then((res) => {
                setMessages(res.data);
              });
            }
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (receivedMessage !== null && receivedMessage?.chatId === chat?._id) {
      console.log(receivedMessage);
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  const scroll = useRef();
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div className="flex items-center">
                  {userData?.img ? (
                    <div class="avatar rounded-full">
                      <div class="w-12 rounded-full">
                        <img src={userData?.img} alt="" />
                      </div>
                    </div>
                  ) : (
                    <div class="avatar rounded-full">
                      <div class="w-12 rounded-full">
                        <img src={demoUser} alt="" />
                      </div>
                    </div>
                  )}
                  <div className=" ml-2" style={{ fontSize: "0.9rem" }}>
                    <span className="font-bold capitalize">
                      {userData?.name}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body bg-[#efeae2] relative">
             
              {messages.map((message) => (
                <>
                  <div
                    ref={scroll}
                    style={{ position: "relative" }}
                    className={
                      message?.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message?.text}</span>{" "}
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <InputEmoji value={newMessage} onChange={handleChange} />
              <div
                className="  text-white btn btn-primary cursor-pointer"
                onClick={handleSend}
              >
                <AiOutlineSend className=""></AiOutlineSend>
              </div>
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;
