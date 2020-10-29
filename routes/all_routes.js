const express = require("express");
const app = express();
const router = express.Router();

router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        console.log(r.route.path)
    }
})
console.log(router)