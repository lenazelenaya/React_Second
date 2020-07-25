import React from "react";
import Message from "../../types/message";
import ms from "../../services/messageService";
import InputMessage from "./InputMessage";
import OutputMessage from "./OutputMessage";

import "./index.css";

interface MessageProps {
  message: Message;
}

export default class MessageC extends React.Component<
  MessageProps
> {
  shouldComponentUpdate(nextProps: MessageProps) {
    if (
      nextProps.message === this.props.message
    ) {
      return false;
    } else return true;
  }

  render() {
    return ms.isYourMessage(this.props.message) ? (
      <OutputMessage
        message={this.props.message}
      />
    ) : (
      <InputMessage message={this.props.message} />
    );
  }
}
