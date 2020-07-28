import React from "react";
// @ts-ignore
import { animateScroll } from "react-scroll";

import Message from "../../types/message";
import InputMessage from "../Message/InputMessage";
import OutputMessage from "../Message/OutputMessage";
import ms from "../../services/messageService";
import EditModal from "../Modal"

import "./style.css";
import { connect } from "react-redux";

interface ListProps {
  messages: Message[];
  isShownEditPage: boolean;
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
    return (this.props.isShownEditPage ? (<div className="message-list"><EditModal /></div>) : (
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
    ));
  }
}
interface Store {
  message: {
    isShownEditPage: boolean;
  };
}

const mapStateToProps = (state: Store) => {
  return {
    isShownEditPage: state.message.isShownEditPage,
  };
};
export default connect(mapStateToProps)(MessageList);