/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom';

import Home from '../routes/home';
import About from '../routes/about';
import Login from '../routes/login';
import Profile from '../routes/profile';
import NotMatch from '../routes/notMatch';
import Layout from './layout';
import SinglePage from '../routes/singlePage';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default TodoApp;
