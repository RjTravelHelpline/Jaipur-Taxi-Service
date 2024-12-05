import { useState } from 'react';

const useShowAllToggle = (items, initialCount) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => setShowAll(!showAll);

    const displayedItems = showAll ? items : items.slice(0, initialCount);

    return { showAll, displayedItems, toggleShowAll };
};

export default useShowAllToggle;
