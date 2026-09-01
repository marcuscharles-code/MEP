import axios from 'axios';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleUserMessage(message) {
    // Call your AI service or endpoint here
    const response = await this.getResponseFromAI(message);
    const botMessage = this.createChatBotMessage(response);
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));
  }

  async getResponseFromAI(userMessage) {
    // Replace with your AI service logic
    // For example, calling a Dialogflow API
    try {
      const res = await axios.post('YOUR_API_ENDPOINT', {
        query: userMessage
      });
      return res.data.response; // Adjust this based on your API response
    } catch (error) {
      console.error("Error fetching response:", error);
      return "Sorry, I couldn't get a response!";
    }
  }
}

export default ActionProvider;
