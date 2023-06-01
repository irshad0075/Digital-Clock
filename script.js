window.onload = function () {
  digitalClock();
};

function digitalClock() {
  // Actual device time

  let Time = new Date();

  //  get hour
  let Hour = Time.getHours();

  ///  Ampm correction
  let amPm = "";
  if (Hour <= 11) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }

  //   hours 0 correction
  if (Hour === 0) {
    Hour = 12;
  } else if (Hour > 12) {
    Hour = Hour - 12;
  }

  //  hour 0 attachement

  if (Hour <= 9) {
    Hour = `0${Hour}`;
  } else {
    Hour = Hour;
  }

  // minutes

  let minutes = Time.getMinutes();

  // minutes 0 attachement
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  } else {
    minutes = minutes;
  }

  //  seconds

  let seconds = Time.getSeconds();

  // seconds 0 attachement
  if (seconds <= 9) {
    seconds = `0${seconds}`;
  } else {
    seconds = seconds;
  }

  //  Day of week
  let daysArr = [
    "Sunday",
    "Monday",
    "Tusday",
    "wednesDay",
    "Thursday",
    " Friday",
    "saturday",
  ];

  let dayWeek = daysArr[Time.getDay()];

  // Month
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let Month = monthArray[Time.getMonth()];

  //  Date of month
  let date = Time.getDate();

  //  All combine

  let combine1 = `${dayWeek}, ${Month} ${date} `;

  //  results area
  document.getElementById(`Hour`).innerHTML = Hour;
  document.getElementById(`Minutes`).innerHTML = minutes;
  document.getElementById(`Seconds`).innerHTML = seconds;
  document.getElementById(`AMPM`).innerHTML = amPm;

  document.getElementById(`MonthsdaysDate`).innerHTML = combine1;
}

setInterval(digitalClock, 1000);
