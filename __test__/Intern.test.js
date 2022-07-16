const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Intern object successfully created', () => {
    const intern = new Intern('Kyle Smith');
});

test('Constructor successfully sets school', () => {
    const testValue = 'UNC Charlotte';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('Correct school returned', () => {
    const testValue = 'UNC Charlotte';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('Correct role is returned', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'intern@email.com', 'UNC Charlotte');
    expect(e.getRole()).toBe(testValue);
});