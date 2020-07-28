import React from "react";
import { connect } from "react-redux";


import { addMessage } from "../../actions/chatActions";
import {
  setCurrentMessageId,
  showModal,
} from "../../actions/OutputMessageAction";
import Message from "../../types/message";
import cs from "../../services/chatService";

interface InputState {
  typeMessage: string;
}

interface InputProps {
  messages: Message[];
  addMessage: Function;
  setCurrentMessageId: Function;
  showModal: Function;
}

class SendMessageInput extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      typeMessage: "",
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  onSend() {
    const message: Message = {
      id: cs.generateId(),
      user: "You",
      userId: "0",
      text: this.state.typeMessage,
      createdAt: new Date(),
      timeShow: cs.getTimeShow(new Date()),
      likes: 0,
    };
    this.props.addMessage(message);
  }
  handleKeyDown(event: React.KeyboardEvent) {
    if (event.keyCode === 38) {
      const lastMessage = this.props.messages[this.props.messages.length - 1];
      if (lastMessage.user === "You") {
        this.props.setCurrentMessageId(lastMessage.id);
        this.props.showModal();
      }
    }
  }

  handleTyping(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ typeMessage: event.currentTarget.value });
  }

  render() {
    return (
      <div className="message-input">
        <form className="message-input-area">
          <input
            type="text"
            className="text-area"
            value={this.state.typeMessage}
            onChange={this.handleTyping}
            onKeyDown={this.handleKeyDown}
          />
        </form>
        <button className="message-input-btn" onClick={() => this.onSend()}>
          Send
        </button>
      </div>
    );
  }
}

interface Store {
  chat: {
    messages?: Message[];
  };
}

const mapStateToProps = (state: Store) => {
  return {
    messages: state.chat.messages!,
  };
};

const mapDispatchToProps = {
  addMessage,
  showModal,
  setCurrentMessageId,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageInput);