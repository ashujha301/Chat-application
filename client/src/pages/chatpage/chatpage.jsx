import { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/navbar";
import axios from "axios";
import "./ChatPage.css";

const ChatPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getusers");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="page-container">
        <MyNavbar />
        <div className="chat-page-container">
          <div className="user-list-container">
            {users.length > 0 ? (
              <ul className="user-list">
                {users.map((user) => (
                  <li key={user._id}>{user.name}</li>
                ))}
              </ul>
            ) : (
              <p>No users available</p>
            )}
          </div>
          <div className="chat-container">
            <div className="selected-user">
              <img
                src="https://fastly.picsum.photos/id/591/200/200.jpg?hmac=5agpVWsRchY0DObXs23vYWjjgqLZEBhqSvTwfCAcyng"
                alt="User"
                className="user-image"
              />
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
      </div>
    </>
  );
};

export default ChatPage;
