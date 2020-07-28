import React from "react";
import { connect } from "react-redux";

import Message from "../../types/message";
import { changeLike } from "../../actions/chatActions";

import "./style.css"

interface MessageProps {
  message: Message;
  changeLike: Function;
}

class InputMessage extends React.Component<MessageProps> {

  onLike() {
    this.props.changeLike(this.props.message.id);
  }

  render() {
    let likes = this.props.message.likes;
    return (
      <div className="message-container not-your-message">
        <div className="message-avatar">
          <div className="message-avatar-shadow">
            <img
              className="avatar"
              src={this.props.message.avatar}
              alt="avatar"
            />
          </div>
        </div>
        <div className="message-content">
          <div className="message-meta">
            <span className="message-date">{this.props.message.timeShow}</span>
            <span className="message-author">{this.props.message.user}</span>
          </div>
          <div className="message-text">{this.props.message.text}</div>
          <div className="actions">
            <div className="message-like action" onClick={() => this.onLike()}>
              <span className="like">{likes ? "You like this" : "Like?"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeLike,
};

export default connect(null, mapDispatchToProps)(InputMessage);
