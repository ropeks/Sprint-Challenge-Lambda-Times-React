import React from 'react';
import Tab from './Tab';
import uuid from 'uuid';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS: <br/></span>
        {/* 
            map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props
          */
          props.tabs.map(tab => (
            <Tab 
              key={uuid()} 
              tab={tab} 
              selectedTab={props.selectedTab} 
              selectTabHandler={props.selectTabHandler} 
            />
          ))
        }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
