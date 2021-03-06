import React from "react";
import PropTypes from "prop-types";
import Favorite from "./Favorite";
import "./EmojiResultRow.css";

const EmojiResultsRow = props => {
  const {
    symbol,
    title,
    addToFavorite,
    removeFromFavorite,
    codePointHex,
    src,
    isFavorite,
    uid
  } = props;

  return (
    <div className="component-emoji-result-row copy-to-clipboard" data-clipboard-text={symbol}>
      <Favorite
        isFavorite={isFavorite}
        codePointHex={codePointHex}
        addToFavorite={addToFavorite}
        removeFromFavorite={removeFromFavorite}
        uid={uid}
      />
      <img alt={title} src={src} />
      <span className="title">{symbol.codePointAt(0)} </span>
      <span className="title">{codePointHex} </span>
      <span className="title">{title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
};

EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};

export default EmojiResultsRow;
