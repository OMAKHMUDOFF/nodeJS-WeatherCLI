const getArgs = (args) => {
  const res = {};
  const [executer, file, ...rest] = args;
  rest.forEach((val, ind, arr) => {
    if (val.charAt() == "-") {
      if (ind == arr.length - 1) {
        res[val.substring(1)] = true;
      } else if (arr[ind + 1].charAt(0) != "-") {
        res[val.substring(1)] = arr[ind + 1];
      } else {
        res[val.substring(1)] = true;
      }
    }
  });
  
  return res;
};

module.exports = getArgs;
