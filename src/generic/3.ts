/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// function merge<T, U> (objA:T, objB:U) {
//   return Object.assign({}, objA, objB);
// }
function merge<T extends Record<string, any>, U extends Record<string, any>>(objA: T, objB: U) {
    if (typeof objA === 'object' && typeof objB === 'object') {
        return Object.assign({}, objA, objB);
    } 
}

const merged = merge({ name: 'Tanya' }, { age: 25 });

export { }

