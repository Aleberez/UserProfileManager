
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
  }

  findUserByName(name) {
    return this.users.filter(user => user.name.includes(name));
  }

  getAllUsers() {
    return this.users;
  }
}

const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob

profileManager.updateUser(1, { name: "Alicia" }); // Обновляет имя Alice на Alicia
profileManager.removeUser(2); // Удаляет Bob

console.log(profileManager.getAllUsers()); // Находит Alicia

