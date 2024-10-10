import ErrorRepository from '../map';

const repo = new ErrorRepository();
const knownErrors = Array.from(repo.repo.keys());
const unknownErrors = [1, 18, 38, 70, '51', NaN, null]
test('testing base map', () => {
	expect(repo.repo.size).toBe(10);
  expect(repo.arr.length).toBe(10);
})
describe('error repository', () => {
	test.each(knownErrors)('testing knownError', (code)=>{
		expect(repo.translate(code)).toBe(repo.repo.get(code));
	})
	test.each(unknownErrors)('testing unknownError', (code)=>{
		expect(repo.translate(code)).toBe('Unknown error');
	})
	test('unknown error', () =>{
		expect(repo.translate(repo.codeCreate())).toBe('Unknown error');
	})
});

test('pushing new error', () => {
	const code = repo.pushError(['ошибочка вышла']);
	expect(repo.translate(...code)).toBe('ошибочка вышла');
})

test('creating code', () => {
	expect(repo.codeCreate()).toBeGreaterThan(0);
	expect(typeof(repo.codeCreate())).toBe('number')
})