export const sendMessageToBot = async (message) => {
  try {
    const response = await fetch(`http://localhost:8000/chatbot?question=${encodeURIComponent(message)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data.answer; // `answer`는 FastAPI에서 반환하는 키입니다.
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Error: 응답을 받을 수 없습니다.';
  }
};
