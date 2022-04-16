const VoteController = require("../controllers/vote.controller");

module.exports = app => {
    app.get("/api/votes", VoteController.getAll);
    app.get("/api/votes/top3", VoteController.getTop3);
    app.get("/api/votes/:id", VoteController.getOne);
    app.post("/api/votes/create", VoteController.create);
    app.put("/api/votes/:id/update", VoteController.update);
    app.delete("/api/votes/:id/delete", VoteController.delete); 
}