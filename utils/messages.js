const messages = {
  messageGeneral: (res, statusCode, success, payload, message) => {
    res.status(statusCode).json({ success, payload, message });
  },
};

module.exports = messages;
