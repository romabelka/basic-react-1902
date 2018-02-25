import React from 'react';

export default (ToggledComponent, buttonTexts) => class ToggleComponent extends React.Component {
    state = {
        showComponent: false
    }

    toggleVisible = () => {
        this.setState(prevState => ({
            showComponent: !prevState.showComponent
        }));
    }

    render() {
        const {showComponent} = this.state,
             {openButton, closeButton} = buttonTexts,
            open = openButton || 'Open',
            close = closeButton || 'Close'

        return (
            <div>
                <button onClick={this.toggleVisible}>{showComponent ? close : open}</button>
                {showComponent &&  <ToggledComponent {...this.props}/>}
            </div>
        );
    }
}