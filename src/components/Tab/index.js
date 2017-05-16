import React, { Children } from 'react';
import Title from './Title';
import Content from './Content';

const Tab = ({ children, onClick, selected }) => {
  return (
    <div>
      {Children.map(children, (child, index) => {
        return (
          <div>
            {Children.map(child, (c, i) => {
              if (c.type === Title) {
                return <div onClick={onClick}>{c}</div>;
              } else if (c.type === Content && selected) {
                return c;
              }
            })}
          </div>
        );
      })}
    </div>
  );
	// TODO: Render title and content of the tab here
}

export default Tab;
