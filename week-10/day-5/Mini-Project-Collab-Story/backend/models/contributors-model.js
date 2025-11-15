const db = require("../config/db.js");

const getAllContributorsDB = () => {
  return db("contributors").select(
    "id",
    "story_id",
    "user_id",
  );
};

const getContributorByIdDB = (id) => {
  return db("contributors").select(
    "id",
    "story_id",
    "user_id",
  ).where(id);
};

const addContributorDB=(storyID, userID)=>{
  return db("contributors").insert({ storyID, userID});
}

const getContributorsFromStoryIdDB = (storyId) => {
  return db("users as u")
    .select("u.username")
    .join("contributors as c", "u.id", "c.user_id")
    .where("c.story_id", storyId);
};

const deleteContributorByIdDB = (id) => { 
  return db("contributors").where({ id }).del();
};



module.exports = {
    getAllContributorsDB,
    addContributorDB,
    getContributorsFromStoryIdDB,
    deleteContributorByIdDB,
    getContributorByIdDB
};