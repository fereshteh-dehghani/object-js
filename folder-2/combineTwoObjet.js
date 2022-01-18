/*Take two objects with similar key values and combine them into a 
new object summing any values that belong to the same category.
There's a married couple, Hank and his spouse Sheila. Hank works at
  a power plant making $70,000 a year, and Sheila is a teacher
 making $40,000 a year. They both earn rental income from separate rental 
 properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income
  because it fits the same category.
  Examples:
  const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

becomes ➞ {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
}
Arguments
user1Income (Object) ⁠— an income object for user1
user2Income (Object) ⁠— an income object for user2
returns: A new object with like values combined
Challenges
They won't have the same number of key-value pairs.
The return object must return the values ordered from lowest
 to highest so your answers can match the test answers.

 */