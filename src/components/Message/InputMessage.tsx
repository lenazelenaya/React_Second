import React from "react";
import Message from "../../types/message";
import { connect } from "react-redux";
import { setLike } from '../../actions/messageActions'

interface InputProps {
  message: Message;
  setLike: Function;
}

class InputMessage extends React.Component<
  InputProps
> {
  constructor(props: InputProps) {
    super(props);
    this.addLike = this.addLike.bind(this);
  }

  addLike() {
    this.props.setLike(this.props.message.id);
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
            <div className="message-like action" onClick={() => this.addLike()}>
              <span className="like">{likes ? "You like this" : "Like?"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  setLike,
};

export default connect(null, mapDispatchToProps)(InputMessage);
