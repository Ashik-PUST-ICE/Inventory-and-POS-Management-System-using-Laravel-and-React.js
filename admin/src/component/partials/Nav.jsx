import React from 'react';
import  $ from 'jQuery';
import jQuery from 'jQuery';

const Nav = () => {

    const handelSidebar =()=>{

        $('body').toggleClass('sb-sidenav-toggled')
    }
    return (
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
           
            <button onClick={handelSidebar} class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>

           
          

           
            <ul class="navbar-nav ms-auto  me-3 me-lg-4">
           
                <li class="nav-item dropdown">
                
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;