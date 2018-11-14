import axios from 'axios';
import jwt from 'jwt-simple';

const USERS = [{
  login: 'max',
  name: 'Max',
  password: '123456'
}, {
  login: 'kotik9000',
  name: 'Marysya',
  password: '654321'
}];

const SECRET = 'react2';

export default {

  listNotes() {
    return axios.get('http://localhost:8080/notes');
  },
  createNote(data) {
    return axios.post('http://localhost:8080/notes', data);
  },
  deleteNote(noteId) {
    return axios.delete(`http://localhost:8080/notes/${noteId}`);
  },

  auth(data) {
    return axios.post('http://localhost:8080/signin', data);
  }
}