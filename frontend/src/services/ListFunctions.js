import axios from 'axios'

export const getList = () => {
    return axios
        .get('api/tasks', {
            headers: { "Content-type": "application/json" }
        })
        .then(res => {
            var data = []
            Object.keys(res.data).forEach((key) => {
                var val = res.data[key]
                data.push([val.title, val.id])
            })

            return data
        })
}

export const addToList = data => {
    return axios
        .post(
            'api/task', {
                title: data.title,
                descript:data.descript
            }, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
}

export const deleteAllItem = () => {
    axios
        .delete(
            `api/task/clearall`, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
        .catch((res) => {
            console.log(res)
        })
}

export const updateItem = (data, id) => {
    return axios
        .put(
            `api/task/${id}`, {
                title: data
            }, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
}