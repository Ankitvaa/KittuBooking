import user from "../models/users.js";

// update user
export const updateuser = async (req, res) => {
  try {
    const updateuser = await user.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateuser);
  } catch (err) {
    console.log(err);
  }
};

// delete user
export const deleteuser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

// get user by id
export const getuser = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
// get all user
export const getalluser = async (req, res,next) => {
  try {
    const getalluser = await user.find();
    res.status(200).json(getalluser);
  } catch (err) {
    next(err)
  }
};
