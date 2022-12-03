// ===================================================
// ALERT THIS IS A FAKE DATABASE
// ===================================================


const skills = [
    {
        skill: 'CSS',
        tried: true,
        id: 138992
    },
    {
        skill: 'Javascript',
        tried: false,
        id: 636759
    },
    {
        skill: 'Flexibile',
        tried: true,
        id: 4292221
    }
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    // updateOne 
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

//   function updateOne(id) {
//     return skills.find(skill => skill.id === parseInt(id));
//   }