var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, value, startIndex) {
    var i = 0;
    if (startIndex !== undefined) {
      if (startIndex >= 0)
        i += startIndex;
      else
        i = arr.length + startIndex;
      
      if (i >= arr.length || i < 0)
        return -1;
    }

    for (; i < arr.length; i ++)
      if (arr[i] === value)
        return i;
    
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, value, fromIndex) {
    var i = arr.length -1;
    if (fromIndex !== undefined) {
      if (fromIndex >= 0)
        i = fromIndex;
      else
        return -1;
      
      if (i >= arr.length)
        return -1;
    }

    for (; i >= 0; i --)
      if (arr[i] === value)
        return i;
    
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var result = [];
    for (var i = 0; i < arr.length - 1; i ++)
      result.push(arr[i]);
    
    return result;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    for (var i = 0; i < arr.length; i ++) {
      var value = arr[i];
      if (value === null || value === undefined || (typeof value === 'number' && (!(value > 0) && !(value < 0))) || value === false || value === '') {
        arr.splice(i, 1);
        i --;
      }
    }
    
    return arr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var i = 0;
    var stop = arr.length;
    var res = [];
    if (start !== undefined)
      i = start;
    if (end !== undefined)
      stop = end;
    if (i < 0 || i >= arr.length || end < 0 || stop > arr.length)
      return [];

    for (; i < stop; i ++)
      res.push(arr[i]);

    return res;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n) {
    n = n === undefined ? 1 : n;
    if (n >= arr.length)
      return [];
    for (i = 1; i <= n; i ++)
      arr.shift();
    
    return arr;

  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    n = n === undefined ? 1 : n;
    if (n >= arr.length)
      return [];
    for (i = 1; i <= n; i ++)
      arr.pop();
    
    return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    n = n === undefined ? 1 : n;
    if (n >= arr.length)
      return arr;
    var res = [];
    for (i = 0; i < n; i ++)
      res.push(arr[i]);

    return res;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    n = n === undefined ? 1 : n;
    if (n >= arr.length)
      return arr;
    var res = [];
    for (var i = arr.length - n; i < arr.length; i ++)
      res.push(arr[i]);

    return res;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    var i = start === undefined ? 0 : start;
    var stop = end === undefined ? arr.length : end;
    if (i >= arr.length || i < 0 || end <= 0 || end > arr.length)
      return arr;

    for (; i < stop; i ++)
      arr[i] = value;
    
    return arr;
  },

  // removes all given values from an array
  pull: function (arr) {
    var args = [];
    for (value in arguments)
      args.push(arguments[value]);
    args.shift();

    for (i = 0; i < arr.length; i ++) {
      if (args.includes(arr[i])) {
        arr.splice(i, 1);
        i --;
      }
    }

    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr) {
    var indices = arguments[1];
    var res = [];
    for (var i = 0; i < arr.length; i ++)
      if (!indices.includes(i))
        res.push(arr[i]);
    
    arr = res;
    return arr;
  },

  // creates an array excluding all the specified values
  without: function(arr) {
    var args = [];
    for (value in arguments)
      args.push(arguments[value]);
    args.shift();

    var res = [];
    for (var i = 0; i < arr.length; i ++)
      if (!args.includes(arr[i]))
        res.push(arr[i]);
    
    return res;
  },

  // returns an array with specified values excluded
  difference: function(arr) {
    var args = [];
    for (value in arguments) {
      args.push(arguments[value]);
    }
    args.shift();

    var valuesToExclude = [];
    for (var i = 0; i < args.length; i ++) 
      for (var j = 0; j < args[i].length; j ++) 
        if (!valuesToExclude.includes(args[i][j]))
          valuesToExclude.push(args[i][j]);
    
    var res = [];
    for (i = 0; i < arr.length; i ++)
      if (!valuesToExclude.includes(arr[i]))
        res.push(arr[i]);
    
    return res;
    },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {
    var args = [];
    for (value in arguments) {
      args.push(arguments[value]);
    }

    var res = [];
    for (var i = 0; i < args[0].length; i ++) {
      res.push([]);
    }

    for (i = 0; i < args.length; i ++) {
      for (var j = 0; j < args[0].length; j ++) {
        res[j].push(args[i][j]);
      }
    }

    return res;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var res = [];
    for (var i = 0; i < arr[0].length; i ++)
      res.push([]);
        
    for (i = 0; i < arr[0].length; i ++) 
      for (j = 0; j < arr.length; j ++) 
        res[i].push(arr[j][i]);

    return res;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size) {
    if (size <= 0 || arr.length === 0) 
      return [];
    if (size >= arr.length)
      return [arr];

    var res = [];
    var numOfArr = Math.ceil(arr.length / size);
    for (var i = 0; i < numOfArr ; i ++)
      res.push([]);

    for (var i = 0; i < size * (numOfArr - 1); i ++) {
      res[Math.floor(i / size)].push(arr[i]);
    }
    for (; i < arr.length; i ++)
      res[numOfArr - 1].push(arr[i]);

    return res;
    
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, iteratee) {
    if (Array.isArray(collection))
      for (var i = 0; i < collection.length; i ++)
        iteratee(collection[i], i, collection);
      
    else {
      var keys = Object.keys(collection);
      for (var i = 0; i < keys.length; i ++) 
        iteratee(collection[keys[i]], keys[i], collection);      
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(collection, iteratee) {
    var res = [];
    if (Array.isArray(collection)) 
      for (var i = 0; i < collection.length; i ++)
        res.push(iteratee(collection[i], i, collection));
    else {
      var keys = Object.keys(collection);
      for (var i = 0; i < keys.length; i ++)
        res.push(iteratee(collection[keys[i]], keys[i], collection));
    }

    return res;
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(collection, iteratee) {
    if (Array.isArray(collection)) {
      var res = [];
      for (var i = 0; i < collection.length; i ++)
        if (iteratee(collection[i], i, collection))
          res.push(collection[i]);

      return res;
    } else {
      var res = {};
      var keys = Object.keys(collection);
      for (var i = 0; i < keys.length; i ++) {
        if (iteratee(collection[keys[i]], keys[i], collection))
          res[keys[i]] = collection[keys[i]];
      }

      return res;
    }
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(collection, iteratee, accumulator) {
    if (Array.isArray(collection)) {
      var i = 0;
      if (accumulator === undefined) {
        accumulator = collection[i];
        i ++;
      }
      for (; i < collection.length; i ++) {
        accumulator = iteratee(accumulator, collection[i], i, collection);
      }

      return accumulator;
    } else {
      var i = 0;
      var keys = Object.keys(collection);
      if (accumulator === undefined) {
        accumulator = collection[keys[i]];
        i ++;
      }
      for (; i < keys.length; i ++) {
        accumulator = iteratee(accumulator, collection[keys[i]], keys[i], collection);
      }

      return accumulator;
    }    
  }
};
