import ErrorRepository from '../map';

const repo = new ErrorRepository();
const knownErrors = Array.from(repo.repo.keys());
const unknownErrors = [1, 18, 38, 70, '51', NaN, null]

describe('error repository', () => {
	test.each(knownErrors)('testing knownError', (code)=>{
		expect(repo.translate(code)).toBe(repo.repo.code);
	})
	test.each(unknownErrors)('testing unknownError', (code)=>{
		expect(repo.translate(code)).toBe('Unknown error');
	})
});