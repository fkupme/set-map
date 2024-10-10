export default class ErrorRepository {
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
		let code = Math.round((Math.random() * 1000) + 100)
		if(this.repo.has(code)){
			code = this.codeCreate();
		}
		return code;
		
	}
	//принимает массив, добавляет ошибки в репозиторий
	pushError(errorMessageArray){
		const codeArray =[];
		errorMessageArray.forEach(message => {
			const code = this.codeCreate();
			this.repo.set(code, message);
			codeArray.push(code);
		});
    return codeArray
	}
	// переводит ошибку по коду 
	translate(code){
		const description = this.repo.get(code)
		if(!description){
			return 'Unknown error'
		}
		return description;
	}
}
