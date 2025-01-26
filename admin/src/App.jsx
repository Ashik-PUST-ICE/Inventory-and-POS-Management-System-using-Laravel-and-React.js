import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from './component/partials/Nav';
import './assets/css/styles.css';
import './assets/css/style.scss';
import SideBar from './component/partials/SideBar';
import Footer from './component/partials/Footer';
import { RouterProvider } from 'react-router-dom';
import ProjectRouter from './component/router/ProjectRouter';

const App = () => {
  return (
    <>
      <RouterProvider  router={ProjectRouter}/>
    </>
  );
};

export default App;
