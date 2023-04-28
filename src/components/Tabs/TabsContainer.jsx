import PropTypes from "prop-types";

import "./Tabs.css";

const TabsContainer = ({ children }) => {
    return <div className="tabs__container">{children}</div>;
};

TabsContainer.propTypes = {
    children: PropTypes.element
};

export default TabsContainer;
