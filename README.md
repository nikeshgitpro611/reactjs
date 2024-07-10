repo - https://github.com/john-smilga/react-course-v3
> Fetch focha
- it doesnot conside 404 as a error.

> # API REFf - https://www.course-api.com/

<!-- -----------------Inter vIew question--------------------- -->
# Q - What is symantic tag in html?
 Ans -  These tags provide better accessibility, improved SEO, and more meaningful markup. Tags are define in two ways.
 > Symantic
 - semantic tags help define the structure of the webpage, making it more understandable for both humans and machines.
 - Eaxample :- 
 1. header: Represents a container for introductory content or a set of navigational links.
02. nav>: efines a set of navigation links.
03. sectio>: Represents a thematic grouping of content, typically with a heading.
04. articl>: Represents a self-contained piece of content, like a blog post or news article.
05. aside> Defines content that is tangentially related to the content around it, often used for sidebars.
06. footer: Represents a footer for a section or the entire document, often containing metadata or links.
07. main>:Specifies the main content of a document, excluding headers, footers, and sidebars.
08. figure: Represents self-contained content, like illustrations, diagrams, photos, or code listings, often with a caption.
09. figcapion>: Provides a caption for the figure element.
10. time>:Represents a specific period in time.

> Non-Symantic
- Non-semantic tags in HTML are elements that do not provide any information about the content contained 
- They are often used in conjunction with CSS and JavaScript to control the presentation and behavior of web content.
- Example - 
01. div>: A generic container used to group together HTML elements.
02. span>: A generic inline container used to group together text or inline elements.

# Q - What is HOC component with example expain.
- A Higher-Order Component (HOC) in React is an advanced technique for reusing component logic.
- HOCs are functions that take a component as a argument and return a new component.
- HOCs are Functions: They take a component as an argument and return a new component.
![alt text](Img/image.png)

# Q - Diffrence between context api and redux.
Both the Context API and Redux are tools for managing state in React applications.

> Context Api
- 'Simple State Management:' Does not include complex state management features like middleware, side effects handling, or advanced debugging tools.
- Avoid Props drilling.
- Prop Drilling Solution: Helps to avoid prop drilling by providing a way to pass data deeply through the component tree without having to pass props manually at every level.
- Basic State Management: Does not include complex state management features like middleware, side effects handling, or advanced debugging tools.


> Redux
- Complex State Management 
- Global State Management: Suitable for managing global state across various parts of the application, even when the components are not directly related.
- Single Source of Truth: State is stored in a single object, known as the store.
- Middleware Support: Includes middleware for handling side effects (e.g., redux-thunk, redux-saga).
- DevTools Integration: Powerful debugging tools such as Redux DevTools for inspecting state changes.
- Time Travel Debugging: Ability to go back and forth in state changes for easier debugging.
RTK /ReduxLates

#  Q create a react app with Start,Stop and Reset button and when we click timer will start/stop/pause/reset

# Q- const Arr = [1, [4, [5, 6]], [2, [3, [4, 5]]]]; 
01. convert in [x,x,x,x,x]
02. Asc
03. remove duplicate
- by new Set(Arr) will give unique value of object
- const uniQueDat =  new Set(Assanding); //object
const convertArr = [...uniQueDat]
console.log('uniQueDat: ', convertArr)
04. find even and odd
05. total

# Q- What is Prototype
- dot use arrow function
- In JavaScript, a prototype is an object
- This is accessed via the __proto__ property (or more conventionally using Object.getPrototypeOf()).
- Each object has an internal link to another object called its prototype.
![alt text](Img/image2.png)

# Q- Call, Apply, Bind
- The call, apply, and bind methods in JavaScript are used to manipulate the this context in functions.
- The apply method is similar to call, but it takes an array of arguments.
- The bind method creates a new function that, when called, has its this context 
- It will take two argument syntex - funcName.call(defineObject, 'Argument value inside the function')

# what is the diffrence between rest and spread operator.
 > Rest
 -  the rest operator is used to gather elements into an array,
- Used in function parameters to collect arguments into an array.
- Capturing an arbitrary number of function arguments

> Spread
-  spread operator is used to spread the content of an array.
- Concatenating arrays, passing arrays as arguments

# Close
- Inner function can acces outer function but outer function can't acces inner function
const outerFun =(x)=>{
  return (y) => {
    return x + y
  }
};

const ValGet = outerFun(23);
console.log('ValGet : ', ValGet(12));

- const closerTwo = (x) => {
  let score = x;
  return () => ++score;
};

const closer2 =  closerTwo(10);
console.log(closer2()) //11
console.log(closer2()) //12
console.log(closer2()) //13

# String Reversal
- Task - "helo world" reverse

const reverse = (date) => {
  return date.split('').reverse().join('');
};

const test = reverse('Hello World');
console.log('DATA : ', test);

