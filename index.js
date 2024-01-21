import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printErr, printHelp, printSucc } from "./services/log.service.js";
import { TOKEN_DICTIONARY, saveKeyVal } from "./services/storage.service.js";

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

const startCLI = () => {
  const args = getArgs(process.argv);
  console.log(process.env);
  if (args.h) {
    printHelp();
    // help
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    return saveToken(args.t);
    // save token
  }

  // result
  getWeather(process.env.CITY ?? "uzbekistan");
};

startCLI();
