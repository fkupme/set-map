import { Char, Team } from '../set';
const chars = []
const db =[
  ['Воин', 'Человек', 10, 5],
  ['Маг', 'Эльф', 7, 3],
  ['Лучник', 'Человек', 8, 4],
  ['Паладин', 'Человек', 9, 6],
  ['Жрец', 'Гном', 6, 8]
].forEach(item=> chars.push(new Char(item)));
const team = new Team();

test('size of collection after pushing one character',()=>{
	team.add(chars[0])
	expect(team.members.size).toBe(1);
})

test('size of collection after pushing all characters',()=>{
	team.addAll(chars)
	expect(team.members.size).toBe(5);
});

test('should throw error when trying to add existing character',()=>{
  expect(()=>team.add(chars[0])).toThrow('members has char');
});

test('should return array of characters',()=>{
  expect(team.toArray()).toEqual(chars);
	expect(typeof(team.toArray())).toBe('object');
});