import React, { Children, cloneElement } from 'react';

class TabGroup extends React.Component {
	// TODO: Add management of selected tab

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  updateSelected = (index) => {
    this.setState({
      selected: index,
    });
  }

	render() {
    const {
      children,
    } = this.props;

		return (
			<div>
        { Children.map(children, (c, i) => {
          return cloneElement(c, {
            selected: i === this.state.selected,
            onClick: () => this.updateSelected(i),
          });
        })}
      </div>
		)
	}
}

export default TabGroup;
