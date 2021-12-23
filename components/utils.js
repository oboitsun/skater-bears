export const calculateTimeLeft = (specificDate) => {
  const today = Date.now();

  const difference = specificDate - today;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
      minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
      seconds: Math.floor((difference / 1000) % 60).toString(),
    };
  }

  return timeLeft;
};
