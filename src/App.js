/*import { ChatEngine } from 'react-chat-engine' 
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="fd542232-bae3-4baa-a8a0-3707f727b9cd"
            userName="user1"
            userSecret="12345"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App; */

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'fd542232-bae3-4baa-a8a0-3707f727b9cd';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;