const model = require('../models/testModel.js');

test('adds 1 + 2 to equal 3', () => {
    expect(model.addTwo(1)).toBe(3);
});