import { useState } from "react";
import "./dropdown.css";

export const Dropdown = ({selected, setSelected})=> {
    const [isActive, setIsActive] = useState(false);
    const options = ["View Profile", "Achievements", "Logout"];
    return (
    <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            Account Name
            <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
            <div className="dropdown-content">
                {options.map(option => (
                    <div
                     onClick={(e) => 
                        {setSelected(option);
                        setIsActive(false);
                    }   
                    }  
                        className="dropdown-item">
                            {option}
                        </div>
                ))}
        </div>
        )}
    </div>
    );
}