
import "./ChatPage.css";

const ChatPage = () => {
  return (
    <>
      <div className="chat-page-container">
        <div className="user-list-container">
          <ul className="user-list">
            <li>User 1</li>
            <li>User 2</li>
            {/* ... */}
          </ul>
        </div>
        <div className="chat-container">
          <div className="selected-user">
            <img src="" alt="User" className="user-image" />
            <div>
              <div>Selected User</div>
              <div className="user-status"></div>
            </div>
          </div>
          <div className="chat-history">
            <div className="selected-user-message-box">
              Selected user message on the left
            </div>
            <div className="sender-message-box">
              Sender message on the right
            </div>
            {/* ... */}
          </div>
          <div className="chat-input-container">
            <button>+</button>
            <input type="text" placeholder="Type your message" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;