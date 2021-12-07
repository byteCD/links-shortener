const Router = require("express");
const linkController = require("../controllers/LinkController");
const validationService = require("../services/ValidationService");

const router = Router();

router.post(
  "/shortener",
  validationService.linkValidation(),
  linkController.shortener
);
router.get("/link/:id", linkController.getLink);

module.exports = router;
