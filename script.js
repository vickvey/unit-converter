// Length of magnitudes with respect to millimeter
const LENGTH_MAGS = {
  mm: 1,
  cm: 10,
  m: 1000,
  km: 1000000,
  inch: 25.4,
  foot: 304.8,
  yard: 914.4,
  mile: 1609344,
};

const WEIGHT_MAGS = {
  mg: 1,
  g: 1000,
  kg: 1000000,
  ounce: 28349.5,
  pound: 453592,
};

function lengthConvert(mag, from, to) {
  if (mag < 0) throw new Error("MAGNITUDE CAN'T BE NEGATIVE");
  if (!(from in LENGTH_MAGS))
    throw new Error(`INVALID CONVERSION TYPE ${from} from`);
  if (!(to in LENGTH_MAGS)) throw new Error(`INVALID CONVERSION TYPE ${to} to`);

  const res = ((mag * LENGTH_MAGS[from]) / LENGTH_MAGS[to]).toFixed(5);

  // Testing
  console.log(`${mag} ${from} => ${res} ${to}`);
  return res;
}

function weightConvert(mag, from, to) {
  if (mag < 0) throw new Error("MAGNITUDE CAN'T BE NEGATIVE");
  if (!(from in WEIGHT_MAGS))
    throw new Error(`INVALID CONVERSION TYPE ${from} from`);
  if (!(to in TEMPARATURE_MAGS))
    throw new Error(`INVALID CONVERSION TYPE ${to} to`);

  const res = ((mag * WEIGHT_MAGS[from]) / WEIGHT_MAGS[to]).toFixed(5);

  // Testing
  console.log(`${mag} ${from} => ${res} ${to}`);
  return res;
}

console.log("script.js connected!");
const form = document.querySelector("#length-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const magnitude = formData.get("magnitude");
  const from = formData.get("select-from");
  const to = formData.get("select-to");

  const res = lengthConvert(magnitude, from, to);
  const ans = document.querySelector("#answer");
  const p = document.createElement("P");
  p.innerText = `${magnitude} ${from} = ${res} ${to}`;
  ans.append(p);
});

// reset button
document.querySelector("#reset").addEventListener("click", (e) => {
  document.getElementById("answer").innerHTML = "";
});
