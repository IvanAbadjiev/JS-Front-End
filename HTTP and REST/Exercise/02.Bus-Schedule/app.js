function solve() {
  const departButton = document.querySelector("#depart");
  const arriveButton = document.querySelector("#arrive");
  const busInfoBox = document.querySelector("#info .info");

  let busStopInfo = {
    name: "",
    next: "depot",
  };
  function depart() {
    // TODO:

    fetch(` http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`)
      .then((res) => res.json())
      .then((busStop) => {
        busStopInfo = busStop;
        departButton.disabled = true;
        arriveButton.disabled = false;
        busInfoBox.textContent = `Next stop ${busStopInfo.name}`;
      });
  }

  async function arrive() {
    // TODO:
    departButton.disabled = false;
    arriveButton.disabled = true;
    busInfoBox.textContent = `Arriving at ${busStopInfo.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
