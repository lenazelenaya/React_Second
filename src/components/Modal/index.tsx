import React from "react";
import { connect } from "react-redux";

import { editMessage } from "../../actions/chatActions";
import { hideModal } from "../../actions/MessageAction";
import Message from "../../types/message";

import "./index.css";

interface ModalProps {
  editMessage: Function;
  hideModal: Function;
  messages?: Message[];
  currentMessageId?: string;
}

interface ModalState {
  text: string;
}

class EditModal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }

  componentDidMount() {
    const messageId = this.props.currentMessageId;
    const currMessage = this.props.messages!.find(
      (message) => message.id === messageId
    );
    this.setState({ text: currMessage!.text });
  }

  handleTyping(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ text: event.currentTarget.value });
  }

  handleEdit() {
    this.props.editMessage(this.props.currentMessageId, {
      text: this.state.text,
    });
    this.props.hideModal();
  }

  handleClose() {
    this.props.hideModal();
  }


  render() {
    let text = this.state.text;
    return (
      <div className="modal-layer">
        <div className="modal-root">
          <div className="modal-header">
            <span>Edit Message</span>
          </div>
          <div className="modal-body">
            <div className="edit-form">
              <input
                type="text"
                className="edit-text-area"
                value={text}
                onChange={this.handleTyping}
              />
              <button className="edit-btn" onClick={this.handleEdit}>
                Edit
              </button>
              <button
                className="cancel-btn"
                onClick={() => this.handleClose()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface Store{
  chat: {
    messages?: Message[];
  };
  message: {
    currentMessageId: string;
  };
}


const mapStateToProps = (state: Store) => {
  return {
    messages: state.chat.messages,
    currentMessageId: state.message.currentMessageId,
  };
};

const mapDispatchToProps = {
  editMessage,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);