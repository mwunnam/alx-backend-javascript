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
