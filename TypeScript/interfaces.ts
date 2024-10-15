interface Person {
	name: string;
	age: number;
	gender: "male" | "female";
}

const personOne: Person = {
	name: "Tris",
	age: 24,
	gender: "female",
}

console.log(personOne.name); // Coner
// 👇 Property 'email' does not exist on type 'Person'
console.log(personOne.email); // undefined