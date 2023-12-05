const users = [
    {id: 1, name: 'user1', age: 19},
    {id: 2, name: 'user2', age: 23},
    {id: 3, name: 'user3', age: 44},
    {id: 4, name: 'user4', age: 21},
    {id: 5, name: 'user5', age: 42}
];

//findLast();
const findLastUser = users.findLast( u => u.age < 30);
console.log('findLastUser', findLastUser);

//findLastIndex();
const findLastIndexUser = users.findLastIndex( u => u.age < 30);
console.log('findLastIndexUser', findLastIndexUser)

//toReversed(); non-destructive array change //toSorted() does same thing same as //toSpliced
const numArr = [1, 2, 3, 4, 5];
const numArr2 = [1, 2, 3, 4, 5];

const reverseNum = numArr.reverse();
console.log('numArr', numArr);
console.log('reverseNum', reverseNum);

const reverseNumTo = numArr2.toReversed();
console.log('numArr', numArr2);
console.log('reverseNumTo', reverseNumTo);

// Array with() for updating an instance of an array non-destructive
const usernames = ['user1', 'user2', 'user3'];
const usernames2 = [...usernames];
// original way
usernames[1] = 'newUser';
console.log('usernames', usernames);
// .with
const updatedUsernames2 = usernames2.with(1, 'newUser');
console.log('updatedUsernames2', updatedUsernames2);
console.log('usernames2', usernames2);


//groupby
const arrObj = [
    {type: 'Fish', id: 1, name: 'Salmon'},
    {type: 'Fish', id: 2, name: 'Northern'},
    {type: 'Animal', id: 3, name: 'Pig'},
    {type: 'Fish', id: 4, name: 'Walleye'},
    {type: 'Animal', id: 5, name: 'Cow'},
];

const typeGroupBy = Object.groupBy(arrObj, ({type}) => type);

console.log('typeGroupBy', typeGroupBy);
console.log('arrObj', arrObj);