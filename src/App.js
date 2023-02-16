import './App.css';
import { AuthContextProvider } from './services/auth/AuthContext';
import { ContextProvider } from './services/Context/GlobalContext';
// import SignIn from './services/auth/SignIn';
// import SignUp from './services/auth/SignUp';
import Router from './services/router';
// import Router from './services/router';

function App() {
  return (
    <div className='App'>
      
        <AuthContextProvider>
        <ContextProvider>
          <Router/>
          </ContextProvider>
        </AuthContextProvider>
     

    </div>
  );
}

export default App;
