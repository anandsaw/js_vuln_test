const BSON = require('bson');
const bson = new BSON();

// Create a sample object to serialize
const doc = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland"
    },
    scores: [95, 100, 90]
};

// Allocate a buffer with a pre-determined size for serialization
// The size should be larger than the expected size of the document
const buffer = Buffer.alloc(256);  // allocating 256 bytes for the buffer

// Specify the starting index in the buffer where BSON data will be serialized
let index = 0;

// Serialize the object into the buffer
let size = bson.serializeInto(buffer, doc, index);

// Output the result
console.log("Serialized Buffer:", buffer.slice(0, size));

// The buffer now contains the serialized BSON data.
// You can deserialize it back into an object like this:
const deserializedDoc = bson.deserialize(buffer.slice(0, size));
console.log("Deserialized Object:", deserializedDoc);
