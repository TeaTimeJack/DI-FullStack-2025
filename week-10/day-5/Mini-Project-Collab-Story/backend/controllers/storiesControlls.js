const {
  getAllStoriesDB,
  getStorieByIdDB,
  getStorieByTitleDB,
  insertNewStoryDB,
  updateStoryByIdDB,
  deleteStoryByIdDB,
} = require("../models/stories-model.js");

const getAllstories = async (req, res) => {
  try {
    const rows = await getAllStoriesDB();
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "somthing went wrong" });
  }
};

const addAstory = async (req, res) => {
  const { title, content } = req.body;
  try {
    const rows = await insertNewStoryDB(title, content);
    res.json({ message: "the story was added", data: rows });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "somthing went wrong" });
  }
};

const updateAstoryById = async (req, res) => {
  const { storyId, title, content } = req.body;
  try {
    const storyExists = await getStorieByIdDB(storyId);
    if (storyExists.length === 0) {
      res.json({ message: "This story Id does not exixts!" });
      return;
    }
    const rows = await updateStoryByIdDB(storyId, { title, content });
    res.json({ message: "the story was Updated", data: rows });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "somthing went wrong" });
  }
};

const deleteAstoryById = async (req, res) => {
  const { storyId } = req.body;
  try {
    const storyExists = await getStorieByIdDB(storyId);
    if (storyExists.length === 0) {
      res.json({ message: "This story Id does not exixts!" });
      return;
    }
    await deleteStoryByIdDB(storyId);
    const allOtherStories = await getAllstories();
    res.json({ message: "the story was deleted", data: allOtherStories });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "somthing went wrong" });
  }
};

const getStoriesByTitle = async (req, res) => {
  const { title } = req.body;
  try {
    const rows = await getStorieByTitleDB(title);
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "somthing went wrong" });
  }
};

module.exports = {
  getAllstories,
  addAstory,
  updateAstoryById,
  deleteAstoryById,
  getStoriesByTitle,
};
