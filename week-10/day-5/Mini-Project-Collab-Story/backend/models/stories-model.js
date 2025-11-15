const db = require("../config/db.js");

const getAllStoriesDB = () => {
  return db("stories").select(
    "id",
    "title",
    "content",
    "author_id",
    "created_at",
    "updated_at"
  );
};


const getStorieByTitleDB =(title) =>{
    return db("stories").select("id",
    "title",
    "content",
    "author_id",
    "created_at",
    "updated_at").where({title})
}

const getStorieByIdDB =(storyID) =>{
    return db("stories").select("id",
    "title",
    "content",
    "author_id",
    "created_at",
    "updated_at").where({storyID})
}

// const getStoriesByUserIdDB = (userId) => {
//   return db("stories as s")
//     .distinct("s.id", "s.title", "s.content", "s.author_id", "s.created_at","updated_at")
//     .leftJoin("contributors as c", "s.id", "c.story_id")
//     .where("s.author_id", userId)
//     .orWhere("c.user_id", userId);
// };

const insertNewStoryDB = (title, content) => {  //and a valid JWT???
  return db("stories").insert({ title, content });
};


const updateStoryByIdDB = (storyId, updates) => {
  return db("stories")
    .where({ id: storyId })
    .update(updates);
};

const deleteStoryByIdDB = (id) => {  //and a valid JWT???
  return db("stories").where({ id }).del();
};


module.exports = {
  getAllStoriesDB,
  getStorieByTitleDB,
  // getStoriesByUserIdDB,
  insertNewStoryDB,
  updateStoryByIdDB,
  deleteStoryByIdDB,
  getStorieByIdDB
};