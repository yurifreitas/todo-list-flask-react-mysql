import axios from "axios";
const headers = {
  headers: { "Content-type": "application/json" },
};
export const getList = async () => {
  var data;
  const { data: response } = await axios.get("api/tasks", headers);
  Object.keys(response).forEach((key) => {
    var val = response[key];
    var isCompleted = { isCompleted: true };
    if (!val.title | !val.id | !val.descript) {
      isCompleted = { isCompleted: true };
    }
    data.push(...val, isCompleted);
  });
  return data;
};

export const addToList = (data) => {
  axios
    .post(
      "api/task",
      {
        title: data.title,
        descript: data.descript,
      },
      headers
    )
    .then((res) => {
      console.log(res.json());
    });
};

export const deleteAllItem = () => {
  axios
    .delete(`clearall`, headers)
    .then((res) => {
      console.log(res.json());
    })
    .catch((res) => {
      console.log(res.json());
    });
};
export const deleteItem = (id) => {
  axios
    .delete(`${id}`, headers)
    .then((res) => {
      console.log(res.json());
    })
    .catch((res) => {
      console.log(res.json());
    });
};

export const updateItem = (data, id) => {
  axios
    .put(
      `${id}`,
      {
        title: data.title,
        descript: data.descript,
      },
      headers
    )
    .then((res) => {
      console.log(res.json());
    })
    .catch((res) => {
      console.log(res.json());
    });
};
