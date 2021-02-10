const transformCondition = (value: string) => {
  switch (value) {
    case 'new':
      return 'Nuevo';
    case 'used':
      return 'Usado';
    default:
      return '';
  }
};

export default transformCondition;
