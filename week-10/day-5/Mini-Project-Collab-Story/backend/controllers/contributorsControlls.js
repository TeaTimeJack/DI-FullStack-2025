const {
  getAllContributorsDB,
  getContributorByIdDB,
  addContributorDB,
  getContributorsFromStoryIdDB,
} = require("../models/contributors-model");
const { getStorieByIdDB } = require("../models/stories-model.js");
const { getUserById } = require("../models/user-models");

const addContributor = async (req, res) => {
  const { storyID, userID } = req.body;
  try {
    const storyExists = await getStorieByIdDB(storyID);
    if (storyExists.length === 0) {
      res.json({ message: "This story Id does not exixts!" });
      return;
    }
    const userExists = await getUserById(userID);
    if (userExists.length === 0) {
      res.json({ message: "This User Id does not exixts!" });
      return;
    }

    await addContributorDB(storyID, userID);
    res.json({ message: "the Contributor was added" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "somthing went wrong" });
  }
};

const getContributorByStoryId = async (req, res) => {
  const { storyID } = req.body;
  try {
    const storyExists = await getStorieByIdDB(storyID);
    if (storyExists.length === 0) {
      res.json({ message: "This story Id does not exixts!" });
      return;
    }
    const rows = await getContributorsFromStoryIdDB(storyID);
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "somthing went wrong" });
  }
};

const deleteContributorById = async (req, res) => {
  const { id } = req.body;
  try {
    const contributorExists = await getContributorByIdDB(id);
    if (contributorExists.length === 0) {
      res.json({ message: "This contributor Id does not exixts!" });
      return;
    }
    await deleteContributorByIdDB(id);
    const allOtherContributor = await getAllContributorsDB();
    res.json({
      message: "the contributor was deleted",
      data: allOtherContributor,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "somthing went wrong" });
  }
};

module.exports = {
  addContributor,
  getContributorByStoryId,
  deleteContributorById,
};
