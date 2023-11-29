import { PC, healthColor, healthPC } from '../health';

test('checking health color when healthPC > 50', () => {
    const result = 'Маг healthy';
    const expected = healthPC;

    expect(result).toBe(expected);
});

test('checking health color when 15 < healthPC < 50', () => {
    const result = 'Друид wounded';
    const expected = healthColor({ name: 'Друид', health: 45 });

    expect(result).toBe(expected);
});

test('checking health color when  healthPC < 15', () => {
    const result = 'Охотник critical';
    const expected = healthColor({ name: 'Охотник', health: 10 });

    expect(result).toBe(expected);
});

