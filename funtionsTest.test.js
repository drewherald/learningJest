const {capitalize, reverseString, calcAdd, calcSubtract, calcMultiply, calcDivide}= require('./functions')

test('does capitalize', () => {
    expect(capitalize('drew')).toBe('Drew')
})

test('reverses string', () =>{
    expect(reverseString('drew')).toBe("werd")
})

test('adds', () =>{
    expect(calcAdd(2,2)).toBe(4)
})

test('subtracts', () =>{
    expect(calcSubtract(2,2)).toBe(0)
})

test('multiplies', () =>{
    expect(calcMultiply(2,2)).toBe(4)
})

test('divides', ()=>{
    expect(calcDivide(4,2)).toBe(2)
})
