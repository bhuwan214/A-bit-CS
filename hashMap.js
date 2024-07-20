
class HashMap {
  constructor(initialCapacity = 16) {
    this.size = 0;
    this.capacity = initialCapacity;

    // This creates an array with the specified length and fills it with empty arrays.
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.loadFactor = 0.75;
  }

  //Hash function to convert the key to hash value
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }

  //Get the index for a key based on its hash code

  getBucketIndex(key) {
    const hash = this.hash(key);
    return Math.abs(hash) % this.capacity;
  }

  //Set a key-value pair in the hash map

  set(key, value) {
    const index = this.getBucketIndex(key);
    const bucket = this.buckets[index];

    // Check if the key already exists and update its value
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    //If the key does not exist, add it to the bucket
    bucket.push([key, value]);
    this.size++;

    // If the hash map need to resize
    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }
  }

  //Get the value for a key from the hash map

  get(key) {
    const index = this.getBucketIndex(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }

  has(key){
    const index = this.getBucketIndex(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        return true;
      }
    }
    return false;

  }

  remove(key) {
    const index = this.getBucketIndex(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  clear(){
    this.buckets = [];
  }


  //Trace the entire hash map
 trace(){
    let count=0;
    for (let i = 0; i < this.buckets.length; i++) {
        console.log(i + ": " + this.buckets[i]);
        
        }
    
 }



 length(){ 

    let count = 0;
    for (let i = 0; i < this.buckets.length; i++) {
        count+=this.buckets[i].length;
    }
    return console.log("The length is", count);
 }




  resize() {
    const newCapacity = this.capacity * 2;
    const newBuckets = Array(newCapacity)
      .fill(null)
      .map(() => []);

    //Rehashing all existing key-value pairs to the new buckets

    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        const newIndex = Math.abs(this.hash(pair[0])) % newCapacity;
        newBuckets[newIndex].push(pair);
      }
    }
    this.capacity = newCapacity;
    this.buckets = newBuckets;
  }
}



const map = new HashMap();
map.set('apple', 'red')
map.set('banana', 'yellow')
map.set('carrot', 'orange')
map.set('dog', 'brown')
map.set('elephant', 'gray')
map.set('frog', 'green')
map.set('grape', 'purple')
map.set('hat', 'black')
map.set('ice cream', 'white')
// map.set('jacket', 'blue')
// map.set('kite', 'pink')
// map.set('lion', 'golden')
console.log( map.has("name"))
map.set("name", "koe")
map.set("age", 30);
map.trace()
console.log(map.get("name")); // Output: Alice
console.log(map.get("age")); // Output: 30

// map.remove("name");
console.log(map.get("name")); // Output: undefined

// Adding more entries to trigger resize
// for (let i = 0; i < 20; i++) {
//     map.set(`key${i}`, `value${i}`);
// }


// console.log(map.length())
// map.clear()
map.trace()
map.length()