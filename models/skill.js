// ===================================================
// ALERT THIS IS A FAKE DATABASE
// ===================================================


const skills = [
    {
        skill: 'CSS',
        comfortLevel: 45,
        tried: true,
        id: 138992
    },
    {
        skill: 'Javascript',
        comfortLevel: 3,
        tried: false,
        id: 636759
    },
    {
        skill: 'Flexibile',
        comfortLevel: 93,
        tried: true,
        id: 4292221
    }
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }