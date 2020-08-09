export class Animal {
	protected name: string = 'a init name';
	protected text: string = 'a init text';
	constructor() {
		// this.name = "a name";
		// this.text = "a text";
	}
	ani() {
		console.log(`ani log name:${this.name} text:${this.text}`);
	}

	log() {
		console.log(`Animal log name:${this.name} text:${this.text}`);
	}
}

// Animalクラスを継承
export class Dog extends Animal {
	protected name: string = 'd init name';
	constructor() {
		super();
		// this.name = "d name";
		// this.text = "d text";
	}

	log() {
		// 親クラスのbarkメソッドを呼ぶ
		super.log();
		console.log(`Dog log name:${this.name} text:${this.text}`);
	}
}
