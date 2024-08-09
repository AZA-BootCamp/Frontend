const BASE_URL = 'http://127.0.0.1:8000';

export const fetchBrands = async () => {
  try {
    const response = await fetch(`${BASE_URL}/brands`);
    if (!response.ok) {
      throw new Error('Failed to fetch brands');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
};

export const saveUserData = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/save-user-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // JSON 형식으로 변환
    });

    if (!response.ok) {
      throw new Error('Failed to save user data');
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
};

export const fetchAvailableCategories = async (gender, brand) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/${gender}/${brand}`);
    if (!response.ok) {
      throw new Error('Failed to fetch available categories');
    }
    const data = await response.json();
    return Object.keys(data); // 피드백 데이터에서 카테고리 목록만 반환
  } catch (error) {
    console.error('Error fetching available categories:', error);
    return [];
  }
};
