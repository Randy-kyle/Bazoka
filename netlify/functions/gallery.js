exports.handler = async () => {
  // In a real app, this would fetch from a database or storage
  const mockImages = [
    { id: 1, name: 'Content 1', url: './assets/images/images1.png' },
    { id: 2, name: 'Content 2', url: './assets/images/images2.png' },
    { id: 3, name: 'Content 3', url: './assets/images/images3.png' },
    { id: 4, name: 'Content 4', url: './assets/images/images4.png' },
    { id: 5, name: 'Content 5', url: './assets/images/images5.png' },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(mockImages),
  };
};
