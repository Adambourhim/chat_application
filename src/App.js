import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./ChatFeed";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="Adam"
      userSecret="123321"
      projectID="09bd019f-9b15-40a1-a0c8-79526fbb794c"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
