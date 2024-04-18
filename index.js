
class UserProfileManager {
  constructor() {
    this.users = [];
    this.currentId = 0;
  }

  generateUniqueId() {
    this.currentId = (this.currentId % 10000) + 1;
    return this.currentId;
  }

  addUser(userInfo) {
    userInfo.id = this.generateUniqueId();
    this.users.push(userInfo);
    return userInfo;
  }

  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  updateUser(userId, newInfo) {
    this.users = this.users.map(user => {
      if (user.id === userId) {
        return {...user, ...newInfo};
      }
      return user;
    });
    return this.users[userId - 1];
  }

  findUserByName(name) {
    return this.users.filter(user => user.name.includes(name));
  }

  getAllUsers() {
    return this.users;
  }
}

export default UserProfileManager;