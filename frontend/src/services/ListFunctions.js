import axios from "axios";
const headers = {
  headers: { "Content-type": "application/json" },
};
export const getList = () => {
  let data = [];
  axios
    .get("api/tasks", headers)
    .then((res) => {
      Object.keys(res.data).forEach((key) => {
        var val = res.data[key];
        var isCompleted;
        if (val.title & val.id & val.descript) {
          isCompleted = true;
        } else {
          isCompleted = false;
        }

        data.push([val.title, val.id, val.descript, isCompleted]);
      });
    })
    .catch((res) => {
      console.error(res);
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
      console.log(res);
    });
};

export const deleteAllItem = () => {
  axios
    .delete(`clearall`, headers)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });
};
export const deleteItem = (id) => {
  axios
    .delete(`${id}`, headers)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
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
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });
};
