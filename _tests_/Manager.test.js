const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager();
    
    expect(manager.name).toBe();
    expect(manager.id).toBe();
    expect(manager.email).toBe();
    expect(manager.office).toBe();
});

test("gets employee's role", () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual(expect.stringContaining());
});