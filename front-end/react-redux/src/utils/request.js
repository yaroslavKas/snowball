import axios from 'axios';

export default {
  listNotes() {
    return axios.get('http://localhost:8080/notes');
    // return new Promise((success, fail) => {
    //   const request = new XMLHttpRequest();
    //   request.open('GET', url, true);
    //
    //   request.addEventListener('load', () => {
    //     request.status >= 200 && request.status < 400
    //       ? success(request.responseText)
    //       : fail(new Error(`Request Failed: ${request.statusText}`));
    //   });
    //
    //   request.addEventListener('error', () => {
    //     fail(new Error('Network Error'));
    //   });
    //
    //   request.send();
    // });

  },

  createNote(data) {
    return axios.post('http://localhost:8080/notes', data);
  }
}