import reverse from "../code/reverse";

test('reverses non empty string', () => {
    expect(reverse('shumbala')).toBe('alabmuhs');
})

test('reverses empty string', () => {
    expect(reverse('')).toBe('');
})

test('let be non string', () => {
    expect(reverse(548)).toBe(548);
})



