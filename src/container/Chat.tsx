import React from "react";
import Message from "../types/message";
import cs from "../services/chatService";
import MessageList from "../components/MessageList";
import Spinner from "../components/Spinner";
import ChatHeader from "../components/ChatHeader/index";
import MessageInput from "../components/MessageInput/index";
import MainHeader from "../components/MainHeader/index";
import Footer from "../components/Footer/index";
import EditModal from "../components/Modal";
import { Store } from "../types/store";
import * as chatAction from "../actions/chatActions";
import { connect } from "react-redux";

import "./chat.css";

interface ChatProps {
  isLoading: boolean;
  modalOn: boolean;
  messages?: Message[];
  participants?: number;
  name: string;
  setInitial: Function;
  setStorage: Function;
  hideLoading: Function;
  addMessage: Function;
  toggleModal: Function;
  toggleModalOnKey: Function;
}

class Chat extends React.Component<ChatProps> {
  // componentWillMount() {
  //   this.props.setInitial();
  // }
  UNSAFE_componentWillMount() {
    this.props.setInitial();
    cs.loadData().then(({ messages, participants }) => {
      this.props.setStorage(messages, participants);
      this.props.hideLoading();
    });
  }
  // useEffect() {
  //   () => {
  //     document.addEventListener("keydown", (event) => {
  //       if (event.key === "ArrowUp") {
  //         this.handleArrowUp();
  //       }
  //     });
  // //   };
  // // }

  // handleArrowUp(){
  //   this.props.toggleModalOnKey();
  // }

  render() {
    const lastMessage = this.props.messages
      ? this.props.messages![this.props.messages!.length - 1].timeShow
      : "";
    return (
      <div className="wrapper">
        {this.props.modalOn ? <EditModal /> : ""}
        <div className="chat-wrapper">
          <MainHeader name={this.props.name!} />
          {this.props.isLoading ? (
            <Spinner />
          ) : (
            <div className="chat-window">
              <ChatHeader
                name={this.props.name! + "-chat"}
                participants={this.props.participants!}
                messageCount={
                  this.props.messages ? this.props.messages!.length : 0
                }
                lastMessage={lastMessage!}
              />
              <MessageList messages={this.props.messages!} />
              <MessageInput addMessage={this.props.addMessage} />
            </div>
          )}
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: Store) => {
  return {
    isLoading: state.isLoading,
    modalOn: state.modalOn,
    messages: state.messages,
    participants: state.participants,
    name: state.name,
  };
};

const mapDispatchToProps = {
  setInitial: chatAction.setInitialState,
  setStorage: chatAction.setStorageProps,
  hideLoading: chatAction.hideLoading,
  addMessage: chatAction.addMessage,
  toggleModal: chatAction.toggleModal,
  toggleModalOnKey: chatAction.toggleModalOnKey,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
