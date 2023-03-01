import { useState } from "react";
import "./Dropdown.css";

export const ProfileButtons = ({selected, setSelected})=> {
    const [isActive, setIsActive] = useState(false);
    const options = ["View Profile", "Achievements", "Logout"];
    return (
    <div className="profile">
        <div className="profile-button" onClick={(e) => setIsActive(!isActive)}>
            Account Name
            <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
            <div className="profile-content">
                {options.map(option => (
                    <div
                     onClick={(e) => 
                        {setSelected(option);
                        setIsActive(false);
                    }   
                    }  
                        className="profile-item">
                            {option}
                        </div>
                ))}
        </div>
        )}
    </div>
    );
}