import axios from 'axios';
import apiSettings from '../../config/api';
import {setApiPromise} from "./setApiPromis";

const modifyResponse = (r) => {
  return new Promise((resolve, reject) => {
    if (r && r.data) {
      if (r.data.success) {
        return resolve(r.data);
      }
      return reject(r.data.error || {});
    }
    const err = {};
    return reject(err);
  })
};

export default {
  get: (methodName, data, actionTypes) => {
    const url = apiSettings.endpoints.genUrl(methodName);
    if (!url) {
      return Promise.reject(new Error({}));
    }
    return axios({
      method: 'get',
      params: data || {},
      url,
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((res) => {
        return modifyResponse(res)
      })
      .catch((err) => {
        console.error(`${actionTypes.rejected} ===>`, err);
        return Promise.reject(err || {});
      })
  },

  post: (methodName, data, actionTypes) => {
    const url = apiSettings.endpoints.genUrl(methodName);
    if (!url) {
      return Promise.reject(new Error({}));
    }
    return axios.post(url, data, {
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((res) => {
        return modifyResponse(res)
      })
      .catch((err) => {
        console.error(`${actionTypes.rejected} ===>`, err);
        return Promise.reject(err || {});
      })
  },

  formData: (methodName, data, actionTypes) => {
    const url = apiSettings.endpoints.genUrl(methodName);
    if (!url) {
      return Promise.reject(new Error({}));
    }
    const fd = new FormData();
    // console.log(data);
    for (let i = 0; i < Object.keys(data).length; i++) {
      const val = data[Object.keys(data)[i]];
      if (Object.keys(data)[i] === 'images' && typeof val === 'object') {
        for (let k = 0; k < val.length; k++) {
          fd.append(Object.keys(data)[i], val[k]);
        }
      } else {
        fd.append(Object.keys(data)[i], val);
      }
    }

    return axios.post(url, fd, {
      method: 'post',
      headers: {
        'Content-type': 'multipart/form-data',
      }
    })
      .then((res) => {
        return modifyResponse(res)
      })
      .catch((err) => {
        console.error(`${actionTypes.rejected} ===>`, err);
        return Promise.reject(err || {});
      })
  },

  requestStatus : setApiPromise
};