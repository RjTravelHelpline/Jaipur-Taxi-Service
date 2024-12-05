import React from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

const ToggleShowAllButton = ({ showAll, toggleShowAll, className = '', collapseText = 'collapse', expandText = 'view all' }) => {
    return (
        <div className={`col-12 d-flex w-100 align-items-center gap-2 mt-3 ${className}`}>
            <hr />
            <button
                className="bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 text-nowrap text-right text-capitalize"
                onClick={toggleShowAll}
            >
                {showAll ? collapseText : expandText}
                {showAll ? <BiChevronUp className="text-tertary" /> : <BiChevronDown className="text-tertary" />}
            </button>
        </div>
    );
};

export default ToggleShowAllButton;
