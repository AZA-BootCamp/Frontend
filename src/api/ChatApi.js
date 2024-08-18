export const sendMessageToBot = async (message) => {
  try {
    const response = await fetch(`http://localhost:8000/chatbot?question=${encodeURIComponent(message)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message:', error);
    return { answer: 'Error: 응답을 받을 수 없습니다.' };
  }
};

export const getInitialBotMessage = async () => {
  try {
    const response = await fetch('http://localhost:8000/chatbot_hi');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching initial message:', error);
    return { message: 'Error: 초기 메시지를 불러올 수 없습니다.' };
  }
};
