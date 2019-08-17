import React from "react";
import Icon from "./_base";
import CommentIcon from "frontend/icons/comment.svg";
 
const Comment = props => {
  return <Icon icon={CommentIcon} {...props} />;
};

export default Comment