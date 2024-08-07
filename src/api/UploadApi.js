const BASE_URL = 'http://127.0.0.1:8000/api';

export const uploadFiles = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  const response = await fetch(`${BASE_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload files');
  }

  const data = await response.json();
  return data;
};

export const listFiles = async () => {
  const response = await fetch(`${BASE_URL}/files`);
  if (!response.ok) {
    throw new Error('Failed to fetch files');
  }

  const data = await response.json();
  return data.files;
};

export const deleteFile = async (fileName) => {
  const response = await fetch(`${BASE_URL}/delete/${encodeURIComponent(fileName)}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete file');
  }

  const data = await response.json();
  return data;
};
