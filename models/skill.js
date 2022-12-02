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
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }