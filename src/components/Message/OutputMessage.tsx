import React from "react";
import { connect } from "react-redux";

import Message from "../../types/message";
import { deleteMessage, editMessage } from "../../actions/chatActions";
import {
  showModal,
  setCurrentMessageId,
} from "../../actions/OutputMessageAction";

interface MessageProps {
  message: Message;
  deleteMessage: Function;
  editMessage: Function;
  showModal: Function;
  setCurrentMessageId: Function;
}
interface MessageState {
  isSure: boolean;
}

class OutputMessage extends React.Component<MessageProps, MessageState> {
  constructor(props: MessageProps) {
    super(props);
    this.state = {
      isSure: false,
    };
  }

  handleDelete() {
    this.props.deleteMessage(this.props.message.id);
  }

  handleSure() {
    this.setState({ isSure: true });
  }

  handleStartEditing() {
    this.props.setCurrentMessageId(this.props.message.id);
    this.props.showModal();
  }

  render() {
    return (
      <div className="message-container your-message">
        <div className="message-content">
          <div className="message-meta">
            <span className="message-date"></span>
            <span className="message-author">Your message</span>
          </div>
          <div className="message-text">{this.props.message.text}</div>
          <div className="actions">
            <div
              className="message-edit action"
              onClick={() => this.handleStartEditing()}
            >
              Edit
            </div>
            {!this.state.isSure ? (
              <button
                onClick={() => this.handleSure()}
                className="message_delete_btn action"
              >
                Delete
              </button>
            ) : null}
            {this.state.isSure ? (
              <button
                onClick={() => this.handleDelete()}
                className="message_sure_btn"
              >
                Sure?
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteMessage,
  editMessage,
  showModal,
  setCurrentMessageId,
};

export default connect(null, mapDispatchToProps)(OutputMessage);
