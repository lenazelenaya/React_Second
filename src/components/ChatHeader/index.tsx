import React from "react";
import PropTypes from "prop-types";
import "./index.css";

interface HeaderProps {
  participants: number;
  messageCount: number;
  name: string;
  lastMessage: string;
}

export default class ChatHeader extends React.Component<HeaderProps> {
  static prop = {
    name: PropTypes.string,
    participants: PropTypes.number,
    messageCount: PropTypes.number,
    lastMessage: PropTypes.string,
  };

  render() {
    return (
      <div className="chat-header">
        <div className="chat-name chat-header-div">{this.props.name}</div>
        <div className="chat-header-div chat-header-counts">
          <div className="participants-count">
            <span className="text">
              participants: {"      "}
              {this.props.participants}
            </span>
          </div>
          <div className="messages-count">
            <span className="text">
              messages: {"       "}
              {this.props.messageCount}
            </span>
          </div>
        </div>
        <div className="last-message chat-header-div">
          last message at:{"  "}
          {this.props.lastMessage}
        </div>
      </div>
    );
  }
}
