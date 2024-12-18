import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faTasks, faCalendarDays,faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
             <Link
            to="/profile"
            className={`sidebar-link ${location.pathname === '/profil' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
            Profil
          </Link>
          <Link
            to="/projet"
            className={`sidebar-link ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="sidebar-icon" />
            Projets
          </Link>
          <Link
            to="/tasks"
            className={`sidebar-link ${location.pathname === '/tasks' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
            Tâches
          </Link>
          <Link
            to="/leaves"
            className={`sidebar-link ${location.pathname === '/leaves' ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faCalendarDays} className="sidebar-icon" />
            Congés
          </Link>
        </div>
      );
    };

export default Sidebar;