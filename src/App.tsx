import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase-config';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './store/slices/user-slice';


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/auth')
      }
    });

    return () => unSubscribe()
  }, [])

  return (
    <div className={`app ${pathname !== '/browse' ? 'bg-image' : ''}`
    } >
      <Header />
      <Outlet />
      <Footer />
    </div >
  );
}

export default App;
