"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import noteController from './noteController';

let noteRouter = express.Router();

noteRouter.use(bodyParser.json());

noteRouter.route('/:id')
  .get(noteController.get)
  .put(noteController.put)
  .delete(noteController.delete);

noteRouter.route('/')
  .get(noteController.getAll)
  .post(noteController.post);


module.exports = noteRouter;

// async function notes() {
//   const client = await MongoClient.connect(url);
//   const db = client.db('newApi');
//   const collection = await db.collection("notes");
//
//   let data = [
//     { name: "Tom", age: 22 },
//     { name: "Toms", age: 35 },
//     { name: "Kas", age: 45 },
//   ];
//
//
//   let res = await collection.insertMany(data);
//   console.log(res.ops);
// }
//
// notes();

// async function getNotesOne() {
//   const client = await MongoClient.connect(url);
//   const db = client.db('newApi');
//   const collection = await db.collection("notes");
//
//   let res = await collection.findOne({age: 45});
//   console.log(res);
// }
//
// getNotesOne();


// async function getNotes() {
//   const client = await MongoClient.connect(url);
//   const db = client.db('newApi');
//   const collection = await db.collection("notes");
//
//   let res = await collection.find().toArray();
//   console.log(res);
// }
//
// getNotes();

// async function getNotesSearch() {
//   const client = await MongoClient.connect(url);
//   const db = client.db('newApi');
//   const collection = await db.collection("notes");
//
//   collection.find({name: "Kas"}).forEach((res) => console.log(res)
//   );
// }
//
// getNotesSearch()

// async function getNotesSort() {
//   const client = await MongoClient.connect(url);
//   const db = client.db('newApi');
//   const collection = await db.collection("notes");
//
//   let res = await collection.find().sort(
//     {name: 1, age: -1}
//   ).toArray();
//   console.log(res);
//
// }
//
// getNotesSort()


// async function getNotesSortLimit() {
//   const client = await MongoClient.connect(url);
//   const db = client.db('newApi');
//   const collection = await db.collection("notes");
//
//   let res = await collection.find({name: "Tom"}).limit(3).toArray();
//   console.log(res);
//
// }
//
// getNotesSortLimit()

// async function notesDelete() {
//   const client = await MongoClient.connect(url);
//   const db = client.db('newApi');
//   const collection = await db.collection("notes");
//
//   let res = await collection.deleteOne({name: "Tom"}, (err, res) => {
//     console.log(res.result)
//     console.log(res.deletedCount);
//   });
//
// }
//
// notesDelete()


// async function notesUpdateOne() {
//   const client = await MongoClient.connect(url);
//   const db = client.db('newApi');
//   const collection = await db.collection("notes");
//
//   let res = await collection.updateOne(
//     {name: "Tom"},
//     {
//       $set: {
//         name: "Tomason"
//       }
//     }
//   );
//   console.log(res)
// }
//
// notesUpdateOne();



