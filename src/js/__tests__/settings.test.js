import Settings from '../settings';

const settings = new Settings();

test('selected settings', ()=>{
	expect(settings.selected.has('theme')).toBe(true);
	expect(settings.selected.has('music')).toBe(true);
	expect(settings.selected.has('difficulty')).toBe(true);
	expect(settings.selected.get('theme')).toBe('dark');
	expect(settings.selected.get('music')).toBe('trance');
	expect(settings.selected.get('difficulty')).toBe('easy');
});

test('undefined props and values', ()=>{
	expect(settings.select('background', 'dark')).toMatchObject(settings.selected)
	expect(settings.select('music', 'rap')).toMatchObject(settings.selected)
	expect(settings.select('theme', 'red')).toMatchObject(settings.selected)
	expect(settings.select('difficulty', 'light')).toMatchObject(settings.selected)
})

test('valid props and values', ()=>{
	expect(settings.select('music', 'off')).toMatchObject(
		new Map(Object.entries({
			'theme': 'dark',
			'music': 'off',
			'difficulty': 'easy'
		})))
	})