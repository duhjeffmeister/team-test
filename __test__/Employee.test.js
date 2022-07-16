const Employee = require('../lib/Employee');

test('Employee object successfully created', () => {
    const employee = new Employee('Ang the Avatar');
});

test('Constructor successfully set id type', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('Constructor successfully set email', () => {
    const testValue = 'employee@email.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Correct role is returned', () => {
    const testValue = 'Employee';
    const e = new Employee('Ang', 1, 'employee@email.com');
    expect(e.getRole()).toBe(testValue);
});