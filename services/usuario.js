import axios from "axios";

const baseUrl = "https://357canqt9k.execute-api.us-east-1.amazonaws.com/dev";

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const formLogin = async (credentials) => {
  return await axios

    .post(`${baseUrl}/auth`, credentials, headers)
    .then((data) => {
      return data.status;
    })
    .catch((error) => {
      if (error.response.data === undefined) {
        return error.message;
      } else {
        return error.response.data.message;
      }
    });
};

// ----------------------------------

export const formRegister = async (credentials) => {
  console.log(credentials);
  await axios
    .post(
      "https://mf7z0a0x6k.execute-api.us-east-1.amazonaws.com/default/apits-dev-AuthRegister",
      credentials,
      headers
    )
    .then(function (response) {
      return response.status;
    })
    .catch(function (error) {
      console.log(error);
    });
};
