import chalk from "chalk";
import dedent from "dedent-js";

const printErr = (err) => {
  console.log(chalk.bgRed("ERROR") + " " + err);
};
const printSucc = (msg) => {
  console.log(chalk.bgGreen("Success") + " " + msg);
};

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token
  `);
};

export { printErr, printSucc, printHelp };
