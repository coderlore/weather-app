export let formattedTime = "";
export let day = "";

function convertTime(unixTime) {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(unixTime * 1000);
  day = weekday[date.getDay()];
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;
  formattedTime = `${hours}:${minutes.substr(-2)}`;

  // console.log(formattedTime);
}

export default convertTime;
