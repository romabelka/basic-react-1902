import React from 'react';

export default (OriginalComponent) => class ToggleContentDecorator extends React.Component {

  /**
   *
   * @type {{isOpenItem: boolean}}
   */
  state = {
    isOpenItem: false
  };

  /**
   *
   */
  toggleItem = () => {
    this.setState({
      isOpenItem: !this.state.isOpenItem
    });
  };

  /**
   *
   * @returns {*}
   */
  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleItem={this.toggleItem} />
  }

}
