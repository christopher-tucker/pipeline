const app = require('../models/testModel.js');

test('adds 1 + 2 to equal 3', () => {
    expect(app.addTwo(1)).toBe(3);
});