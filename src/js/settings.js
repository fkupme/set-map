class Settings{
	constructor(){
		this.selected = new Map(Object.entries({
			'theme': 'dark',
			'music': 'trance',
			'difficulty': 'easy'
		}));
		this.settings ={
			'theme': ['dark', 'light', 'gray'],
      'music': ['trance','pop', 'rock', 'chillout', 'off'],
      'difficulty': ['easy', 'normal', 'hard', 'nightmare']
		}
	}
	select(prop, val){
		if(!this.selected.has(prop)
			||!Object.prototype.hasOwnProperty.call(this.settings, prop)
		||!this.settings[prop].includes(val)){
			return this.selected
		}
		return this.selected.set(prop, val)
	}
}