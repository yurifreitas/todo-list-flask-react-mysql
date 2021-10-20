import axios from "axios";
const headers = {
  headers: { "Content-type": "application/json" },
};
const url = "http://localhost:3000";
export const getList = async () => {
  var data = [];
  const { data: response } = await axios.get(url+"/api/tasks", headers);
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
      url+"/api/task",
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
    .delete(url+`/api/task/clearall`, headers)
    .then((res) => {
      console.log(res.data);
    })
    .catch((res) => {
      console.log(res.data);
    });
};
export const deleteItem = (item) => {
  axios
    .delete(url+`/api/task/${item.id}`, headers)
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
      url+`/api/task/${id}`,
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
