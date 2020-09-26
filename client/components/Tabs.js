/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabSchema, currentTab, handleTabClick }) => {
  return (
    <div className="tabs is-centered is-boxed">
      <ul>
        {tabSchema.map((tabInfo) => {
          const { label, id, faIcon } = tabInfo;
          const active = currentTab === id;
          return (
            <Tab
              handleTabClick={handleTabClick}
              id={id}
              key={id}
              faIcon={faIcon}
              label={label}
              active={active}
            />
          );
        })}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  tabSchema: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

const Tab = ({ active = false, label, handleTabClick, id, faIcon }) => {
  const activeClass = active ? "is-active" : "";
  return (
    <li className={`${activeClass}`} onClick={() => handleTabClick(id)}>
      <a>
        <span className="icon is-small">
          <i className={faIcon} aria-hidden="true" />
        </span>
        <span>{label}</span>
      </a>
    </li>
  );
};

Tab.defaultProps = {
  active: false,
  label: "",
  faIcon: "fas grimace",
};

Tab.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  handleTabClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  faIcon: PropTypes.string,
};

export default Tabs;
