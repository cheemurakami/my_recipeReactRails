import React from "react";
import { connect } from "react-redux";
import { FaRegThumbsUp } from "react-icons/fa";
export const Likes = ({ likes }) => {
  return (
    <span className="icon-tip">
      <FaRegThumbsUp />
      <span className="icon-tip"> {likes.length} LIKES</span>
    </span>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Likes);