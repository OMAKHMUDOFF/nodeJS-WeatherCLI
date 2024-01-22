import getArgs from "./helpers/args.js";
import { getIcons, getWeather } from "./services/api.service.js";
import {
  printErr,
  printHelp,
  printSucc,
  printWeather,
} from "./services/log.service.js";
import {
  TOKEN_DICTIONARY,
  getKeyVal,
  saveKeyVal,
} from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printErr("Token doesn't exist");
    return;
  }
  try {
    await saveKeyVal(TOKEN_DICTIONARY.token, token);
    printSucc("Token was saved");
  } catch (error) {
    printErr(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printErr("City doesn't exist");
    return;
  }
  try {
    await saveKeyVal(TOKEN_DICTIONARY.city, city);
    printSucc("City was saved");
  } catch (error) {
    printErr(error.message);
  }
};

// const city = process.env.CITY;
// console.log(city);

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyVal(TOKEN_DICTIONARY.city));
    const resp = await getWeather(city);
    printWeather(resp, getIcons(resp.weather[0].icon));
  } catch (error) {
    if (error?.resp?.status == 404) {
      printErr("City not found");
    } else if (error?.resp?.status == 401) {
      printErr("Invalid Token");
    } else {
      printErr(error.message);
    }
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
    // help
  }
  if (args.s) {
    return saveCity(args.s);
    // save city
  }
  if (args.t) {
    return saveToken(args.t);
    // save token
  }
  return getForcast();
  // result
};

startCLI();
