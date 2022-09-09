// /* eslint-disable */
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390
// /* eslint-enable */

/* eslint-disable */

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50, '10'];
//     const result = [];
//     arr.map(Number).map(el => result.push(el));

//     return result;
// }

// console.log(firstTask());

function squareSum(numbers){
    const sum = [];
    numbers.map((num => sum.push(Math.pow(num,2))))
    let s = 0;
    for (i = 0; i < sum.length; i++){
       s += sum[i];
    }
    return s;
}

// console.log(squareSum([5,10]));

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// console.log(factorial(3));

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result);


let name = "пупкин".replace("п", "д")
console.log(name);

/* eslint-enable */

const blockFetch = document.querySelector('.test-fetch__row');

function createHtml(item) {
  blockFetch.innerHTML += `
    <div class="test-fetch__item">
        <div class="test-fetch__id">${item.id}</div>
        <div class="test-fetch__name">${item.name}</div>
        <a href="mailto:${item.email}" class="test-fetch__email"> ${item.email} </a>
        <div class="test-fetch__address">${item.address.street} ${item.address.suite} ${item.address.city}</div>
    </div> `;
}

async function fetchUsers(url) {
  await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((responseJson) => responseJson.map((item) => createHtml(item)))
    .catch((response) => {
      console.log(response.status, response.statusText);
    });
}

const URL = 'https://jsonplaceholder.typicode.com/users';
fetchUsers(URL);

const testTimeout = document.querySelector('.test-timeout');
const time = testTimeout.hasAttribute('data-time')
  ? testTimeout.getAttribute('data-time')
  : 3000;

function tick() {
  testTimeout.style.transitionDuration = `${time / 1000}s`;
  testTimeout.classList.toggle('_active');
  setTimeout(tick, time);
}
tick();
