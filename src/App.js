// import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={ChatRoom} />
          </Switch>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
