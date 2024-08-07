## 0x03-ES6_data_manipulation
### Learning Objectives
- How to use map, filter and reduce on arrays
- Typed arrays
- The Set Map, and Weak link data structures

### Arrays
  - Description
  1. Javascript arrays can be resized and can contain different data types.
  2. They are not associative arrays. They can only be accessed using non negative integers as indexes.
  3. They are zero-indexed
  4. Copy operation create shallow copy and not a deep one.

  To access a value in an array,
  ```Javascript
	years = [1, 2, 3, 4, 5, 6]
	console.log(years["2"]) // this is correct
	console.log(years[3]) // this is also correct
  ```
  some of the methods of arrays like (join(), slice(), indexof() etc) uses the value of an array's length property when they are called.
  ```Javascript
    const fruits = [];
    fruits.push('banana', 'apple', 'peach');
    console.log(fruits.length); // 3
  ```
  other methode like (push(), splice()) will result in the update of the length property.
  ```Javascript
  fruits[5] = "mango";
  console.log(fruits[5]); //'mango'
  console.log(Object.keys(fruits)); //['0', '1', '2', '5']
  console.log(fruits.length); //6
  ```
  When you increase the length on an array, will cause the extension of the array by adding empty slots without creating new elements or or even undefined.
  ```Javascrip
    fruits.length = 10;
    console.log(fruits);
    console.log(Object.keys(fruits)); //['0', '1', '2', '5']
    console.log(fruits.length); // 10
    console.lgo(fruits[8]); // undifined
  ```
  If you decrease the length of an array some element will be deleted.
  ```Javascript
    fruits.length = 2;
    console.log(Object.keys(fruits)); // ['0', '1']
    console.log(fruits.lengt); //2
  ```

#### Array Methods and empty slots
  Array methods behave differetly when they encounter empty slots in sparse arrays.
  Generally older methods eg forEach treats empty slots differently from indices that contain undefined.
  Methods tha treat empty slots specially (concat(), copyWithin(), every(), filter(), flat(), flatMap(), forEach(), indexof(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(),sort(), and splice().
```Javascript
  const color = ['red', 'yello', 'blue'];
  colors[5] = 'purple';
  colors.forEach((item, index) => {
    console.log(`${index} :${item}`);
    })
```
this will only show the item with are not empty
but if you use the reverse(), it considers the empty spaces.

Newer methode treat empty slot as undefined eg(entries(), fill(), find(), findIndex(), findLast(), find(lastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(), toSpliced(),values(), and with().

```javascript
  const color = ['red', 'yellow', 'blue'];
  color[5] = 'purple';
  const iterator = colors.keys();
  for (const key of iterator) {
    console.log('${key}: ${colors[key]}
  }

  const newColors = colors.toReversed();
```

#### Copying methods and mutating methods
some methods mutate the existing array whiles other do a shallo copping of the exiting array into a new array.
- Objects reference are coppied to the new array, a change in the new array will also occur in the original array. Becasue the new array also points to the same object.
- Primitive types such as strings, numbers and booleans will have their values copied in to the new array. This is not with objects that are strings, Numbers and Booleans)

|Mutating Method| Non-mutating alternative|
|---------------|-------------------------|
|copyWithin()	| -
|fill()		| -
|pop()		| slice(0, -1)
|push(v1, v2)	| concat([v1, v2])
|reverse()	| toReversed()
|shift()	| slice(1)
|sort()		| toSorted()
|splice()	| toSpliced()
|unshift(vi, v2)| toSpliced(0, 0, v1, v2)

to change mutating methods to non-mutating methode, you can use the spread syntax or slice() to create a copy first
```Javascript
  arr.copywithin(0, 1, 2); // mutates arr
  const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
  const arr3 = [..arr].copyWithin(0, 1, 2); // does not mutate
```

#### Iterative methods
Most array methods take a callback function as an argument. The callback function is called squencially and at most once for each element in the array. The return of the call back function determines the return the return of the method.
```javascript
  method(callbackfn, thisArg)
```
callbackfn takes three arguments:
element is the current element being processed in the array
index the index of the current element being proccessed in the array
array is the array which the method is called upon.

__thisArg__ argument is be the 'this' value of the callback function. It value is determined by the usual rules:
1. if callback funtion is non-strict primitive this will be seen as objecs and undefined/null will be substituted with globalThis.
2. thisArg arguement not neccessary if the callback is defined with an arrow function. Because arrow functions don't have their own this binding.

The array argument is very important if you want to read another index during iteration. Due to the fact that there might not always be an existing index during iteration.
It is a good practice to not mutate the array during iteration. However you can use the 'array' argument to do so. The array arguemet is not the array that is being built in case of using map(), filter() and flatMap() you can't access the array being built for the callback function.

All iterative methods are copying and generic but they behave differently with empty slots.

