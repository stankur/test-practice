import capitalize from "../code/capitalize"

test('captilazies lowercase char', () => {
    expect(capitalize('a')).toBe('A');
})

test('captilazies lowercase char', () => {
    expect(capitalize('b')).toBe('B');
})

test('let be uppercase char', () => {
    expect(capitalize('A')).toBe('A');
})

test('let be uppercase char', () => {
    expect(capitalize('B')).toBe('B');
})

test('capitalizes string with lowercase first letter', () => {
    expect(capitalize('spIDEr')).toBe('SpIDEr');
})

test('let be string with uppercase first letter', () => {
    expect(capitalize('SpIDEr')).toBe('SpIDEr');
})

test('let be non string', () => {
    expect(capitalize(5)).toBe(5);
})

test('let be empty string', () => {
    expect(capitalize('')).toBe('');
})
