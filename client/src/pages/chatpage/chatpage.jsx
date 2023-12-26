import Navbar from "../../components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Chat = () => {
    return (
      <>
        <Navbar />
        <div className="container-fluid mt-2" style={{ height: '100vh',backgroundColor: 'black' }}>
          <div className="row p-2" style={{ height: '100%' }}>
            <div className="col-md-3 rounded bg-dark text-white" style={{ height: '100%' }}>
              <div className="p-4">
                <ul>
                  <li>ayush</li>
                  <li>adarsh</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9" style={{ height: '100%' }}>
              <div className="p-4 rounded bg-dark text-white h-100">
                <div className="user-sender-container">
                  <h1 className="user-sender">Avi </h1>
                </div>
                <div className="chatbox-container h-100 d-flex">
                  {/* Area to receive messages */}
                  <div className="received-msg">
                    <p>Message from another user</p>
                  </div>
                  {/* Area to send messages */}
                  <div className="send-container d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control msgbox"
                      placeholder="Write a message..."
                    />
                    <button className="btn btn-success sendbtn">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Chat;