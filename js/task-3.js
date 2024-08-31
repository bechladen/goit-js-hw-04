'use strict';

console.log('Задача 3. Профіль гравця');
console.log('-----------------');

const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    if (typeof newName === 'string' && newName.trim()) {
      this.username = newName.trim();
    } else {
      console.error('Invalid username.');
    }
  },
  updatePlayTime(hours) {
    if (typeof hours === 'number' && hours >= 0) {
      this.playTime += hours;
    } else {
      console.error('Invalid play time. It should be a non-negative number.');
    }
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
