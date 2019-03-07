import axios from 'axios';

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

  registration(data) {
    return axios.post('http://localhost:8080/auth', data);
  }
}