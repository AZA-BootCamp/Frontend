const BASE_URL = 'http://0.0.0.0:8000';

export const getUserFeedback = async () => {
  try {
    const response = await fetch(`${BASE_URL}/get-user-feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user feedback');
    }

    const data = await response.json();
    return {
      feedback: data.feedback, // 피드백 데이터
      brand: data.brand, // 브랜드 데이터
      category: data.category, // 카테고리 데이터
    };
  } catch (error) {
    console.error('Error fetching user feedback:', error);
    throw error;
  }
};
