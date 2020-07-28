import React from "react";
import { connect } from "react-redux";

import Message from "../types/message";
import cs from "../services/chatService";
import MessageList from "../components/MessageList";
import Spinner from "../components/Spinner";
import ChatHeader from "../components/ChatHeader/index";
import MessageInput from "../components/MessageInput/index";
import * as chatAction from "../actions/chatActions";

import "./chat.css";

interface ChatProps {
  isLoading: boolean;
  messages?: Message[];
  participants?: number;
  name: string;
  initStorage: Function;
  hideLoading: Function;
  addMessage: Function;
}

class Chat extends React.PureComponent<ChatProps> {
  componentDidMount() {
    cs.loadData().then(({ messages, participants }) => {
      this.props.initStorage(messages, participants);
      this.props.hideLoading();
    });
  }

  render() {
    if (this.props.isLoading)
      return (
        <div className="chat-window">
          <Spinner />
        </div>
      );
    else
      return (
        <div className="chat-window">
          <ChatHeader
            name={this.props.name}
            participants={this.props.participants!}
            messageCount={this.props.messages!.length}
            lastMessage={this.props.messages![this.props.messages!.length - 1]
              .timeShow!}
          />
          <MessageList messages={this.props.messages!} />
          <MessageInput />
        </div>
      );
  }
}

interface Store {
  chat: {
    isLoading: boolean;
    messages?: Message[];
    participants?: number;
    name: string;
  };
}

const mapStateToProps = (state: Store) => {
  return {
    isLoading: state.chat.isLoading,
    messages: state.chat.messages,
    participants: state.chat.participants,
    name: state.chat.name,
  };
};

const mapDispatchToProps = {
  initStorage: chatAction.initStorage,
  hideLoading: chatAction.hideLoading,
  addMessage: chatAction.addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
