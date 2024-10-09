
class Char {
  constructor([name, type, attack, defense]) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
  }
}

class Team {
		constructor() {
				this.members = new Set();
		}
		add(char){
			if(this.members.has(char)){
				throw new Error("members has char")
			}
			this.members.add(char)
		}
		addAll(chars){
			chars.forEach(item=>{
				if(!this.members.has(item)){
					this.members.add(item)
				}
			})
		}
		toArray(){
			return [...this.members]
		}
	}