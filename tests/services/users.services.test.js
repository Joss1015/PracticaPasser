const users = require('../../services/users')

describe('users main functions', () => {
    // createUser function test
    test('createUser with {pk_user: 5, name: "Carlos", status: true}', async () => {
        let user = await users.createUser(5, "Carlos", true);
        expect(user.pk_user).toBe(5);
    });

    // getUser function test
    test('getUser with {pk_user: 123}', async () => {
        let user = await users.getUser(123)
        expect(user.pk_user).toBe(123);
    });

    //updateUser function test
    test('updateUser with {pk_user: 5, name: "Totto", status: true}', async () => {
        let user = await users.updateUser(5, "Totto", true);
        expect(user.name).toBe("Totto");
    });


    // deleteUser function test
    test('deleteUser with {pk_user: 123}', async () => {
        let user = await users.deleteUser(123)
        expect(user.pk_user).not.toBe(123)
    });
})