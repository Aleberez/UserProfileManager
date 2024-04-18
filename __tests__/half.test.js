// @ts-check

import { test, expect, describe, beforeEach } from '@jest/globals';
import UserProfileManager from '../index.js';

describe('UserProfileManager', () => {
  let profileManager;

  beforeEach(() => {
    profileManager = new UserProfileManager();
  });

  test('addUser should add a new user with unique id', () => {
    const user1 = profileManager.addUser({ name: 'Alice', email: 'alice@example.com' });
    const user2 = profileManager.addUser({ name: 'Bob', email: 'bob@example.com' });

    expect(user1.id).toBeDefined();
    expect(user2.id).toBeDefined();
    expect(user1.id).not.toBe(user2.id);
  });

  test('removeUser should remove a user by id', () => {
    const user = profileManager.addUser({ name: 'Alice', email: 'alice@example.com' });
    const userId = user.id;

    profileManager.removeUser(userId);

    expect(profileManager.getAllUsers().length).toBe(0);
  });

  test('updateUser should update user info', () => {
    const user = profileManager.addUser({ name: 'Alice', email: 'alice@example.com' });
    const userId = user.id;

    const updatedUser = profileManager.updateUser(userId, { name: 'Alicia', email: 'alicia@example.com' });
    expect(updatedUser.name).toBe('Alicia');
    expect(updatedUser.email).toBe('alicia@example.com');
  });

  test('findUserByName should return users with matching names', () => {
    profileManager.addUser({ name: 'Alice', email: 'alice@example.com' });
    profileManager.addUser({ name: 'Bob', email: 'bob@example.com' });

    const foundUsers = profileManager.findUserByName('Ali');

    expect(foundUsers.length).toBe(1);
    expect(foundUsers[0].name).toBe('Alice');
  });
});
