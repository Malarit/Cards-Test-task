import axios from "axios";

export const getPromise = () => {
  return [...new Array(8)].map((_, i) =>
    axios.get(`https://some-random-api.ml/animal/cat`)
  );
};
