// GetFeedback.js
const BASE_URL = 'http://0.0.0.0:8000';

export const getUserFeedback = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/get-user-feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // userData는 JSON 형식이어야 합니다.
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user feedback');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user feedback:', error);
    throw error;
  }
};
