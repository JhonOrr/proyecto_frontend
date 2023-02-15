import './App.css';
import { AuthContextProvider } from './services/auth/AuthContext';
// import SignIn from './services/auth/SignIn';
// import SignUp from './services/auth/SignUp';
import Router from './services/router';
// import Router from './services/router';

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
