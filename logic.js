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

const WEIGHT_MAGS = {
  "mg": 1,
  "g": 1000,
  "kg": 1000000,
  "ounce": 28349.5,
  "pound": 453592
}

const TEMPARATURE_MAGS = {
  "K": 1,
  "F": 255.928,
  "C": 273.15
}

function lengthConvert(mag, from, to) {
  if (mag < 0) throw new Error("MAGNITUDE CAN'T BE NEGATIVE");
  if (!(from in LENGTH_MAGS)) 
    throw new Error(`INVALID CONVERSION TYPE ${from} from`);
  if (!(to in LENGTH_MAGS))
    throw new Error(`INVALID CONVERSION TYPE ${to} to`);

  const res = ((mag * LENGTH_MAGS[from]) / LENGTH_MAGS[to]).toFixed(2);
  
  // Testing 
  console.log(`${mag} ${from} => ${res} ${to}`);
  return res;
}

function weightConvert(mag, from, to) {
  if (mag < 0) throw new Error("MAGNITUDE CAN'T BE NEGATIVE");
  if (!(from in WEIGHT_MAGS))
    throw new Error(`INVALID CONVERSION TYPE ${from} from`);
  if(!(to in TEMPARATURE_MAGS))
    throw new Error(`INVALID CONVERSION TYPE ${to} to`);

  const res = ((mag * WEIGHT_MAGS[from]) / WEIGHT_MAGS[to]).toFixed(2);

  // Testing
  console.log(`${mag} ${from} => ${res} ${to}`);
  return res;
}

function temparatureConvert(mag, from, to) {
  const minF = 
}




