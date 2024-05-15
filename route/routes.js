const route = require("express")
const router = route.Router()
const controller = require("../controller/form")


router.route("/postform").post(controller.getData)
router.route("/getform").get(controller.getForm)

module.exports = router
