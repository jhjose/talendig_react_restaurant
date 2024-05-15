const mult = require('./mult')

test('adds 9 * 8 to equal 72', ()=>{
    expect(mult(9, 8).toBe(72));
})