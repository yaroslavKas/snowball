module.exports = () => {
  let myDate = new Date();
  let hours = myDate.getHours();
  let minute = myDate.getMinutes();
  let second = myDate.getSeconds();

  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  return `Current time: ${hours}:${minute}:${second}`;
};