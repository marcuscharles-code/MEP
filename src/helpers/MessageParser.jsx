// src/MessageParser.js

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      // Handle the message here, for example, call the action provider
      this.actionProvider.handleUserMessage(message);
    }
  }
  
  export default MessageParser;
  