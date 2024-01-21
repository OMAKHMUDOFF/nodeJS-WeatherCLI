import https from "https";
import { TOKEN_DICTIONARY, getKeyVal } from "./storage.service.js";

const getWeather = async (city) => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const token = getKeyVal(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("Api doesn't exist, -t [API_KEY] for saving token");
  }

  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.append("q", city);
  url.searchParams.append("appid", token);
  url.searchParams.append("lang", "en");
  url.searchParams.append("units", "metric");

  https.get(url, (resp) => {
    let res = "";
    resp.on("data", (chunk) => {
      res += chunk;
    });
    resp.on("end", () => {
      console.log(res);
    });
  });
};

export { getWeather };
