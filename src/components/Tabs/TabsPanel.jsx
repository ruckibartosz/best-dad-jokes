import PropTypes from "prop-types";

import "./Tabs.css";

const TabsPanel = ({ children, id, activeTab }) => {
    return activeTab === id ? (
        <div className="tabs__panel">{children}</div>
    ) : null;
};

TabsPanel.propTypes = {
    children: PropTypes.element,
    id: PropTypes.string,
    activeTab: PropTypes.string
};

export default TabsPanel;
