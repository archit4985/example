const { RESPONSE_CODES } = require("./constant");
const { RESPONSE_MESSAGES } = require("./messages");

module.exports = {
  successResponse: (req, res, data) => {
    // data = !data ? [] : Array.isArray(data) ? data : [data];

    return res.json({
      data: data,
      meta: {
        code: RESPONSE_CODES.SUCCESS,
        message: RESPONSE_MESSAGES.SUCCESS,
      },
    });
  },

  failureResponse: (req, res, error) => {
    return res.json({
      data: null,
      meta: {
        code: RESPONSE_CODES.FAILURE,
        message: error || RESPONSE_MESSAGES.SERVER_ERROR,
      },
    });
  },
};
