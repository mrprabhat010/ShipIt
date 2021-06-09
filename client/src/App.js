// import Login from './Components/login_signup/signup';
// import Query from './Components/query';
// import Home from './Components/home';
// import Products from './Components/products';
// import Header from './Components/header_footer/header'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';



function App() {
  
  return (
    <div >
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
