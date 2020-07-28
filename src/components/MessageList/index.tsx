import React from "react";
// @ts-ignore
import { animateScroll } from "react-scroll";

import Message from "../../types/message";
import InputMessage from "../Message/InputMessage";
import OutputMessage from "../Message/OutputMessage";
import ms from "../../services/messageService";

import "./style.css";

interface ListProps {
  messages: Message[];
}

class MessageList extends React.Component<ListProps> {
  componentDidMount() {
    animateScroll.scrollToBottom({ containerId: "list", duration: 0 });
  }

  getMessage(message: Message, id: string) {
    if (message.user === "You") {
      return (
        <OutputMessage
          key={id}
          message={message}
        />
      );
    } else {
      return (
        <InputMessage message={message} key={id} />
      );
    }
  }

  render() {
    return (
      <div className="message-list" id="list">
        {ms.groupByDate(this.props.messages!).map((groupsByDate, id) => (
          <div className="message-list-group" key={id}>
            <div className="separator">{groupsByDate.date}</div>
            {groupsByDate.messages.map((message: Message, id: string) =>
              this.getMessage(message, id)
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;
