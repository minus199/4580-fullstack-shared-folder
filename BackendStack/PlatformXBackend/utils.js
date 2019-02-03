function EntityNotFoundException() {
  this.message = "User was not found";
  this.statusCode = 400;
}

module.exports = {
  extractGetReqParams: function(req) {
    const [route, reqBody] = req.url.split("?");

    const params = reqBody.split("&").reduce((reqParams, kvPair) => {
      const [k, v] = kvPair.split("=");
      reqParams[k] = v;

      return reqParams;
    }, {});

    return params;
  },

  extractReqEntityId: function(req) {
    const maybeId = parseInt(
      req.url
        .split("?")[0]
        .split("/")
        .filter(x => !!x)
        .pop()
    );

    if (Number.isNaN(maybeId)) {
      throw new EntityNotFoundException();
    }
    
    return maybeId;
  }
};
