import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopBanner from './components/TopBanner/TopBanner';

function App() {
  return (
    <div className="app">
      <Header />
      <TopBanner />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
