import { Home, Photos } from '../pages'
import { Header, Profile, SignUp, Footer } from '../components'
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { Routes, Route, useNavigate} from 'react-router-dom'
import styles from './app.module.scss'

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleLoginRegister = (event, id) => {
    event.preventDefault();

    if (id === 1) {
      signInWithEmailAndPassword(auth, email, password)
        .then(response => {
          navigate('/photos');
          sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            setError("Please check the Password");
          }
          if (error.code === 'auth/user-not-found') {
            setError("Please check the Email");
          }
        });
    }

    if (id === 2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
          navigate('/photos');
          sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken)
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setError("Email Already in Use");
          }
        });
    }
  }

  const handleSignInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(response => {
        navigate('/photos');
        sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken)
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user.email)
      }
      else {
        setCurrentUser(null)
      }
    });
  }, []);

  return (
    // <BrowserRouter>
    <div className={styles.app}>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/profile' element={<Profile currentUser={currentUser} />} />
        <Route path='/login' element={<SignUp
          title="Log In"
          path="/register"
          value="Register a new account"
          setEmail={setEmail}
          setPassword={setPassword}
          error={error}
          handleLoginRegister={(e) => handleLoginRegister(e, 1)}
          handleSignInWithGoogle={handleSignInWithGoogle}
        />} />
        <Route path='/register' element={<SignUp
          title="Register"
          path="/login"
          value="Log In"
          setEmail={setEmail}
          setPassword={setPassword}
          error={error}
          handleLoginRegister={(e) => handleLoginRegister(e, 2)}
          handleSignInWithGoogle={handleSignInWithGoogle}
        />} />
      </Routes>
      <Footer />
    </div>
    // </BrowserRouter>
  )
}

export default App