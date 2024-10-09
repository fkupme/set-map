class ErrorRepository {
	constructor(){
		this.repo = new Map();
		this.arr = [
		'Логическая ошибка',
		'Достигнута глубина рекурсии',
		'Ошибка в приведении типов',
		'Ошибка в вызове функции',
		'Отсутствие доступа к свойству',
		'Отсутствие переменной',
    'Отсутствие оператора присваивания',
    'Отсутствие оператора условия',
    'Отсутствие оператора цикла',
    'Отсутствие оператора инкремента/декремента',
	]
	this.pushError(this.arr);
	}
	// генерирует код ошибки
	codeCreate(){
		let code = Math.round(Math.random() * 1000)
		if(this.repo.has(code)){
			code = this.codeCreate();
		}
		return code;
		
	}
	// добавляет ошибки в репозиторий
	pushError(errorMessageArray){
		errorMessageArray.forEach(message => {
			this.repo.set(this.codeCreate(), message)
		});
    
	}
	// переводит ошибку по коду 
	translate(code){
		const key = this.repo.get(code)
		if(!key){
			return 'Unknown error'
		}
		return this.repo.key;
	}
}
