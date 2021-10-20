import axios from "axios";
const headers = {
  headers: { "Content-type": "application/json" },
};
export const getList = async () => {
  var data = [];
  const { data: response } = await axios.get("api/tasks", headers);
  Object.keys(response).forEach((key) => {
    var val = response[key];
    var isCompleted =  true ;
    if (!val.title | !val.id | !val.descript) {
      isCompleted =  false ;
    }
    data.push({...val, isCompleted:isCompleted});
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
      console.log(res.data);
    });
};

export const deleteAllItem = () => {
  axios
    .delete(`api/task/clearall`, headers)
    .then((res) => {
      console.log(res.data);
    })
    .catch((res) => {
      console.log(res.data);
    });
};
export const deleteItem = (item) => {
  axios
    .delete(`api/task/${item.id}`, headers)
    .then((res) => {
      console.log(res.data);
    })
    .catch((res) => {
      console.log(res.data);
    });
};

export const updateItem = (data, id) => {
  axios
    .put(
      `api/task/${id}`,
      {
        title: data.title,
        descript: data.descript,
      },
      headers
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((res) => {
      console.log(res.data);
    });
};
