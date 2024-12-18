import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [activeTab, setActiveTab] = useState("account");

    return (
        <div className="profile-container">
            {/* Onglets Account/Documents */}
            <div className="profile-tabs">
                <button
                    className={`tab-button ${activeTab === "account" ? "active" : ""}`}
                    onClick={() => setActiveTab("account")}
                >
                    Account
                </button>
                <button
                    className={`tab-button ${activeTab === "documents" ? "active" : ""}`}
                    onClick={() => setActiveTab("documents")}
                >
                    Documents
                </button>
            </div>
            {/* Contenu dynamique des onglets */}
            {activeTab === "account" && (
                <div className="flex-sections">
                {/* Section Profil */}
                <div className="profile-details">
                    <div className="profile-header">
                        <h2>Profil</h2>
                        <button className="edit-button">Edit</button>
                    </div>
                    <div className="profile-info">
                        <div className="profile-picture"></div>
                        <div className="info-details">
                            <p><strong>Nom:</strong> Amine Sakka</p>
                            <p><strong>Poste:</strong> Backend Developer</p>
                            <p><strong>Email:</strong> aminesakka973@gmail.com</p>
                            <p><strong>Phone:</strong> 97 97 97 97</p>
                        </div>
                    </div>
                </div>

                {/* Section Chat */}
                <div className="profile-chat">
                    <div className="chat-messages">
                        <div className="message you">Votre message est écrit ici</div>
                        <div className="message other">Votre message est écrit ici</div>
                    </div>
                </div>

                {/* Section Connexions */}
                <div className="profile-connections">
                    <h3>Connection</h3>
                    <input type="text" placeholder="Search" className="search-input" />
                    <ul className="connections-list">
                        <li>Leila Hawass - Backend Developer</li>
                        <li>Sabrine Mabrouk - Frontend Developer</li>
                        <li>Marouen Zairi - Intern in UI/UX</li>
                    </ul>
                </div>
            </div>
            )}
            {activeTab === "documents" && (
    <div className="tab-content documents-content">
        <h2>Manage your folders</h2>
        <div className="folder-section">
            <div className="folder-item upload-item">
                <button className="upload-button">
                    <i className="fa fa-upload"></i>
                </button>
                <p>Upload</p>
            </div>
            <div className="folder-item">
             <i className="fas fa-folder" style={{ color: 'blue', fontSize: '3rem' }}></i>
            <p className="folder-name">Nom de dossier</p>
            <p className="folder-details">03 fichiers (PDF) - 35 Mb</p>
            </div>
            <div className="folder-item">
                 <i className="fas fa-folder" style={{ color: 'gray', fontSize: '3rem' }}></i>
                 <p className="folder-name">Nom de dossier</p>
                 <p className="folder-details">03 fichiers (PDF) - 35 Mb</p>
            </div>
        </div>
        <h2>Manage your files</h2>
        <div className="file-list">
            <div className="file-item">
                <span className="file-icon">PDF</span>
                <p className="file-name">File name</p>
                <p className="file-date">17-04-2024</p>
                <p className="file-size">11 Mb</p>
                <p className="file-time">02 minutes reading</p>
                <div className="file-actions">
                    <button className="file-action read">Read</button>
                    <button className="file-action delete">Delete</button>
                </div>
            </div>
        </div>
    </div>
)}
        </div>
    );
};

export default Profile;
