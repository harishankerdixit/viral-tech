import React, { useEffect, useState } from 'react';
import { projectsData } from './data';
import { projectsNav } from './data';
import { WorkItems } from './WorkItems';

export const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [showAll, setShowAll] = useState(false); // State to track whether to show all cards or not
    const initialCardCount = 6; // Initial number of cards to show

    useEffect(() => {
        if (item.name === "all") {
            // Filter out items with category "other service"
            const filteredProjects = projectsData.filter((project) => project.category !== "other");
            setProjects(filteredProjects);
        } else if (item.name === "other service") {
            // Filter out items with category "other service"
            const filteredProjects = projectsData.filter((project) => project.category === "other");
            setProjects(filteredProjects);
        } else {
            // Filter out items based on the selected category
            const newProjects = projectsData.filter((project) => project.category === item.name);
            setProjects(newProjects);
        }
    }, [item]);

    // Function to toggle showing all cards
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    return (
        <div>
            <div className="work_filters">
                {projectsNav.map((item, index) => {
                    return <span onClick={(e) => {
                        handleClick(e, index);
                    }} className={`${active === index ? 'active-work' : ''} work_item`} key={index}>
                        {item.name}
                    </span>
                })}
            </div>

            <div className="work_container container grid">
                {/* Show only the first 9 cards if not in show all mode */}
                {projects.slice(0, showAll ? projects.length : initialCardCount).map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
            {/* Show "See More" button if not in show all mode */}
            {!showAll && projects.length > initialCardCount && (
                <button onClick={toggleShowAll} style={{ float: 'right' }} className='pr-60 pt-5 text-blue-800'><b>See More</b></button>
            )}
            {/* Show "See Less" button if in show all mode */}
            {showAll && (
                <button onClick={toggleShowAll} style={{ float: 'right' }} className='pr-60 pt-5 text-blue-800'><b>See Less</b></button>
            )}
        </div>
    );
};
