import fs from "fs";
import os from "os";
import path from "path";

const filePath = path.join(os.homedir(), "weather-data.json");

const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
};

const saveKeyVal = async (key, val) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await fs.promises.readFile(filePath);
    data = JSON.parse(file);
  }

  data[key] = val;
  await fs.promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyVal = async (key) => {
  if (await isExist(filePath)) {
    const file = await fs.promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }

  return undefined;
};

const isExist = async (path) => {
  try {
    await fs.promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { getKeyVal, saveKeyVal, TOKEN_DICTIONARY };
