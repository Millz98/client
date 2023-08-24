import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = () => {
  return (
    <div style={{ height: "100vh" }}>
    <PrettyChatWindow
    projectId="ccb4ba82-4356-4209-b5c8-c3d876aea758"
    username="zack1234"
    secret="pass1234"
    style={{ height: "100%" }}
    />
    </div>
   );
  };

  export default ChatsPage;