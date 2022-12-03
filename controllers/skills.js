const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function index(req, res, next) {
    console.log(req.test)
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

  function newSkill(req, res, next){
    res.render('skills/new');
  }

  function create(req, res, next){
    Skill.create(req.body);
    res.redirect('/skills');
  }

  function deleteSkill(req, res, next){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  function edit(req, res, next) {
    // const id = req.params;
    // const editkill = Skill.getOne(id);
    // OR
    const editSkill = Skill.getOne(req.params.id);
    res.render('skills/edit', {skill: editSkill});
  }

  function update(req, res, next){
    req.body.tried = !!req.body.tried; 

    res.redirect(`/skills/${req.params.id}`)
  }