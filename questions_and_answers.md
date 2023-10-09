<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Answer: B: ReferenceError: greetign is not defined
Explanation: The variable greetign is misspelled, and it has not been defined anywhere in the code. This will result in a ReferenceError because JavaScript will fail to find the variable.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Answer:C:"12"
In JavaScript, when we use the + operator with a string and a non-string value, it performs concatenation. In this case, the number 1 is coerced into a string and concatenated with the string "2", resulting in the string "12".
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Answer:B: `['🍝', '🍫', '🥑', '🍔']`
here in this code the info.favoriteFood is pointing at the address of the '🍕' or the first element of the food array.so when info.favoriteFood is assigned with '🍝', the array changed to the `['🍝', '🍫', '🥑', '🍔']` </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Answer:B: `Hi there, undefined`
Here the sayHi function taking a argument "name", and inside the function the name is called. when the function is called there is no argument given. thats why it will sho undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Answer:C: 3"
In This code when every element of the nums array iterates, the if condition check whether the element is true or false, we know in javascript evry non zero integer is true where 0 represent false, so in first iteration the element of the array is 0. For this it doesnt execute the code insind if condition.From this in every iteration except 0 the count increase. And final answer is 3.</i>

</p>
</details>
