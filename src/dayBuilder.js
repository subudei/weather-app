export default function dayBuilder(d) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesdey",
    "Thursday",
    "Friday",
    "Suturday",
  ];

  let day = days[d.getDay()];

  return `${day}`;
}
