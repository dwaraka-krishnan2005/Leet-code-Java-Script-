function* fibGenerator() {
    let a = 0, b = 1;

    while (true) {
        yield a;
        let next = a + b;
        a = b;
        b = next;
    }
}

// Example usage
const gen = fibGenerator();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
