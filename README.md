# Syrym's Lotide Project

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @s-awaken/lotide`

**Require it:**

`const _ = require('@s-awaken/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: asserts equality of 2 arrays
* `assertEqual(actual, expected)`: equality assertion
* `assertObjectsEqual(actual, expected)`: Asserts equality of 2 objects
* `countLetters(string)`: counts every occurence of each character
* `countOnly(allItems, itemsToCount)`: counts each item in the allItems that are present in itemsToCount object
* `eqArrays(array1, array2)`: checks if 2 arrays are equal
* `eqObjects(object1, object2)`: checks if 2 objects are equal
* `findKey(object, callback)`: returns only keys satisfied by callback function
* `findKeyByValue(objects, value)`: returns keys with the given value
* `flatten(array)`: flattens a nested array
* `head(array)`: returns first element of an array
* `letterPositions(sentence)`: returns positions of each letter
* `map(array, callback)`: returns a new array with callback returned elements from first array
* `middle(array)`: returns the middle of an array
* `tail(array)`: returns array without the first element
* `takeUntil(array, callback)`: returns array with elements until the callback is no longer satisfied
* `without(array1, array2)`: returns new array with elements of array1, but without elements of the array2