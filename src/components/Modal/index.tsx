import React from "react";
import { Store } from "../../types/store";
import { editMessage, toggleModal } from "../../actions/chatActions";
import "./index.css";
import Message from "../../types/message";
import { connect } from "react-redux";

interface ModalProps {
  message: Message;
  toggle: Function;
  edit: Function;
}

interface ModalState {
  text: string;
}
class EditModal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      text: this.props.message.text,
    };
    this.setText = this.setText.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }

  setText(text: string) {
    this.setState({ text });
  }

  handleEditClick() {
    this.setText("");
    this.props.toggle();
    this.props.edit(this.props.message, this.state.text);
  }

  handleTyping(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ text: event.currentTarget.value });
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
                onChange={() => this.handleTyping}
              />
              <button className="edit-btn" onClick={this.handleEditClick}>
                Edit
              </button>
              <button
                className="cancel-btn"
                onClick={() => this.props.toggle()}
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

const mapStateToProps = (state: Store) => {
  return {
    message: state.message.currentMessage,
  };
};

const mapDispatchToProps = {
  toggle: toggleModal,
  edit: editMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
