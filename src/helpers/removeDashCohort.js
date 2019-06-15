let formattedLabel = obj => {
  obj.forEach(item => (item.label = item.label.replace('-', ' ')));
  return obj;
};

export default formattedLabel;
