// controllers/userController.js
const userModel = require("../model/user.model");
const { successResponse, failureResponse } = require("../helper/response");
const { RESPONSE_MESSAGES } = require("../helper/messages");
const { encrptPassword } = require("../helper/common");

module.exports = {
  // Create User
  createUser: async (req, res) => {
    try {
      let userData = req.body;
      //check user already exist or not
      let encryptPasword = await encrptPassword(userData.password);
      if (userData) {
        const emailExist = await userModel.findOne({ email: userData.email });

        if (emailExist) {
          return failureResponse(req, res, RESPONSE_MESSAGES.EMAIL_EXSIST);
        }
      }

      userData.password = encryptPasword;

      const result = await userModel.create(userData);
      return successResponse(req, res, result);
    } catch (error) {
      console.error(error);
      return failureResponse(req, res, error.message);
    }
  },

  // get User by id
  getUser: async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user) {
        return failureResponse(req, res, RESPONSE_MESSAGES.NOT_FOUND);
      }
      return successResponse(req, res, user);
    } catch (error) {
      console.error(error);
      return failureResponse(req, res, error.message);
    }
  },

  // get all User
  getAllUser: async (req, res) => {
    try {
      const user = await userModel.find();
      if (!user) {
        return failureResponse(req, res, RESPONSE_MESSAGES.NOT_FOUND);
      }
      return successResponse(req, res, user);
    } catch (error) {
      console.error(error);
      return failureResponse(req, res, error.message);
    }
  },

  // Update User
  updateUser: async (req, res) => {
    try {
      const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!user) {
        return failureResponse(req, res, RESPONSE_MESSAGES.NOT_FOUND);
      }
      return successResponse(req, res, user);
    } catch (error) {
      console.error(error);
      return failureResponse(req, res, error.message);
    }
  },

  // Delete User
  deleteUser: async (req, res) => {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
      if (!user) {
        return failureResponse(req, res, RESPONSE_MESSAGES.NOT_FOUND);
      }
      return successResponse(req, res, user);
    } catch (error) {
      console.error(error);
      return failureResponse(req, res, error.message);
    }
  },
};
