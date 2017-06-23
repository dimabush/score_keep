import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player';


export default class PlayerList extends React.Component {
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    };

    renderPlayers() {
        if (this.props.playersList.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Add your first player to get started!</p>
                </div>
            )
        } else {
            return this.props.playersList.map((player) => {

                return <Player key={player._id} player={player}/>;
            });
        }
    };
}

PlayerList.propType = {
    playersList: PropTypes.array.isRequired
};