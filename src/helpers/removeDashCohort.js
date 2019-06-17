let formattedLabel = obj => {
  let newName = obj.forEach(item => (item.label = item.label.replace('-', ' ')));
  return newName;
};

export default formattedLabel;
