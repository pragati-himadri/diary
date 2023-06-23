import {useRoutes,Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import DiaryPost from './Pages/DiaryPost';
import Signup from './Pages/Signup';
import Login from './Pages/Login';


const App = ()=> {
  const { user } = useAuthContext();

  const elements = useRoutes([
      { path: '/', 
          element: <Layout />,
          children: [
              { path: '/', element: user ? <Home /> : <Navigate to="/api/login" /> },
              { path: '/api/posts/:id', element: user ? <DiaryPost /> : <Navigate to="/api/login" /> },
              { path: '/api/signup', element: !user ? <Signup /> : <Navigate to="/" /> },
              { path: '/api/login', element: !user ? <Login /> : <Navigate to="/" /> },
          ]
      }
      ]);

      return elements;
};

export default App;