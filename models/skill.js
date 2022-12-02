// ===================================================
// ALERT THIS IS A FAKE DATABASE
// ===================================================


const skills = [
    {
        skill: 'CSS',
        comfortLevel: 45,
        done: true,
        id: 138992
    },
    {
        skill: 'Javascript',
        comfortLevel: 3,
        done: true,
        id: 636759
    },
    {
        skill: 'Flexibility',
        comfortLevel: 93,
        done: true,
        id: 4292221
    }
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }