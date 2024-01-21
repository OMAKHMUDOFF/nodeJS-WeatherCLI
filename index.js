import getArgs from "./helpers/args.js";
import { printErr, printHelp, printSucc } from "./services/log.service.js";
import { saveKeyVal } from "./services/storage.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyVal("token", token);
    printSucc("Token was saved");
  } catch (error) {
    printErr(error.message);
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);
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
};

startCLI();