>  task 2
Calculate the occurrence of the strings ( HELLO ) => { H:1, E:1, L:2, 
O:1 }
- Ans :  const Occurance = (vsl) => {
  let obj={}
  for(let itrat of vsl){
    // console.log('itrat : ', itrat)
    if(obj[itrat]){
      console.log('valCheck : ', obj[itrat])
      obj[itrat]++
    }else{
      obj[itrat] =  1
    }
  }
  console.log(obj)
  return obj
};

const valpAss =  Occurance('Hello');
// console.log('valpAss : ', valpAss)

> Task - 3 :  Coding, give an array of objects with 'date' and 'cost'. Asked to group by date.
- 
const datsa = [
  { date: '2023-07-01', cost: 10 },
  { date: '2023-07-01', cost: 20 },
  { date: '2023-07-02', cost: 15 },
  { date: '2023-07-02', cost: 25 },
  { date: '2023-07-03', cost: 30 },
];

const groiupData =  (dataVal) => {
  return dataVal.reduce((acc, items) => {
    const {date, cost} =  items;
    if(!acc[date]){
      acc[date] = []
    }
    acc[date].push(cost)
    return {...acc}
  })
};
const  valCheck =   groiupData(datsa);
console.log('valCheck : ', valCheck)

> Task-3  Given an array of objects representing a collection of books, write a function using the reduce method to compute the total number of pages in all books, and the number of books by each author. The function should return an object with two properties: totalPages and booksByAuthor.

Ans - /totalPages
//booksByAuthor
const books = [
  { title: 'Book 1', author: 'Author A', pages: 200 },
  { title: 'Book 2', author: 'Author B', pages: 150 },
  { title: 'Book 3', author: 'Author A', pages: 300 },
  { title: 'Book 4', author: 'Author C', pages: 250 },
  { title: 'Book 5', author: 'Author B', pages: 100 },
];

const TotalPageByAuthor = (book) => {
  return book.reduce(
    (iniVal, val) => {
      const { author, pages } = val;
      iniVal.totalPage += pages;
      if(iniVal.BookByAuthor[author]){
        iniVal.BookByAuthor[author]++
      }else{
        iniVal.BookByAuthor[author] = 1
      }

      return iniVal;
    },
    { totalPage: 0, BookByAuthor: {} }
  );
};

const result = TotalPageByAuthor(books);
console.log(result);


> Task // Given an array of objects representing a collection of books, write a function using the reduce method to compute the total number of pages in all books, and the number of books by each author. The function should return an object with two properties: totalPages and booksByAuthor.

//totalPages
//booksByAuthor
ANs - const students = [
  { name: 'Alice', age: 20, grades: [85, 90, 92] },
  { name: 'Bob', age: 22, grades: [78, 85, 88] },
  { name: 'Charlie', age: 21, grades: [92, 95] },
  { name: 'David', age: 23, grades: [85, 88, 84] },
];

const studentAvg = (val) => {
  return val.reduce(
    (iniVal, val) => {
      const { name, grades } = val;
      const Avg =
        grades.reduce((initVal, val) => initVal + val, 0) / grades.length;
      iniVal.classAverage = Avg.toFixed(2);

      //Student Avg
      iniVal.studentAverages[name] = Avg.toFixed(2);
      iniVal.totalSum = grades.reduce((a,b)=> a + b,0);
      iniVal.totalCount = grades.length;

      return iniVal;
    },
    {
      studentAverages: {},
      classAverage: 0,
      totalSum: 0,
    totalCount: 0
    }
  );
};
const result = studentAvg(students);
console.log(result);

> Task Given an array of transaction objects where each transaction has a type (either "credit" or "debit"), an amount, and a category, write a function using the reduce method to compute the total balance, the total credits, the total debits, and the total amount spent in each category. The function should return an object with four properties: totalBalance, totalCredits, totalDebits, and amountByCategory.

Ans -  const transactions = [
  { type: 'credit', amount: 100, category: 'Salary' },
  { type: 'debit', amount: 50, category: 'Groceries' },
  { type: 'debit', amount: 30, category: 'Entertainment' },
  { type: 'credit', amount: 200, category: 'Freelance' },
  { type: 'debit', amount: 20, category: 'Groceries' },
  { type: 'debit', amount: 100, category: 'Rent' },
];

const summarizeTransactions = (val) => {
  return val.reduce(
    (initVal, items) => {
      const { type, amount, category } = items;
      //Total Amount
      initVal.totalBalance += amount 
      //Credit or debit
      type === 'credit'
        ? (initVal.totalCredits += amount)
        : (initVal.totalDebits += amount);

        //
        initVal.amountByCategory[category] = amount

      return initVal;
    },
    {
      totalBalance: 0,
      totalCredits: 0,
      totalDebits: 0,
      amountByCategory: {},
    }
  );
};
const result = summarizeTransactions(transactions);
console.log(result);



