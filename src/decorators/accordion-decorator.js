import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {

  /**
   *
   * @type {{openItemId: null}}
   */
  state = {
    openItemId: null
  };

  /**
   *
   * @param openItemId
   */
  toggleItem = (openItemId) => {
    this.setState((prevState) => {
      return (openItemId === prevState.openItemId) ? {openItemId: null} : {openItemId};
    });
  };

  /**
   *
   * @returns {*}
   */
  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleItem={this.toggleItem}/>
  }

}
