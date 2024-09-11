// Length of magnitudes with respect to millimeter
const LENGTH_MAGS = {
  "mm": 1,
  "cm": 10,
  "m" : 1000,
  "km": 1000000,
  "inch": 25.4,
  "foot": 304.8,
  "yard": 914.4,
  "mile": 1609344
}

function lengthConvert(mag, from, to) {
  if (mag < 0) throw new Error("MAGNITUDE CAN'T BE NEGATIVE");
  if (!(from in LENGTH_MAGS)) 
    throw new Error(`INVALID CONVERSION TYPE ${from} form`);
  if (!(to in LENGTH_MAGS))
    throw new Error(`INVALID CONVERSION TYPE ${to} to`);

  const res = ((mag * LENGTH_MAGS[from]) / LENGTH_MAGS[to]).toFixed(2);
  
  // Testing 
  console.log(`${mag} ${from} => ${res} ${to}`);
  return res;
}
