import noteRoutes from './note_routes';
// import userRoutes from './user_routes';

module.exports = (app, db) => {
  noteRoutes(app, db);
};