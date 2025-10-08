import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Tabs.module.scss";

const Tabs = ({ tabs, noBorder = false }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabsContainer}>
      {/* Tab headers */}
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tabHeader} ${activeTab === index ? styles.active : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Tab content */}
      <div className={`${styles.tabContent} ${noBorder ? '' : styles.withBorder}`}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  noBorder: PropTypes.bool
};

export default Tabs;
