const Skill = require('../models/skill');

module.exports = {
    index,
    show
}

function index(req, res, next) {
    const allSkills = Skill.getAll();
    res.render('skills/index', {skills: allSkills});
  }

  function show(req, res, next) {
    // const id = req.params;
    // const oneSkill = Skill.getOne(id);
    // OR
    const oneSkill = Skill.getOne(req.params.id);
    res.render('skills/show', {skill: oneSkill});
  }