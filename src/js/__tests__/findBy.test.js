import {
  describe, expect,
} from '@jest/globals';
import findBy from '../findBy';

const inputArr = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

describe('Проверка отлифтрованного массива', () => {
  test('Если пришло правильно значение', () => {
    const result = inputArr.filter(findBy('name', 'урон'));
    expect(result).toEqual([{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }]);
  });

  test('Если такого значение нет', () => {
    const result = inputArr.filter(findBy('name', 'Такого значение нет'));
    expect(result).toEqual([]);
  });
});
