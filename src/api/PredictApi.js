const BASE_URL = 'http://0.0.0.0:8000';

export const predict = async () => {
  try {
    const response = await fetch(`${BASE_URL}/predict`, {
      method: 'POST',
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error details:', errorData);
      throw new Error('Failed to predict');
    }

    const data = await response.json();
    return data; // 예측 결과를 반환받음
  } catch (error) {
    console.error('Error during prediction:', error);
    throw error;
  }
};
