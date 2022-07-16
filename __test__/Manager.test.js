const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Manager object successfully created', () => {
    const manager = new Manager('Conan the Barbarian');
});

test('Constructor successfully set phone number', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'manager@email.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('Correct phone number returned', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'manager@email.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test('Correct role is returned', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'manager@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});