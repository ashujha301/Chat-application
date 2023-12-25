import Navbar from "../../components/navbar/navbar";
import "./chatpage.css";
const Chat = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="sidelist">
          <ul>
            <li>ayush</li>
            <li>adarsh</li>
          </ul>
        </div>
        <div className="main-chatbox">
            <div className="user-sender-container">
            <h1 className="user-sender">Avi </h1>
            </div>
            <div>
                <p>hello</p>
            </div>
          <div className="send-container">
            <input
              type="text"
              className="msgbox"
              placeholder="write msg here!"
            ></input>
            <button className="sendbtn">send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
