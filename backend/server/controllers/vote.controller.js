const Vote = require("../models/vote.model");

module.exports = {
    getAll: (req, res) => {
        Vote.find({}, null, {sort: {createdAt:-1}})
            .then((votes)=>res.json({ votes }))
            .catch((err)=> res.status(400).json(err));
    }, 
    getTop3: (req, res) => {
        Vote.find({}, null, {sort: {totalVoteCount: -1}}).limit(3)
            .then((votes)=>res.json({ votes }))
            .catch((err)=> res.status(400).json(err));
    }, 
    getOne: (req, res) => {
        Vote.find({_id: req.params.id})
            .then((vote)=>res.json({ vote }))
            .catch((err)=> res.status(400).json(err));
    }, 
    create: (req, res) => {
        Vote.create(req.body)
            .then((poll)=>res.json({ poll }))
            .catch((err)=> res.status(400).json(err));
    }, 
    update: (req, res) => {
        Vote.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        })
        .then((vote)=>res.json({ vote }))
        .catch((err)=> res.status(400).json(err));
    },
    delete: (req, res) => {
        Vote.deleteOne({_id: req.params.id})
        .then((result)=>res.json({ result }))
        .catch((err)=> res.status(400).json(err));
    }
}