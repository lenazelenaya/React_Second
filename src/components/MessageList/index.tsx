import React from "react";
import Message from "../../types/message";
import MessageC from "../Message/index";
import ms from "../../services/messageService";

import "./index.css";

interface ListProps {
  messages: Message[];
}

class MessageList extends React.Component<ListProps> {
  render() {
    return (
      <div className="message-list" id="list">
        {ms.groupByDate(this.props.messages!).map((groupsByDate, id) => (
          <div className="message-list-group" key={id}>
            <div className="separator">{groupsByDate.date}</div>
            {groupsByDate.messages.map((message: Message, id: string) => (
              <MessageC key={id} message={message} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;
