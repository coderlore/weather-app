export let formattedTime = "";

function convertTime(unixTime) {
  const date = new Date(unixTime * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;
  formattedTime = `${hours}:${minutes.substr(-2)}`;

  // console.log(formattedTime);
}

export default convertTime;
