import Home from './component/Home';
import './index.css';
import { Routes, Route,  } from 'react-router-dom';
import Demo from './pages/Demo';
import EnterCode from './component/EnterCode';
import Blog from './pages/Blog';
import PrivateRoute from './component/PrivateRoute';
import AdminDashboard from './pages/AdminDashboard';
// import AdminBlogForm from './pages/AdminBlogForm';
import Login from './pages/Login';
import EditBlogForm from './pages/EditBlogForm';
import CreateBlog from './pages/CreateBlog';
import ReadMore from './pages/ReadMore';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/entercode" element={<EnterCode />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/readmore/:id" element={<ReadMore />} />

      {/* Public Route (not protected, should remove or protect if needed) */}
      {/* <Route path="/create" element={<CreateBlog />} /> */}

      {/* Protected Routes */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/create"
        element={
          <PrivateRoute>
            <CreateBlog/>
          </PrivateRoute>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditBlogForm/>
          </PrivateRoute>
        }
      />

      {/* Catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
