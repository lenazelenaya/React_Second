import React from "react";
import Message from "../../types/message";
import { connect } from "react-redux";
import { deleteMessage, toggleModal, setEdited } from "../../actions/chatActions";

interface OutputProps {
  message: Message;
  deleteMessage: Function;
  setEdited: Function;
}

class OutputMessage extends React.Component<OutputProps> {
  shouldComponentUpdate(nextProps: OutputProps) {
    if (nextProps.message === this.props.message) {
      return false;
    } else return true;
  }

  handleEdit() {
    setEdited(this.props.message);
    toggleModal();
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
              onClick={() => this.handleEdit()}
            >
              Edit
            </div>
            <div
              className="message-delete action"
              onClick={() => this.props.deleteMessage(this.props.message.id)}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteMessage,
  setEdited,
  toggleModal,
};

export default connect(null, mapDispatchToProps)(OutputMessage);
