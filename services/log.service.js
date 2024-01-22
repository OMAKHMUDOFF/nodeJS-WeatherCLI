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

const printWeather = (res, icon) => {
  console.log(dedent`
    ${chalk.bgYellowBright("Weather")} City weather ${res.name}
    ${icon} ${res.weather[0].description}
    Temperature ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity: ${res.main.humidity}%
    Wind speed: ${res.wind.speed}
  `);
};

export { printErr, printSucc, printHelp, printWeather };
