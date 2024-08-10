const BASE_URL = 'http://0.0.0.0:8000'; // 백엔드 서버 주소

export const getMeasurementData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/measurements`, {
      method: 'GET', // GET 메소드 사용
    });

    if (!response.ok) {
      throw new Error('Failed to fetch measurement data');
    }

    const data = await response.json();
    return data; // 측정 데이터를 반환
  } catch (error) {
    console.error('Error fetching measurement data:', error);
    throw error;
  }
};
