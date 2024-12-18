import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    // Obtenir la date actuelle
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('fr-FR', {
        weekday: 'long', // Jour de la semaine (ex: "Vendredi")
        day: '2-digit',  // Jour du mois (ex: "19")
        month: '2-digit', // Mois (ex: "03")
        year: 'numeric',  // Année (ex: "2024")
    });

    return (
        <nav className="navbar">
            {/* Section gauche */}
            <div className="navbar-left">
                <h1>
                    Bonjour, <span className="username">Amine Sakka!</span>
                </h1>
                <p className="subtext">Vos insights de jours sont là</p>
            </div>

            {/* Section centrale */}
            <div className="navbar-center">
                <span className="date">{formattedDate}</span>
                <div className="search-container">
                    <input type="text" placeholder="Rechercher..." className="search-input" />
                </div>
            </div>

            {/* Section droite */}
            <div className="navbar-right">
                <div className="user-info">
                    <div className="user-name">Amine Sakka</div>
                    <div className="user-status">• Actif</div>
                </div>
                <FontAwesomeIcon icon={faBell} className="icon" />
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
