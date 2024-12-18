import React, { useState } from 'react';
import './Projet.css';
const Projets = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: "Project A", team: "Team Alpha", progress: 50, timeLapse: "3 days" },
        { id: 2, name: "Project B", team: "Team Beta", progress: 75, timeLapse: "5 days" },
        { id: 3, name: "Project C", team: "Team Gamma", progress: 30, timeLapse: "7 days" },
    ]);

    return (
        <div className="projects-container">
            <h2>Listes des projets</h2>
            <div className="projects-table">
                <div className="table-header">
                    <div className="table-column">Numéro</div>
                    <div className="table-column">Nom de projet</div>
                    <div className="table-column">Your Team</div>
                    <div className="table-column">Progress</div>
                    <div className="table-column">Time Lapse</div>
                    <div className="table-column">Actions</div>
                </div>
                <div className="table-body">
                    {projects.map((project) => (
                        <div className="table-row" key={project.id}>
                            <div className="table-column">{project.id}</div>
                            <div className="table-column">{project.name}</div>
                            <div className="table-column">{project.team}</div>
                            <div className="table-column">
                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                         
                                </div>
                            </div>
                            <div className="table-column">{project.timeLapse}</div>
                            <div className="table-column">
                                <button className="action-button edit">
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button className="action-button delete">
                                    <i className="fa fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projets;
