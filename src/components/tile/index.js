import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const Tile = ({ onClick, value }) => {
  return (
    <button className="tile" onClick={onClick}>
      {value}
    </button>
  );
};

export const SelectedTile = ({ onClick, value }) => {
  return (
    <button className="tile selected" onClick={onClick}>
      {value}
    </button>
  );
};

export const HighlightedTile = ({ onClick, value }) => {
  return (
    <button className="tile highlighted" onClick={onClick}>
      {value}
    </button>
  );
};

const propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

Tile.propTypes = propTypes;
SelectedTile.propTypes = propTypes;
HighlightedTile.propTypes = propTypes;
