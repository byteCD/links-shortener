const { nanoid } = require("nanoid");
const LinkModel = require("../models/LinkModel");
const ErrorService = require("../services/ErrorService");
const validationService = require("../services/ValidationService");

class LinkController {
  async shortener(req, res, next) {
    try {
      validationService.checkErrors(req);

      const { link } = req.body;
      const id = nanoid(7);

      const linkData = await LinkModel.create({
        originalLink: link,
        shortLink: id,
      });

      res.json(linkData);
    } catch (error) {
      next(error);
    }
  }

  async getLink(req, res, next) {
    try {
      const { id } = req.params;
      const link = await LinkModel.findOne({ shortLink: id });

      if (!link) {
        throw new ErrorService(400, "Ссылка не существует");
      }

      res.json(link);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new LinkController();
