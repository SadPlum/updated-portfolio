const axios = require("axios");

const getDogs = async () => {
  const data = await axios
    .get("http://localhost:4000/test")
    .then((res: any) => {
      console.log(res);
      const data = res.data.data;
      return data;
    });

  return data;
};

module.exports = { getDogs };
