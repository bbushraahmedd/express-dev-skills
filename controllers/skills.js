const Skill = require('../models/skill');

module.exports = {
    index
}

function index(req, res, next) {

    const allSkills = Skill.getAll();
    res.render('skills/index', {skills: allSkills});
  }