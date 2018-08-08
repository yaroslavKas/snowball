import noteRoutes from './note_routes';

module.exports = (app, db) => {
  noteRoutes(app, db);
};