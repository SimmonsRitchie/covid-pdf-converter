const copyToClipboard = (dataStr) => {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = dataStr;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};
export default copyToClipboard;
