import React from 'react';
import SolarSystem from './solar-system';

class Galaxy extends React.Component {
    getChildContext() {
        return {
            planetClickHandler: this.planetClickHandler.bind(this),
        };
    }

    planetClickHandler() {
        console.log('Planet clicked. Galaxy notified.');
    }

    render() {
        return (
            <SolarSystem />
        );
    }
}

Galaxy.childContextTypes = {
    planetClickHandler: React.PropTypes.func,
};

export default Galaxy;