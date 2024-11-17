export const questions = {

  MongoDB: [
    {
      "q": "What is the default port number for MongoDB?",
      "opts": ["27017", "28017", "30000", "27019"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operation is used to check if a field exists in a document?",
      "opts": ["$exists", "$match", "$in", "$eq"],
      "ans": 0
    },
    {
      "q": "What is the default data format used by MongoDB to store data?",
      "opts": ["BSON", "JSON", "XML", "CSV"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `mapReduce()` method in MongoDB?",
      "opts": ["To perform complex aggregation operations", "To map and reduce data across a collection", "To create indexes", "To find documents matching a query"],
      "ans": 1
    },
    {
      "q": "Which of the following is used to filter documents in MongoDB queries?",
      "opts": ["$match", "$filter", "$query", "$where"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about MongoDB's `ObjectId`?",
      "opts": ["It is a unique identifier for documents", "It is a special query operator", "It is a data type for storing objects", "It is used to define relationships between documents"],
      "ans": 0
    },
    {
      "q": "What is the purpose of MongoDB's `wire protocol`?",
      "opts": ["To define the communication between MongoDB servers and clients", "To provide data encryption", "To define database schema", "To manage user access control"],
      "ans": 0
    },
    {
      "q": "Which operator is used to select documents where a field's value is not equal to a specific value?",
      "opts": ["$ne", "$eq", "$gt", "$lt"],
      "ans": 0
    },
    {
      "q": "In MongoDB, how are relationships between documents typically handled?",
      "opts": ["By embedding documents", "By using SQL joins", "By using foreign keys", "MongoDB does not support relationships"],
      "ans": 0
    },
    {
      "q": "Which command in MongoDB is used to delete all documents in a collection?",
      "opts": ["deleteMany()", "remove()", "drop()", "clear()"],
      "ans": 1
    },
    {
      "q": "What is the primary purpose of the `$text` operator in MongoDB?",
      "opts": ["To perform text search on string fields", "To select documents with specific fields", "To sort documents by text fields", "To perform aggregation on text data"],
      "ans": 0
    },
    {
      "q": "Which of the following aggregation operators can be used to calculate the sum of a field?",
      "opts": ["$sum", "$count", "$avg", "$min"],
      "ans": 0
    },
    {
      "q": "Which of the following methods in MongoDB is used to create a database?",
      "opts": ["use dbname", "db.create('dbname')", "createDatabase('dbname')", "create()"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to increment the value of a field by a specified value?",
      "opts": ["$inc", "$set", "$add", "$push"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB commands is used to start the MongoDB server?",
      "opts": ["mongod", "mongo", "mongodb", "mongos"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB commands is used to stop the MongoDB server?",
      "opts": ["db.shutdownServer()", "shutdown()", "mongod --stop", "mongo --exit"],
      "ans": 0
    },
    {
      "q": "Which of the following can be used to control concurrency in MongoDB?",
      "opts": ["Transactions", "Indexes", "Aggregation", "Sharding"],
      "ans": 0
    },
    {
      "q": "What is the `db.collection.drop()` method used for in MongoDB?",
      "opts": ["To remove a collection from a database", "To remove all documents from a collection", "To clear the index of a collection", "To remove a database"],
      "ans": 0
    },
    {
      "q": "Which operator is used to match documents that have a field with a value less than a specific value in MongoDB?",
      "opts": ["$lt", "$gt", "$lte", "$gte"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to create a new collection?",
      "opts": ["createCollection()", "db.create()", "create()", "addCollection()"],
      "ans": 0
    },
    {
      "q": "Which method is used to retrieve all documents in a collection in MongoDB?",
      "opts": ["find()", "get()", "fetch()", "findAll()"],
      "ans": 0
    },
    {
      "q": "In MongoDB, which of the following is a valid way to sort documents?",
      "opts": ["db.collection.find().sort({field: 1})", "db.collection.find().orderBy({field: 1})", "db.collection.sort({field: 1})", "db.collection.find().orderByField({field: 1})"],
      "ans": 0
    },
    {
      "q": "What does the `$lookup` stage do in a MongoDB aggregation pipeline?",
      "opts": ["Performs a left outer join to another collection", "Filters documents based on a condition", "Groups documents by a field", "Unwinds array fields"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to search for documents where the field contains an array of values?",
      "opts": ["$in", "$eq", "$exists", "$gt"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to update a specific document in MongoDB?",
      "opts": ["updateOne()", "updateMany()", "findOneAndUpdate()", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the `$unset` operator do in MongoDB?",
      "opts": ["Removes a field from a document", "Sets a field's value to null", "Adds a field to a document", "Changes a field's value"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to show a collection's indexes?",
      "opts": ["db.collection.getIndexes()", "db.collection.showIndexes()", "db.collection.indexes()", "db.collection.index()"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about MongoDB transactions?",
      "opts": ["Transactions provide ACID guarantees", "MongoDB does not support transactions", "Transactions are supported only in sharded clusters", "Transactions provide eventual consistency"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to count the number of documents that match a query?",
      "opts": ["countDocuments()", "count()", "getCount()", "findCount()"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `mongos` process in MongoDB?",
      "opts": ["To route queries to appropriate shards in a sharded cluster", "To store data in the cluster", "To back up data", "To perform complex aggregation operations"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about MongoDB's sharding?",
      "opts": ["Sharding distributes data across multiple servers", "Sharding is used for backup", "Sharding is only used for small databases", "Sharding does not work in replica sets"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to configure authentication in MongoDB?",
      "opts": ["mongod.conf file", "mongos.conf file", "config database", "security database"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to check if a field value is greater than or equal to a specific value?",
      "opts": ["$gte", "$gt", "$lte", "$lt"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about MongoDB's `Aggregation Pipeline`?",
      "opts": ["It is a series of stages that process documents", "It only supports single operations", "It is used for sorting only", "It is a query method"],
      "ans": 0
    },
    {
      "q": "What does the `db.collection.aggregate()` method do?",
      "opts": ["Performs an aggregation operation on the collection", "Sorts the documents in a collection", "Finds documents in a collection", "Creates new documents in the collection"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to combine multiple conditions using logical OR?",
      "opts": ["$or", "$and", "$nor", "$not"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to define data relationships in MongoDB?",
      "opts": ["Embedding documents or referencing them", "Using foreign keys", "Creating indexes", "Defining joins"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB methods is used to retrieve distinct values for a field?",
      "opts": ["distinct()", "unique()", "findUnique()", "getDistinct()"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB commands is used to check the status of the server?",
      "opts": ["db.serverStatus()", "server.status()", "mongod.status()", "db.status()"],
      "ans": 0
    },
    {
      "q": "What is the maximum size of an individual document in MongoDB?",
      "opts": ["16 MB", "32 MB", "64 MB", "128 MB"],
      "ans": 0
    }
    ,
    {
      "q": "Which MongoDB operator is used to search for documents where the field contains a specific value in an array?",
      "opts": ["$in", "$elemMatch", "$arrayContains", "$match"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to drop a database?",
      "opts": ["db.dropDatabase()", "dropDatabase()", "removeDatabase()", "db.drop()"],
      "ans": 0
    },
    {
      "q": "Which method is used to insert a single document into a collection in MongoDB?",
      "opts": ["insertOne()", "addOne()", "newDocument()", "create()"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `explain()` method in MongoDB?",
      "opts": ["To show how MongoDB executes a query", "To create an index", "To aggregate data", "To delete a document"],
      "ans": 0
    },
    {
      "q": "What does the `$limit` stage do in MongoDB aggregation?",
      "opts": ["Limits the number of documents", "Matches documents based on a condition", "Groups documents by a field", "Adds new fields to documents"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB commands is used to list all collections in a database?",
      "opts": ["show collections", "list collections", "db.showCollections()", "db.list()"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to update multiple documents in a collection?",
      "opts": ["updateMany()", "updateAll()", "modify()", "update()"],
      "ans": 0
    },
    {
      "q": "What does the `$addFields` stage do in MongoDB aggregation?",
      "opts": ["Adds new fields to documents", "Groups documents by a field", "Sorts documents", "Filters documents based on a condition"],
      "ans": 0
    },
    {
      "q": "Which of the following operators is used to combine query conditions using logical AND?",
      "opts": ["$and", "$or", "$not", "$nor"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `db.collection.findOneAndDelete()` method in MongoDB?",
      "opts": ["Finds and deletes a single document", "Finds and updates a single document", "Deletes all documents in a collection", "Finds and removes a field"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about MongoDB’s `sharding`?",
      "opts": ["Sharding distributes data across multiple servers", "Sharding is used for data replication", "Sharding improves query performance by creating indexes", "Sharding is used for backups"],
      "ans": 0
    },
    {
      "q": "What is the default write concern in MongoDB?",
      "opts": ["acknowledged", "unacknowledged", "majority", "all"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to match documents that have a specific field value equal to a given value?",
      "opts": ["$eq", "$in", "$gt", "$exists"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to find the current server’s status?",
      "opts": ["serverStatus()", "status()", "db.serverStatus()", "rs.status()"],
      "ans": 0
    },
    {
      "q": "What is the primary purpose of the `$match` stage in a MongoDB aggregation pipeline?",
      "opts": ["To filter documents based on a condition", "To group documents by a field", "To sort documents", "To calculate the sum of fields"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to check if a field is greater than or equal to a specified value?",
      "opts": ["$gte", "$gt", "$lt", "$lte"],
      "ans": 0
    },
    {
      "q": "What does the `$group` stage in MongoDB aggregation do?",
      "opts": ["Groups documents by a field", "Matches documents based on a condition", "Adds fields to documents", "Sorts documents by a field"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to start a MongoDB server?",
      "opts": ["mongod", "mongo", "mongodb", "start-mongo"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to check if a field exists?",
      "opts": ["$exists", "$in", "$not", "$eq"],
      "ans": 0
    },
    {
      "q": "Which of the following commands is used to create an index on a MongoDB collection?",
      "opts": ["createIndex()", "addIndex()", "newIndex()", "create()"],
      "ans": 0
    },
    {
      "q": "Which operator is used to perform a logical NOT operation on a query condition?",
      "opts": ["$not", "$nor", "$and", "$or"],
      "ans": 0
    },
    {
      "q": "What does the `$unwind` stage do in MongoDB aggregation?",
      "opts": ["Deconstructs an array field", "Filters documents based on a condition", "Sorts documents", "Groups documents"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to back up a MongoDB database?",
      "opts": ["mongodump", "backup()", "db.backup()", "mongod"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `$set` operator in MongoDB?",
      "opts": ["To update or add a field in a document", "To remove a field from a document", "To increment a field value", "To sort documents by a field"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to match documents where a field contains a value greater than a specified value?",
      "opts": ["$gt", "$lt", "$gte", "$eq"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to delete a collection in MongoDB?",
      "opts": ["drop()", "delete()", "remove()", "dropCollection()"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to insert multiple documents into a collection?",
      "opts": ["insertMany()", "addMultiple()", "createMany()", "insertAll()"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to see all the indexes in a collection?",
      "opts": ["getIndexes()", "showIndexes()", "listIndexes()", "db.indexes()"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to retrieve all documents from a MongoDB collection?",
      "opts": ["find()", "select()", "getAll()", "findAll()"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `db.collection.renameCollection()` method in MongoDB?",
      "opts": ["Renames a collection", "Removes a collection", "Renames a field", "Creates a new collection"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to check if a field is less than a specified value?",
      "opts": ["$lt", "$gt", "$lte", "$gte"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to match documents where a field value is less than or equal to a specified value?",
      "opts": ["$lte", "$gte", "$lt", "$gt"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to match documents where the field value is greater than or equal to a specified value?",
      "opts": ["$gte", "$lte", "$lt", "$gt"],
      "ans": 0
    },
    {
      "q": "Which of the following is a MongoDB data type that stores binary data?",
      "opts": ["BinData", "ObjectId", "Array", "Boolean"],
      "ans": 0
    },
    {
      "q": "What is the maximum size of a MongoDB document?",
      "opts": ["16 MB", "8 MB", "64 MB", "128 MB"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to update a single document in a collection?",
      "opts": ["updateOne()", "modifyOne()", "update()", "edit()"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `$setOnInsert` operator in MongoDB?",
      "opts": ["Sets the value of a field only when a document is inserted", "Updates a field value", "Adds a field to a document", "Deletes a field from a document"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB operators is used to specify a field to update during an update operation?",
      "opts": ["$set", "$inc", "$push", "$pull"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `db.collection.countDocuments()` method in MongoDB?",
      "opts": ["Counts the number of documents in a collection", "Counts the number of fields in a document", "Counts the number of indexes", "Counts the number of database operations"],
      "ans": 0
    }
    ,
    {
      "q": "Which method is used to create a new index on a field in MongoDB?",
      "opts": ["createIndex()", "addIndex()", "newIndex()", "create()"],
      "ans": 0
    },
    {
      "q": "What is a MongoDB replica set?",
      "opts": ["A group of MongoDB servers that replicate data", "A single MongoDB server", "A cluster of sharded MongoDB servers", "A method to back up data"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to match documents where the field value is equal to a specified value?",
      "opts": ["$eq", "$ne", "$gt", "$lt"],
      "ans": 0
    },
    {
      "q": "In MongoDB, how can you ensure data consistency in distributed clusters?",
      "opts": ["By using replica sets", "By using sharding only", "By disabling transactions", "By using only one server"],
      "ans": 0
    },
    {
      "q": "Which operator is used to specify an array field for an $elemMatch query in MongoDB?",
      "opts": ["$elemMatch", "$in", "$match", "$exists"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `$push` operator in MongoDB?",
      "opts": ["To add an element to an array", "To remove an element from an array", "To update a field", "To increment a field value"],
      "ans": 0
    },
    {
      "q": "Which of the following is a valid method to add a new document to a MongoDB collection?",
      "opts": ["insertOne()", "addDocument()", "newDoc()", "create()"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operation is used to rename a collection?",
      "opts": ["renameCollection()", "rename()", "changeCollectionName()", "rename()"],
      "ans": 0
    },
    {
      "q": "What does the `$addToSet` operator do in MongoDB?",
      "opts": ["Adds a value to an array only if it is not already present", "Adds a value to an array", "Removes a value from an array", "Replaces the array with a new array"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `db.collection.createIndex()` method in MongoDB?",
      "opts": ["To create an index on a collection", "To create a new collection", "To define the schema of a collection", "To group documents in a collection"],
      "ans": 0
    },
    {
      "q": "Which of the following operators is used to check for the existence of a field in a document?",
      "opts": ["$exists", "$ne", "$eq", "$gt"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to match documents where a field value is greater than a specific value?",
      "opts": ["$gt", "$lt", "$gte", "$eq"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to remove all documents in a collection?",
      "opts": ["remove()", "deleteMany()", "drop()", "clear()"],
      "ans": 1
    },
    {
      "q": "What is the primary use of the `$match` stage in MongoDB aggregation?",
      "opts": ["To filter documents based on specific conditions", "To group documents by a field", "To join documents from different collections", "To unwind an array field"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to test whether a field value is not equal to a specific value?",
      "opts": ["$ne", "$eq", "$gt", "$lt"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to retrieve a specific field from a document?",
      "opts": ["projection", "select()", "find()", "filter()"],
      "ans": 0
    },
    {
      "q": "What does the `$skip` stage do in MongoDB aggregation?",
      "opts": ["Skips the first N documents", "Skips documents based on a condition", "Sorts documents by a field", "Limits the number of documents"],
      "ans": 0
    },
    {
      "q": "What does the `db.collection.stats()` method return?",
      "opts": ["Statistics about the collection", "Details about the indexes in a collection", "The number of documents in the collection", "The average document size"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB methods is used to find a single document in a collection?",
      "opts": ["findOne()", "find()", "findSingle()", "get()"],
      "ans": 0
    },
    {
      "q": "What is the function of the `mongos` process in a MongoDB sharded cluster?",
      "opts": ["To route client requests to the correct shard", "To store data in the cluster", "To back up data", "To perform aggregation operations"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to connect to a database?",
      "opts": ["connect()", "use()", "connectTo()", "db.connect()"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the MongoDB `db.createCollection()` method?",
      "opts": ["It creates a new collection in the database", "It adds a field to an existing collection", "It modifies the schema of a collection", "It drops an existing collection"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to perform a complex aggregation in MongoDB?",
      "opts": ["aggregate()", "findAndModify()", "update()", "group()"],
      "ans": 0
    },
    {
      "q": "What does the `$sort` stage do in MongoDB aggregation?",
      "opts": ["Sorts documents by specified fields", "Filters documents based on a condition", "Groups documents by a field", "Unwinds array fields"],
      "ans": 0
    },
    {
      "q": "Which operator is used to check if a field value is less than or equal to a specific value in MongoDB?",
      "opts": ["$lte", "$lt", "$gt", "$gte"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to insert multiple documents into a collection?",
      "opts": ["insertMany()", "insertBatch()", "addMultiple()", "createMultiple()"],
      "ans": 0
    },
    {
      "q": "What does the `db.collection.findOneAndUpdate()` method do?",
      "opts": ["Finds and updates a single document", "Finds a document and removes it", "Finds and replaces a document", "Finds and projects a document"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to combine multiple query conditions with a logical OR?",
      "opts": ["$or", "$and", "$nor", "$not"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB operators is used to perform a text search on a string field?",
      "opts": ["$text", "$match", "$search", "$in"],
      "ans": 0
    },
    {
      "q": "Which command is used to list all databases in MongoDB?",
      "opts": ["show databases", "list databases", "db.show()", "show()"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to backup a MongoDB database?",
      "opts": ["mongodump", "backup()", "db.backup()", "mongobackup"],
      "ans": 0
    },
    {
      "q": "What is a MongoDB shard key?",
      "opts": ["A field used to distribute data across multiple shards", "A field used for indexing", "A special field for joins", "A key used for sorting"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to check the status of a replica set?",
      "opts": ["rs.status()", "db.status()", "replicaSet.status()", "rs.check()"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to specify a regular expression pattern for matching field values?",
      "opts": ["$regex", "$pattern", "$match", "$text"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to remove a specific document from a MongoDB collection?",
      "opts": ["deleteOne()", "removeOne()", "findOneAndDelete()", "drop()"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to find the distinct values for a field?",
      "opts": ["distinct()", "unique()", "findDistinct()", "getDistinct()"],
      "ans": 0
    },
    {
      "q": "Which operator is used to select documents where a field value is within a range of values in MongoDB?",
      "opts": ["$in", "$between", "$range", "$match"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to manage the schema in MongoDB?",
      "opts": ["MongoDB does not have a strict schema", "Using collections", "Using the db.schema() method", "Using validations in the schema"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `$unwind` stage in MongoDB aggregation?",
      "opts": ["To deconstruct an array field", "To filter documents based on a condition", "To group documents by a field", "To sort documents"],
      "ans": 0
    }
    ,
    {
      "q": "What does the `MongoDB` `find()` method return?",
      "opts": ["A cursor to the documents in the collection", "A single document", "An array of documents", "The count of documents"],
      "ans": 0
    },
    {
      "q": "What is a `MongoDB` index?",
      "opts": ["A special data structure used to improve query performance", "A method of backup storage", "A type of collection", "A method of securing documents"],
      "ans": 0
    },
    {
      "q": "Which operator is used to query for documents with a value greater than or equal to a specific value in MongoDB?",
      "opts": ["$gte", "$lte", "$gt", "$lt"],
      "ans": 0
    },
    {
      "q": "What is the default write concern in MongoDB?",
      "opts": ["1", "All", "Majority", "None"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to group data in MongoDB aggregation?",
      "opts": ["$group", "$match", "$project", "$unwind"],
      "ans": 0
    },
    {
      "q": "What does the `MongoDB` `$unwind` stage do in an aggregation pipeline?",
      "opts": ["Deconstructs an array field from the input documents", "Sorts the documents", "Filters the documents", "Groups the documents"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to remove multiple documents matching a query?",
      "opts": ["deleteMany()", "remove()", "drop()", "clear()"],
      "ans": 0
    },
    {
      "q": "In MongoDB, what is a replica set?",
      "opts": ["A group of MongoDB servers that maintain the same data set", "A backup tool", "A method of data encryption", "A type of collection"],
      "ans": 0
    },
    {
      "q": "What is a `shard` in MongoDB?",
      "opts": ["A horizontal partition of data across multiple servers", "A replica of data in the same database", "A backup mechanism", "A type of index"],
      "ans": 0
    },
    {
      "q": "Which MongoDB method is used to update multiple documents that match a query?",
      "opts": ["updateMany()", "updateOne()", "findAndModify()", "bulkWrite()"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about MongoDB transactions?",
      "opts": ["MongoDB supports ACID transactions", "MongoDB does not support transactions", "MongoDB only supports transactions in sharded clusters", "MongoDB uses two-phase commit"],
      "ans": 0
    },
    {
      "q": "What is the maximum document size in MongoDB?",
      "opts": ["16 MB", "32 MB", "64 MB", "128 MB"],
      "ans": 0
    },
    {
      "q": "Which of the following is the MongoDB data storage format?",
      "opts": ["BSON", "JSON", "XML", "CSV"],
      "ans": 0
    },
    {
      "q": "How does MongoDB handle schema design?",
      "opts": ["Schema-less", "Requires a fixed schema", "Supports fixed schema with relationships", "Requires an SQL schema"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to match documents where a field value is less than a specified value?",
      "opts": ["$lt", "$gt", "$lte", "$gte"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct syntax to create a database in MongoDB?",
      "opts": ["use dbname", "createDatabase('dbname')", "db.create('dbname')", "db.createDatabase('dbname')"],
      "ans": 0
    },
    {
      "q": "Which command in MongoDB is used to switch to a database?",
      "opts": ["use dbname", "switch db dbname", "changeDatabase('dbname')", "db.switchTo('dbname')"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB methods is used to create a new index on a collection?",
      "opts": ["createIndex()", "addIndex()", "newIndex()", "create()"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operation is used to replace an entire document?",
      "opts": ["replaceOne()", "updateOne()", "insertOne()", "findOneAndUpdate()"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `$match` stage in MongoDB aggregation?",
      "opts": ["Filters the documents", "Projects specific fields", "Groups the documents", "Unwinds the array field"],
      "ans": 0
    },
    {
      "q": "In MongoDB, which method is used to check if a document exists?",
      "opts": ["findOne()", "find()", "countDocuments()", "get()"],
      "ans": 0
    },
    {
      "q": "Which of the following MongoDB methods is used to retrieve the count of documents in a collection?",
      "opts": ["countDocuments()", "getCount()", "count()", "findCount()"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of MongoDB?",
      "opts": ["Horizontal scalability", "SQL queries", "ACID compliance by default", "Relational data support"],
      "ans": 0
    },
    {
      "q": "Which MongoDB operator is used to perform a logical AND operation between multiple conditions?",
      "opts": ["$and", "$or", "$nor", "$not"],
      "ans": 0
    },
    {
      "q": "Which method is used to retrieve all the documents from a collection in MongoDB?",
      "opts": ["find()", "findAll()", "get()", "findMany()"],
      "ans": 0
    },
    {
      "q": "What does the `aggregate()` function in MongoDB allow you to do?",
      "opts": ["Perform complex operations like filtering, grouping, and sorting on data", "Retrieve a single document", "Insert a new document", "Create a new collection"],
      "ans": 0
    },
    {
      "q": "What is the default write concern in MongoDB?",
      "opts": ["1", "All", "Majority", "None"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct syntax to insert a document into a MongoDB collection?",
      "opts": ["db.collection.insertOne({})", "db.insert({})", "collection.add({})", "db.collection.addDocument({})"],
      "ans": 0
    },
    {
      "q": "What does the `$addFields` stage do in MongoDB aggregation?",
      "opts": ["Adds new fields to documents", "Filters documents", "Groups documents by field", "Sorts documents"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about MongoDB's `ObjectId`?",
      "opts": ["It is a unique identifier for documents", "It is a type of query operator", "It is used for indexing", "It is a built-in function"],
      "ans": 0
    },
    {
      "q": "Which of the following operations can be performed in a MongoDB transaction?",
      "opts": ["Insert, update, delete", "Only insert", "Only update", "Only read"],
      "ans": 0
    },
    {
      "q": "What does the `$set` operator do in MongoDB?",
      "opts": ["Updates the value of a field in a document", "Sets the value of an index", "Sets the value of a new field", "Sets the value of a collection"],
      "ans": 0
    },
    {
      "q": "What does the `findAndModify()` method do in MongoDB?",
      "opts": ["Finds and modifies a document atomically", "Finds a document", "Modifies a document", "Removes a document"],
      "ans": 0
    },
    {
      "q": "Which of the following is a correct method to connect to a MongoDB database from Node.js?",
      "opts": ["mongoose.connect()", "mongo.connect()", "mongodb.connect()", "db.connect()"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about MongoDB's data consistency model?",
      "opts": ["It provides eventual consistency by default", "It provides strong consistency by default", "It provides both strong and eventual consistency depending on configuration", "MongoDB does not support consistency"],
      "ans": 0
    },
    {
      "q": "Which of the following operations can be performed using MongoDB's aggregation framework?",
      "opts": ["Filtering, grouping, and sorting data", "Updating documents", "Inserting documents", "Deleting documents"],
      "ans": 0
    },
    {
      "q": "What does the `$limit` stage do in MongoDB aggregation?",
      "opts": ["Limits the number of documents", "Groups documents by a field", "Matches documents based on a condition", "Adds new fields to documents"],
      "ans": 0
    },
    {
      "q": "Which of the following is an advantage of using MongoDB over relational databases?",
      "opts": ["Schema flexibility", "Better SQL support", "ACID transactions", "Table joins"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `MongoDB Atlas` service?",
      "opts": ["To provide a fully managed cloud service for MongoDB", "To provide MongoDB backups", "To provide MongoDB analytics", "To host MongoDB on-premise"],
      "ans": 0
    },
    {
      "q": "Which of the following commands can be used to list all collections in a MongoDB database?",
      "opts": ["show collections", "list collections", "db.showCollections()", "db.list()"],
      "ans": 0
    },
    {
      "q": "Which method can be used to retrieve documents from a collection that match specific conditions?",
      "opts": ["find()", "select()", "query()", "getDocuments()"],
      "ans": 0
    }
    ,
    {
      "q": "What is MongoDB?",
      "opts": ["A NoSQL database", "A relational database", "A cloud storage service", "A JavaScript framework"],
      "ans": 0
    },
    {
      "q": "Which of the following is used as the default database in MongoDB?",
      "opts": ["admin", "local", "test", "None of the above"],
      "ans": 2
    },
    {
      "q": "What type of database is MongoDB?",
      "opts": ["Document-based NoSQL database", "Relational database", "Key-value store", "Graph database"],
      "ans": 0
    },
    {
      "q": "In MongoDB, what is a collection?",
      "opts": ["A group of documents", "A type of database", "A single record", "A column in a table"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `db.collection.find()` method in MongoDB?",
      "opts": ["To retrieve documents from a collection", "To insert documents into a collection", "To create a new database", "To drop a collection"],
      "ans": 0
    },
    {
      "q": "Which command is used to insert a document into a MongoDB collection?",
      "opts": ["insertOne()", "add()", "create()", "put()"],
      "ans": 0
    },
    {
      "q": "What is the data format used by MongoDB to store documents?",
      "opts": ["BSON", "JSON", "XML", "CSV"],
      "ans": 0
    },
    {
      "q": "Which of the following is a valid MongoDB query to find a document with a specific field value?",
      "opts": ["db.collection.find({field: value})", "db.find({field: value})", "db.collection.findAll({field: value})", "db.collection.get({field: value})"],
      "ans": 0
    },
    {
      "q": "What does the `insertMany()` method in MongoDB do?",
      "opts": ["Inserts multiple documents into a collection", "Inserts a single document into a collection", "Deletes multiple documents from a collection", "Updates multiple documents in a collection"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to update a document in MongoDB?",
      "opts": ["updateOne()", "insertOne()", "findOne()", "getOne()"],
      "ans": 0
    },
    {
      "q": "How does MongoDB handle relationships between data?",
      "opts": ["By embedding documents", "By using foreign keys", "By using joins", "MongoDB does not handle relationships"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to remove a document from a collection?",
      "opts": ["remove()", "deleteOne()", "drop()", "clear()"],
      "ans": 1
    },
    {
      "q": "Which method is used to find the first document in a collection in MongoDB?",
      "opts": ["findOne()", "findFirst()", "getFirst()", "getOne()"],
      "ans": 0
    },
    {
      "q": "In MongoDB, what is the purpose of an index?",
      "opts": ["To speed up query performance", "To store additional data", "To store backups", "To prevent data duplication"],
      "ans": 0
    },
    {
      "q": "How do you create an index on a field in MongoDB?",
      "opts": ["db.collection.createIndex({field: 1})", "db.collection.addIndex({field: 1})", "db.createIndex({field: 1})", "db.collection.index({field: 1})"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to count the number of documents in a MongoDB collection?",
      "opts": ["countDocuments()", "getCount()", "count()", "findCount()"],
      "ans": 0
    },
    {
      "q": "What does the `aggregate()` method in MongoDB do?",
      "opts": ["Performs complex queries and transformations on documents", "Deletes documents", "Inserts new documents", "Returns all documents from a collection"],
      "ans": 0
    },
    {
      "q": "What is a shard in MongoDB?",
      "opts": ["A horizontal partition of data in a database", "A backup mechanism", "A tool for database indexing", "A type of replica set"],
      "ans": 0
    },
    {
      "q": "What is the purpose of replica sets in MongoDB?",
      "opts": ["To provide high availability and data redundancy", "To partition data across multiple nodes", "To speed up data retrieval", "To optimize indexing"],
      "ans": 0
    },
    {
      "q": "Which of the following operators is used to match a field in a MongoDB query?",
      "opts": ["$eq", "$gt", "$lt", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which operator is used to match documents where a field value is greater than a specified value?",
      "opts": ["$gt", "$lt", "$eq", "$gte"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `$project` stage in MongoDB aggregation?",
      "opts": ["To reshape documents by including, excluding, or adding fields", "To filter documents based on criteria", "To sort documents", "To group documents by a field"],
      "ans": 0
    },
    {
      "q": "What does the `$lookup` operator do in MongoDB?",
      "opts": ["Performs a left outer join to another collection", "Filters documents based on criteria", "Groups documents by a field", "Sorts documents in ascending order"],
      "ans": 0
    },
    {
      "q": "Which of the following commands is used to create a new MongoDB database?",
      "opts": ["use dbname", "createDatabase('dbname')", "db.create('dbname')", "create()"],
      "ans": 0
    },
    {
      "q": "In MongoDB, what is a document?",
      "opts": ["A record that contains data in a collection", "A collection of tables", "A type of index", "A database schema"],
      "ans": 0
    },
    {
      "q": "Which of the following is the default data format for MongoDB?",
      "opts": ["BSON", "JSON", "CSV", "XML"],
      "ans": 0
    },
    {
      "q": "What is the `MongoDB Atlas`?",
      "opts": ["A fully managed cloud database service", "A command-line tool", "A storage engine", "A backup tool"],
      "ans": 0
    },
    {
      "q": "Which MongoDB command is used to show all the databases in the current instance?",
      "opts": ["show dbs", "list databases", "db.getDatabases()", "list()"],
      "ans": 0
    },
    {
      "q": "Which method is used to check if a database exists in MongoDB?",
      "opts": ["db.exists()", "db.getMongo().getDBNames()", "db.list()", "db.find()"],
      "ans": 1
    },
    {
      "q": "Which of the following is a valid way to filter documents in MongoDB?",
      "opts": ["db.collection.find({field: value})", "db.collection.findAll({field: value})", "db.collection.get({field: value})", "db.collection.filter({field: value})"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `distinct()` method in MongoDB?",
      "opts": ["To return unique values for a specific field", "To find the first matching document", "To sort documents by a field", "To delete duplicate documents"],
      "ans": 0
    },
    {
      "q": "What does the `findAndModify()` method in MongoDB do?",
      "opts": ["Modifies a document and returns the old or new document", "Finds a document", "Removes a document", "Creates a new collection"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `db.collection.drop()` method?",
      "opts": ["To remove a collection from the database", "To clear all documents in a collection", "To delete a database", "To remove a document from a collection"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to secure a MongoDB instance?",
      "opts": ["Authentication and Authorization", "Data Encryption", "Firewall settings", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the primary purpose of MongoDB’s aggregation framework?",
      "opts": ["To perform data transformations and computations", "To filter documents", "To retrieve documents", "To handle backups"],
      "ans": 0
    },
    {
      "q": "Which method is used to retrieve the first document matching a query in MongoDB?",
      "opts": ["findOne()", "find()", "getFirst()", "fetchOne()"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to update a document in MongoDB?",
      "opts": ["updateOne()", "updateMany()", "findAndModify()", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following can be used as a field in MongoDB?",
      "opts": ["Any valid string or object", "Only numbers", "Only strings", "Only arrays"],
      "ans": 0
    }
  ]
  ,

  CSS: [
    {
      "q": "Which CSS property is used to control the font size of text?",
      "opts": ["font-size", "font-style", "font-weight", "text-size"],
      "ans": 0
    },
    {
      "q": "Which property is used to create space between elements in CSS?",
      "opts": ["margin", "padding", "border", "spacing"],
      "ans": 0
    },
    {
      "q": "What is the default value of the `position` property for a `<div>` element?",
      "opts": ["static", "relative", "absolute", "fixed"],
      "ans": 0
    },
    {
      "q": "Which property is used to add a shadow effect to an element in CSS?",
      "opts": ["box-shadow", "text-shadow", "border-shadow", "shadow-effect"],
      "ans": 0
    },
    {
      "q": "What does the `opacity` property in CSS do?",
      "opts": ["Sets the transparency level of an element", "Sets the color of an element", "Changes the size of an element", "Controls the visibility of an element"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to change the font style of an element?",
      "opts": ["font-style", "font-family", "text-style", "text-transform"],
      "ans": 0
    },
    {
      "q": "Which property in CSS is used to align text horizontally?",
      "opts": ["text-align", "vertical-align", "align-items", "text-position"],
      "ans": 0
    },
    {
      "q": "How do you select all `<p>` elements with the class `intro` in CSS?",
      "opts": [".intro p", "p.intro", "p.classintro", "p#intro"],
      "ans": 1
    },
    {
      "q": "Which CSS property is used to change the color of the text?",
      "opts": ["color", "background-color", "font-color", "text-color"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to set the background color of an element?",
      "opts": ["background-color", "color", "background", "bg-color"],
      "ans": 0
    },
    {
      "q": "What does the `border-radius` property do in CSS?",
      "opts": ["Rounds the corners of an element", "Sets the width of the border", "Sets the margin of an element", "Controls the padding of an element"],
      "ans": 0
    },
    {
      "q": "Which property is used to create a gap between flex items in CSS?",
      "opts": ["gap", "space", "flex-gap", "item-spacing"],
      "ans": 0
    },
    {
      "q": "What does the `float` property do in CSS?",
      "opts": ["Floats an element to the left or right of its container", "Aligns an element in the center", "Controls the stacking order of elements", "Defines the width of an element"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct way to define a CSS rule for all `div` elements?",
      "opts": ["div {}", "div{background-color:red;}", "div{color:red;}", "div{}"],
      "ans": 0
    },
    {
      "q": "How can you make a background image cover the entire element in CSS?",
      "opts": ["background-size: cover;", "background-position: center;", "background-attachment: fixed;", "background-repeat: no-repeat;"],
      "ans": 0
    },
    {
      "q": "Which property is used to create a responsive layout in CSS?",
      "opts": ["flex", "grid", "display", "media queries"],
      "ans": 3
    },
    {
      "q": "Which property can be used to set the space between columns in a CSS grid layout?",
      "opts": ["column-gap", "row-gap", "grid-gap", "gap"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to specify the type of list marker for list items?",
      "opts": ["list-style-type", "list-style-position", "list-style-image", "list-style"],
      "ans": 0
    },
    {
      "q": "What does the `display: flex;` property do in CSS?",
      "opts": ["Enables a flexible box layout", "Displays elements inline", "Aligns elements to the left", "Adds a grid layout to elements"],
      "ans": 0
    },
    {
      "q": "Which property in CSS is used to specify the width of an element's border?",
      "opts": ["border-width", "border-style", "border-color", "border-radius"],
      "ans": 0
    },
    {
      "q": "What does the `visibility` property in CSS do?",
      "opts": ["Makes an element visible or invisible without removing it from the document flow", "Hides an element from the page", "Makes an element transparent", "Makes an element hidden but still take up space"],
      "ans": 0
    },
    {
      "q": "Which property is used to create a gradient in CSS?",
      "opts": ["background-image", "background-color", "linear-gradient", "gradient"],
      "ans": 0
    },
    {
      "q": "Which property is used to set the width of a column in a CSS grid layout?",
      "opts": ["grid-template-columns", "grid-template-rows", "column-width", "grid-column-width"],
      "ans": 0
    },
    {
      "q": "What is the default value of the `position` property for an element?",
      "opts": ["static", "relative", "absolute", "fixed"],
      "ans": 0
    },
    {
      "q": "How can you make text uppercase in CSS?",
      "opts": ["text-transform: uppercase;", "text-style: uppercase;", "font-style: uppercase;", "font-weight: uppercase;"],
      "ans": 0
    },
    {
      "q": "Which property in CSS is used to control the spacing between letters in a text?",
      "opts": ["letter-spacing", "word-spacing", "line-height", "text-spacing"],
      "ans": 0
    },
    {
      "q": "Which of the following CSS properties is used to control the spacing between words in a text?",
      "opts": ["word-spacing", "letter-spacing", "text-align", "text-indent"],
      "ans": 0
    },
    {
      "q": "Which of the following values can be used with the `position` property in CSS?",
      "opts": ["static", "relative", "absolute", "All of the above"],
      "ans": 3
    },
    {
      "q": "How can you add custom fonts to a webpage in CSS?",
      "opts": ["@font-face", "font-family", "import-font", "link-font"],
      "ans": 0
    },
    {
      "q": "What does the `flex-wrap` property do in CSS?",
      "opts": ["Specifies whether the flex container should wrap its items", "Specifies the direction of the flex items", "Specifies how to align the flex items", "Specifies the size of the flex container"],
      "ans": 0
    },
    {
      "q": "Which of the following values can the `display` property take in CSS?",
      "opts": ["block", "inline", "flex", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following CSS properties is used to make an element fixed at the top of the page?",
      "opts": ["position: fixed;", "position: absolute;", "position: relative;", "position: sticky;"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to set the background image of an element?",
      "opts": ["background-image", "background-color", "image-background", "bg-image"],
      "ans": 0
    },
    {
      "q": "Which property is used to make an element's text bold in CSS?",
      "opts": ["font-weight", "font-style", "font-family", "font-size"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `@keyframes` rule in CSS?",
      "opts": ["To define animations", "To define the styles for elements", "To control media queries", "To define layout"],
      "ans": 0
    },
    {
      "q": "Which property in CSS is used to create a fixed-size grid layout?",
      "opts": ["grid-template-columns", "grid-template-rows", "grid-gap", "grid-rows"],
      "ans": 0
    },
    {
      "q": "What does the `text-transform` property do in CSS?",
      "opts": ["Changes the case of the text", "Changes the alignment of the text", "Changes the spacing of the text", "Changes the color of the text"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to make an element take up the full width of its parent container?",
      "opts": ["width: 100%;", "width: auto;", "display: block;", "margin: 0 auto;"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to create a fixed-position navigation bar?",
      "opts": ["position: fixed;", "position: sticky;", "position: relative;", "position: absolute;"],
      "ans": 0
    },
    {
      "q": "Which property is used to set the space between the rows in a CSS grid layout?",
      "opts": ["row-gap", "column-gap", "gap", "grid-gap"],
      "ans": 0
    },
    {
      "q": "Which property in CSS is used to create an animation effect?",
      "opts": ["animation", "transition", "motion", "transform"],
      "ans": 0
    },
    {
      "q": "Which property is used to set the border width in CSS?",
      "opts": ["border-width", "border-style", "border-color", "border-radius"],
      "ans": 0
    },
    {
      "q": "Which property is used to set the height of an element in CSS?",
      "opts": ["height", "width", "size", "depth"],
      "ans": 0
    }
    ,
    {
      "q": "What does CSS stand for?",
      "opts": ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct syntax for adding a comment in CSS?",
      "opts": ["/* This is a comment */", "// This is a comment", "<!-- This is a comment -->", "' This is a comment"],
      "ans": 0
    },
    {
      "q": "Which property is used to change the font of an element in CSS?",
      "opts": ["font-family", "font-size", "font-style", "text-align"],
      "ans": 0
    },
    {
      "q": "What is the default value of the `position` property in CSS?",
      "opts": ["static", "relative", "absolute", "fixed"],
      "ans": 0
    },
    {
      "q": "Which CSS property controls the layout of columns in a page?",
      "opts": ["column-count", "columns", "column-gap", "column-width"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to change the background color of an element?",
      "opts": ["background-color", "color", "background-image", "background-position"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct way to select an element with the class name 'example' in CSS?",
      "opts": [".example", "#example", "example", "element.example"],
      "ans": 0
    },
    {
      "q": "What does the `z-index` property in CSS do?",
      "opts": ["Controls the stacking order of elements", "Sets the transparency of an element", "Defines the font size", "Controls the width of an element"],
      "ans": 0
    },
    {
      "q": "Which of the following properties is used to add space between the border of an element and its content?",
      "opts": ["padding", "margin", "border-spacing", "width"],
      "ans": 0
    },
    {
      "q": "What does the `float` property do in CSS?",
      "opts": ["It allows an element to be taken out of the normal document flow", "It changes the background color of an element", "It adds margins to an element", "It hides an element"],
      "ans": 0
    },
    {
      "q": "How can you apply a style to an element with the id 'header' in CSS?",
      "opts": ["#header", ".header", "header", "header#"],
      "ans": 0
    },
    {
      "q": "Which property is used to control the spacing between lines of text in CSS?",
      "opts": ["line-height", "letter-spacing", "word-spacing", "text-indent"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `display` property in CSS?",
      "opts": ["Defines how an element is displayed", "Sets the position of an element", "Defines the font size", "Sets the background image of an element"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to make an element’s text bold?",
      "opts": ["font-weight", "font-style", "font-size", "text-transform"],
      "ans": 0
    },
    {
      "q": "What does the `overflow` property in CSS control?",
      "opts": ["How content is handled if it overflows an element's box", "The visibility of an element", "The width of an element", "The position of an element"],
      "ans": 0
    },
    {
      "q": "Which of these values can be used with the `position` property in CSS?",
      "opts": ["static", "relative", "absolute", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which property is used to change the text color in CSS?",
      "opts": ["color", "background-color", "font-color", "text-color"],
      "ans": 0
    },
    {
      "q": "Which of the following properties defines the space between the content and the border of an element in CSS?",
      "opts": ["padding", "margin", "border-width", "spacing"],
      "ans": 0
    },
    {
      "q": "How can you center a block-level element horizontally in CSS?",
      "opts": ["By setting `margin-left: auto; margin-right: auto;`", "By using `text-align: center;`", "By using `position: absolute;`", "By using `float: left;`"],
      "ans": 0
    },
    {
      "q": "Which property in CSS is used to control the size of an element?",
      "opts": ["width", "height", "size", "Both width and height"],
      "ans": 3
    },
    {
      "q": "How can you create a border around an element in CSS?",
      "opts": ["By using the `border` property", "By using `border-style`", "By using `border-width`", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following CSS properties is used to style lists?",
      "opts": ["list-style-type", "list-item-style", "list-style-position", "list-decoration"],
      "ans": 0
    },
    {
      "q": "What is the default value of the `display` property in CSS for a `<div>` element?",
      "opts": ["block", "inline", "inline-block", "flex"],
      "ans": 0
    },
    {
      "q": "Which CSS property can be used to create rounded corners for an element?",
      "opts": ["border-radius", "border-corner", "corner-radius", "round-corners"],
      "ans": 0
    },
    {
      "q": "What does the `visibility` property in CSS do?",
      "opts": ["Controls the visibility of an element without removing it from the document flow", "Hides the element from the document", "Sets the transparency of the element", "Controls the positioning of the element"],
      "ans": 0
    },
    {
      "q": "Which property is used to set the space between individual words in CSS?",
      "opts": ["word-spacing", "letter-spacing", "text-spacing", "line-spacing"],
      "ans": 0
    },
    {
      "q": "Which of these properties controls the alignment of text within a block in CSS?",
      "opts": ["text-align", "align-items", "vertical-align", "text-align-vertical"],
      "ans": 0
    },
    {
      "q": "How can you make an image responsive in CSS?",
      "opts": ["By setting `max-width: 100%`", "By setting `height: auto`", "By using `display: block`", "By using `position: absolute`"],
      "ans": 0
    },
    {
      "q": "Which of the following CSS properties can be used to style the cursor when hovering over an element?",
      "opts": ["cursor", "pointer", "mouse", "hover"],
      "ans": 0
    },
    {
      "q": "How do you make text italic in CSS?",
      "opts": ["By using `font-style: italic;`", "By using `font-weight: italic;`", "By using `font-size: italic;`", "By using `text-style: italic;`"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `box-sizing` property in CSS?",
      "opts": ["To include padding and border in the element's total width and height", "To define the border style", "To control the element's visibility", "To define the layout of the box model"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to control the transparency of an element?",
      "opts": ["opacity", "visibility", "transparent", "color"],
      "ans": 0
    },
    {
      "q": "What does the `@media` rule in CSS allow you to do?",
      "opts": ["Apply styles for specific screen sizes or device types", "Apply styles for specific browsers", "Apply styles for specific HTML elements", "Apply styles for specific classes"],
      "ans": 0
    },
    {
      "q": "Which of the following values can be used with the `position` property in CSS?",
      "opts": ["static", "relative", "absolute", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the purpose of the `flex` property in CSS?",
      "opts": ["To define flexible items within a flex container", "To make items fixed size", "To center elements", "To set grid-based layouts"],
      "ans": 0
    },
    {
      "q": "What does the `align-items` property in CSS do?",
      "opts": ["Aligns items vertically within a flex container", "Aligns items horizontally", "Sets the gap between items", "Aligns the text within an element"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to create a gradient background in CSS?",
      "opts": ["background-image: linear-gradient()", "background-color: gradient()", "background-gradient: linear", "background-image: gradient()"],
      "ans": 0
    },
    {
      "q": "Which property is used to change the font size in CSS?",
      "opts": ["font-size", "font-style", "font-weight", "font-family"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `@font-face` rule in CSS?",
      "opts": ["To define custom fonts", "To set the background color", "To define animations", "To change text alignment"],
      "ans": 0
    },
    {
      "q": "Which CSS property is used to set the distance between the border of an element and its content?",
      "opts": ["padding", "margin", "border-width", "content-spacing"],
      "ans": 0
    },
    {
      "q": "What is the default value of the `display` property for a `<span>` element?",
      "opts": ["inline", "block", "inline-block", "flex"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct way to add a background image in CSS?",
      "opts": ["background-image: url('image.jpg');", "background: url('image.jpg');", "bg-image: url('image.jpg');", "image: url('image.jpg');"],
      "ans": 0
    },
    {
      "q": "Which property is used to set the border style of an element in CSS?",
      "opts": ["border-style", "border-color", "border-width", "border-radius"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `@keyframes` rule in CSS?",
      "opts": ["To define CSS animations", "To define custom fonts", "To style lists", "To set element positions"],
      "ans": 0
    },
    {
      "q": "Which of the following properties is used to add shadows to text in CSS?",
      "opts": ["text-shadow", "box-shadow", "shadow-text", "shadow-box"],
      "ans": 0
    }
  ]

  ,

  Node: [
    {
      "q": "Which of the following modules is used to parse JSON data in Node.js?",
      "opts": ["JSON", "fs", "url", "http"],
      "ans": 0
    },
    {
      "q": "What does the 'res.sendFile()' method do in Express.js?",
      "opts": ["Sends a file as an HTTP response", "Sends a JSON response", "Sends a status code", "Sends text data"],
      "ans": 0
    },
    {
      "q": "Which method is used to register middleware in Express.js?",
      "opts": ["app.use()", "app.listen()", "app.get()", "app.register()"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to run a Node.js script in a debugger?",
      "opts": ["node --inspect <script>", "node debug <script>", "npm start --debug", "node -d <script>"],
      "ans": 0
    },
    {
      "q": "Which of the following modules is used to generate random numbers in Node.js?",
      "opts": ["crypto", "math", "random", "uuid"],
      "ans": 0
    },
    {
      "q": "What is the default method of 'res' object in Express to send a response?",
      "opts": ["res.send()", "res.write()", "res.end()", "res.sendFile()"],
      "ans": 0
    },
    {
      "q": "How do you execute a command in Node.js from the terminal?",
      "opts": ["node <file-name>.js", "npm run <file-name>", "npm start <file-name>", "run node <file-name>.js"],
      "ans": 0
    },
    {
      "q": "Which of the following tools is used to test Node.js applications for security vulnerabilities?",
      "opts": ["npm audit", "npm test", "eslint", "prettier"],
      "ans": 0
    },
    {
      "q": "Which method is used to get the environment variables in Node.js?",
      "opts": ["process.env", "process.vars", "env.get()", "process.env()"],
      "ans": 0
    },
    {
      "q": "Which module in Node.js is used for handling filesystem operations?",
      "opts": ["fs", "path", "http", "url"],
      "ans": 0
    },
    {
      "q": "How do you run an asynchronous function in Node.js?",
      "opts": ["By using a callback", "By using promises", "By using async/await", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following methods in Node.js is used to write data to a file?",
      "opts": ["fs.writeFile()", "fs.appendFile()", "fs.createWriteStream()", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the 'process.argv' array contain in Node.js?",
      "opts": ["Command-line arguments", "Environment variables", "File system paths", "Standard input/output"],
      "ans": 0
    },
    {
      "q": "Which of the following methods can be used to make a request to a server in Node.js?",
      "opts": ["http.request()", "fs.request()", "node.request()", "request()"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the 'express.Router()' method in Express?",
      "opts": ["It allows you to define routes in a modular fashion", "It is used to handle HTTP requests", "It is used to register middleware", "It is used for error handling"],
      "ans": 0
    },
    {
      "q": "How do you add a custom error handler in Express.js?",
      "opts": ["By using app.use()", "By using app.errorHandler()", "By using res.send()", "By using res.sendError()"],
      "ans": 0
    },
    {
      "q": "Which of the following HTTP methods is used to update data on the server?",
      "opts": ["GET", "POST", "PUT", "DELETE"],
      "ans": 2
    },
    {
      "q": "Which method is used to create a server in Node.js?",
      "opts": ["http.createServer()", "server.create()", "app.create()", "create.server()"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct way to install a package locally in Node.js?",
      "opts": ["npm install <package-name>", "npm install --global <package-name>", "npm install <package-name> --local", "npm add <package-name>"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'path.join()' method in Node.js?",
      "opts": ["To join two or more file paths", "To parse URL strings", "To check if a file exists", "To get file extensions"],
      "ans": 0
    },
    {
      "q": "What does the 'res.status()' method do in Express.js?",
      "opts": ["Sets the HTTP status code of the response", "Sets the content type of the response", "Sends a JSON response", "Closes the response stream"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the 'npm init' command?",
      "opts": ["It creates a new Node.js project", "It installs all dependencies", "It starts a server", "It creates a package-lock.json file"],
      "ans": 0
    },
    {
      "q": "What is the 'app.all()' method used for in Express.js?",
      "opts": ["To handle all HTTP methods for a given route", "To start the server", "To send an HTTP response", "To parse JSON data"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to handle streams in Node.js?",
      "opts": ["stream", "http", "buffer", "events"],
      "ans": 0
    },
    {
      "q": "What does the 'res.json()' method do in Express.js?",
      "opts": ["Sends a JSON response", "Sends an HTML response", "Sends a plain text response", "Sends an error response"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to parse incoming request bodies in Express?",
      "opts": ["express.json()", "express.urlencoded()", "body-parser", "All of the above"],
      "ans": 3
    },
    {
      "q": "How do you handle route parameters in Express?",
      "opts": ["By using req.params", "By using req.query", "By using req.body", "By using req.headers"],
      "ans": 0
    },
    {
      "q": "Which of the following Node.js modules is used for creating command-line applications?",
      "opts": ["commander", "express", "async", "socket.io"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'buffer' class in Node.js?",
      "opts": ["To work with raw binary data", "To parse incoming data", "To interact with the database", "To stream data over HTTP"],
      "ans": 0
    },
    {
      "q": "What is the default response type when using 'res.send()' in Express?",
      "opts": ["String", "JSON", "Buffer", "HTML"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to read a file synchronously in Node.js?",
      "opts": ["fs.readFileSync()", "fs.readFile()", "fs.createReadStream()", "fs.appendFile()"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'process.stdin' in Node.js?",
      "opts": ["To read input from the terminal", "To write output to the terminal", "To create a new process", "To manage environment variables"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the 'fs.existsSync()' method?",
      "opts": ["It checks if a file exists synchronously", "It checks if a directory exists", "It creates a file if it doesn't exist", "It deletes a file if it exists"],
      "ans": 0
    },
    {
      "q": "How can you parse a URL in Node.js?",
      "opts": ["url.parse()", "path.parse()", "fs.parse()", "http.parse()"],
      "ans": 0
    },
    {
      "q": "Which method in Node.js is used to handle errors in asynchronous code?",
      "opts": ["try-catch", "callback error", "res.error()", "process.exit()"],
      "ans": 1
    },
    {
      "q": "Which of the following is the correct syntax to include a module in Node.js?",
      "opts": ["require('module-name')", "import 'module-name'", "load('module-name')", "include('module-name')"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to handle streams of data in Node.js?",
      "opts": ["stream module", "http module", "url module", "fs module"],
      "ans": 0
    },
    {
      "q": "How can you get the current working directory in Node.js?",
      "opts": ["process.cwd()", "path.current()", "os.cwd()", "process.dir()"],
      "ans": 0
    },
    {
      "q": "Which HTTP status code represents an internal server error?",
      "opts": ["404", "400", "500", "301"],
      "ans": 2
    },
    {
      "q": "Which of the following is used to monitor Node.js performance in production environments?",
      "opts": ["pm2", "express", "mongoose", "npm"],
      "ans": 0
    }
    ,

    {
      "q": "Which of the following methods in Node.js is used to stop a server?",
      "opts": ["server.close()", "server.stop()", "http.end()", "server.shutdown()"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'querystring' module in Node.js?",
      "opts": ["To parse and format query strings", "To perform regular expressions", "To handle HTTP requests", "To interact with the file system"],
      "ans": 0
    },
    {
      "q": "Which of the following modules is used to perform HTTP requests in Node.js?",
      "opts": ["request", "url", "path", "http"],
      "ans": 0
    },
    {
      "q": "Which function in Node.js is used to handle uncaught exceptions?",
      "opts": ["process.on('uncaughtException')", "process.exit()", "process.uncaught()", "process.crash()"],
      "ans": 0
    },
    {
      "q": "Which of the following statements is true about the 'async' and 'await' keywords in Node.js?",
      "opts": ["They make asynchronous code behave like synchronous code", "They are used for error handling", "They are used for creating promises", "They are only available in Node.js 12 and later"],
      "ans": 0
    },
    {
      "q": "What is the default file extension for Node.js modules?",
      "opts": [".js", ".json", ".node", ".html"],
      "ans": 0
    },
    {
      "q": "What does the 'path' module in Node.js provide?",
      "opts": ["Path manipulation utilities", "HTTP request handling", "Database connection utilities", "File stream utilities"],
      "ans": 0
    },
    {
      "q": "Which of the following statements is true about Node.js?",
      "opts": ["It uses a single-threaded event loop for non-blocking I/O", "It is a multi-threaded environment", "It uses multiple processes to handle I/O", "It can only handle synchronous requests"],
      "ans": 0
    },
    {
      "q": "What is the 'cluster' module used for in Node.js?",
      "opts": ["To create multiple instances of a Node.js process", "To handle asynchronous events", "To create worker threads", "To manage database connections"],
      "ans": 0
    },
    {
      "q": "Which method in Node.js is used to send an HTTP response?",
      "opts": ["res.write()", "res.send()", "res.writeHead()", "res.sendFile()"],
      "ans": 1
    },
    {
      "q": "Which of the following is true about Node.js streams?",
      "opts": ["Streams allow for data to be processed in chunks", "Streams only handle file I/O", "Streams must always be used with callbacks", "Streams block the event loop until the data is processed"],
      "ans": 0
    },
    {
      "q": "Which of the following Node.js modules can be used for interacting with MySQL databases?",
      "opts": ["mysql", "pg", "mongodb", "sqlite3"],
      "ans": 0
    },
    {
      "q": "What does the 'Buffer' class in Node.js do?",
      "opts": ["Handles binary data", "Handles asynchronous I/O", "Provides access to HTTP headers", "Manages memory usage"],
      "ans": 0
    },
    {
      "q": "How do you stop a running Node.js server in code?",
      "opts": ["server.close()", "server.stop()", "http.end()", "process.exit()"],
      "ans": 0
    },
    {
      "q": "What does the 'console.log()' method do in Node.js?",
      "opts": ["Logs messages to the console", "Logs errors to the console", "Executes JavaScript code", "Writes data to a file"],
      "ans": 0
    },
    {
      "q": "Which of the following can be used to manage processes and monitor Node.js applications in production?",
      "opts": ["PM2", "Nginx", "MongoDB", "Redis"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to handle a route in Express.js?",
      "opts": ["app.get()", "app.route()", "app.all()", "app.use()"],
      "ans": 0
    },
    {
      "q": "Which command is used to install a Node.js package globally?",
      "opts": ["npm install -g <package>", "npm global install <package>", "npm install --global <package>", "npm install <package>"],
      "ans": 0
    },
    {
      "q": "What is the use of the 'express.static()' middleware?",
      "opts": ["To serve static files like images, CSS, and JavaScript", "To handle HTTP requests", "To parse request bodies", "To log requests to the console"],
      "ans": 0
    },
    {
      "q": "Which of the following is a popular testing framework for Node.js?",
      "opts": ["Mocha", "Express", "Babel", "React"],
      "ans": 0
    },
    {
      "q": "How do you handle errors in Node.js asynchronously?",
      "opts": ["By using try-catch blocks", "By using promises and .catch()", "By using the 'error' event", "By using process.exit()"],
      "ans": 1
    },
    {
      "q": "Which of the following packages is used to work with MongoDB in Node.js?",
      "opts": ["mongoose", "sequelize", "pg", "mysql2"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the 'async/await' syntax in Node.js?",
      "opts": ["It is syntactic sugar for handling promises", "It is only supported in Node.js 12 and later", "It is used for synchronous code", "It is only for handling callbacks"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a core module of Node.js?",
      "opts": ["http", "fs", "express", "url"],
      "ans": 2
    },
    {
      "q": "What is the main purpose of the 'express.json()' middleware?",
      "opts": ["To parse incoming JSON request bodies", "To parse incoming form data", "To log HTTP requests", "To handle errors in HTTP requests"],
      "ans": 0
    },
    {
      "q": "Which HTTP status code indicates that the resource could not be found?",
      "opts": ["200", "404", "500", "301"],
      "ans": 1
    },
    {
      "q": "Which of the following is a method to perform a GET request in Node.js using the 'axios' library?",
      "opts": ["axios.get()", "axios.post()", "axios.put()", "axios.request()"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to make asynchronous calls in Node.js?",
      "opts": ["callbacks", "promises", "async/await", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following is true about 'npm' in Node.js?",
      "opts": ["npm stands for Node Package Manager", "npm is used to manage Node.js applications", "npm installs dependencies from package.json", "All of the above"],
      "ans": 3
    },
    {
      "q": "How do you check for updates of installed packages in Node.js?",
      "opts": ["npm check", "npm outdated", "npm status", "npm list"],
      "ans": 1
    },
    {
      "q": "What is the 'express.Router()' function used for in Express.js?",
      "opts": ["To handle middleware", "To define route handlers", "To manage HTTP requests", "To handle form data"],
      "ans": 1
    },
    {
      "q": "Which command is used to create a new package.json file?",
      "opts": ["npm init", "npm create", "npm start", "npm install"],
      "ans": 0
    },
    {
      "q": "What does the 'express.json()' middleware do?",
      "opts": ["Parses JSON request bodies", "Serves static files", "Logs requests", "Handles errors"],
      "ans": 0
    },
    {
      "q": "What does the 'process.exit()' method do in Node.js?",
      "opts": ["Stops the application and exits the process", "Sends a response to the client", "Logs errors", "Handles signals"],
      "ans": 0
    },
    {
      "q": "Which of the following packages is used to handle form data in Node.js?",
      "opts": ["body-parser", "express", "mysql", "path"],
      "ans": 0
    },
    {
      "q": "What is the default behavior of HTTP requests in Node.js?",
      "opts": ["Synchronous", "Asynchronous", "Multithreaded", "Non-blocking"],
      "ans": 1
    },
    {
      "q": "Which of the following libraries is commonly used to perform validation in Express.js applications?",
      "opts": ["joi", "express-validator", "validator", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following is the command to start a Node.js application?",
      "opts": ["node app.js", "npm start", "node server.js", "npm run app"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is used to send data to a server using HTTP in Node.js?",
      "opts": ["GET", "POST", "PUT", "All of the above"],
      "ans": 3
    }
    ,
    {
      "q": "What is the primary advantage of using asynchronous programming in Node.js?",
      "opts": ["It allows non-blocking I/O operations", "It runs multiple processes concurrently", "It is easier to debug", "It uses multiple threads"],
      "ans": 0
    },
    {
      "q": "What is the 'npm install' command used for in Node.js?",
      "opts": ["To install a package globally", "To install the dependencies listed in package.json", "To update a package", "To install Node.js itself"],
      "ans": 1
    },
    {
      "q": "Which function is used to start an HTTP server in Node.js?",
      "opts": ["http.createServer()", "server.start()", "http.listen()", "server.create()"],
      "ans": 0
    },
    {
      "q": "Which method in Node.js allows you to listen for HTTP requests?",
      "opts": ["server.listen()", "http.listen()", "http.createServer()", "app.listen()"],
      "ans": 3
    },
    {
      "q": "Which of the following tools is used to test Node.js applications?",
      "opts": ["Jest", "Mocha", "Chai", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the use of the 'require' function in Node.js?",
      "opts": ["To import a built-in module", "To start the server", "To write to the console", "To install a module"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the event loop in Node.js?",
      "opts": ["It allows asynchronous code to run in a non-blocking manner", "It handles all synchronous code execution", "It makes Node.js run on multiple threads", "It is only used for database operations"],
      "ans": 0
    },
    {
      "q": "Which module in Node.js is used for creating HTTP requests?",
      "opts": ["http", "url", "querystring", "fs"],
      "ans": 0
    },
    {
      "q": "How can you handle multiple incoming HTTP requests concurrently in Node.js?",
      "opts": ["By using threads", "By using the event loop", "By using worker processes", "By using the cluster module"],
      "ans": 1
    },
    {
      "q": "What does the 'os' module in Node.js provide?",
      "opts": ["Operating system-related utility methods", "Network-related utility methods", "File system-related methods", "Database utility methods"],
      "ans": 0
    },
    {
      "q": "Which method in the 'fs' module is used to asynchronously read a file?",
      "opts": ["fs.readFileSync()", "fs.readFile()", "fs.open()", "fs.createReadStream()"],
      "ans": 1
    },
    {
      "q": "Which HTTP status code indicates a successful HTTP request?",
      "opts": ["200", "404", "500", "301"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct way to create a new Node.js module?",
      "opts": ["By defining a new class", "By writing a JavaScript file and using 'module.exports'", "By using 'require' on a built-in module", "By using 'npm init'"],
      "ans": 1
    },
    {
      "q": "What does the 'JSON.parse()' function do in Node.js?",
      "opts": ["Converts JSON string to a JavaScript object", "Converts JavaScript object to JSON string", "Reads JSON data from a file", "Writes JSON data to a file"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a feature of Node.js?",
      "opts": ["Non-blocking I/O", "Event-driven architecture", "Runs JavaScript on the server", "Built-in GUI libraries"],
      "ans": 3
    },
    {
      "q": "How do you create a promise in Node.js?",
      "opts": ["new Promise()", "Promise.resolve()", "Promise.reject()", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which method is used to send an HTTP response in an Express.js route handler?",
      "opts": ["res.send()", "res.end()", "res.write()", "res.respond()"],
      "ans": 0
    },
    {
      "q": "Which of the following does the 'npm run' command do?",
      "opts": ["Runs a custom script defined in package.json", "Installs Node.js packages", "Starts the Node.js server", "Updates the Node.js version"],
      "ans": 0
    },
    {
      "q": "What is the default behavior when a file is not found using the 'fs.readFile()' method?",
      "opts": ["It throws an error", "It returns null", "It returns undefined", "It automatically creates the file"],
      "ans": 0
    },
    {
      "q": "Which module in Node.js is used to create and manage streams?",
      "opts": ["stream", "buffer", "os", "path"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the 'express' module in Node.js?",
      "opts": ["It is a Node.js core module", "It is a middleware for handling HTTP requests", "It is a templating engine", "It is used for connecting to databases"],
      "ans": 1
    },
    {
      "q": "Which of the following methods is used to parse URL query parameters in Node.js?",
      "opts": ["url.parse()", "querystring.parse()", "url.query()", "fs.parse()"],
      "ans": 1
    },
    {
      "q": "Which of the following is NOT a common use case for Node.js?",
      "opts": ["Creating REST APIs", "Real-time chat applications", "File I/O and data processing", "Building graphical user interfaces"],
      "ans": 3
    },
    {
      "q": "Which module in Node.js can be used to spawn child processes?",
      "opts": ["child_process", "fs", "path", "http"],
      "ans": 0
    },
    {
      "q": "Which method would you use to read a file synchronously in Node.js?",
      "opts": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.createReadStreamSync()"],
      "ans": 0
    },
    {
      "q": "Which of the following is a popular database driver used with Node.js?",
      "opts": ["mongoose", "sequelize", "pg", "All of the above"],
      "ans": 3
    },
    {
      "q": "How can you prevent errors from causing the Node.js process to crash?",
      "opts": ["By using a 'try-catch' block", "By using process.on('uncaughtException')", "By handling errors in callbacks", "By using promises"],
      "ans": 1
    },
    {
      "q": "What does the 'express.Router()' method in Express.js do?",
      "opts": ["Creates a new HTTP server", "Defines routing for HTTP requests", "Handles static files", "Sends HTTP responses"],
      "ans": 1
    },
    {
      "q": "What does the 'stream.pipe()' method do in Node.js?",
      "opts": ["Sends data from one stream to another", "Creates a new stream", "Reads from a stream", "Closes the stream"],
      "ans": 0
    },
    {
      "q": "Which method in Node.js is used to send a JSON response to the client?",
      "opts": ["res.send()", "res.json()", "res.end()", "res.write()"],
      "ans": 1
    },
    {
      "q": "Which of the following is a correct way to handle a promise in Node.js?",
      "opts": ["Promise.then()", "Promise.catch()", "Promise.finally()", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following commands will remove a Node.js package?",
      "opts": ["npm delete <package>", "npm uninstall <package>", "npm remove <package>", "npm clean <package>"],
      "ans": 1
    },
    {
      "q": "Which of the following is true about Node.js modules?",
      "opts": ["Modules are cached after the first 'require' call", "Modules can only be used once", "Modules are not reusable", "Modules cannot be imported from external sources"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'process.env' in Node.js?",
      "opts": ["To set environment variables", "To access system logs", "To store configuration files", "To handle errors"],
      "ans": 0
    },
    {
      "q": "Which of the following statements is true about Node.js?",
      "opts": ["Node.js is a programming language", "Node.js is single-threaded", "Node.js is used only for front-end development", "Node.js uses JavaScript in the browser"],
      "ans": 1
    },
    {
      "q": "What is the function of 'npm start' in a Node.js project?",
      "opts": ["Installs dependencies", "Starts the Node.js application", "Installs Node.js itself", "Executes a custom script defined in package.json"],
      "ans": 3
    },
    {
      "q": "Which method is used to define an HTTP GET route in Express.js?",
      "opts": ["app.get()", "app.post()", "app.put()", "app.delete()"],
      "ans": 0
    },
    {
      "q": "Which of the following is a correct way to read environment variables in Node.js?",
      "opts": ["process.env.VARIABLE_NAME", "environment.VARIABLE_NAME", "os.VARIABLE_NAME", "config.get('VARIABLE_NAME')"],
      "ans": 0
    },
    {
      "q": "Which of the following HTTP status codes indicates a client-side error?",
      "opts": ["200", "404", "500", "301"],
      "ans": 1
    },
    {
      "q": "What is the default port for a Node.js HTTP server?",
      "opts": ["8080", "3000", "5000", "80"],
      "ans": 1
    },
    {
      "q": "Which of the following is a core module in Node.js?",
      "opts": ["express", "async", "path", "mongoose"],
      "ans": 2
    },
    {
      "q": "Which command is used to create a new Express.js project?",
      "opts": ["npm init express", "express create", "npm init", "npx express-generator"],
      "ans": 3
    }
    ,
    {
      "q": "What is Node.js?",
      "opts": ["A database", "A web server", "A runtime environment for JavaScript", "A JavaScript framework"],
      "ans": 2
    },
    {
      "q": "Which module in Node.js is used to work with the file system?",
      "opts": ["http", "fs", "os", "url"],
      "ans": 1
    },
    {
      "q": "Which of the following is the default HTTP port in Node.js?",
      "opts": ["443", "80", "3000", "8080"],
      "ans": 2
    },
    {
      "q": "Which command is used to install Node.js packages?",
      "opts": ["npm install", "node install", "install node", "nodejs install"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about Node.js?",
      "opts": ["It uses a non-blocking I/O model", "It is based on JavaScript running in the browser", "It is synchronous by default", "It only supports the REST API"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a core module in Node.js?",
      "opts": ["http", "fs", "express", "url"],
      "ans": 2
    },
    {
      "q": "What is the purpose of the 'require()' function in Node.js?",
      "opts": ["To load and cache modules", "To start a server", "To declare variables", "To compile JavaScript"],
      "ans": 0
    },
    {
      "q": "Which of the following functions is used to create a basic HTTP server in Node.js?",
      "opts": ["http.createServer()", "http.listen()", "server.create()", "server.start()"],
      "ans": 0
    },
    {
      "q": "What does the 'fs' module in Node.js provide?",
      "opts": ["Network functionality", "File system functionality", "Stream functionality", "Database management functionality"],
      "ans": 1
    },
    {
      "q": "Which method is used to read the contents of a file asynchronously in Node.js?",
      "opts": ["fs.readFileSync()", "fs.readFile()", "fs.open()", "fs.createReadStream()"],
      "ans": 1
    },
    {
      "q": "What is the default file extension for Node.js modules?",
      "opts": [".js", ".json", ".node", ".html"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the package.json file in a Node.js project?",
      "opts": ["To define project dependencies", "To configure server settings", "To store environment variables", "To manage database connections"],
      "ans": 0
    },
    {
      "q": "Which method in Node.js is used to parse incoming JSON request bodies in Express?",
      "opts": ["express.json()", "express.parseJson()", "express.bodyParser()", "express.urlencoded()"],
      "ans": 0
    },
    {
      "q": "What does the 'EventEmitter' class in Node.js do?",
      "opts": ["Handles HTTP requests", "Emits and listens to events", "Handles file system operations", "Controls database connections"],
      "ans": 1
    },
    {
      "q": "Which of the following is true about Node.js's event loop?",
      "opts": ["It is a single-threaded process", "It runs multiple threads concurrently", "It only processes asynchronous tasks", "It blocks the execution of synchronous code"],
      "ans": 0
    },
    {
      "q": "Which of the following modules is used for working with URLs in Node.js?",
      "opts": ["url", "http", "querystring", "path"],
      "ans": 0
    },
    {
      "q": "Which method in Node.js streams is used to read data from a stream?",
      "opts": ["stream.read()", "stream.on()", "stream.write()", "stream.pipe()"],
      "ans": 0
    },
    {
      "q": "Which HTTP method is used to retrieve data from a server?",
      "opts": ["POST", "GET", "PUT", "DELETE"],
      "ans": 1
    },
    {
      "q": "Which of the following is the default encoding in Node.js?",
      "opts": ["utf-8", "ascii", "binary", "utf-16"],
      "ans": 0
    },
    {
      "q": "Which command is used to start a Node.js application?",
      "opts": ["node app.js", "npm start", "node run app.js", "start node app.js"],
      "ans": 0
    },
    {
      "q": "What does the 'process' object in Node.js provide?",
      "opts": ["Information about the running server", "Environment variables and command-line arguments", "File system methods", "HTTP request handling"],
      "ans": 1
    },
    {
      "q": "How do you handle errors in asynchronous code in Node.js?",
      "opts": ["Using try-catch blocks", "By using callbacks", "By using promises and .catch()", "By using synchronous methods only"],
      "ans": 2
    },
    {
      "q": "What is the purpose of middleware in Express.js?",
      "opts": ["To handle HTTP requests", "To intercept requests and responses for modification", "To initialize server settings", "To manage database connections"],
      "ans": 1
    },
    {
      "q": "Which method is used to send a response from an Express.js route handler?",
      "opts": ["res.send()", "res.end()", "res.json()", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following is a templating engine commonly used with Express.js?",
      "opts": ["EJS", "Handlebars", "Pug", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the 'next()' function do in Express middleware?",
      "opts": ["Stops the request-response cycle", "Sends a response", "Passes control to the next middleware function", "Closes the HTTP connection"],
      "ans": 2
    },
    {
      "q": "Which method is used to handle URL-encoded data in Express.js?",
      "opts": ["express.urlencoded()", "express.urlencoded()", "express.parse()", "express.bodyParser()"],
      "ans": 1
    },
    {
      "q": "Which tool can you use to monitor your Node.js application in production?",
      "opts": ["Node Inspector", "PM2", "Jest", "Mocha"],
      "ans": 1
    },
    {
      "q": "What is the use of the 'cluster' module in Node.js?",
      "opts": ["To cluster server logs", "To distribute incoming requests across multiple Node.js processes", "To manage file streams", "To enable multi-threading"],
      "ans": 1
    },
    {
      "q": "How do you execute a shell command in Node.js?",
      "opts": ["Using the exec() method in the 'child_process' module", "Using the execFile() method in the 'fs' module", "Using the shell() method in the 'path' module", "Using the spawn() method in the 'http' module"],
      "ans": 0
    },
    {
      "q": "What does the 'npm init' command do?",
      "opts": ["Installs dependencies", "Creates a package.json file", "Initializes a new Node.js application", "Runs a Node.js server"],
      "ans": 1
    },
    {
      "q": "Which of the following methods can be used to make HTTP requests in Node.js?",
      "opts": ["http.request()", "axios.get()", "fetch()", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which event is triggered when a Node.js HTTP server receives a request?",
      "opts": ["data", "request", "error", "close"],
      "ans": 1
    },
    {
      "q": "What does the 'npm install --save' command do?",
      "opts": ["Installs the package and saves it as a dependency", "Installs the package without saving it", "Installs the package globally", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the role of the 'res' object in an Express.js route handler?",
      "opts": ["It stores the request data", "It stores the server settings", "It contains the response methods", "It parses the incoming data"],
      "ans": 2
    },
    {
      "q": "Which of the following is a non-blocking I/O operation in Node.js?",
      "opts": ["fs.readFileSync()", "fs.readFile()", "fs.writeFileSync()", "fs.renameSync()"],
      "ans": 1
    },
    {
      "q": "Which method is used to handle multiple parameters in Express route handlers?",
      "opts": ["app.all()", "app.route()", "app.use()", "app.get()"],
      "ans": 1
    },
    {
      "q": "What does the 'res.json()' method do in Express?",
      "opts": ["Sends a JSON response", "Sends an HTML response", "Sends a plain text response", "Sends a file response"],
      "ans": 0
    },
    {
      "q": "Which of the following packages is used to create and manage a RESTful API in Node.js?",
      "opts": ["Express", "React", "Redux", "Angular"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'path' module in Node.js?",
      "opts": ["To handle HTTP requests", "To handle file paths and directories", "To parse URL queries", "To manage streams"],
      "ans": 1
    },
    {
      "q": "What is the main purpose of the 'package-lock.json' file?",
      "opts": ["To track package dependencies", "To store application settings", "To store API keys", "To track versions of Node.js modules"],
      "ans": 0
    },
    {
      "q": "Which module provides the functionality to parse and generate URL query strings in Node.js?",
      "opts": ["url", "querystring", "path", "fs"],
      "ans": 1
    },
    {
      "q": "Which of the following is true about the Node.js 'process' object?",
      "opts": ["It contains the environment variables", "It is used to interact with the database", "It can only be used with synchronous functions", "It runs in a browser environment"],
      "ans": 0
    },
    {
      "q": "Which of the following is the command to install a package globally in Node.js?",
      "opts": ["npm install", "npm install -g", "npm install --global", "npm install -d"],
      "ans": 1
    },
    {
      "q": "Which of the following best describes Node.js's architecture?",
      "opts": ["Single-threaded", "Multi-threaded", "Distributed", "Event-driven"],
      "ans": 0
    },
    {
      "q": "What is the function of the 'node_modules' folder in a Node.js project?",
      "opts": ["It stores project files", "It contains third-party libraries and dependencies", "It stores configuration files", "It stores data files"],
      "ans": 1
    },
    {
      "q": "Which of the following Node.js modules is used to work with streams?",
      "opts": ["stream", "file", "request", "url"],
      "ans": 0
    },
    {
      "q": "Which of the following statements about the 'callback' function in Node.js is true?",
      "opts": ["It is always asynchronous", "It is used to handle errors", "It is only used in file I/O operations", "It must always be used with promises"],
      "ans": 1
    },
    {
      "q": "What is the default behavior of Node.js regarding I/O operations?",
      "opts": ["Blocking", "Non-blocking", "Synchronous", "Multithreaded"],
      "ans": 1
    },
    {
      "q": "How can you handle errors in Node.js callbacks?",
      "opts": ["By using try-catch blocks", "By passing an error object as the first argument", "By using promises", "By using async/await"],
      "ans": 1
    },
    {
      "q": "Which package manager is commonly used in Node.js?",
      "opts": ["npm", "yarn", "pip", "composer"],
      "ans": 0
    },
    {
      "q": "What is the use of the 'assert' module in Node.js?",
      "opts": ["To handle errors", "To write HTTP responses", "To create unit tests", "To manage database connections"],
      "ans": 2
    },
    {
      "q": "What does the 'npm audit' command do?",
      "opts": ["Installs missing dependencies", "Checks for security vulnerabilities in dependencies", "Lists outdated packages", "Clears the npm cache"],
      "ans": 1
    }
  ]
  ,



  React: [
    {
      "q": "What is a controlled component in React?",
      "opts": ["A component whose value is controlled by React state", "A component that doesn't have state", "A component that updates props", "A component that renders JSX elements"],
      "ans": 0
    },
    {
      "q": "How do you pass data between React components?",
      "opts": ["By using props", "By using Redux", "By using useState", "By using useEffect"],
      "ans": 0
    },
    {
      "q": "Which of these lifecycle methods is invoked when a component is first rendered?",
      "opts": ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "render"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `useEffect` hook?",
      "opts": ["To perform side effects like fetching data, updating the DOM", "To trigger state updates", "To optimize performance", "To manage event listeners"],
      "ans": 0
    },
    {
      "q": "What is the use of `key` in React lists?",
      "opts": ["To help React identify which items have changed, are added, or are removed", "To bind data to components", "To control the rendering of components", "To pass dynamic props to children"],
      "ans": 0
    },
    {
      "q": "What is the correct way to access props in a functional component?",
      "opts": ["By passing them as an argument to the function", "By using `this.props` inside the function", "By using `useProps()`", "By calling `React.createElement()`"],
      "ans": 0
    },
    {
      "q": "Which of these hooks is used to access the context in React?",
      "opts": ["useContext", "useState", "useEffect", "useReducer"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `useMemo` hook?",
      "opts": ["To memoize expensive calculations and avoid re-running them", "To manage component state", "To store context values", "To handle side effects"],
      "ans": 0
    },
    {
      "q": "What does `React.createElement()` do?",
      "opts": ["It creates a React element", "It creates a React component", "It updates the state", "It renders JSX code"],
      "ans": 0
    },
    {
      "q": "How do you handle events in React?",
      "opts": ["By passing event handler functions to props", "By using the `render()` method", "By using inline callbacks inside JSX", "By using `setState()`"],
      "ans": 0
    },
    {
      "q": "What is the difference between `useEffect()` and `useLayoutEffect()`?",
      "opts": ["`useEffect` runs after the render, while `useLayoutEffect` runs before it", "`useLayoutEffect` is used to manage state", "`useLayoutEffect` is asynchronous", "`useEffect` is only for class components"],
      "ans": 0
    },
    {
      "q": "What does `useRef` do in React?",
      "opts": ["It creates a reference to a DOM element or persists a value across renders", "It manages component state", "It triggers a re-render", "It handles component lifecycle methods"],
      "ans": 0
    },
    {
      "q": "What is the role of `componentWillUnmount` in React?",
      "opts": ["It is used for cleanup before a component is removed from the DOM", "It initializes component state", "It handles side effects", "It re-renders the component"],
      "ans": 0
    },
    {
      "q": "What is the difference between a functional and a class component?",
      "opts": ["Functional components are simpler and can use hooks, while class components need lifecycle methods", "Class components use hooks", "Functional components cannot use state", "Class components are deprecated"],
      "ans": 0
    },
    {
      "q": "What is `useReducer` used for?",
      "opts": ["To manage more complex state logic in functional components", "To manage side effects", "To optimize performance", "To store context data"],
      "ans": 0
    },
    {
      "q": "What is the role of `componentDidUpdate` in React?",
      "opts": ["It is called after the component updates", "It initializes the component", "It renders the component", "It triggers side effects"],
      "ans": 0
    },
    {
      "q": "Which method is used to schedule an update to a component's state?",
      "opts": ["this.setState()", "this.forceUpdate()", "render()", "useState()"],
      "ans": 0
    },
    {
      "q": "What is the difference between `setState()` and `useState()`?",
      "opts": ["`setState()` is used in class components, while `useState()` is used in functional components", "`useState()` is used in class components, while `setState()` is used in functional components", "`setState()` is only used for state management", "`useState()` is for lifecycle methods"],
      "ans": 0
    },
    {
      "q": "What is the role of `React.Fragment`?",
      "opts": ["It allows grouping of multiple elements without adding extra nodes to the DOM", "It renders a component", "It initializes component state", "It manages context data"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `useCallback` hook?",
      "opts": ["To memoize callback functions to prevent unnecessary re-creations", "To manage state", "To persist values across renders", "To render the component"],
      "ans": 0
    },
    {
      "q": "What is the correct way to handle errors in React?",
      "opts": ["By using Error Boundaries", "By using try-catch blocks inside components", "By using `useEffect`", "By using `setState()`"],
      "ans": 0
    },
    {
      "q": "What does `React.StrictMode` do?",
      "opts": ["It helps identify potential problems in an application", "It optimizes performance", "It triggers lifecycle methods", "It stores state values"],
      "ans": 0
    },
    {
      "q": "What is the difference between `state` and `props` in React?",
      "opts": ["`state` is managed inside the component, while `props` are passed to the component from its parent", "`state` is read-only, while `props` are mutable", "`state` is used for rendering, while `props` manage side effects", "`props` are used in class components, while `state` is used in functional components"],
      "ans": 0
    },
    {
      "q": "What does `useEffect` with an empty dependency array (`[]`) do?",
      "opts": ["It runs the effect only once after the initial render", "It runs every time the component renders", "It runs only when a specific prop changes", "It does nothing"],
      "ans": 0
    },
    {
      "q": "What is the role of `componentWillMount`?",
      "opts": ["It is called before the component is mounted", "It initializes state", "It is used to handle events", "It renders JSX elements"],
      "ans": 0
    },
    {
      "q": "How can you optimize the performance of a React application?",
      "opts": ["By using `React.memo()` and `shouldComponentUpdate`", "By using `useState()` for all components", "By avoiding hooks", "By always using class components"],
      "ans": 0
    },
    {
      "q": "What is the main purpose of `ReactDOM.render()`?",
      "opts": ["To render a React element into the DOM", "To create a component", "To trigger state updates", "To handle lifecycle methods"],
      "ans": 0
    },
    {
      "q": "What is `componentWillReceiveProps` used for in React?",
      "opts": ["It is called before a component receives new props", "It is used to manage state", "It is used to handle errors", "It initializes the component"],
      "ans": 0
    },
    {
      "q": "What is the difference between `useEffect` and `useLayoutEffect`?",
      "opts": ["`useEffect` is asynchronous and runs after rendering, while `useLayoutEffect` is synchronous and runs before rendering", "`useLayoutEffect` is only available in class components", "`useLayoutEffect` runs only on state changes", "`useEffect` triggers side effects in class components"],
      "ans": 0
    },
    {
      "q": "What is `React.PureComponent`?",
      "opts": ["A component that only re-renders when props or state change", "A component that cannot use state", "A component that is used for routing", "A component with hooks support"],
      "ans": 0
    },
    {
      "q": "How do you create a functional component in React?",
      "opts": ["By defining a function that returns JSX", "By extending `React.Component`", "By using `React.createElement`", "By using `useEffect`"],
      "ans": 0
    },
    {
      "q": "How do you create a ref in React?",
      "opts": ["By using `React.createRef()`", "By using `useRef()`", "By using `React.ref()`", "By passing a function as the `ref` prop"],
      "ans": 0
    },
    {
      "q": "What is `React.memo` used for?",
      "opts": ["To prevent unnecessary re-renders of functional components", "To optimize class components", "To render JSX elements", "To manage state"],
      "ans": 0
    },
    {
      "q": "What is the correct way to update the state in a class component?",
      "opts": ["By using `this.setState()`", "By using `useState()`", "By directly modifying `this.state`", "By using `useEffect()`"],
      "ans": 0
    },
    {
      "q": "What does `dangerouslySetInnerHTML` do in React?",
      "opts": ["It sets raw HTML content inside a component", "It renders JSX", "It creates components", "It manages state"],
      "ans": 0
    },
    {
      "q": "Which of these hooks allows you to handle side effects in functional components?",
      "opts": ["useEffect", "useContext", "useState", "useReducer"],
      "ans": 0
    },
    {
      "q": "What is the role of `getDerivedStateFromProps`?",
      "opts": ["It updates the state based on changes to props", "It renders JSX", "It is used to handle side effects", "It is called before component mounts"],
      "ans": 0
    }
    ,
    {
      "q": "What does the `useState` hook return?",
      "opts": ["An array with the current state and a function to update it", "A boolean value", "A method to force an update", "An object with all state properties"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about React components?",
      "opts": ["A component must return JSX", "A component must always be a class", "Components cannot use hooks", "Components do not manage state"],
      "ans": 0
    },
    {
      "q": "How can you prevent a child component from re-rendering in React?",
      "opts": ["By using `React.memo()`", "By passing a `key` prop", "By using `shouldComponentUpdate`", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the purpose of `React.createContext()`?",
      "opts": ["To create a context for sharing data across components", "To create a new component", "To manage component state", "To handle side effects"],
      "ans": 0
    },
    {
      "q": "What is the difference between `useState` and `useReducer`?",
      "opts": ["`useState` is for managing simple state, while `useReducer` is for more complex state logic", "`useState` uses context internally, while `useReducer` does not", "`useReducer` is only for class components", "`useState` is used for managing side effects"],
      "ans": 0
    },
    {
      "q": "What is `useContext` used for in React?",
      "opts": ["To consume values from a context", "To update the component state", "To optimize component re-renders", "To reference a DOM element"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about `props`?",
      "opts": ["Props are read-only", "Props can be modified within the component", "Props can only be passed from parent to child", "Props are mutable"],
      "ans": 0
    },
    {
      "q": "What does `React.Fragment` allow you to do?",
      "opts": ["Group multiple elements without adding extra nodes to the DOM", "Create a new component", "Handle form submissions", "Reference a DOM element"],
      "ans": 0
    },
    {
      "q": "How do you handle form submissions in React?",
      "opts": ["By using `onSubmit` event handler", "By using `setState()`", "By passing a prop from parent to child", "By manually updating the DOM"],
      "ans": 0
    },
    {
      "q": "What is `componentDidMount` in React?",
      "opts": ["A lifecycle method that is called after the component is rendered to the DOM", "A method for updating state", "A method for rendering JSX", "A hook for managing side effects"],
      "ans": 0
    },
    {
      "q": "What is `useEffect` used for in React?",
      "opts": ["To perform side effects in function components", "To manage state", "To handle form inputs", "To render the component"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `shouldComponentUpdate` in React?",
      "opts": ["To optimize re-renders by preventing unnecessary updates", "To set initial state", "To trigger component lifecycle methods", "To handle errors in the component"],
      "ans": 0
    },
    {
      "q": "Which of these is a feature of React's virtual DOM?",
      "opts": ["It allows for fast updates by re-rendering only changed components", "It directly manipulates the real DOM", "It uses a web worker to handle updates", "It synchronizes state with the backend"],
      "ans": 0
    },
    {
      "q": "Which of the following is a correct way to conditionally render a component in React?",
      "opts": ["Using a ternary operator", "Using `if` statement inside `render()`", "Using `React.memo()`", "Using `useEffect()`"],
      "ans": 0
    },
    {
      "q": "What does `React.PureComponent` do?",
      "opts": ["Optimizes component re-renders by shallowly comparing props and state", "Allows you to manage state", "Creates a new context", "Defines an event handler"],
      "ans": 0
    },
    {
      "q": "Which hook is used to store mutable values that do not trigger re-renders?",
      "opts": ["useRef", "useState", "useEffect", "useContext"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `React.memo()`?",
      "opts": ["It prevents re-renders of functional components when props don't change", "It stores state", "It references DOM elements", "It initializes a component's state"],
      "ans": 0
    },
    {
      "q": "What is `useLayoutEffect` used for?",
      "opts": ["It runs synchronously after all DOM mutations", "It runs after the component renders", "It is used to manage form state", "It is used to update the context"],
      "ans": 0
    },
    {
      "q": "What is `componentWillUnmount` used for in React?",
      "opts": ["To clean up before a component is removed from the DOM", "To trigger an update to the component", "To initialize state", "To perform side effects"],
      "ans": 0
    },
    {
      "q": "Which method in React is used to force a component to re-render?",
      "opts": ["forceUpdate()", "render()", "setState()", "useState()"],
      "ans": 0
    },
    {
      "q": "What does `dangerouslySetInnerHTML` do in React?",
      "opts": ["It sets raw HTML content inside a component", "It renders JSX", "It initializes state", "It updates props"],
      "ans": 0
    },
    {
      "q": "What does `useReducer` hook do in React?",
      "opts": ["It is used to manage more complex state logic", "It replaces `useState`", "It handles side effects", "It renders the component"],
      "ans": 0
    },
    {
      "q": "Which of the following hooks can you use to read and update the context in React?",
      "opts": ["useContext", "useState", "useEffect", "useReducer"],
      "ans": 0
    },
    {
      "q": "What is the primary difference between a class component and a functional component in React?",
      "opts": ["Functional components are simpler and do not have lifecycle methods by default", "Class components use hooks, while functional components do not", "Functional components cannot have props", "Class components are deprecated in React"],
      "ans": 0
    },
    {
      "q": "Which method is used to handle errors in React components?",
      "opts": ["componentDidCatch", "handleError", "catchError", "useEffect"],
      "ans": 0
    },
    {
      "q": "What is `useRef` used for in React?",
      "opts": ["To reference a DOM element or persist a value across renders", "To manage form input", "To store context values", "To perform side effects"],
      "ans": 0
    },
    {
      "q": "What does the `key` prop in React lists do?",
      "opts": ["Helps React identify which items have changed, been added, or removed", "Defines the class of the component", "Specifies the state of the component", "Sets event listeners"],
      "ans": 0
    },
    {
      "q": "What is a React fragment?",
      "opts": ["A component that allows you to group elements without adding extra nodes to the DOM", "A method for creating components", "A special component that uses hooks", "A part of the state management library"],
      "ans": 0
    },
    {
      "q": "How can you define a component in React?",
      "opts": ["By using a function or a class", "By using only JSX", "By using React.createElement", "By using state management only"],
      "ans": 0
    },
    {
      "q": "What does `setState` do in React?",
      "opts": ["It schedules an update to the component's state object", "It initializes props", "It returns a new component", "It defines the component's lifecycle methods"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `React.StrictMode`?",
      "opts": ["To help detect potential problems in an application", "To optimize rendering", "To manage state", "To handle events"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `useEffect` hook's dependency array?",
      "opts": ["To specify when the effect should run based on certain values", "To initialize state", "To reference DOM elements", "To define context values"],
      "ans": 0
    },
    {
      "q": "Which of the following methods is not available in class components?",
      "opts": ["useState", "componentDidMount", "render", "componentDidUpdate"],
      "ans": 0
    },
    {
      "q": "What is the correct way to handle form inputs in React?",
      "opts": ["By using controlled components", "By using uncontrolled components", "By directly manipulating the DOM", "By passing state to input components as props"],
      "ans": 0
    },
    {
      "q": "How do you update the state of a component in React?",
      "opts": ["By using `setState` method or `useState` hook", "By using `useEffect`", "By manually modifying the DOM", "By using `ReactDOM.render()`"],
      "ans": 0
    },
    {
      "q": "What is the primary function of React Router?",
      "opts": ["To handle routing and navigation in a React application", "To manage state in React", "To optimize rendering", "To create context"],
      "ans": 0
    }
    ,
    {
      "q": "What is a Higher Order Component (HOC) in React?",
      "opts": ["A function that takes a component and returns a new component", "A component that holds state", "A class component", "A built-in React component"],
      "ans": 0
    },
    {
      "q": "What is the difference between `useEffect` and `useLayoutEffect`?",
      "opts": ["`useEffect` runs after the paint, `useLayoutEffect` runs before the paint", "`useEffect` runs before rendering, `useLayoutEffect` after", "`useEffect` is for functional components, `useLayoutEffect` for class components", "`useEffect` and `useLayoutEffect` are identical"],
      "ans": 0
    },
    {
      "q": "Which method is used to trigger a re-render in a class component?",
      "opts": ["this.setState()", "this.forceUpdate()", "this.render()", "ReactDOM.render()"],
      "ans": 1
    },
    {
      "q": "What is the default behavior of a form element in React?",
      "opts": ["It is controlled by React state", "It is uncontrolled by React", "It always triggers a rerender", "It uses local storage for data storage"],
      "ans": 0
    },
    {
      "q": "What is `React.StrictMode` in React?",
      "opts": ["A tool to detect potential problems in an app", "A performance optimization feature", "A state management tool", "A React plugin for testing"],
      "ans": 0
    },
    {
      "q": "How can you conditionally render a component in React?",
      "opts": ["By using JavaScript conditional operators like `if`, `else` or ternary", "By using `setState` to change the component", "By using `React.createElement()`", "By calling `render()` conditionally"],
      "ans": 0
    },
    {
      "q": "What does `useMemo` do in React?",
      "opts": ["Memoizes expensive function results", "Provides a way to manage component state", "Creates a new ref", "Returns a new JSX element"],
      "ans": 0
    },
    {
      "q": "Which hook can be used to update the state of a component in a functional component?",
      "opts": ["useState", "useEffect", "useRef", "useContext"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `key` prop in React lists?",
      "opts": ["To give each element a unique identifier for efficient updates", "To determine the order of the items", "To store additional data", "To define the event handler for list items"],
      "ans": 0
    },
    {
      "q": "What is a 'stateless' component in React?",
      "opts": ["A component that does not have internal state", "A component that uses Redux for state management", "A component with only `props` but no `state` or lifecycle methods", "A component that uses `useState` hook"],
      "ans": 0
    },
    {
      "q": "What is the `useEffect` hook commonly used for?",
      "opts": ["Side effects like fetching data, subscriptions, and manual DOM manipulations", "Memoizing function results", "Handling user input", "Managing state updates"],
      "ans": 0
    },
    {
      "q": "How do you create a functional component in React?",
      "opts": ["By defining a function that returns JSX", "By using `React.Component`", "By using a class declaration", "By using `React.createElement()`"],
      "ans": 0
    },
    {
      "q": "Which of these methods are used for handling errors in React?",
      "opts": ["Error Boundaries", "ComponentDidCatch", "try-catch blocks", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the main advantage of using `React.memo()`?",
      "opts": ["It prevents unnecessary re-renders of functional components", "It allows you to memoize state", "It helps in handling events", "It reduces code complexity"],
      "ans": 0
    },
    {
      "q": "What are React hooks?",
      "opts": ["Functions that let you hook into React features from functional components", "Functions that allow you to manage state in class components", "A way to manage forms", "A set of utility functions for JSX"],
      "ans": 0
    },
    {
      "q": "Which of the following can be used for routing in a React application?",
      "opts": ["React Router", "ReactDOM", "React Redux", "React Hooks"],
      "ans": 0
    },
    {
      "q": "What does `useContext` do in React?",
      "opts": ["Allows components to consume values from a context", "Manages state in a component", "References a DOM element", "Sets event handlers"],
      "ans": 0
    },
    {
      "q": "What is `useEffect`'s cleanup function used for?",
      "opts": ["To clean up side effects before the component is removed", "To handle state updates", "To call lifecycle methods in functional components", "To optimize rendering performance"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `React.lazy()` in React?",
      "opts": ["To dynamically import a component", "To define a stateful component", "To handle side effects", "To create a context provider"],
      "ans": 0
    },
    {
      "q": "What is the correct way to access state inside a functional component?",
      "opts": ["Using `useState` hook", "By using `this.state`", "By using `state` prop", "By calling `useState()` in a class component"],
      "ans": 0
    },
    {
      "q": "Which method is used to update the state in a class component?",
      "opts": ["this.setState()", "this.updateState()", "this.render()", "useState()"],
      "ans": 0
    },
    {
      "q": "What does the `useCallback` hook do in React?",
      "opts": ["It memoizes callback functions to prevent unnecessary re-creations", "It creates new state", "It references a DOM element", "It stores context data"],
      "ans": 0
    },
    {
      "q": "Which lifecycle method is called when a component's state or props change?",
      "opts": ["componentDidUpdate", "componentDidMount", "shouldComponentUpdate", "render"],
      "ans": 0
    },
    {
      "q": "What is `useReducer` used for in React?",
      "opts": ["Managing complex state logic", "To reference a DOM element", "To handle side effects", "To memorize expensive calculations"],
      "ans": 0
    },
    {
      "q": "Which React hook can be used to persist state across renders?",
      "opts": ["useRef", "useState", "useContext", "useEffect"],
      "ans": 0
    },
    {
      "q": "What does `React.createElement()` do?",
      "opts": ["Creates a React element", "Creates a component", "Renders the DOM", "Handles component props"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about React's virtual DOM?",
      "opts": ["It is a lightweight copy of the actual DOM", "It stores the entire page structure", "It does not allow for updates", "It directly updates the DOM"],
      "ans": 0
    },
    {
      "q": "How can you make sure that a component only re-renders when necessary?",
      "opts": ["By using `shouldComponentUpdate` or `React.memo()`", "By always updating state inside `componentDidUpdate`", "By avoiding hooks", "By using inline functions in render"],
      "ans": 0
    },
    {
      "q": "What is a controlled component in React?",
      "opts": ["A component whose state is controlled by React", "A component that doesn't use state", "A component that manages external state", "A component that interacts with the backend"],
      "ans": 0
    },
    {
      "q": "What is `componentDidMount` in React?",
      "opts": ["A lifecycle method that is called after the component is mounted", "A method that updates the state", "A method to manage component props", "A method that performs side effects"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `useRef` hook?",
      "opts": ["To persist state across renders without causing re-renders", "To create references to DOM elements", "To handle side effects", "To manage context data"],
      "ans": 0
    },
    {
      "q": "What is the difference between `props` and `state` in React?",
      "opts": ["`props` are passed from parent to child components, while `state` is managed inside a component", "`props` store mutable data, while `state` stores static data", "`state` is always required, while `props` are optional", "`state` can be changed by parent components, while `props` are immutable"],
      "ans": 0
    },
    {
      "q": "How do you avoid unnecessary re-renders in React?",
      "opts": ["By using `React.memo()` and `shouldComponentUpdate`", "By using `useState()`", "By calling `render()` only once", "By updating props frequently"],
      "ans": 0
    },
    {
      "q": "Which method is used to subscribe to context values in React?",
      "opts": ["useContext", "React.createContext", "useState", "useEffect"],
      "ans": 0
    },
    {
      "q": "What is the difference between `setState()` and `useState()`?",
      "opts": ["`setState()` is used in class components, while `useState()` is used in functional components", "`setState()` is for state management, while `useState()` is for hooks", "`useState()` is a global state manager", "`setState()` can only be used in functional components"],
      "ans": 0
    }
    ,
    {
      "q": "What is the default return value of a functional component?",
      "opts": ["A React element", "A string", "An array", "A number"],
      "ans": 0
    },
    {
      "q": "Which hook can be used to reference a DOM element directly in React?",
      "opts": ["useRef", "useEffect", "useState", "useContext"],
      "ans": 0
    },
    {
      "q": "What is `useContext` hook used for in React?",
      "opts": ["To access global state or context values", "To manage component state", "To perform side effects", "To reference a DOM element"],
      "ans": 0
    },
    {
      "q": "What is `React.createElement()` used for?",
      "opts": ["Creating React elements manually", "Creating a new React component", "Handling events", "Creating a new state"],
      "ans": 0
    },
    {
      "q": "What does `dangerouslySetInnerHTML` attribute do in React?",
      "opts": ["It sets HTML content in a component", "It creates a new HTML element", "It updates a React component's state", "It sets CSS styles dynamically"],
      "ans": 0
    },
    {
      "q": "What is a 'fragment' in React?",
      "opts": ["A lightweight wrapper for grouping multiple elements", "A new type of React component", "A method for managing component state", "A special kind of event handler"],
      "ans": 0
    },
    {
      "q": "What is `componentWillUnmount` used for in React?",
      "opts": ["To clean up before a component is removed from the DOM", "To initialize component state", "To perform a side effect", "To update the component's state"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `useCallback` hook?",
      "opts": ["To memoize callback functions", "To update component state", "To perform side effects", "To store references to DOM elements"],
      "ans": 0
    },
    {
      "q": "How do you pass a function as a prop in React?",
      "opts": ["By defining the function in the parent and passing it as a prop", "By declaring it in the child component", "By using `useState`", "By using `useEffect`"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `React.StrictMode`?",
      "opts": ["To help identify potential problems in an application", "To enable routing", "To optimize component rendering", "To initialize context"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to handle form inputs in React?",
      "opts": ["Controlled components", "Uncontrolled components", "useState", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is `React.PureComponent`?",
      "opts": ["A component that only re-renders when its props or state change", "A class component with no state", "A functional component", "A component with no rendering logic"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `useReducer` hook in React?",
      "opts": ["To manage complex state logic", "To manage simple state", "To perform side effects", "To reference DOM elements"],
      "ans": 0
    },
    {
      "q": "What does `React.createContext()` do?",
      "opts": ["Creates a context to manage global state", "Creates a new React component", "Defines a new event handler", "Creates a new state variable"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `useLayoutEffect` hook?",
      "opts": ["To run side effects synchronously after all DOM mutations", "To set up an event listener", "To manage form data", "To manage component rendering"],
      "ans": 0
    },
    {
      "q": "How can you avoid re-rendering components unnecessarily in React?",
      "opts": ["By using `React.memo`", "By using `shouldComponentUpdate`", "By using `useMemo`", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does `React.Fragment` allow you to do?",
      "opts": ["Return multiple elements without adding an extra node to the DOM", "Store data", "Create context", "Initialize state"],
      "ans": 0
    },
    {
      "q": "How do you handle events in React?",
      "opts": ["By passing functions as props", "By using `eventHandler` methods", "By directly binding events to elements", "By using `useState`"],
      "ans": 0
    },
    {
      "q": "What does the `setState()` method do in React?",
      "opts": ["Updates the state of a component", "Creates a new component", "Renders the component", "Adds new props to a component"],
      "ans": 0
    },
    {
      "q": "What is the `useRef` hook used for in React?",
      "opts": ["To reference a DOM element", "To store mutable values that do not cause re-renders", "To handle side effects", "To manage state"],
      "ans": 1
    },
    {
      "q": "How do you prevent a component from rendering in React?",
      "opts": ["By using `shouldComponentUpdate`", "By using `useEffect`", "By setting the state to null", "By using `useState`"],
      "ans": 0
    },
    {
      "q": "What is the difference between `componentDidMount` and `useEffect`?",
      "opts": ["`componentDidMount` is for class components, while `useEffect` is for functional components", "`componentDidMount` runs synchronously", "`useEffect` runs before rendering", "`componentDidMount` is deprecated"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `React.Fragment`?",
      "opts": ["To group multiple elements without adding extra nodes to the DOM", "To define a functional component", "To create new event handlers", "To manage state"],
      "ans": 0
    },
    {
      "q": "Which lifecycle method is called when a component is about to be removed from the DOM?",
      "opts": ["componentWillUnmount", "componentDidMount", "componentDidUpdate", "render"],
      "ans": 0
    },
    {
      "q": "What does `React.StrictMode` do?",
      "opts": ["Helps identify potential problems in the app", "Optimizes the app for production", "Creates new context", "Handles state changes"],
      "ans": 0
    }
    ,
    {
      "q": "What is ReactJS?",
      "opts": ["A JavaScript library for building user interfaces", "A programming language", "A database", "A framework for backend development"],
      "ans": 0
    },
    {
      "q": "What does JSX stand for?",
      "opts": ["JavaScript XML", "JavaScript Extension", "JavaScript Extra", "JavaScript Execution"],
      "ans": 0
    },
    {
      "q": "Which method is used to render a React component?",
      "opts": ["render()", "display()", "show()", "paint()"],
      "ans": 0
    },
    {
      "q": "What is the default value of `props` in a React component?",
      "opts": ["undefined", "null", "empty object", "empty array"],
      "ans": 2
    },
    {
      "q": "Which function is used to create a class component in React?",
      "opts": ["React.createClass", "React.Component", "React.createElement", "React.classComponent"],
      "ans": 1
    },
    {
      "q": "What is the purpose of the `useState` hook in React?",
      "opts": ["To store state variables in a functional component", "To create a class component", "To create a context", "To define props for a component"],
      "ans": 0
    },
    {
      "q": "What is a 'state' in React?",
      "opts": ["A property of a class component", "A feature to store dynamic data in a component", "A way to handle events", "A method to manage routing"],
      "ans": 1
    },
    {
      "q": "What is the role of the `render()` method in React?",
      "opts": ["It defines how to display the component", "It updates the component's state", "It defines event handlers", "It mounts the component"],
      "ans": 0
    },
    {
      "q": "What is a 'controlled component' in React?",
      "opts": ["A component that manages its own state", "A component whose state is controlled by the parent component", "A component that only displays content", "A component that does not render"],
      "ans": 1
    },
    {
      "q": "What is `ReactDOM.render()` used for?",
      "opts": ["To render a React component into the DOM", "To create a virtual DOM", "To initialize React context", "To bind a React component to a database"],
      "ans": 0
    },
    {
      "q": "Which of the following is a React lifecycle method?",
      "opts": ["componentDidMount", "useEffect", "handleClick", "render"],
      "ans": 0
    },
    {
      "q": "Which hook is used to perform side effects in React functional components?",
      "opts": ["useEffect", "useState", "useContext", "useRef"],
      "ans": 0
    },
    {
      "q": "What is 'React Router' used for?",
      "opts": ["Routing in React applications", "Managing state in React", "Handling events", "Creating forms in React"],
      "ans": 0
    },
    {
      "q": "How can you pass data from a parent component to a child component in React?",
      "opts": ["Using props", "Using state", "Using context", "Using event handlers"],
      "ans": 0
    },
    {
      "q": "What is the `useEffect` hook used for?",
      "opts": ["Handling side effects in functional components", "Setting initial state", "Updating state", "Rendering JSX"],
      "ans": 0
    },
    {
      "q": "What does `key` prop do in a list of components?",
      "opts": ["Helps React identify which items have changed", "Defines the component's state", "Determines the component's class", "Sets the component's CSS class"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct syntax to create a functional component in React?",
      "opts": ["function MyComponent() {}", "const MyComponent = () => {}", "MyComponent = function() {}", "class MyComponent extends React.Component {}"],
      "ans": 1
    },
    {
      "q": "What is a 'pure' component in React?",
      "opts": ["A component that does not re-render when its props or state change", "A component that always re-renders", "A component that only handles input fields", "A component that handles errors"],
      "ans": 0
    },
    {
      "q": "What is the main purpose of `shouldComponentUpdate`?",
      "opts": ["To optimize rendering by preventing unnecessary re-renders", "To update the component's state", "To perform a side effect", "To update props"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `React.memo`?",
      "opts": ["To prevent re-rendering of functional components", "To manage state in functional components", "To create context", "To perform a side effect"],
      "ans": 0
    },
    {
      "q": "What is the default return value of a functional component?",
      "opts": ["A React element", "A string", "An array", "A number"],
      "ans": 0
    },
    {
      "q": "Which hook can be used to reference a DOM element directly in React?",
      "opts": ["useRef", "useEffect", "useState", "useContext"],
      "ans": 0
    },
    {
      "q": "What is `useContext` hook used for in React?",
      "opts": ["To access global state or context values", "To manage component state", "To perform side effects", "To reference a DOM element"],
      "ans": 0
    },
    {
      "q": "What is `React.createElement()` used for?",
      "opts": ["Creating React elements manually", "Creating a new React component", "Handling events", "Creating a new state"],
      "ans": 0
    },
    {
      "q": "What does the `dangerouslySetInnerHTML` attribute do in React?",
      "opts": ["It sets HTML content in a component", "It creates a new HTML element", "It updates a React component's state", "It sets CSS styles dynamically"],
      "ans": 0
    },
    {
      "q": "What is a 'fragment' in React?",
      "opts": ["A lightweight wrapper for grouping multiple elements", "A new type of React component", "A method for managing component state", "A special kind of event handler"],
      "ans": 0
    },
    {
      "q": "What is `componentWillUnmount` used for in React?",
      "opts": ["To clean up before a component is removed from the DOM", "To initialize component state", "To perform a side effect", "To update the component's state"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `useCallback` hook?",
      "opts": ["To memoize callback functions", "To update component state", "To perform side effects", "To store references to DOM elements"],
      "ans": 0
    },
    {
      "q": "How do you pass a function as a prop in React?",
      "opts": ["By defining the function in the parent and passing it as a prop", "By declaring it in the child component", "By using `useState`", "By using `useEffect`"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `React.StrictMode`?",
      "opts": ["To help identify potential problems in an application", "To enable routing", "To optimize component rendering", "To initialize context"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to handle form inputs in React?",
      "opts": ["Controlled components", "Uncontrolled components", "useState", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is `React.PureComponent`?",
      "opts": ["A component that only re-renders when its props or state change", "A class component with no state", "A functional component", "A component with no rendering logic"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `useReducer` hook in React?",
      "opts": ["To manage complex state logic", "To manage simple state", "To perform side effects", "To reference DOM elements"],
      "ans": 0
    },
    {
      "q": "What does `React.createContext()` do?",
      "opts": ["Creates a context to manage global state", "Creates a new React component", "Defines a new event handler", "Creates a new state variable"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `useLayoutEffect` hook?",
      "opts": ["To run side effects synchronously after all DOM mutations", "To set up an event listener", "To manage form data", "To manage component rendering"],
      "ans": 0
    },
    {
      "q": "How can you avoid re-rendering components unnecessarily in React?",
      "opts": ["By using `React.memo`", "By using `shouldComponentUpdate`", "By using `useMemo`", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does `React.Fragment` allow you to do?",
      "opts": ["Return multiple elements without adding an extra node to the DOM", "Store data", "Create context", "Initialize state"],
      "ans": 0
    },
    {
      "q": "How do you handle events in React?",
      "opts": ["By passing functions as props", "By using `eventHandler` methods", "By directly binding events to elements", "By using `useState`"],
      "ans": 0
    },
    {
      "q": "What does the `setState()` method do in React?",
      "opts": ["Updates the state of a component", "Creates a new component", "Renders the component", "Adds new props to a component"],
      "ans": 0
    },
    {
      "q": "What is the `useRef` hook used for in React?",
      "opts": ["To reference a DOM element", "To store mutable values that do not cause re-renders", "To handle side effects", "To manage state"],
      "ans": 1
    },
    {
      "q": "How do you prevent a component from rendering in React?",
      "opts": ["By using `shouldComponentUpdate`", "By using `useEffect`", "By setting the state to null", "By using `useState`"],
      "ans": 0
    },
    {
      "q": "What is the difference between `componentDidMount` and `useEffect`?",
      "opts": ["`componentDidMount` is for class components, while `useEffect` is for functional components", "`componentDidMount` runs synchronously", "`useEffect` runs before rendering", "`componentDidMount` is deprecated"],
      "ans": 0
    },
    {
      "q": "What is the purpose of `React.Fragment`?",
      "opts": ["To group multiple elements without adding extra nodes to the DOM", "To define a functional component", "To create new event handlers", "To manage state"],
      "ans": 0
    },
    {
      "q": "Which lifecycle method is called when a component is about to be removed from the DOM?",
      "opts": ["componentWillUnmount", "componentDidMount", "componentDidUpdate", "render"],
      "ans": 0
    },
    {
      "q": "What does `React.StrictMode` do?",
      "opts": ["Helps identify potential problems in the app", "Optimizes the app for production", "Creates new context", "Handles state changes"],
      "ans": 0
    }
  ]
  ,







  UPSC:
    [
      {
        "q": "भारत का कौन सा शहर 'गुलाब का शहर' कहलाता है?",
        "opts": ["जयपुर", "उदयपुर", "वाराणसी", "कोलकाता"],
        "ans": 0
      },
      {
        "q": "भारत का सबसे बड़ा धर्म क्या है?",
        "opts": ["हिंदू", "इस्लाम", "सिख", "ईसाई"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता ने 'भारतीय राष्ट्रीय कांग्रेस' की स्थापना की थी?",
        "opts": ["महात्मा गांधी", "सुरेंद्रनाथ बैनर्जी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
        "ans": 1
      },
      {
        "q": "किस भारतीय पर्वत को 'संसार की छत' कहा जाता है?",
        "opts": ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "गंगोत्री"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद में 'स्वतंत्रता' की बात की गई है?",
        "opts": ["19", "20", "21", "22"],
        "ans": 0
      },
      {
        "q": "भारत के किस शहर में 'गुलाबी शहर' के नाम से जाना जाता है?",
        "opts": ["जयपुर", "अहमदाबाद", "दिल्ली", "कोलकाता"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय पशु कौन सा है?",
        "opts": ["बाघ", "गैंडा", "हाथी", "गौ"],
        "ans": 0
      },
      {
        "q": "किस भारतीय त्योहार को 'दीवाली' कहा जाता है?",
        "opts": ["दशहरा", "होली", "दीपावली", "ईद"],
        "ans": 2
      },
      {
        "q": "भारत का कौन सा पर्वत 'कैलाश' के नाम से जाना जाता है?",
        "opts": ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "हिमालय"],
        "ans": 3
      },
      {
        "q": "किसे 'भारत का बच्चा' कहा जाता है?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "राजेंद्र प्रसाद", "जवाहरलाल नेहरू"],
        "ans": 1
      },
      {
        "q": "भारत का सबसे बड़ा राज्य कौन सा है?",
        "opts": ["राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश", "महाराष्ट्र"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद के तहत 'शिक्षा का अधिकार' है?",
        "opts": ["21", "22", "23", "24"],
        "ans": 0
      },
      {
        "q": "किस वर्ष में भारत ने पहली बार गणतंत्र दिवस मनाया?",
        "opts": ["1950", "1947", "1951", "1949"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता ने 'स्वराज' का नारा दिया था?",
        "opts": ["महात्मा गांधी", "बाल गंगाधर तिलक", "सुभाष चंद्र बोस", "राजेंद्र प्रसाद"],
        "ans": 1
      },
      {
        "q": "भारत का कौन सा पर्वत 'सर्वोच्च' है?",
        "opts": ["एवरेस्ट", "कंचनजंगा", "नंदा देवी", "गंगोत्री"],
        "ans": 0
      },
      {
        "q": "किस राज्य में 'नर्मदा' नदी बहती है?",
        "opts": ["मध्य प्रदेश", "राजस्थान", "गुजरात", "उत्तर प्रदेश"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय गान कौन सा है?",
        "opts": ["वन्दे मातरम्", "जन गण मन", "सारे जहाँ से अच्छा", "हम भारत के हैं"],
        "ans": 1
      },
      {
        "q": "किसने 'सत्याग्रह' की परिकल्पना की थी?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
        "ans": 0
      },
      {
        "q": "भारत में पहली बार किसने 'महिला अधिकार' की बात की थी?",
        "opts": ["महात्मा गांधी", "इंदिरा गांधी", "सुभाष चंद्र बोस", "सरोजिनी नायडू"],
        "ans": 3
      },
      {
        "q": "किसे 'भारत का सपूत' कहा जाता है?",
        "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 2
      },
      {
        "q": "किस भारतीय त्योहार को 'गणेश चतुर्थी' कहा जाता है?",
        "opts": ["दीवाली", "होली", "दशहरा", "गणेश चतुर्थी"],
        "ans": 3
      },
      {
        "q": "किस वर्ष में भारत ने पहला अंतरिक्ष यान भेजा था?",
        "opts": ["1975", "1980", "1984", "1990"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता ने 'भारतीय लोक सेवा आयोग' की स्थापना की थी?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "डॉ. भीमराव आंबेडकर"],
        "ans": 1
      },
      {
        "q": "भारत का राष्ट्रीय फूल कौन सा है?",
        "opts": ["कमल", "गुलाब", "जास्मिन", "चमेली"],
        "ans": 0
      },
      {
        "q": "किस भारतीय पर्वत को 'हिमालय' कहा जाता है?",
        "opts": ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "हिमालय"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद में 'संविधान की रक्षा' की बात की गई है?",
        "opts": ["44", "45", "46", "47"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता ने 'गांवों का विकास' की बात की थी?",
        "opts": ["महात्मा गांधी", "राजेंद्र प्रसाद", "लाल बहादुर शास्त्री", "सुभाष चंद्र बोस"],
        "ans": 0
      },
      {
        "q": "भारत का कौन सा पर्वत 'कैलाश' के नाम से जाना जाता है?",
        "opts": ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "हिमालय"],
        "ans": 3
      },
      {
        "q": "किस अनुच्छेद में 'भ्रष्टाचार' की रोकथाम की बात की गई है?",
        "opts": ["40", "44", "47", "48"],
        "ans": 2
      },
      {
        "q": "किस वर्ष में भारत ने स्वतंत्रता प्राप्त की?",
        "opts": ["1947", "1949", "1950", "1952"],
        "ans": 0
      },
      {
        "q": "किसे 'भारत का राष्ट्रपिता' कहा जाता है?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "किस भारतीय खेल को 'गेंद का खेल' कहा जाता है?",
        "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "बैडमिंटन"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद में 'स्वतंत्रता' की बात की गई है?",
        "opts": ["19", "20", "21", "22"],
        "ans": 0
      },
      {
        "q": "भारत के किस पर्वत को 'सर्वोच्च' माना जाता है?",
        "opts": ["एवरेस्ट", "कंचनजंगा", "नंदा देवी", "गंगोत्री"],
        "ans": 0
      },
      {
        "q": "किसने 'महात्मा गांधी' को 'भारत का राष्ट्रपिता' कहा?",
        "opts": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "सुभाष चंद्र बोस", "राजेंद्र प्रसाद"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय गीत कौन सा है?",
        "opts": ["वन्दे मातरम्", "जन गण मन", "सारे जहाँ से अच्छा", "हम भारत के हैं"],
        "ans": 0
      },
      {
        "q": "किस भारतीय त्योहार को 'दीवाली' कहा जाता है?",
        "opts": ["दशहरा", "होली", "दीपावली", "ईद"],
        "ans": 2
      },
      {
        "q": "किस अनुच्छेद में 'शिक्षा का अधिकार' की बात की गई है?",
        "opts": ["21", "22", "23", "24"],
        "ans": 0
      }
      ,
      {
        "q": "भारत का सबसे छोटा राज्य कौन सा है?",
        "opts": ["गोवा", "सिक्किम", "त्रिपुरा", "मणिपुर"],
        "ans": 0
      },
      {
        "q": "किसी व्यक्ति की मृत्यु के बाद उसकी संपत्ति का वारिस कौन होता है?",
        "opts": ["परिवार", "राज्य", "गैर सरकारी संगठन", "कानून"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद के तहत भारत के राष्ट्रपति का चुनाव होता है?",
        "opts": ["52", "53", "54", "55"],
        "ans": 2
      },
      {
        "q": "किस भारतीय नेता को 'भारतीय राजनीति का पिता' कहा जाता है?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत के किस क्षेत्र में 'गंगा' नदी बहती है?",
        "opts": ["पूर्व", "दक्षिण", "उत्तर", "पश्चिम"],
        "ans": 2
      },
      {
        "q": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "opts": ["गौरेया", "गिद्ध", "पपीता", "मोर"],
        "ans": 3
      },
      {
        "q": "किसे 'भारत का राष्ट्रीय संत' कहा जाता है?",
        "opts": ["महात्मा गांधी", "संत रविदास", "स्वामी विवेकानंद", "तुलसीदास"],
        "ans": 0
      },
      {
        "q": "किस वर्ष में भारत ने पहला परमाणु परीक्षण किया था?",
        "opts": ["1974", "1980", "1998", "2000"],
        "ans": 0
      },
      {
        "q": "भारत की सबसे बड़ी नदी कौन सी है?",
        "opts": ["गंगा", "सिंधु", "यमुना", "ब्रह्मपुत्र"],
        "ans": 0
      },
      {
        "q": "किस भारतीय शहर को 'गुलाब का शहर' कहा जाता है?",
        "opts": ["जयपुर", "उदयपुर", "कोलकाता", "दिल्ली"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य का क्षेत्रफल सबसे बड़ा है?",
        "opts": ["राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश", "गुजरात"],
        "ans": 0
      },
      {
        "q": "भारत का पहला अंतरिक्ष यान कौन सा था?",
        "opts": ["चंद्रयान-1", "मंगलयान", "आर्यभट्ट", "INSAT-1"],
        "ans": 2
      },
      {
        "q": "भारत में किसे 'मिसाइल मैन' कहा जाता है?",
        "opts": ["एपीजे अब्दुल कलाम", "विजयकुमार", "मनमोहन सिंह", "राधाकृष्णन"],
        "ans": 0
      },
      {
        "q": "किस राज्य में 'हसीन झील' स्थित है?",
        "opts": ["कर्नाटका", "मध्य प्रदेश", "जम्मू-कश्मीर", "तमिलनाडु"],
        "ans": 2
      },
      {
        "q": "किस भारतीय नेता ने 'किसान आंदोलन' की शुरुआत की?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय खेल कौन सा है?",
        "opts": ["फुटबॉल", "हॉकी", "क्रिकेट", "बैडमिंटन"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद में 'बचपन के अधिकार' की बात की गई है?",
        "opts": ["21", "22", "23", "24"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य में 'सूरजकुंड मेले' आयोजित होता है?",
        "opts": ["हरियाणा", "राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश"],
        "ans": 0
      },
      {
        "q": "किस भारतीय खेल को 'भारत का राष्ट्रीय खेल' कहा जाता है?",
        "opts": ["क्रिकेट", "हॉकी", "फुटबॉल", "बैडमिंटन"],
        "ans": 1
      },
      {
        "q": "भारत में सबसे पहले किसने 'सत्याग्रह' का प्रयोग किया?",
        "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "किसे 'भारत का पहला नागरिक' कहा जाता है?",
        "opts": ["राष्ट्रपति", "प्रधानमंत्री", "राज्यपाल", "कानून मंत्री"],
        "ans": 0
      },
      {
        "q": "भारत के किस पर्वत को 'कैलाश पर्वत' कहा जाता है?",
        "opts": ["हिमालय", "अर्थाल", "गढ़वाल", "काकरेत"],
        "ans": 0
      },
      {
        "q": "भारत का कौन सा राज्य 'जैव विविधता का हॉटस्पॉट' माना जाता है?",
        "opts": ["मध्य प्रदेश", "कर्नाटका", "उत्तर प्रदेश", "गुजरात"],
        "ans": 1
      },
      {
        "q": "किस भारतीय नेता ने 'चौरी चौरा' आंदोलन की शुरुआत की थी?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय फूल कौन सा है?",
        "opts": ["कमल", "गुलाब", "जास्मिन", "चमेली"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता ने 'स्वराज' का नारा दिया था?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "बाल गंगाधर तिलक", "लाल बहादुर शास्त्री"],
        "ans": 2
      },
      {
        "q": "भारत का कौन सा शहर 'फिल्म सिटी' कहलाता है?",
        "opts": ["मुंबई", "दिल्ली", "हैदराबाद", "कोलकाता"],
        "ans": 0
      },
      {
        "q": "किसे 'भारतीय विज्ञान का जनक' कहा जाता है?",
        "opts": ["जवाहरलाल नेहरू", "स्वामी विवेकानंद", "रविंद्रनाथ ठाकुर", "सीवी रमन"],
        "ans": 3
      },
      {
        "q": "किस अनुच्छेद में 'भ्रष्टाचार' की रोकथाम की बात की गई है?",
        "opts": ["40", "44", "47", "48"],
        "ans": 2
      },
      {
        "q": "भारत के किस नेता ने 'भारत छोड़ो आंदोलन' की शुरुआत की थी?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "किस वर्ष में भारत ने गणतंत्र दिवस मनाना शुरू किया था?",
        "opts": ["1947", "1950", "1951", "1952"],
        "ans": 1
      },
      {
        "q": "भारत का कौन सा शहर 'अवसरों का शहर' कहलाता है?",
        "opts": ["बेंगलुरु", "हैदराबाद", "दिल्ली", "गुरुग्राम"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद में 'शिक्षा का अधिकार' है?",
        "opts": ["21", "22", "23", "24"],
        "ans": 0
      },
      {
        "q": "भारत का कौन सा पर्वत 'संसार का छत' कहा जाता है?",
        "opts": ["कंचनजंगा", "नंदा देवी", "एवरेस्ट", "अर्थाल"],
        "ans": 2
      },
      {
        "q": "किस भारतीय खेल को 'बेसबॉल' के समान माना जाता है?",
        "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "कबड्डी"],
        "ans": 3
      },
      {
        "q": "किस अनुच्छेद के तहत महिलाओं के अधिकारों की रक्षा की जाती है?",
        "opts": ["15", "16", "17", "18"],
        "ans": 0
      },
      {
        "q": "भारत के किस नेता को 'भारत का लोकनायक' कहा जाता है?",
        "opts": ["सुभाष चंद्र बोस", "लौह पुरुष", "महात्मा गांधी", "लाल बहादुर शास्त्री"],
        "ans": 1
      }
      ,
      {
        "q": "भारत की सबसे बड़ी झील कौन सी है?",
        "opts": ["वुलर झील", "सुरसागर झील", "पॉंग झील", "चिलिका झील"],
        "ans": 0
      },
      {
        "q": "भारत के पहले राष्ट्रपति कौन थे?",
        "opts": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "लाल बहादुर शास्त्री", "जवाहरलाल नेहरू"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय पशु कौन सा है?",
        "opts": ["हाथी", "बाघ", "गिलहरी", "लंगूर"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद में 'संविधान की मूल बातें' दी गई हैं?",
        "opts": ["13", "14", "15", "16"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य में 'संसार का सबसे ऊँचा खेल का मैदान' है?",
        "opts": ["जम्मू-कश्मीर", "उत्तराखंड", "हिमाचल प्रदेश", "सिक्किम"],
        "ans": 2
      },
      {
        "q": "किसे 'किंग ऑफ क्रिकेट' कहा जाता है?",
        "opts": ["सचिन तेंदुलकर", "विराट कोहली", "राहुल द्रविड़", "महेंद्र सिंह धोनी"],
        "ans": 0
      },
      {
        "q": "भारत का पहला उपग्रह कब लॉन्च हुआ था?",
        "opts": ["1960", "1962", "1965", "1975"],
        "ans": 1
      },
      {
        "q": "भारत के किस शहर को 'इंजीनियर्स का शहर' कहा जाता है?",
        "opts": ["बेंगलुरु", "दिल्ली", "मुंबई", "हैदराबाद"],
        "ans": 0
      },
      {
        "q": "किस भारतीय संगीतकार को 'नाइटिंगेल' कहा जाता है?",
        "opts": ["लता मंगेशकर", "आशा भोसले", "किशोरी अमोनकर", "सुनिधि चौहान"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य का क्षेत्रफल सबसे बड़ा है?",
        "opts": ["राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश", "गुजरात"],
        "ans": 0
      },
      {
        "q": "भारत में किसे 'किंग ऑफ बास्केटबॉल' कहा जाता है?",
        "opts": ["सचिन तेंदुलकर", "महेंद्र सिंह धोनी", "सतीश यादव", "कर्णम मल्लेश्वरी"],
        "ans": 2
      },
      {
        "q": "भारत का सबसे लंबा नदी कौन सी है?",
        "opts": ["गंगा", "यमुना", "ब्रह्मपुत्र", "सिंधु"],
        "ans": 2
      },
      {
        "q": "किस स्वतंत्रता सेनानी को 'शेर-ए-पंजाब' कहा जाता है?",
        "opts": ["सुभाष चंद्र बोस", "भगत सिंह", "उधम सिंह", "लाला लाजपत राय"],
        "ans": 3
      },
      {
        "q": "किस भारतीय त्योहार को 'दीपावली' के रूप में मनाया जाता है?",
        "opts": ["होली", "ईद", "रक्षा बंधन", "दीपावली"],
        "ans": 3
      },
      {
        "q": "भारत के किस क्षेत्र को 'पश्चिम बंगाल' कहा जाता है?",
        "opts": ["पूर्व", "उत्तर", "दक्षिण", "पश्चिम"],
        "ans": 0
      },
      {
        "q": "किस भारतीय राज्य में सबसे अधिक तेल पाया जाता है?",
        "opts": ["असम", "गुजरात", "राजस्थान", "मध्य प्रदेश"],
        "ans": 0
      },
      {
        "q": "किसे 'भारत का नवजागरण' कहा जाता है?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "डॉ. भीमराव आंबेडकर", "स्वामी विवेकानंद"],
        "ans": 3
      },
      {
        "q": "भारत का पहला संविधान निर्माता कौन था?",
        "opts": ["डॉ. भीमराव आंबेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य में 'केरल' का नाम लिया गया है?",
        "opts": ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
        "ans": 1
      },
      {
        "q": "किसने 'गांधी जी की समाधि' का निर्माण किया?",
        "opts": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "राजेंद्र प्रसाद", "सुभाष चंद्र बोस"],
        "ans": 0
      },
      {
        "q": "भारत का कौन सा राज्य 'सिल्क का राज्य' कहलाता है?",
        "opts": ["असम", "कर्नाटका", "जम्मू-कश्मीर", "हरियाणा"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद में 'समाजवादी गणराज्य' का वर्णन है?",
        "opts": ["14", "15", "16", "17"],
        "ans": 0
      },
      {
        "q": "भारत के पहले मंत्री किसके द्वारा नियुक्त किए गए थे?",
        "opts": ["डॉ. भीमराव आंबेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "लाल बहादुर शास्त्री"],
        "ans": 1
      },
      {
        "q": "किस वर्ष में भारत ने संविधान अपनाया था?",
        "opts": ["1947", "1949", "1950", "1952"],
        "ans": 2
      },
      {
        "q": "भारत की सबसे ऊँची चोटी कौन सी है?",
        "opts": ["कंचनजंगा", "नंदा देवी", "एवरेस्ट", "नैनीताल"],
        "ans": 2
      },
      {
        "q": "किसे 'पद्म श्री' पुरस्कार मिला है?",
        "opts": ["सचिन तेंदुलकर", "लता मंगेशकर", "अमिताभ बच्चन", "सुभाष चंद्र बोस"],
        "ans": 1
      },
      {
        "q": "भारत का पहला संचार उपग्रह कौन सा था?",
        "opts": ["INSAT-1", "IRNSS", "GSAT", "PSLV"],
        "ans": 0
      },
      {
        "q": "भारत के किस शहर को 'सूती वस्त्रों की राजधानी' कहा जाता है?",
        "opts": ["मुंबई", "सूरत", "आगरा", "दिल्ली"],
        "ans": 1
      },
      {
        "q": "किस भारतीय नेता ने 'स्वराज मेरा जन्मसिद्ध अधिकार है' कहा था?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "बाल गंगाधर तिलक", "लाल बहादुर शास्त्री"],
        "ans": 2
      },
      {
        "q": "भारत में पहला टेलीविजन चैनल कौन सा था?",
        "opts": ["Doordarshan", "Aaj Tak", "Zee TV", "Star Plus"],
        "ans": 0
      },
      {
        "q": "किसे 'भारतीय संविधान का पिता' कहा जाता है?",
        "opts": ["डॉ. भीमराव आंबेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस"],
        "ans": 0
      },
      {
        "q": "किस वर्ष में भारत ने स्वतंत्रता प्राप्त की थी?",
        "opts": ["1947", "1950", "1965", "1971"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय गीत कौन सा है?",
        "opts": ["वन्दे मातरम्", "सारे जहाँ से अच्छा", "जन गण मन", "हम भारत के हैं"],
        "ans": 0
      },
      {
        "q": "किस राज्य में 'कोयला' सबसे अधिक पाया जाता है?",
        "opts": ["पश्चिम बंगाल", "झारखंड", "मध्य प्रदेश", "छत्तीसगढ़"],
        "ans": 1
      },
      {
        "q": "किसी व्यक्ति को न्याय के लिए किस अनुच्छेद के तहत हाईकोर्ट में जाना पड़ता है?",
        "opts": ["226", "32", "14", "21"],
        "ans": 1
      },
      {
        "q": "भारत का सबसे पुराना विश्वविद्यालय कौन सा है?",
        "opts": ["हैदराबाद", "दिल्ली", "नालंदा", "जवाहरलाल नेहरू"],
        "ans": 2
      },
      {
        "q": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "opts": ["सुषमा स्वराज", "इंदिरा गांधी", "सोनिया गांधी", "ममता बनर्जी"],
        "ans": 1
      }
      ,

      {
        "q": "भारत का संविधान कब लागू हुआ था?",
        "opts": ["26 जनवरी 1950", "15 अगस्त 1947", "2 अक्टूबर 1950", "1 जनवरी 1950"],
        "ans": 0
      },
      {
        "q": "किसे 'भारतीय गणराज्य का निर्माता' कहा जाता है?",
        "opts": ["डॉ. भीमराव आंबेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय खेल कब मनाया जाता है?",
        "opts": ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "5 अप्रैल"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद के तहत बच्चों के खिलाफ अत्याचार पर रोक लगाने का अधिकार है?",
        "opts": ["21", "23", "24", "32"],
        "ans": 2
      },
      {
        "q": "किसी व्यक्ति को सजा देने का अधिकार किस अनुच्छेद के तहत है?",
        "opts": ["21", "22", "23", "24"],
        "ans": 1
      },
      {
        "q": "भारत में किसकी नदियों को 'गंगा' का नाम दिया गया है?",
        "opts": ["सरस्वती", "सिंधु", "यमुना", "गंगा"],
        "ans": 3
      },
      {
        "q": "भारत के पहले गवर्नर जनरल कौन थे?",
        "opts": ["लॉर्ड वेवेल", "लॉर्ड मिंटो", "लॉर्ड केनिंग", "लॉर्ड डलहौसी"],
        "ans": 2
      },
      {
        "q": "किसे 'भारत का आत्मा' कहा जाता है?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
        "ans": 0
      },
      {
        "q": "भारत के सबसे बड़े रेलवे नेटवर्क का मुख्यालय कहाँ है?",
        "opts": ["दिल्ली", "कोलकाता", "मुंबई", "चेन्नई"],
        "ans": 0
      },
      {
        "q": "भारत का पहला उपग्रह कौन सा था?",
        "opts": ["आर्यभट्ट", "INSAT-1", "मंगलयान", "चंद्रयान"],
        "ans": 0
      },
      {
        "q": "किसे 'गुलाम' के रूप में जाना जाता है?",
        "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 2
      },
      {
        "q": "किस स्वतंत्रता संग्राम की शुरुआत 1857 में हुई थी?",
        "opts": ["सिपाही विद्रोह", "सत्याग्रह", "असहमति", "भारत छोड़ो आंदोलन"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य की राजधानी पटना है?",
        "opts": ["बिहार", "उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश"],
        "ans": 0
      },
      {
        "q": "किस भारतीय महिला को 'नरेंद्र मोदी' का मित्र कहा जाता है?",
        "opts": ["सुषमा स्वराज", "निर्मला सीतारमण", "पूनम महाजन", "स्मृति ईरानी"],
        "ans": 3
      },
      {
        "q": "किस वर्ष में भारत ने परमाणु परीक्षण किया था?",
        "opts": ["1995", "1998", "2000", "2002"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद के तहत 'सूचना का अधिकार' है?",
        "opts": ["19", "21", "22", "30"],
        "ans": 0
      },
      {
        "q": "किसे 'भारत का बाप' कहा जाता है?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत में सबसे बड़ा मंदिर कौन सा है?",
        "opts": ["सोमनाथ", "काशी विश्वनाथ", "अयोध्या", "रामेश्वर"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य में 'इंद्रधनुष' का नामकरण किया गया है?",
        "opts": ["आंध्र प्रदेश", "तेलंगाना", "पश्चिम बंगाल", "महाराष्ट्र"],
        "ans": 1
      },
      {
        "q": "किस भारतीय फिल्म को 'ऑस्कर' पुरस्कार मिला है?",
        "opts": ["गांधी", "रंग दे बसंती", "लगान", "दबंग"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद में 'शिक्षा का अधिकार' है?",
        "opts": ["21", "22", "30", "32"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय गीत कौन सा है?",
        "opts": ["वन्दे मातरम्", "सारे जहाँ से अच्छा", "गणमान्य तन्मन्य", "रघुपति राघव राजा राम"],
        "ans": 0
      },
      {
        "q": "भारत का कौन सा राज्य 'सिल्क सिटी' कहलाता है?",
        "opts": ["सिक्किम", "कर्नाटका", "तमिलनाडु", "असम"],
        "ans": 3
      },
      {
        "q": "किसे 'सभी बुराइयों की जड़' कहा जाता है?",
        "opts": ["अविवेक", "अज्ञानता", "गैरजिम्मेदारी", "असहमति"],
        "ans": 1
      },
      {
        "q": "भारत का सबसे बड़ा शहर कौन सा है?",
        "opts": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद में 'धर्म की स्वतंत्रता' है?",
        "opts": ["25", "26", "27", "28"],
        "ans": 0
      },
      {
        "q": "भारत का कौन सा शहर 'विज्ञान नगर' कहलाता है?",
        "opts": ["दिल्ली", "बेंगलुरु", "हैदराबाद", "पुणे"],
        "ans": 1
      },
      {
        "q": "किसे 'भारत का चाणक्य' कहा जाता है?",
        "opts": ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "डॉ. भीमराव आंबेडकर", "लाल बहादुर शास्त्री"],
        "ans": 2
      },
      {
        "q": "किस भारतीय नेता को 'सत्याग्रह का पिता' कहा जाता है?",
        "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत में पहला आदिवासी विश्वविद्यालय कहाँ है?",
        "opts": ["बिहार", "झारखंड", "मध्य प्रदेश", "छत्तीसगढ़"],
        "ans": 1
      },
      {
        "q": "किस स्वतंत्रता सेनानी ने 'चौरी चौरा' का आंदोलन किया?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत में किस वर्ष जनगणना हुई थी?",
        "opts": ["1941", "1951", "1961", "1971"],
        "ans": 1
      },
      {
        "q": "किसे 'शांति का दूत' कहा जाता है?",
        "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "डॉ. भीमराव आंबेडकर"],
        "ans": 0
      },
      {
        "q": "भारत का पहला अंतरिक्ष मिशन कौन सा है?",
        "opts": ["चंद्रयान-1", "मंगलयान", "आर्यभट्ट", "अधिक"],
        "ans": 2
      },
      {
        "q": "किस राज्य को 'कृषि राज्य' कहा जाता है?",
        "opts": ["पंजाब", "राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद में 'विभिन्नता का अधिकार' है?",
        "opts": ["15", "16", "17", "18"],
        "ans": 2
      },
      {
        "q": "भारत में किसको 'हिरकनी' के नाम से जाना जाता है?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "किरण बेदी", "नीता अंबानी"],
        "ans": 2
      },
      {
        "q": "किस स्वतंत्रता सेनानी ने 'असहयोग आंदोलन' का नेतृत्व किया?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत का कौन सा पर्वत 'हिमालय' कहलाता है?",
        "opts": ["कंचनजंगा", "नंदा देवी", "नैनीताल", "एवरेस्ट"],
        "ans": 0
      }
      ,
      {
        "q": "भारतीय संविधान में राज्य के नीति निदेशक तत्व किस अनुच्छेद में हैं?",
        "opts": ["36 से 51", "52 से 75", "76 से 100", "101 से 120"],
        "ans": 0
      },
      {
        "q": "भारत की स्वतंत्रता संग्राम की पहली महिला सेनानी कौन थीं?",
        "opts": ["रानी झाँसी", "सरोजिनी नायडू", "कर्णावती", "कृष्णा सेन"],
        "ans": 0
      },
      {
        "q": "भारत के पहले उपराष्ट्रपति कौन थे?",
        "opts": ["डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. राजेंद्र प्रसाद", "लाल बहादुर शास्त्री", "जवाहरलाल नेहरू"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय पशु कौन सा है?",
        "opts": ["बाघ", "शेर", "हाथी", "गिलहरी"],
        "ans": 0
      },
      {
        "q": "भारत में सबसे लंबी सड़क किस राज्य में है?",
        "opts": ["राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश", "महाराष्ट्र"],
        "ans": 0
      },
      {
        "q": "भारत का सबसे पुराना समाचार पत्र कौन सा है?",
        "opts": ["हिंदुस्तान टाइम्स", "दैनिक भास्कर", "बंगाल गजट", "टाइम्स ऑफ इंडिया"],
        "ans": 2
      },
      {
        "q": "किस भारतीय महिला ने नासा में काम किया है?",
        "opts": ["सुनंदा सासे", "किरण बेदी", "माधुरी दीक्षित", "कल्पना चावला"],
        "ans": 3
      },
      {
        "q": "निम्नलिखित में से कौन सा एक भारतीय राज्य नहीं है?",
        "opts": ["राजस्थान", "गुजरात", "मध्य प्रदेश", "नेपाल"],
        "ans": 3
      },
      {
        "q": "भारतीय संविधान की सबसे लंबी अनुसूची कौन सी है?",
        "opts": ["चौथी", "पाँचवी", "आठवीं", "दसवीं"],
        "ans": 2
      },
      {
        "q": "किस भारतीय नेता ने 'वह दिन दूर नहीं' कहा?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 1
      },
      {
        "q": "भारत का सबसे बड़ा बांध कौन सा है?",
        "opts": ["नर्मदा बांध", "सुखना झील", "सौराष्ट्र बांध", "तेरह बांध"],
        "ans": 0
      },
      {
        "q": "भारतीय लोकसभा के कितने सदस्य होते हैं?",
        "opts": ["545", "550", "552", "553"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद में 'न्याय का अधिकार' दिया गया है?",
        "opts": ["21", "22", "23", "24"],
        "ans": 0
      },
      {
        "q": "किस स्वतंत्रता सेनानी को 'फादर ऑफ द नेशन' कहा जाता है?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य को 'नौकायन' की राजधानी कहा जाता है?",
        "opts": ["गोवा", "तमिलनाडु", "केरल", "बिहार"],
        "ans": 0
      },
      {
        "q": "किस राज्य की विधानसभा में 'सशक्ति' का नारा दिया गया था?",
        "opts": ["राजस्थान", "गुजरात", "पश्चिम बंगाल", "तमिलनाडु"],
        "ans": 3
      },
      {
        "q": "किस भारतीय महिला को 'पद्मभूषण' पुरस्कार मिला?",
        "opts": ["सुषमा स्वराज", "लता मंगेशकर", "किरण बेदी", "सरोजिनी नायडू"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद में 'स्वतंत्रता का अधिकार' है?",
        "opts": ["19", "21", "22", "30"],
        "ans": 0
      },
      {
        "q": "किसे 'राष्ट्र का सिपाही' कहा जाता है?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "डॉ. भीमराव आंबेडकर"],
        "ans": 1
      },
      {
        "q": "भारत की सबसे ऊँची चोटी कौन सी है?",
        "opts": ["कंचनजंगा", "कैलाश", "नंदा देवी", "एवरेस्ट"],
        "ans": 3
      },
      {
        "q": "भारत में सबसे पहले कौन सा लोक सभा चुनाव हुआ?",
        "opts": ["1950", "1951", "1952", "1953"],
        "ans": 2
      },
      {
        "q": "किस अनुच्छेद के तहत 'न्याय का अधिकार' सुनिश्चित किया गया है?",
        "opts": ["32", "19", "21", "22"],
        "ans": 2
      },
      {
        "q": "किसे 'राष्ट्र का पिता' कहा जाता है?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
        "ans": 0
      },
      {
        "q": "भारत के पहले प्रधानमंत्री कौन थे?",
        "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
        "ans": 2
      },
      {
        "q": "भारतीय अर्थव्यवस्था की पहली योजना कब लागू हुई थी?",
        "opts": ["1951", "1960", "1970", "1980"],
        "ans": 0
      },
      {
        "q": "किस राज्य में सबसे अधिक चाय के बागान हैं?",
        "opts": ["असम", "बंगाल", "तमिलनाडु", "सिक्किम"],
        "ans": 0
      },
      {
        "q": "भारत के किस संविधान अनुच्छेद में 'धर्म का अधिकार' है?",
        "opts": ["25", "26", "27", "28"],
        "ans": 0
      },
      {
        "q": "किसे 'गांधी जी का भारत' कहा जाता है?",
        "opts": ["राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी"],
        "ans": 3
      },
      {
        "q": "भारत का कौन सा राज्य 'कृषि का राज्य' कहा जाता है?",
        "opts": ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता ने 'भारत छोड़ो आंदोलन' का नेतृत्व किया?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत का पहला चंद्रमा मिशन क्या है?",
        "opts": ["चंद्रयान-1", "मंगलयान", "आदित्य-एल1", "सिर्फ़"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता को 'आयरन मैन' कहा जाता है?",
        "opts": ["महात्मा गांधी", "लाल बहादुर शास्त्री", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल"],
        "ans": 3
      },
      {
        "q": "भारत का राष्ट्रीय ध्वज कब अपनाया गया था?",
        "opts": ["1950", "1947", "1930", "1942"],
        "ans": 1
      },
      {
        "q": "किस भारतीय शहर को 'गुलाब का शहर' कहा जाता है?",
        "opts": ["जयपुर", "दिल्ली", "कोलकाता", "पुणे"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य को 'सूती वस्त्रों का राज्य' कहा जाता है?",
        "opts": ["राजस्थान", "गुजरात", "मध्य प्रदेश", "पंजाब"],
        "ans": 1
      },
      {
        "q": "भारत का सबसे बड़ा आईटी पार्क कहां स्थित है?",
        "opts": ["बेंगलुरु", "हैदराबाद", "गुरुग्राम", "पुणे"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता ने 'किसान आंदोलन' की शुरुआत की?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत में पहली बार महिला ने राष्ट्रपति का पद कब ग्रहण किया?",
        "opts": ["2007", "2012", "2002", "1997"],
        "ans": 2
      },
      {
        "q": "भारत का सबसे बड़ा राज्य किस क्षेत्र में है?",
        "opts": ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
        "ans": 0
      },
      {
        "q": "भारत में स्वतंत्रता संग्राम का पहला युद्ध कब हुआ था?",
        "opts": ["1857", "1905", "1942", "1930"],
        "ans": 0
      },
      {
        "q": "किसने 'नमक सत्याग्रह' का नेतृत्व किया?",
        "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत के किस क्षेत्र में 'आगरा' स्थित है?",
        "opts": ["राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश", "बिहार"],
        "ans": 2
      }
      ,
      {
        "q": "भारतीय संविधान के किस अनुच्छेद के तहत राष्ट्रपति का चुनाव होता है?",
        "opts": ["52", "53", "54", "55"],
        "ans": 3
      },
      {
        "q": "भारत में सामुदायिक विकास कार्यक्रम की शुरुआत कब हुई थी?",
        "opts": ["1950", "1952", "1955", "1960"],
        "ans": 1
      },
      {
        "q": "किस भारतीय नेता को 'समानता का प्रतीक' कहा जाता है?",
        "opts": ["डॉ. भीमराव आंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
        "ans": 0
      },
      {
        "q": "भारत के पहले उपप्रधान मंत्री कौन थे?",
        "opts": ["लाल बहादुर शास्त्री", "सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "महात्मा गांधी"],
        "ans": 1
      },
      {
        "q": "भारत में कौन सा राज्य 'बाघों का घर' कहलाता है?",
        "opts": ["मध्य प्रदेश", "राजस्थान", "उत्तर प्रदेश", "तमिलनाडु"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद में शिक्षा का अधिकार सुनिश्चित किया गया है?",
        "opts": ["21", "22", "30", "32"],
        "ans": 0
      },
      {
        "q": "भारत में सबसे पहला जनगणना कब हुआ था?",
        "opts": ["1871", "1881", "1901", "1911"],
        "ans": 2
      },
      {
        "q": "भारत का राष्ट्रीय खेल कौन सा है?",
        "opts": ["फुटबॉल", "हॉकी", "क्रिकेट", "बैडमिंटन"],
        "ans": 1
      },
      {
        "q": "किस भारतीय नेता ने 'स्वराज' का नारा दिया था?",
        "opts": ["लाल बहादुर शास्त्री", "महात्मा गांधी", "सुभाष चंद्र बोस", "बाल गंगाधर तिलक"],
        "ans": 3
      },
      {
        "q": "भारत में सबसे बड़ा लोकसभा क्षेत्र कौन सा है?",
        "opts": ["लुधियाना", "चंडीगढ़", "बनारस", "वायनाड"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "opts": ["गौरैया", "कोकिल", "मोर", "कबूतर"],
        "ans": 2
      },
      {
        "q": "किस स्वतंत्रता सेनानी को 'भारत के पहले सिपाही' कहा जाता है?",
        "opts": ["सुभाष चंद्र बोस", "भगत सिंह", "रानी झाँसी", "तात्या टोपे"],
        "ans": 3
      },
      {
        "q": "किस स्वतंत्रता सेनानी ने 'वन्दे मातरम्' गीत लिखा?",
        "opts": ["रवींद्रनाथ ठाकुर", "सरोजिनी नायडू", "बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी"],
        "ans": 2
      },
      {
        "q": "भारत में किस वर्ष में राष्ट्रीय पिछड़ा वर्ग आयोग की स्थापना की गई?",
        "opts": ["1990", "1980", "2000", "2010"],
        "ans": 0
      },
      {
        "q": "भारत के किस राज्य की राजधानी भुवनेश्वर है?",
        "opts": ["बिहार", "ओडिशा", "पश्चिम बंगाल", "तमिलनाडु"],
        "ans": 1
      },
      {
        "q": "किसे 'गांधी जी की हत्या का दोषी' माना जाता है?",
        "opts": ["नाथूराम गोडसे", "भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय"],
        "ans": 0
      },
      {
        "q": "किस भारतीय महिला ने 'मिस वर्ल्ड' का खिताब जीता था?",
        "opts": ["ऐश्वर्या राय", "सुष्मिता सेन", "दीपिका पादुकोण", "प्रिया वारियर"],
        "ans": 1
      },
      {
        "q": "भारत में किस महाकवि ने 'गुलजार' की उपाधि प्राप्त की है?",
        "opts": ["सूरदास", "तुलसीदास", "कबीर", "रवींद्रनाथ ठाकुर"],
        "ans": 3
      },
      {
        "q": "भारत का सबसे बड़ा राज्य क्षेत्रफल के मामले में कौन सा है?",
        "opts": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
        "ans": 0
      },
      {
        "q": "भारत में सबसे पहली टेलीविज़न सेवा कब शुरू हुई थी?",
        "opts": ["1955", "1960", "1970", "1980"],
        "ans": 0
      },
      {
        "q": "किस अनुच्छेद के तहत 'काले कानून' के खिलाफ प्रदर्शन किया गया?",
        "opts": ["19", "21", "30", "32"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता को 'मिस्टर इंडिया' कहा जाता है?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 1
      },
      {
        "q": "किस भारतीय फिल्म को 'ऑस्कर' पुरस्कार मिला?",
        "opts": ["गांधी", "सलाम बम", "रंग दे बसंती", "दबंग"],
        "ans": 0
      },
      {
        "q": "भारतीय संसद के उच्च सदन का नाम क्या है?",
        "opts": ["लोकसभा", "राज्यसभा", "विधानसभा", "नगरपालिका"],
        "ans": 1
      },
      {
        "q": "भारत का राष्ट्रीय खाद्य सुरक्षा अधिनियम कब लागू हुआ?",
        "opts": ["2005", "2013", "2015", "2018"],
        "ans": 1
      },
      {
        "q": "किस अनुच्छेद के तहत 'समानता का अधिकार' दिया गया है?",
        "opts": ["14", "15", "16", "17"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता को 'गुमनाम नायक' कहा जाता है?",
        "opts": ["रानी झाँसी", "सुभाष चंद्र बोस", "भगत सिंह", "कृष्ण चंद्र"],
        "ans": 1
      },
      {
        "q": "किस भारतीय महिला को 'आयरन लेडी' कहा जाता है?",
        "opts": ["सुषमा स्वराज", "इंदिरा गांधी", "सरोजिनी नायडू", "किरण बेदी"],
        "ans": 1
      },
      {
        "q": "भारतीय राष्ट्रीय कांग्रेस का गठन कब हुआ था?",
        "opts": ["1885", "1905", "1915", "1920"],
        "ans": 0
      },
      {
        "q": "भारत में पहला चंद्रमा मिशन क्या था?",
        "opts": ["चंद्रयान-1", "मंगलयान", "आदित्य-एल1", "सिर्फ़"],
        "ans": 0
      },
      {
        "q": "किस भारतीय शहर को 'सिल्क सिटी' कहा जाता है?",
        "opts": ["सिलिगुड़ी", "मैसूर", "कर्नाटका", "विजयवाड़ा"],
        "ans": 1
      },
      {
        "q": "किस भारतीय नेता ने 'लड़ाई के लिए एक सशस्त्र बल' की मांग की थी?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाला लाजपत राय"],
        "ans": 1
      },
      {
        "q": "भारत में पहला राष्ट्रमंडल खेल कब आयोजित किया गया?",
        "opts": ["1930", "1950", "1982", "2010"],
        "ans": 2
      },
      {
        "q": "किस भारतीय संगीतकार को 'महान गायक' कहा जाता है?",
        "opts": ["लता मंगेशकर", "आमिर खान", "अदिति सिंह", "बचपन"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय खेल कब मनाया जाता है?",
        "opts": ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "5 अप्रैल"],
        "ans": 1
      },
      {
        "q": "भारत का पहला उपग्रह कब लॉन्च किया गया था?",
        "opts": ["1960", "1962", "1965", "1975"],
        "ans": 1
      }
      ,
      {
        "q": "भारत की सबसे बड़ी झील कौन सी है?",
        "opts": ["वुलर झील", "सिल्वर झील", "चिल्का झील", "संगम झील"],
        "ans": 0
      },
      {
        "q": "भारत का सबसे लंबा समुद्री किनारा किस राज्य का है?",
        "opts": ["तमिलनाडु", "गुजरात", "महाराष्ट्र", "आंध्र प्रदेश"],
        "ans": 1
      },
      {
        "q": "भारतीय संविधान में 'समानता का अधिकार' किस अनुच्छेद में है?",
        "opts": ["14", "15", "16", "17"],
        "ans": 0
      },
      {
        "q": "किस वर्ष में भारत का विभाजन हुआ?",
        "opts": ["1945", "1947", "1949", "1950"],
        "ans": 1
      },
      {
        "q": "महात्मा गांधी का असली नाम क्या था?",
        "opts": ["मोहनदास करमचंद गांधी", "राजेंद्र प्रसाद", "सुभाष चंद्र बोस", "भगत सिंह"],
        "ans": 0
      },
      {
        "q": "बंगाल विभाजन कब हुआ था?",
        "opts": ["1905", "1911", "1947", "1950"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "opts": ["गौरैया", "कोकिल", "मोर", "कबूतर"],
        "ans": 2
      },
      {
        "q": "भारतीय रेलवे की स्थापना कब हुई थी?",
        "opts": ["1853", "1869", "1900", "1947"],
        "ans": 0
      },
      {
        "q": "किस स्वतंत्रता सेनानी को 'शेर ए पंजाब' कहा जाता है?",
        "opts": ["सुभाष चंद्र बोस", "भगत सिंह", "उधम सिंह", "रानी झाँसी"],
        "ans": 2
      },
      {
        "q": "भारत की पहली महिला सशस्त्र बलों की अध्यक्ष कौन थीं?",
        "opts": ["किरण बेदी", "पदमिनी", "इंदिरा गांधी", "रानी झाँसी"],
        "ans": 0
      },
      {
        "q": "भारत का सबसे बड़ा त्योहार कौन सा है?",
        "opts": ["दीवाली", "दशहरा", "ईद", "क्रिसमस"],
        "ans": 0
      },
      {
        "q": "निम्नलिखित में से कौन सा एक भारतीय राज्य नहीं है?",
        "opts": ["राजस्थान", "उड़ीसा", "नेपाल", "बिहार"],
        "ans": 2
      },
      {
        "q": "भारतीय संविधान का प्रारूप किसने तैयार किया?",
        "opts": ["डॉ. राजेंद्र प्रसाद", "डॉ. बी.आर. आंबेडकर", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
        "ans": 1
      },
      {
        "q": "भारत की पहली योजना समिति का अध्यक्ष कौन था?",
        "opts": ["जवाहरलाल नेहरू", "डॉ. बी.आर. आंबेडकर", "डॉ. राजेंद्र प्रसाद", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारतीय उपमहाद्वीप में सबसे ऊँचा जलप्रपात कौन सा है?",
        "opts": ["जोग", "हुत्तली", "डुड्हो", "नीलगिरी"],
        "ans": 0
      },
      {
        "q": "किस स्वतंत्रता सेनानी ने 'दिन दयाल उपाध्याय' का नारा दिया था?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "राम मनोहर लोहिया", "दीन दयाल उपाध्याय"],
        "ans": 3
      },
      {
        "q": "भारत में जनसंख्या का पहला जनगणना कब हुआ था?",
        "opts": ["1871", "1901", "1951", "2001"],
        "ans": 1
      },
      {
        "q": "भारतीय संविधान के किस अनुच्छेद में 'शिक्षा का अधिकार' है?",
        "opts": ["21", "22", "23", "24"],
        "ans": 0
      },
      {
        "q": "निम्नलिखित में से कौन सा एक राज्य चुनावी राज्य है?",
        "opts": ["गुजरात", "जम्मू और कश्मीर", "दिल्ली", "पश्चिम बंगाल"],
        "ans": 2
      },
      {
        "q": "निम्नलिखित में से किस भारतीय नेता ने 'हिंद स्वराज' लिखा?",
        "opts": ["महात्मा गांधी", "डॉ. भीमराव आंबेडकर", "सुभाष चंद्र बोस", "राजेंद्र प्रसाद"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय फल कौन सा है?",
        "opts": ["सेब", "केला", "आम", "अंगूर"],
        "ans": 2
      },
      {
        "q": "भारत का सबसे बड़ा पर्वत श्रृंखला कौन सा है?",
        "opts": ["हिमालय", "सातपुड़ा", "विझयनगर", "पश्चिमी घाट"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता ने 'सत्याग्रह' की अवधारणा पेश की?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री", "राजेंद्र प्रसाद"],
        "ans": 0
      },
      {
        "q": "किसे 'आधुनिक भारत का निर्माता' कहा जाता है?",
        "opts": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "डॉ. बी.आर. आंबेडकर"],
        "ans": 0
      },
      {
        "q": "भारतीय राष्ट्रीय कांग्रेस के पहले अध्यक्ष कौन थे?",
        "opts": ["डॉ. सच्चिदानंद सिन्हा", "महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
        "ans": 0
      },
      {
        "q": "भारत में 20वीं सदी की सबसे पहली महिला शिक्षा मंत्री कौन थीं?",
        "opts": ["इंदिरा गांधी", "सरोजिनी नायडू", "कमला नेहरू", "राधिका रवींद्रन"],
        "ans": 0
      },
      {
        "q": "भारत का सबसे बड़ा महल कौन सा है?",
        "opts": ["सिटी पैलेस", "जाग महल", "उमा बाई", "लक्ष्मी महल"],
        "ans": 0
      },
      {
        "q": "निम्नलिखित में से किसने 'गांधी मार्ग' का सिद्धांत विकसित किया?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "ans": 0
      },
      {
        "q": "भारत के सबसे बड़े राज्य का क्षेत्रफल क्या है?",
        "opts": ["राजस्थान", "मध्य प्रदेश", "उड़ीसा", "उत्तर प्रदेश"],
        "ans": 0
      },
      {
        "q": "भारत का सबसे पुराना विश्वविद्यालय कौन सा है?",
        "opts": ["हैदराबाद विश्वविद्यालय", "दिल्ली विश्वविद्यालय", "कलकत्ता विश्वविद्यालय", "नालंदा विश्वविद्यालय"],
        "ans": 3
      },
      {
        "q": "किस स्वतंत्रता सेनानी ने 'राष्ट्रवाद' की विचारधारा पेश की?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
        "ans": 2
      },
      {
        "q": "भारतीय संविधान में कितनी भाषाएँ मान्यता प्राप्त हैं?",
        "opts": ["18", "22", "24", "30"],
        "ans": 1
      },
      {
        "q": "भारत के किस राज्य में सबसे अधिक बौद्ध स्तूप हैं?",
        "opts": ["बिहार", "राजस्थान", "मध्य प्रदेश", "उड़ीसा"],
        "ans": 0
      },
      {
        "q": "किस भारतीय नेता को 'पंडित' के नाम से जाना जाता है?",
        "opts": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "महात्मा गांधी", "सुभाष चंद्र बोस"],
        "ans": 0
      },
      {
        "q": "भारत का सबसे बड़ा शहर कौन सा है?",
        "opts": ["दिल्ली", "मुंबई", "कोलकाता", "बेंगलुरु"],
        "ans": 1
      },
      {
        "q": "भारत का सबसे पहला उपग्रह कौन सा था?",
        "opts": ["आर्यभट्ट", "INSAT", "INSAT-1A", "PSLV"],
        "ans": 0
      }
      ,

      {
        "q": "भारत की राजधानी क्या है?",
        "opts": ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
        "ans": 2
      },
      {
        "q": "राष्ट्रपिता किसे कहा जाता है?",
        "opts": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "डॉ. बी.आर. आंबेडकर"],
        "ans": 1
      },
      {
        "q": "भारतीय संविधान को कब अपनाया गया?",
        "opts": ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "1 जनवरी 1950"],
        "ans": 1
      },
      {
        "q": "गांधी जी का असहमति के प्रति दृष्टिकोण क्या था?",
        "opts": ["अहिंसा", "हिंसा", "तटस्थता", "सहमति"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय पशु कौन सा है?",
        "opts": ["बाघ", "हाथी", "गाय", "शेर"],
        "ans": 0
      },
      {
        "q": "संविधान के कितने भाग हैं?",
        "opts": ["22", "25", "12", "448"],
        "ans": 3
      },
      {
        "q": "भारत का राष्ट्रीय गान क्या है?",
        "opts": ["वन्दे मातरम्", "जन गण मन", "सुभाषितम्", "भारत माता की जय"],
        "ans": 1
      },
      {
        "q": "आज़ादी का अमृत महोत्सव कब मनाया गया?",
        "opts": ["2020", "2021", "2022", "2023"],
        "ans": 1
      },
      {
        "q": "भारत में सबसे ऊँचा पर्वत कौन सा है?",
        "opts": ["कंचनजंगा", "एवेरेस्ट", "नंदा देवी", "धौलीगंगा"],
        "ans": 1
      },
      {
        "q": "भारतीय स्वतंत्रता संग्राम का मुख्य उद्देश्य क्या था?",
        "opts": ["आर्थिक सुधार", "सांस्कृतिक संरक्षण", "राजनीतिक स्वतंत्रता", "सामाजिक समानता"],
        "ans": 2
      },
      {
        "q": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "opts": ["इंदिरा गांधी", "सोनिया गांधी", "प्रिया नाथ", "किरण बेदी"],
        "ans": 0
      },
      {
        "q": "भारत का संविधान कब लागू हुआ?",
        "opts": ["15 अगस्त 1947", "26 जनवरी 1950", "1 जनवरी 1950", "26 नवंबर 1949"],
        "ans": 1
      },
      {
        "q": "भारतीय स्वतंत्रता संग्राम का नेतृत्व किसने किया?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "डॉ. बी.आर. आंबेडकर"],
        "ans": 0
      },
      {
        "q": "भारत में उच्चतम न्यायालय की स्थापना कब हुई?",
        "opts": ["26 जनवरी 1950", "1 जुलाई 1950", "15 अगस्त 1947", "26 नवंबर 1950"],
        "ans": 0
      },
      {
        "q": "संविधान की किस धारा के तहत अनुच्छेद 370 लागू किया गया था?",
        "opts": ["370", "371", "372", "373"],
        "ans": 0
      },
      {
        "q": "भारत के पहले राष्ट्रपति कौन थे?",
        "opts": ["डॉ. राजेंद्र प्रसाद", "डॉ. सच्चिदानंद सिन्हा", "जवाहरलाल नेहरू", "डॉ. बी.आर. आंबेडकर"],
        "ans": 0
      },
      {
        "q": "भारतीय लोक सेवा आयोग (UPSC) की स्थापना कब हुई?",
        "opts": ["1926", "1947", "1950", "1952"],
        "ans": 0
      },
      {
        "q": "भारत में पहला पंचायती राज कब लागू हुआ?",
        "opts": ["1959", "1960", "1970", "1980"],
        "ans": 0
      },
      {
        "q": "भारत के सबसे बड़े राज्य का नाम क्या है?",
        "opts": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "बिहार"],
        "ans": 2
      },
      {
        "q": "भारतीय विज्ञान के लिए कौन सा पुरस्कार दिया जाता है?",
        "opts": ["ज्ञानपीठ", "महावीर", "शांति", "ब्रह्मानंद"],
        "ans": 0
      },
      {
        "q": "स्वराज का नारा किसने दिया था?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "बिपिन चंद्र पाल", "बाल गंगाधर तिलक"],
        "ans": 3
      },
      {
        "q": "भारत के स्वतंत्रता संग्राम में 'दांडी मार्च' का नेतृत्व किसने किया?",
        "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
        "ans": 0
      },
      {
        "q": "गोलमेकर का असली नाम क्या था?",
        "opts": ["सुभाष चंद्र बोस", "लाला लाजपत राय", "भगत सिंह", "चंद्रशेखर आजाद"],
        "ans": 2
      },
      {
        "q": "भारत में पहला सामुदायिक विकास कार्यक्रम कब शुरू हुआ?",
        "opts": ["1950", "1952", "1955", "1960"],
        "ans": 1
      },
      {
        "q": "भारत के किस राज्य की संस्कृति में बौद्ध धर्म का बड़ा प्रभाव है?",
        "opts": ["तमिलनाडु", "उज्जैन", "सिक्किम", "बिहार"],
        "ans": 3
      },
      {
        "q": "इंदिरा गांधी को कितनी बार प्रधानमंत्री बनाया गया?",
        "opts": ["1", "2", "3", "4"],
        "ans": 2
      },
      {
        "q": "भारतीय राष्ट्रीय कांग्रेस का गठन कब हुआ?",
        "opts": ["1885", "1905", "1915", "1920"],
        "ans": 0
      },
      {
        "q": "महात्मा गांधी का असली नाम क्या था?",
        "opts": ["मोहनदास करमचंद गांधी", "राजेंद्र प्रसाद", "सुभाष चंद्र बोस", "भगत सिंह"],
        "ans": 0
      },
      {
        "q": "भारत में सबसे बड़ा जलाशय कौन सा है?",
        "opts": ["गोदावरी", "गंगा", "सिंधु", "कावेरी"],
        "ans": 2
      },
      {
        "q": "भारतीय संस्कृति में 'अहिंसा' का क्या महत्व है?",
        "opts": ["संविधान में", "धार्मिक विचारों में", "राजनीति में", "सामाजिक विचारों में"],
        "ans": 1
      },
      {
        "q": "भारत का पहला भूगर्भीय सर्वेक्षण किसने किया?",
        "opts": ["कर्णीक", "रघुनाथ", "कैलाश", "चंदन"],
        "ans": 0
      },
      {
        "q": "भारत के किस शहर को 'सिल्क सिटी' कहा जाता है?",
        "opts": ["सिलिगुड़ी", "मैसूर", "कर्नाटका", "विजयवाड़ा"],
        "ans": 1
      },
      {
        "q": "किस दिन को भारत में स्वतंत्रता दिवस मनाया जाता है?",
        "opts": ["14 अगस्त", "15 अगस्त", "26 जनवरी", "2 अक्टूबर"],
        "ans": 1
      },
      {
        "q": "भारत की प्रथम महिला राष्ट्रपति कौन थीं?",
        "opts": ["प्रतिभा पाटिल", "इंदिरा गांधी", "सोनिया गांधी", "सरोजिनी नायडू"],
        "ans": 0
      },
      {
        "q": "किस भाषा को भारत की राष्ट्रीय भाषा का दर्जा प्राप्त है?",
        "opts": ["हिंदी", "उर्दू", "बांग्ला", "अंग्रेजी"],
        "ans": 0
      },
      {
        "q": "भारत का सर्वोच्च न्यायालय कहाँ स्थित है?",
        "opts": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "ans": 0
      },
      {
        "q": "भारतीय स्वतंत्रता संग्राम का नेतृत्व करने वाला पहला संगठन कौन सा था?",
        "opts": ["कांग्रेस", "मुस्लिम लीग", "हिंदू महासभा", "इंडियन नेशनल कांग्रेस"],
        "ans": 3
      },
      {
        "q": "भारतीय संविधान में कितने अनुच्छेद हैं?",
        "opts": ["395", "400", "450", "500"],
        "ans": 0
      },
      {
        "q": "निम्नलिखित में से कौन सा एक राष्ट्रीय पर्व है?",
        "opts": ["गणतंत्र दिवस", "दिवाली", "ईद", "क्रिसमस"],
        "ans": 0
      },
      {
        "q": "भारत में सबसे लंबी नदी कौन सी है?",
        "opts": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
        "ans": 1
      },
      {
        "q": "भारत में कुल कितने राज्यों की संख्या है?",
        "opts": ["28", "29", "30", "31"],
        "ans": 0
      },
      {
        "q": "स्वतंत्रता संग्राम के दौरान 'फॉरवर्ड ब्लॉक' की स्थापना किसने की थी?",
        "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
        "ans": 1
      },
      {
        "q": "भारत की स्वतंत्रता की पहली मांग कब की गई थी?",
        "opts": ["1905", "1915", "1920", "1942"],
        "ans": 0
      },
      {
        "q": "भारत का राष्ट्रीय गीत क्या है?",
        "opts": ["वन्दे मातरम्", "जन गण मन", "सुभाषितम्", "भारत माता की जय"],
        "ans": 0
      }
    ]

  ,
  Patwari:
    [
      {
        "q": "राजस्व का मुख्य स्रोत क्या है?",
        "opts": ["कृषि", "उद्योग", "सेवाएँ", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "भूमि के माप के लिए कौन सा यंत्र उपयोग किया जाता है?",
        "opts": ["मेजर", "गिनती", "टेप", "सर्वेक्षण"],
        "ans": 2
      },
      {
        "q": "खसरा किस दस्तावेज़ को कहा जाता है?",
        "opts": ["भूमि रिकार्ड", "खेतों का नक्शा", "राजस्व रजिस्टर", "भूमि स्वामित्व प्रमाणपत्र"],
        "ans": 0
      },
      {
        "q": "किस योजना के अंतर्गत किसानों को ऋण दिया जाता है?",
        "opts": ["किसान क्रेडिट कार्ड", "नरेगा", "प्रधानमंत्री आवास योजना", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि के निबंधन का कार्य किसके द्वारा किया जाता है?",
        "opts": ["तहसीलदार", "पटवारी", "राजस्व अधिकारी", "किसी अन्य"],
        "ans": 1
      },
      {
        "q": "किसी भूमि का सर्वेक्षण कब किया जाता है?",
        "opts": ["जब भूमि की बिक्री होती है", "हर वर्ष", "आवश्यकता अनुसार", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी जमीन का खसरा नंबर क्या दर्शाता है?",
        "opts": ["भूमि की पहचान", "भूमि का क्षेत्रफल", "भूमि का स्वामित्व", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "कृषि योग्य भूमि का वर्गीकरण किसके द्वारा किया जाता है?",
        "opts": ["कृषि विभाग", "राजस्व विभाग", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व विभाग का मुख्य कार्य क्या है?",
        "opts": ["भूमि रिकॉर्ड का प्रबंधन", "कर संग्रह", "कृषि विकास", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किस कानून के तहत भूमि का निबंधन किया जाता है?",
        "opts": ["भूमि अधिग्रहण कानून", "भारतीय रजिस्ट्री कानून", "कृषि कानून", "राजस्व कानून"],
        "ans": 1
      },
      {
        "q": "पटवारी की मुख्य जिम्मेदारी क्या है?",
        "opts": ["राजस्व संग्रह", "भूमि का सर्वेक्षण", "किसानों की सहायता", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी भूमि के स्वामित्व का प्रमाण क्या होता है?",
        "opts": ["खसरा", "कागजात", "पट्टा", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किस योजना का उद्देश्य ग्रामीण विकास है?",
        "opts": ["प्रधानमंत्री आवास योजना", "कृषि अवसंरचना निधि", "नरेगा", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "भूमि अधिग्रहण का क्या अर्थ है?",
        "opts": ["भूमि का विक्रय", "सरकार द्वारा भूमि का अधिग्रहण", "भूमि का बंटवारा", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व रिकॉर्ड में कौन सी जानकारी होती है?",
        "opts": ["भूमि का आकार", "स्वामी का नाम", "उपयोगिता", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी जमीन का नक्शा बनाने के लिए कौन सा यंत्र उपयोग किया जाता है?",
        "opts": ["सर्वेक्षण यंत्र", "गायरोस्कोप", "गणना यंत्र", "कोई नहीं"],
        "ans": 0
      },
      {
        "q": "किसी किसान के लिए पट्टा क्या है?",
        "opts": ["भूमि का अधिकार", "भूमि का उपयोग अधिकार", "संपत्ति का प्रमाण", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "भूमि का उपयोग क्या दर्शाता है?",
        "opts": ["कृषि", "आवास", "उद्योग", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व विभाग की उच्चतम अधिकारी कौन होती है?",
        "opts": ["कलेक्टर", "तहसीलदार", "पटवारी", "सर्वेयर"],
        "ans": 0
      },
      {
        "q": "क्या भूमि की माप हर वर्ष की जाती है?",
        "opts": ["हाँ", "नहीं", "केवल आवश्यकतानुसार", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "राजस्व का दूसरा नाम क्या है?",
        "opts": ["राजस्व कर", "राजस्व सेवाएँ", "राजस्व प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी जमीन के पट्टे का नवीनीकरण कब किया जाता है?",
        "opts": ["हर वर्ष", "समाप्ति पर", "जब सरकार कहे", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी भूमि के कागजात की प्रमाणिकता कैसे सुनिश्चित की जाती है?",
        "opts": ["सरकारी अधिकारी द्वारा", "किसान द्वारा", "न्यायालय द्वारा", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि की सर्वेक्षण रिपोर्ट में कौन सी जानकारी शामिल होती है?",
        "opts": ["भूमि का आकार", "सामाजिक स्थिति", "कृषि उत्पाद", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी क्षेत्र में भूमि के उपयोग का निरीक्षण कौन करता है?",
        "opts": ["पटवारी", "तहसीलदार", "कलेक्टर", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग की महत्वपूर्ण योजना कौन सी है?",
        "opts": ["किसान कल्याण योजना", "राशन कार्ड योजना", "संपत्ति कर योजना", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि के राजस्व का मूल्यांकन किसके द्वारा किया जाता है?",
        "opts": ["कलेक्टर", "राजस्व विभाग", "तहसीलदार", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी किसान की भूमि के रकबे की जानकारी कहाँ मिलती है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रिकॉर्ड", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस योजना के अंतर्गत भूमि सुधार किए जाते हैं?",
        "opts": ["कृषि सुधार योजना", "राजस्व सुधार योजना", "प्रधानमंत्री योजना", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व का उपयोग किसके लिए किया जाता है?",
        "opts": ["सरकारी योजनाएँ", "सामाजिक कल्याण", "संरचना विकास", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "भूमि के समग्र विकास का कार्य कौन करता है?",
        "opts": ["राजस्व विभाग", "कृषि विभाग", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी किसान के लिए कौन सा दस्तावेज सबसे महत्वपूर्ण है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "भूमि के सर्वेक्षण के लिए कौन सा समय सबसे उचित है?",
        "opts": ["मॉनसून", "गर्मी", "सर्दी", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व कानून का प्रमुख उद्देश्य क्या है?",
        "opts": ["भूमि का संरक्षण", "किसानों की सहायता", "भूमि की बिक्री", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि के पट्टे का नवीनीकरण कब करना चाहिए?",
        "opts": ["हर वर्ष", "समाप्ति पर", "सिर्फ जब किसान कहे", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "भूमि के उपयोग की स्थिति को कैसे दर्शाया जाता है?",
        "opts": ["नक्शे द्वारा", "आधिकारिक कागजात", "बोर्ड द्वारा", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व रिकॉर्ड में 'खाता' का क्या अर्थ है?",
        "opts": ["भूमि का विवरण", "किसान का नाम", "राजस्व की राशि", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड का निबंधन कब किया जाता है?",
        "opts": ["खरीदने पर", "हर वर्ष", "सिर्फ आवश्यकतानुसार", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि के लिए सर्वेक्षण रिपोर्ट कब बनाई जाती है?",
        "opts": ["जब भूमि बेची जाती है", "हर वर्ष", "जरूरत पड़ने पर", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी जमीन के सीमांकन के लिए कौन जिम्मेदार है?",
        "opts": ["पटवारी", "तहसीलदार", "कलेक्टर", "सर्वेयर"],
        "ans": 3
      },
      {
        "q": "किस योजना के तहत भूमिहीन किसानों को जमीन दी जाती है?",
        "opts": ["कृषि सुधार योजना", "भूमि वितरण योजना", "नरेगा", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व संग्रह की प्रक्रिया किसके द्वारा होती है?",
        "opts": ["पटवारी", "कलेक्टर", "तहसीलदार", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी जमीन की बाजार मूल्यांकन रिपोर्ट में क्या शामिल होता है?",
        "opts": ["भूमि का आकार", "जिले का नाम", "सामाजिक स्थिति", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग में 'फसल कटाई' की प्रक्रिया का क्या अर्थ है?",
        "opts": ["फसल का विवरण", "किसानों का पंजीकरण", "राजस्व का संग्रह", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "भूमि का स्वामित्व प्रमाणित करने के लिए कौन सा दस्तावेज आवश्यक है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किस कानून के अंतर्गत भूमि अधिग्रहण किया जाता है?",
        "opts": ["भूमि अधिग्रहण कानून", "कृषि कानून", "भूस्वामित्व कानून", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व का क्या महत्व है?",
        "opts": ["सरकारी योजनाओं के लिए", "सामाजिक कल्याण के लिए", "विकास के लिए", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किस योजना के अंतर्गत किसानों को बीज दिया जाता है?",
        "opts": ["प्रधानमंत्री कृषि सिंचाई योजना", "कृषि विकास योजना", "सभी उपरोक्त", "कोई नहीं"],
        "ans": 2
      },
      {
        "q": "किसी किसान के लिए भूमि का क्या महत्व है?",
        "opts": ["आर्थिक विकास", "सामाजिक स्थिति", "खुद का घर", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व रजिस्टर में क्या दर्ज होता है?",
        "opts": ["स्वामित्व विवरण", "खेतों की जानकारी", "फसल विवरण", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किस योजना का उद्देश्य जल संरक्षण है?",
        "opts": ["प्रधानमंत्री जल योजना", "कृषि सिंचाई योजना", "नरेगा", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी भूमि का सीमांकन कब किया जाता है?",
        "opts": ["हर साल", "फसल कटाई के बाद", "खरीदने के समय", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "राजस्व विभाग के अंतर्गत कितने प्रकार के रिकॉर्ड होते हैं?",
        "opts": ["दो", "तीन", "चार", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी किसान के लिए खसरा क्या होता है?",
        "opts": ["भूमि का पहचान पत्र", "स्वामित्व प्रमाण", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि अधिग्रहण के लिए किसका आदेश आवश्यक है?",
        "opts": ["कलेक्टर", "तहसीलदार", "राज्य सरकार", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "राजस्व विभाग का प्रमुख कार्य क्या है?",
        "opts": ["भूमि का सर्वेक्षण", "राजस्व का संग्रह", "किसानों की सहायता", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी जमीन के मूल्यांकन में कौन सा कारक महत्वपूर्ण है?",
        "opts": ["भूमि का आकार", "स्थान", "उपयोगिता", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व रिकॉर्ड की प्रमाणिकता कैसे सुनिश्चित की जाती है?",
        "opts": ["सरकारी अधिकारी", "किसान", "न्यायालय", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी किसान के लिए सबसे महत्वपूर्ण दस्तावेज कौन सा है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी क्षेत्र में भूमि के उपयोग का निरीक्षण कौन करता है?",
        "opts": ["पटवारी", "तहसीलदार", "कलेक्टर", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि के सर्वेक्षण के लिए कौन सा समय सबसे उचित है?",
        "opts": ["मॉनसून", "गर्मी", "सर्दी", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व विभाग की महत्वपूर्ण योजना कौन सी है?",
        "opts": ["किसान कल्याण योजना", "राशन कार्ड योजना", "संपत्ति कर योजना", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि का उपयोग क्या दर्शाता है?",
        "opts": ["कृषि", "आवास", "उद्योग", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी भूमि के उपयोग का निरीक्षण कब किया जाता है?",
        "opts": ["हर वर्ष", "जरूरत पड़ने पर", "फसल कटाई के बाद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी जमीन का निबंधन क्यों आवश्यक है?",
        "opts": ["कानूनी सुरक्षा के लिए", "राजस्व संग्रह के लिए", "विकास के लिए", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग का कार्य क्षेत्र क्या है?",
        "opts": ["भूमि रिकॉर्ड प्रबंधन", "कृषि विकास", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      }, {
        "q": "किसे 'जमींदार' कहा जाता है?",
        "opts": ["भूमि का मालिक", "किसान", "राजस्व अधिकारी", "सर्वेयर"],
        "ans": 0
      },
      {
        "q": "राजस्व का मुख्य स्रोत क्या है?",
        "opts": ["कृषि", "उद्योग", "सेवा", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि का उपयोग परिवर्तन के लिए किसकी अनुमति आवश्यक है?",
        "opts": ["कलेक्टर", "तहसीलदार", "ग्राम पंचायत", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड की सीमा निर्धारण की प्रक्रिया को क्या कहा जाता है?",
        "opts": ["सीमांकन", "सर्वेक्षण", "निबंधन", "निशान"],
        "ans": 1
      },
      {
        "q": "राजस्व रसीद में क्या दर्शाया जाता है?",
        "opts": ["राजस्व की राशि", "भूमि का विवरण", "किसान का नाम", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस कानून के अंतर्गत भूमि का उपयोग किया जाता है?",
        "opts": ["भूमि अधिग्रहण कानून", "कृषि कानून", "भूस्वामित्व कानून", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किस योजना के तहत भूजल संरक्षण किया जाता है?",
        "opts": ["जलशक्ति योजना", "सिंचाई योजना", "भूमि सुधार योजना", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि के उपयोग में परिवर्तन कब किया जा सकता है?",
        "opts": ["किसान की इच्छा पर", "सरकार के आदेश पर", "कलेक्टर की अनुमति से", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी क्षेत्र में भूमि का सर्वेक्षण कब किया जाता है?",
        "opts": ["हर वर्ष", "जरूरत पड़ने पर", "किसान के अनुरोध पर", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किस कानून के तहत भूमिहीनों को भूमि आवंटित की जाती है?",
        "opts": ["भूमि वितरण कानून", "कृषि सुधार कानून", "राजस्व कानून", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड के स्वामित्व का प्रमाण क्या है?",
        "opts": ["खसरा", "पट्टा", "सर्वेक्षण रिपोर्ट", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "भूमि के अधिग्रहण के लिए सबसे पहले किससे संपर्क किया जाता है?",
        "opts": ["कलेक्टर", "तहसीलदार", "ग्राम पंचायत", "सर्वेयर"],
        "ans": 0
      },
      {
        "q": "राजस्व रिकॉर्ड में 'खसरा नंबर' का क्या महत्व है?",
        "opts": ["भूमि का पहचान पत्र", "राजस्व की राशि", "किसान का नाम", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि का सीमांकन करने में कौन सा उपकरण उपयोग होता है?",
        "opts": ["टेप", "ग्लोब", "जियोडेसिक उपकरण", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "भूमि के उपयोग की स्थिति को कैसे दर्शाया जाता है?",
        "opts": ["राजस्व रजिस्टर", "आधिकारिक कागजात", "नक्शे द्वारा", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी भूखंड की मूल्यांकन प्रक्रिया को कौन संचालित करता है?",
        "opts": ["पटवारी", "सर्वेयर", "कलेक्टर", "तहसीलदार"],
        "ans": 1
      },
      {
        "q": "किस योजना के अंतर्गत किसानों को फसल बीमा मिलता है?",
        "opts": ["प्रधानमंत्री फसल बीमा योजना", "कृषि विकास योजना", "भूमि सुधार योजना", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि का उपयोग क्या दर्शाता है?",
        "opts": ["कृषि", "औद्योगिक", "आवासीय", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व का महत्व क्या है?",
        "opts": ["सरकारी योजनाओं के लिए", "सामाजिक कल्याण के लिए", "विकास के लिए", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी भूमि का निबंधन क्यों आवश्यक है?",
        "opts": ["कानूनी सुरक्षा के लिए", "राजस्व संग्रह के लिए", "विकास के लिए", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग में 'फसल कटाई' की प्रक्रिया का क्या अर्थ है?",
        "opts": ["फसल का विवरण", "किसानों का पंजीकरण", "राजस्व का संग्रह", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी भूखंड के लिए सर्वेक्षण रिपोर्ट कब बनाई जाती है?",
        "opts": ["जब भूमि बेची जाती है", "हर वर्ष", "जरूरत पड़ने पर", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी क्षेत्र में भूमि का सर्वेक्षण कौन करता है?",
        "opts": ["पटवारी", "तहसीलदार", "कलेक्टर", "सर्वेयर"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड का सीमांकन कब किया जाता है?",
        "opts": ["हर साल", "फसल कटाई के बाद", "खरीदने के समय", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "राजस्व विभाग के अंतर्गत कितने प्रकार के रिकॉर्ड होते हैं?",
        "opts": ["दो", "तीन", "चार", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी किसान के लिए भूमि का क्या महत्व है?",
        "opts": ["आर्थिक विकास", "सामाजिक स्थिति", "खुद का घर", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी जमीन के लिए सर्वेक्षण का क्या महत्व है?",
        "opts": ["सही सीमांकन", "कानूनी सुरक्षा", "राजस्व संग्रह", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस योजना के तहत भूमि सुधार किया जाता है?",
        "opts": ["कृषि सुधार योजना", "भूमि वितरण योजना", "नरेगा", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "भूमि का उपयोग परिवर्तन के लिए किसकी अनुमति आवश्यक है?",
        "opts": ["कलेक्टर", "तहसीलदार", "ग्राम पंचायत", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग का कार्य क्षेत्र क्या है?",
        "opts": ["भूमि रिकॉर्ड प्रबंधन", "कृषि विकास", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि के स्वामित्व को प्रमाणित करने के लिए कौन सा दस्तावेज आवश्यक है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी भूखंड के लिए सीमांकन किसके द्वारा किया जाता है?",
        "opts": ["पटवारी", "तहसीलदार", "कलेक्टर", "सर्वेयर"],
        "ans": 3
      },
      {
        "q": "किसी भूमि के मूल्यांकन में कौन सा कारक महत्वपूर्ण है?",
        "opts": ["भूमि का आकार", "स्थान", "उपयोगिता", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "भूमि का सर्वेक्षण कब किया जाना चाहिए?",
        "opts": ["हर वर्ष", "जरूरत पड़ने पर", "फसल कटाई के बाद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व रिकॉर्ड में 'खाता' का क्या अर्थ है?",
        "opts": ["भूमि का विवरण", "किसान का नाम", "राजस्व की राशि", "सभी उपरोक्त"],
        "ans": 0
      }, {
        "q": "किसे 'राजस्व' कहा जाता है?",
        "opts": ["सरकारी आय", "व्यक्तिगत आय", "कृषि आय", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड के सीमांकन की प्रक्रिया में कौन सा उपकरण प्रयोग होता है?",
        "opts": ["टेप", "ग्लोब", "जियोडेसिक उपकरण", "कंपास"],
        "ans": 2
      },
      {
        "q": "राजस्व रसीद में मुख्यतः क्या दर्ज किया जाता है?",
        "opts": ["राजस्व की राशि", "भूमि का विवरण", "किसान का नाम", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि अधिग्रहण के लिए किन्हें अधिकार होता है?",
        "opts": ["राज्य सरकार", "कलेक्टर", "तहसीलदार", "सर्वेयर"],
        "ans": 0
      },
      {
        "q": "किस कानून के अंतर्गत भूमि का स्वामित्व तय होता है?",
        "opts": ["भूमि अधिग्रहण कानून", "कृषि सुधार कानून", "राजस्व कानून", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "भूमि के उपयोग परिवर्तन के लिए कौन से दस्तावेज आवश्यक हैं?",
        "opts": ["पट्टा", "राजस्व रसीद", "खसरा", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी भूखंड की रकबा कैसे मापी जाती है?",
        "opts": ["हेक्टेयर में", "एकड़ में", "बिस्वा में", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी भूमि के स्वामित्व को कानूनी रूप से प्रमाणित करने के लिए क्या आवश्यक है?",
        "opts": ["नक्शा", "खसरा", "पट्टा", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "राजस्व विभाग में 'खाता' का क्या महत्व है?",
        "opts": ["भूमि का पहचान पत्र", "किसान का विवरण", "राजस्व का संग्रह", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस योजना के अंतर्गत भूमिहीन किसानों को भूमि आवंटित की जाती है?",
        "opts": ["प्रधानमंत्री आवास योजना", "भूमि सुधार योजना", "कृषि विकास योजना", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किस कानून के तहत भूमि का सर्वेक्षण किया जाता है?",
        "opts": ["भूमि अधिग्रहण कानून", "राजस्व कानून", "भूस्वामित्व कानून", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी भूखंड का सीमांकन कब किया जाता है?",
        "opts": ["हर वर्ष", "फसल कटाई के बाद", "खरीदने के समय", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "राजस्व रिकॉर्ड में 'खसरा' का क्या महत्व है?",
        "opts": ["भूमि का पहचान पत्र", "किसान का नाम", "राजस्व की राशि", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी क्षेत्र में भूमि का सर्वेक्षण कौन करता है?",
        "opts": ["पटवारी", "कलेक्टर", "तहसीलदार", "सर्वेयर"],
        "ans": 3
      },
      {
        "q": "भूमि के उपयोग का परिवर्तन किसके द्वारा किया जाता है?",
        "opts": ["सरकार", "कलेक्टर", "ग्राम पंचायत", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस योजना के अंतर्गत किसानों को फसल बीमा मिलता है?",
        "opts": ["प्रधानमंत्री फसल बीमा योजना", "कृषि विकास योजना", "भूमि सुधार योजना", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि के सर्वेक्षण में क्या उपयोग होता है?",
        "opts": ["GPS", "टेप", "ग्लोब", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग के कार्य क्षेत्र में क्या शामिल है?",
        "opts": ["भूमि रिकॉर्ड प्रबंधन", "कृषि विकास", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि के मूल्यांकन में कौन सा कारक महत्वपूर्ण है?",
        "opts": ["स्थान", "भूगोल", "उपयोगिता", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी भूखंड की सीमा निर्धारित करने के लिए कौन सा दस्तावेज आवश्यक है?",
        "opts": ["खसरा", "नक्शा", "पट्टा", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व का महत्व क्या है?",
        "opts": ["सरकारी योजनाओं के लिए", "सामाजिक कल्याण के लिए", "विकास के लिए", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "भूमि के उपयोग में परिवर्तन कब किया जा सकता है?",
        "opts": ["किसान की इच्छा पर", "सरकार के आदेश पर", "कलेक्टर की अनुमति से", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी क्षेत्र में भूमि का सर्वेक्षण कब किया जाता है?",
        "opts": ["हर वर्ष", "जरूरत पड़ने पर", "किसान के अनुरोध पर", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व विभाग में 'फसल कटाई' की प्रक्रिया का क्या अर्थ है?",
        "opts": ["फसल का विवरण", "किसानों का पंजीकरण", "राजस्व का संग्रह", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी भूमि के निबंधन के लिए किसकी आवश्यकता होती है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "राजस्व विभाग के अंतर्गत कितने प्रकार के रिकॉर्ड होते हैं?",
        "opts": ["दो", "तीन", "चार", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "भूमि के लिए सर्वेक्षण का क्या महत्व है?",
        "opts": ["सही सीमांकन", "कानूनी सुरक्षा", "राजस्व संग्रह", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस योजना के अंतर्गत भूमि सुधार किया जाता है?",
        "opts": ["कृषि सुधार योजना", "भूमि वितरण योजना", "नरेगा", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी भूमि के उपयोग परिवर्तन के लिए क्या आवश्यक है?",
        "opts": ["सरकारी अनुमति", "किसान की इच्छा", "ग्राम पंचायत का अनुमोदन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग के कार्यों में क्या शामिल है?",
        "opts": ["भूमि रिकॉर्ड प्रबंधन", "कृषि विकास", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि के स्वामित्व को प्रमाणित करने के लिए कौन सा दस्तावेज आवश्यक है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी भूखंड के लिए सीमांकन किसके द्वारा किया जाता है?",
        "opts": ["पटवारी", "तहसीलदार", "कलेक्टर", "सर्वेयर"],
        "ans": 3
      },
      {
        "q": "किसी भूमि के मूल्यांकन में कौन सा कारक महत्वपूर्ण है?",
        "opts": ["भूमि का आकार", "स्थान", "उपयोगिता", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "भूमि का सर्वेक्षण कब किया जाना चाहिए?",
        "opts": ["हर वर्ष", "जरूरत पड़ने पर", "फसल कटाई के बाद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी भूखंड का सीमांकन कैसे किया जाता है?",
        "opts": ["राजस्व रसीद से", "पट्टा से", "नक्शा से", "सर्वेक्षण से"],
        "ans": 3
      },
      {
        "q": "किसी भूखंड के स्वामित्व का प्रमाण कौन सा होता है?",
        "opts": ["खसरा", "पट्टा", "नक्शा", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व रिकॉर्ड में 'किसान' का क्या महत्व है?",
        "opts": ["किसान का नाम", "किसान का पता", "किसान का आय", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस कानून के अंतर्गत भूमि के उपयोग का परिवर्तन किया जाता है?",
        "opts": ["भूमि सुधार कानून", "राजस्व कानून", "कृषि कानून", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किस योजना के तहत भूमिहीन किसानों को भूमि आवंटित की जाती है?",
        "opts": ["प्रधानमंत्री आवास योजना", "भूमि वितरण योजना", "कृषि विकास योजना", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी भूमि की रकबा को कैसे मापा जाता है?",
        "opts": ["हेक्टेयर में", "एकड़ में", "बिस्वा में", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व विभाग का प्रमुख कार्य क्या है?",
        "opts": ["भूमि का सर्वेक्षण", "राजस्व संग्रह", "भूमि के रिकॉर्ड का प्रबंधन", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी भूखंड के लिए सर्वेक्षण का क्या महत्व है?",
        "opts": ["सही सीमांकन", "कानूनी सुरक्षा", "राजस्व का संग्रह", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व रिकॉर्ड में 'खसरा' का क्या महत्व है?",
        "opts": ["भूमि का पहचान पत्र", "किसान का नाम", "राजस्व की राशि", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि के निबंधन के लिए क्या आवश्यक है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "भूमि उपयोग के परिवर्तन के लिए कौन सा दस्तावेज आवश्यक है?",
        "opts": ["पट्टा", "खसरा", "नक्शा", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग के कार्य क्षेत्र में क्या शामिल है?",
        "opts": ["भूमि रिकॉर्ड प्रबंधन", "कृषि विकास", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस योजना के अंतर्गत किसानों को फसल बीमा मिलता है?",
        "opts": ["प्रधानमंत्री फसल बीमा योजना", "कृषि विकास योजना", "भूमि सुधार योजना", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "भूमि के सर्वेक्षण में क्या उपयोग होता है?",
        "opts": ["GPS", "टेप", "ग्लोब", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड के लिए सीमांकन किसके द्वारा किया जाता है?",
        "opts": ["पटवारी", "तहसीलदार", "कलेक्टर", "सर्वेयर"],
        "ans": 3
      },
      {
        "q": "राजस्व विभाग के कार्यों में क्या शामिल है?",
        "opts": ["भूमि रिकॉर्ड प्रबंधन", "कृषि विकास", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि के स्वामित्व को प्रमाणित करने के लिए कौन सा दस्तावेज आवश्यक है?",
        "opts": ["खसरा", "पट्टा", "राजस्व रसीद", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "किसी भूखंड का सीमांकन कैसे किया जाता है?",
        "opts": ["राजस्व रसीद से", "पट्टा से", "नक्शा से", "सर्वेक्षण से"],
        "ans": 3
      },
      {
        "q": "राजस्व विभाग में 'फसल कटाई' की प्रक्रिया का क्या अर्थ है?",
        "opts": ["फसल का विवरण", "किसानों का पंजीकरण", "राजस्व का संग्रह", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी भूमि के निबंधन के लिए किन दस्तावेजों की आवश्यकता होती है?",
        "opts": ["खसरा", "पट्टा", "गांव की अनुमति", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "भूमि का उपयोग परिवर्तन के लिए किसकी अनुमति आवश्यक है?",
        "opts": ["सरकार", "कलेक्टर", "ग्राम पंचायत", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व रसीद में क्या दर्ज होता है?",
        "opts": ["राजस्व की राशि", "भूमि का विवरण", "किसान का नाम", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी क्षेत्र में भूमि का सर्वेक्षण कब किया जाता है?",
        "opts": ["हर वर्ष", "जरूरत पड़ने पर", "किसान के अनुरोध पर", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "भूमि के उपयोग का परिवर्तन कब किया जा सकता है?",
        "opts": ["किसान की इच्छा पर", "सरकार के आदेश पर", "कलेक्टर की अनुमति से", "सभी उपरोक्त"],
        "ans": 2
      },
      {
        "q": "किसी भूमि के मूल्यांकन में कौन सा कारक महत्वपूर्ण है?",
        "opts": ["भूमि का आकार", "स्थान", "उपयोगिता", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व विभाग में 'फसल' का क्या महत्व है?",
        "opts": ["कृषि की पहचान", "किसान का आय", "राजस्व का स्रोत", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड के सीमांकन में क्या उपयोग होता है?",
        "opts": ["GPS", "टेप", "कंपास", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "भूमि की रकबा को कैसे मापा जाता है?",
        "opts": ["हेक्टेयर में", "एकड़ में", "बिस्वा में", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व विभाग में किसका प्रमुख कार्य होता है?",
        "opts": ["भूमि रिकॉर्ड प्रबंधन", "कृषि विकास", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड के सीमांकन का क्या महत्व है?",
        "opts": ["सही सीमांकन", "कानूनी सुरक्षा", "राजस्व का संग्रह", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी क्षेत्र में भूमि का सर्वेक्षण कब किया जाता है?",
        "opts": ["हर वर्ष", "जरूरत पड़ने पर", "किसान के अनुरोध पर", "सभी उपरोक्त"],
        "ans": 1
      },
      {
        "q": "भूमि के उपयोग परिवर्तन के लिए कौन सा दस्तावेज आवश्यक है?",
        "opts": ["पट्टा", "खसरा", "नक्शा", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "राजस्व विभाग के कार्यों में क्या शामिल है?",
        "opts": ["भूमि रिकॉर्ड प्रबंधन", "कृषि विकास", "स्थानीय प्रशासन", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किसी भूमि के निबंधन के लिए किन दस्तावेजों की आवश्यकता होती है?",
        "opts": ["खसरा", "पट्टा", "गांव की अनुमति", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व का क्या महत्व है?",
        "opts": ["सरकारी योजनाओं के लिए", "सामाजिक कल्याण के लिए", "विकास के लिए", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "किसी भूखंड के लिए सीमांकन किसके द्वारा किया जाता है?",
        "opts": ["पटवारी", "तहसीलदार", "कलेक्टर", "सर्वेयर"],
        "ans": 3
      },
      {
        "q": "राजस्व रिकॉर्ड में 'खसरा' का क्या महत्व है?",
        "opts": ["भूमि का पहचान पत्र", "किसान का नाम", "राजस्व की राशि", "सभी उपरोक्त"],
        "ans": 0
      },
      {
        "q": "किस योजना के अंतर्गत किसानों को फसल बीमा मिलता है?",
        "opts": ["प्रधानमंत्री फसल बीमा योजना", "कृषि विकास योजना", "भूमि सुधार योजना", "सभी उपरोक्त"],
        "ans": 0
      },

      {
        "q": "एक ट्रेन 60 किमी/घंटा की गति से चलती है। वह 2 घंटे में कितनी दूरी तय करेगी?",
        "opts": ["100 किमी", "120 किमी", "140 किमी", "150 किमी"],
        "ans": 1
      },
      {
        "q": "अगर A+B = 20 और A-B = 4, तो A और B के मान क्या होंगे?",
        "opts": ["12, 8", "10, 10", "14, 6", "16, 4"],
        "ans": 0
      },
      {
        "q": "यदि 'CAT' को '314' और 'DOG' को '715' कोडित किया गया है, तो 'RAT' को कैसे कोडित किया जाएगा?",
        "opts": ["713", "712", "714", "710"],
        "ans": 2
      },
      {
        "q": "हिंदी में 'शिक्षा' का अर्थ क्या है?",
        "opts": ["Education", "Teaching", "Learning", "All of the above"],
        "ans": 3
      },
      {
        "q": "संख्याओं की श्रृंखला में अगली संख्या क्या होगी: 2, 4, 8, 16, ...?",
        "opts": ["24", "32", "30", "28"],
        "ans": 1
      },
      {
        "q": "किस वाक्य में 'सही' शब्द का प्रयोग किया गया है?",
        "opts": ["यह काम सही है।", "आप सही हैं।", "सही समय पर आना।", "सभी उपरोक्त।"],
        "ans": 3
      },
      {
        "q": "यदि 5x + 3 = 28, तो x का मान क्या होगा?",
        "opts": ["5", "4", "3", "2"],
        "ans": 1
      },
      {
        "q": "अगले प्रश्न का उत्तर क्या होगा: A की आय B की आय से 20% अधिक है। यदि B की आय 8000 है, तो A की आय क्या होगी?",
        "opts": ["9600", "10000", "8000", "8400"],
        "ans": 0
      },
      {
        "q": "आपकी माता के भाई को क्या कहा जाता है?",
        "opts": ["मामा", "काक", "चाचा", "भाई"],
        "ans": 0
      },
      {
        "q": "आलू की लागत 20% बढ़ने पर उसकी नई कीमत क्या होगी यदि वर्तमान कीमत 50 रुपये है?",
        "opts": ["60 रुपये", "70 रुपये", "80 रुपये", "75 रुपये"],
        "ans": 0
      },
      {
        "q": "अगर A:B = 3:5, तो A का 20% और B का 30% मिलाकर क्या होगा?",
        "opts": ["40%", "50%", "60%", "70%"],
        "ans": 2
      },
      {
        "q": "‘जितनी मेहनत, उतनी ही सफलता’ का क्या अर्थ है?",
        "opts": ["Hard work leads to success", "Easy work leads to failure", "Success comes without effort", "None of the above"],
        "ans": 0
      },
      {
        "q": "यदि 1 घंटे में 80 किमी की दूरी तय की जाती है, तो 30 मिनट में कितनी दूरी तय होगी?",
        "opts": ["40 किमी", "50 किमी", "20 किमी", "30 किमी"],
        "ans": 0
      },
      {
        "q": "किस शब्द का अर्थ 'उत्साह' है?",
        "opts": ["Enthusiasm", "Sadness", "Anger", "Joy"],
        "ans": 0
      },
      {
        "q": "एक व्यक्ति 3 घंटे में 30 किमी चलता है। उसकी गति क्या होगी?",
        "opts": ["8 किमी/घंटा", "10 किमी/घंटा", "12 किमी/घंटा", "15 किमी/घंटा"],
        "ans": 1
      },
      {
        "q": "‘सपने वो नहीं जो हम सोते समय देखते हैं, सपने वो हैं जो हमें सोने नहीं देते’ का लेखक कौन है?",
        "opts": ["महात्मा गांधी", "ए.पी.जे. अब्दुल कलाम", "रवींद्रनाथ ठाकुर", "स्वामी विवेकानंद"],
        "ans": 1
      },
      {
        "q": "यदि 6 संख्याओं का औसत 15 है, तो उनका योग क्या होगा?",
        "opts": ["75", "90", "100", "150"],
        "ans": 0
      },
      {
        "q": "‘गगन’ शब्द का अर्थ क्या है?",
        "opts": ["आसमान", "पृथ्वी", "जल", "आग"],
        "ans": 0
      },
      {
        "q": "एक आदमी ने 1500 रुपये में एक सामान खरीदा और 10% लाभ पर बेचा। उसकी बिक्री मूल्य क्या होगी?",
        "opts": ["1650 रुपये", "1550 रुपये", "1450 रुपये", "1500 रुपये"],
        "ans": 1
      },
      {
        "q": "यदि 1 घंटे में 30 किमी की दूरी तय की जाती है, तो 2 घंटे में कितनी दूरी तय होगी?",
        "opts": ["60 किमी", "90 किमी", "120 किमी", "150 किमी"],
        "ans": 0
      },
      {
        "q": "‘विज्ञान’ का अर्थ क्या है?",
        "opts": ["Science", "Knowledge", "Art", "All of the above"],
        "ans": 0
      },
      {
        "q": "किसी वृत्त की परिधि का सूत्र क्या है?",
        "opts": ["2πr", "πr²", "πd", "πr"],
        "ans": 0
      },
      {
        "q": "एक वाक्य में ‘सत्य’ शब्द का प्रयोग करें।",
        "opts": ["सत्य हमेशा जीतता है।", "सत्य को पहचानना कठिन है।", "सत्य और असत्य में फर्क करें।", "सभी उपरोक्त।"],
        "ans": 0
      },
      {
        "q": "एक दवा की लागत 50 रुपये है। अगर दवा पर 20% छूट है, तो उसका नया मूल्य क्या होगा?",
        "opts": ["40 रुपये", "45 रुपये", "30 रुपये", "50 रुपये"],
        "ans": 0
      },
      {
        "q": "‘एकता में शक्ति है’ का मतलब क्या है?",
        "opts": ["Unity is strength", "Power is authority", "Teamwork is essential", "All of the above"],
        "ans": 0
      },
      {
        "q": "3:5 के अनुपात में 40 का क्या होगा?",
        "opts": ["15", "24", "25", "20"],
        "ans": 2
      },
      {
        "q": "किसी व्यक्ति के लिए एक अच्छा नागरिक बनने का क्या अर्थ है?",
        "opts": ["Helping others", "Paying taxes", "Following laws", "All of the above"],
        "ans": 3
      },
      {
        "q": "यदि 1000 रुपये पर 5% वार्षिक ब्याज है, तो 2 साल बाद कुल राशि क्या होगी?",
        "opts": ["1050 रुपये", "1100 रुपये", "1200 रुपये", "1000 रुपये"],
        "ans": 1
      },
      {
        "q": "किस भाषा में ‘शांति’ का अर्थ क्या है?",
        "opts": ["Peace", "War", "Love", "Joy"],
        "ans": 0
      },
      {
        "q": "किसी भूखंड का क्षेत्रफल मापने के लिए कौन सा सूत्र प्रयोग होता है?",
        "opts": ["Length x Breadth", "Length + Breadth", "Length - Breadth", "All of the above"],
        "ans": 0
      },
      {
        "q": "आपकी माता के बहन को क्या कहा जाता है?",
        "opts": ["मासी", "काकी", "चाची", "बुआ"],
        "ans": 0
      },
      {
        "q": "‘खुश रहो’ का क्या मतलब है?",
        "opts": ["Stay happy", "Stay sad", "Be angry", "Be silent"],
        "ans": 0
      },
      {
        "q": "यदि 2x + 3 = 7, तो x का मान क्या होगा?",
        "opts": ["1", "2", "3", "4"],
        "ans": 0
      },
      {
        "q": "बच्चों के लिए शिक्षा का क्या महत्व है?",
        "opts": ["Knowledge", "Discipline", "Future", "All of the above"],
        "ans": 3
      },
      {
        "q": "किसी भूमि के निबंधन के लिए आवश्यक कागजात में क्या शामिल होता है?",
        "opts": ["ID proof", "Address proof", "Ownership proof", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "राजस्व सर्वेक्षण में भूमि की माप के लिए कौन सा उपकरण प्रयोग होता है?",
        "opts": ["सर्वेक्षण उपकरण", "टेप", "GPS", "सभी उपरोक्त"],
        "ans": 3
      },
      {
        "q": "हिंदी में ‘पुस्तक’ का क्या अर्थ है?",
        "opts": ["Book", "Magazine", "Newspaper", "None of the above"],
        "ans": 0
      },
      {
        "q": "एक व्यक्ति ने 2000 रुपये का सामान खरीदा और 15% लाभ पर बेचा। उसकी बिक्री मूल्य क्या होगी?",
        "opts": ["2300 रुपये", "2100 रुपये", "2200 रुपये", "2500 रुपये"],
        "ans": 1
      }







    ],
  Samvida: [
    {
      "q": "मध्य प्रदेश का राज्य पशु कौन सा है?",
      "opts": ["बकरी", "गाय", "बाघ", "सांप"],
      "ans": 2
    },
    {
      "q": "किस राज्य में 'भीमा केन' नदी स्थित है?",
      "opts": ["मध्य प्रदेश", "उत्तरी प्रदेश", "महाराष्ट्र", "गुजरात"],
      "ans": 0
    },
    {
      "q": "भारतीय संविधान का मूल तत्व क्या है?",
      "opts": ["समानता", "स्वतंत्रता", "बंधुत्व", "सभी"],
      "ans": 3
    },
    {
      "q": "भारत की स्वतंत्रता के लिए 'साइमन कमीशन' कब आया था?",
      "opts": ["1927", "1928", "1930", "1932"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश के किस शहर को 'खजुराहो' के नाम से जाना जाता है?",
      "opts": ["उज्जैन", "छतरपुर", "ग्वालियर", "सागर"],
      "ans": 1
    },
    {
      "q": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई थी?",
      "opts": ["1885", "1905", "1920", "1930"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश की राजधानी कौन सी है?",
      "opts": ["जबलपुर", "इंदौर", "भोपाल", "ग्वालियर"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश में कौन सा शहर 'सभीरी' के नाम से जाना जाता है?",
      "opts": ["इंदौर", "नरसिंहपुर", "रायसेन", "सागर"],
      "ans": 1
    },
    {
      "q": "किस अनुच्छेद में मानवाधिकारों का उल्लेख है?",
      "opts": ["20", "21", "22", "23"],
      "ans": 1
    },
    {
      "q": "किस वर्ष में महात्मा गांधी ने 'नमक सत्याग्रह' किया था?",
      "opts": ["1930", "1935", "1940", "1942"],
      "ans": 0
    },
    {
      "q": "भारतीय संविधान के अनुसार संसद की कुल सदस्यता कितनी है?",
      "opts": ["543", "250", "800", "790"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में कौन सा त्यौहार 'बासंती नवरात्र' के नाम से जाना जाता है?",
      "opts": ["दीवाली", "दशहरा", "मकर संक्रांति", "होली"],
      "ans": 1
    },
    {
      "q": "किस अनुच्छेद के अंतर्गत सभी भारतीय नागरिकों को मतदान का अधिकार है?",
      "opts": ["326", "325", "324", "327"],
      "ans": 0
    },
    {
      "q": "किस राज्य में 'संदीपनि आश्रम' स्थित है?",
      "opts": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
      "ans": 1
    },
    {
      "q": "भारत के किस शहर को 'सिटी ऑफ जॉइंट्स' कहा जाता है?",
      "opts": ["दिल्ली", "भोपाल", "जबलपुर", "इंदौर"],
      "ans": 3
    },
    {
      "q": "किस अनुच्छेद में राज्य की नीति के निर्देशक तत्वों का उल्लेख है?",
      "opts": ["36", "37", "38", "39"],
      "ans": 1
    },
    {
      "q": "भारत का पहला राज्य पुनर्गठन कब हुआ था?",
      "opts": ["1956", "1960", "1966", "1971"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश के किस क्षेत्र को 'तवा' के नाम से जाना जाता है?",
      "opts": ["नर्मदा घाटी", "सतपुड़ा", "विंध्याचल", "मालवा"],
      "ans": 0
    },
    {
      "q": "भारतीय स्वतंत्रता संग्राम में 'चंपारण सत्याग्रह' कब हुआ था?",
      "opts": ["1915", "1916", "1917", "1918"],
      "ans": 2
    },
    {
      "q": "भारत के किस संविधान अनुच्छेद में मतदाता का अधिकार है?",
      "opts": ["326", "325", "324", "327"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष को 'सर्वपल्ली राधाकृष्णन' के नाम से जाना जाता है?",
      "opts": ["पूर्व राष्ट्रपति", "दर्शनशास्त्री", "शिक्षाविद", "सभी उपरोक्त"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश में कौन सा पर्व 'गणेश चतुर्थी' के नाम से मनाया जाता है?",
      "opts": ["दशहरा", "दीवाली", "गणेश उत्सव", "मकर संक्रांति"],
      "ans": 2
    },
    {
      "q": "भारतीय संविधान के किस अनुच्छेद में अभिव्यक्ति की स्वतंत्रता का अधिकार है?",
      "opts": ["19", "20", "21", "22"],
      "ans": 0
    },
    {
      "q": "किस भारतीय महल को 'ग्वालियर किला' कहा जाता है?",
      "opts": ["सागर किला", "जबलपुर किला", "ग्वालियर किला", "उज्जैन किला"],
      "ans": 2
    },
    {
      "q": "किस अनुच्छेद में किसी भी व्यक्ति को कैद में रखने का अधिकार है?",
      "opts": ["21", "22", "23", "24"],
      "ans": 1
    },
    {
      "q": "किस त्यौहार को 'होली' के नाम से जाना जाता है?",
      "opts": ["रक्षाबंधन", "दशहरा", "दीवाली", "फाल्गुन"],
      "ans": 3
    },
    {
      "q": "किस भारतीय नेता को 'पिता' कहा जाता है?",
      "opts": ["महात्मा गांधी", "नेहरू", "बोस", "कर्पूरी ठाकुर"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'आपातकाल' की घोषणा की थी?",
      "opts": ["इंदिरा गांधी", "राजीव गांधी", "लाल बहादुर शास्त्री", "वाजपेयी"],
      "ans": 0
    },
    {
      "q": "किस अनुच्छेद में भारत के राष्ट्रपति की शक्तियों का उल्लेख है?",
      "opts": ["52", "53", "54", "55"],
      "ans": 1
    },
    {
      "q": "किस त्यौहार को 'दीवाली' के नाम से जाना जाता है?",
      "opts": ["रक्षाबंधन", "दशहरा", "दीवाली", "गणेश उत्सव"],
      "ans": 2
    },
    {
      "q": "भारत में कौन सा प्रमुख त्योहार 'चातुर्मास' के नाम से जाना जाता है?",
      "opts": ["दीवाली", "गणेश उत्सव", "जन्माष्टमी", "होली"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश का सबसे बड़ा जनजातीय समूह कौन सा है?",
      "opts": ["गोंड", "भिलाला", "सहरिया", "लोधी"],
      "ans": 0
    },
    {
      "q": "किस वर्ष में भारत का संविधान बनकर लागू हुआ था?",
      "opts": ["1947", "1949", "1950", "1951"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश के किस स्थान को 'सागर' के नाम से जाना जाता है?",
      "opts": ["सागर", "उज्जैन", "ग्वालियर", "जबलपुर"],
      "ans": 0
    },
    {
      "q": "किस अनुच्छेद में शिक्षा का अधिकार दिया गया है?",
      "opts": ["21", "22", "23", "24"],
      "ans": 0
    },
    {
      "q": "भारत में स्वतंत्रता के लिए 'गांधीजी' का पहला आंदोलन कौन सा था?",
      "opts": ["नमक आंदोलन", "चंपारण आंदोलन", "दांडी मार्च", "सत्याग्रह"],
      "ans": 1
    }
    ,
    {
      "q": "भारतीय संविधान के अनुसार राज्य का प्रधान क्या होता है?",
      "opts": ["प्रधानमंत्री", "राज्यपाल", "मुख्यमंत्री", "विधायक"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश में कौन सा प्रमुख त्यौहार 'गुड़ी पड़वा' के नाम से जाना जाता है?",
      "opts": ["दिवाली", "गणेश चतुर्थी", "चैत नवरात्र", "मकर संक्रांति"],
      "ans": 2
    },
    {
      "q": "भारतीय राष्ट्रीय ध्वज में कितने रंग हैं?",
      "opts": ["2", "3", "4", "5"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का प्रमुख कृषि उत्पाद कौन सा है?",
      "opts": ["गेहूं", "चावल", "सरसों", "चना"],
      "ans": 0
    },
    {
      "q": "किस वर्ष में भारत को स्वतंत्रता मिली?",
      "opts": ["1945", "1947", "1950", "1952"],
      "ans": 1
    },
    {
      "q": "किस भारतीय भाषा को 22वीं अनुसूची में शामिल किया गया है?",
      "opts": ["संस्कृत", "हिंदी", "उर्दू", "कन्नड़"],
      "ans": 1
    },
    {
      "q": "भारत में पहली महिला प्रधानमंत्री कौन थीं?",
      "opts": ["इंदिरा गांधी", "सुमित्रा महाजन", "सरोजिनी नायडू", "ममता बनर्जी"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में सबसे बड़ा जलाशय कौन सा है?",
      "opts": ["भीलसा", "सागर", "नर्मदा", "तवा"],
      "ans": 2
    },
    {
      "q": "किस अनुच्छेद में शिक्षा का अधिकार है?",
      "opts": ["21", "22", "23", "24"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश के किस शहर को 'सिटी ऑफ लेक' के नाम से जाना जाता है?",
      "opts": ["इंदौर", "भोपाल", "जबलपुर", "ग्वालियर"],
      "ans": 1
    },
    {
      "q": "भारत की स्वतंत्रता संग्राम में 'दांडी मार्च' किस वर्ष हुआ था?",
      "opts": ["1930", "1942", "1947", "1950"],
      "ans": 0
    },
    {
      "q": "भारत के किस संविधान अनुच्छेद में नागरिकता का उल्लेख है?",
      "opts": ["5", "6", "7", "8"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश के कौन से स्थान को 'कन्हा राष्ट्रीय उद्यान' के नाम से जाना जाता है?",
      "opts": ["मंडला", "उज्जैन", "ग्वालियर", "सागर"],
      "ans": 0
    },
    {
      "q": "किस व्यक्ति ने 'गांधीजी' की हत्या की थी?",
      "opts": ["नाथुराम गोडसे", "भगत सिंह", "सुभाष चंद्र बोस", "सरदार पटेल"],
      "ans": 0
    },
    {
      "q": "भारत का राष्ट्रीय खेल कौन सा है?",
      "opts": ["क्रिकेट", "हॉकी", "फुटबॉल", "बैडमिंटन"],
      "ans": 1
    },
    {
      "q": "किस भारतीय त्योहार को 'दीवाली' के नाम से जाना जाता है?",
      "opts": ["रक्षाबंधन", "दशहरा", "शिवरात्रि", "दिवाली"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश में किसे 'कला का देवता' कहा जाता है?",
      "opts": ["राजा भोज", "रानी दुर्गावती", "हर्षवर्धन", "पृथ्वीराज चौहान"],
      "ans": 0
    },
    {
      "q": "भारत में शिक्षा के अधिकार की शुरुआत कब हुई थी?",
      "opts": ["2000", "2002", "2005", "2010"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश के किस स्थान को 'विंध्याचल' के नाम से जाना जाता है?",
      "opts": ["उज्जैन", "सागर", "छिंदवाड़ा", "सतना"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का कौन सा शहर 'धार' के नाम से जाना जाता है?",
      "opts": ["खजुराहो", "उज्जैन", "सागर", "इंदौर"],
      "ans": 0
    },
    {
      "q": "भारत के किस शहर में 'ताजमहल' स्थित है?",
      "opts": ["दिल्ली", "आगरा", "जोधपुर", "जयपुर"],
      "ans": 1
    },
    {
      "q": "किस अनुच्छेद के अंतर्गत व्यक्ति को कानूनी सहायता का अधिकार है?",
      "opts": ["21", "22", "23", "24"],
      "ans": 0
    },
    {
      "q": "किस पर्व को 'गणेश चतुर्थी' कहा जाता है?",
      "opts": ["दीवाली", "दशहरा", "मकर संक्रांति", "गणेश उत्सव"],
      "ans": 3
    },
    {
      "q": "भारत में सबसे बड़ा राज्य कौन सा है?",
      "opts": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
      "ans": 0
    },
    {
      "q": "किस भारतीय नेता को 'सरदार' कहा जाता है?",
      "opts": ["सुभाष चंद्र बोस", "लाल बहादुर शास्त्री", "सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश की जनसंख्या के अनुसार कौन सा जिला सबसे बड़ा है?",
      "opts": ["इंदौर", "भोपाल", "जबलपुर", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "भारत के किस महापुरुष ने 'रक्षा बंधन' का त्योहार प्रचलित किया?",
      "opts": ["स्वामी विवेकानंद", "भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय"],
      "ans": 2
    },
    {
      "q": "भारतीय संविधान के अनुसार मौलिक अधिकार किस अनुच्छेद में हैं?",
      "opts": ["12-35", "1-5", "19-25", "21-30"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में स्थित 'कन्हा राष्ट्रीय उद्यान' का क्षेत्रफल कितना है?",
      "opts": ["2000 वर्ग किमी", "2500 वर्ग किमी", "3000 वर्ग किमी", "3500 वर्ग किमी"],
      "ans": 1
    },
    {
      "q": "किस आंदोलन को 'सत्याग्रह' कहा जाता है?",
      "opts": ["नमक आंदोलन", "दांडी मार्च", "गांधीजी का चंपारण आंदोलन", "सभी उपरोक्त"],
      "ans": 3
    },
    {
      "q": "किस अनुच्छेद में धार्मिक स्वतंत्रता का अधिकार दिया गया है?",
      "opts": ["25", "26", "27", "28"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में किस महल को 'ग्वालियर किला' के नाम से जाना जाता है?",
      "opts": ["सागर किला", "ग्वालियर किला", "जबलपुर किला", "उज्जैन किला"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश में 'नर्मदा' नदी का कितना महत्व है?",
      "opts": ["पवित्र नदी", "कृषि के लिए", "पर्यटन", "सभी उपरोक्त"],
      "ans": 3
    },
    {
      "q": "किस वर्ष में भारत का संविधान लागू हुआ?",
      "opts": ["1947", "1950", "1952", "1955"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश के किस जिले में 'खजुराहो' स्थित है?",
      "opts": ["सागर", "छतरपुर", "जबलपुर", "उज्जैन"],
      "ans": 1
    },
    {
      "q": "भारत के किस राज्य में 'कौशाम्बी' स्थित है?",
      "opts": ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "गुजरात"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का सबसे बड़ा जनजातीय समूह कौन सा है?",
      "opts": ["भिलाला", "गोंड", "सहरिया", "लोधी"],
      "ans": 1
    },
    {
      "q": "किस अनुच्छेद में प्रत्येक नागरिक को अपने धर्म का पालन करने का अधिकार है?",
      "opts": ["25", "26", "27", "28"],
      "ans": 0
    },
    {
      "q": "भारत के संविधान में कितने अनुच्छेद हैं?",
      "opts": ["395", "400", "450", "500"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का राज्य पशु कौन सा है?",
      "opts": ["शेर", "गाय", "बाघ", "हाथी"],
      "ans": 2
    },
    {
      "q": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई थी?",
      "opts": ["1885", "1905", "1915", "1920"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश के मुख्यमंत्री कौन हैं?",
      "opts": ["कमलनाथ", "शिवराज सिंह चौहान", "अजय सिंह", "सुभाष यादव"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का राजकीय पक्षी कौन सा है?",
      "opts": ["मोरो", "गौरेया", "कौआ", "तोता"],
      "ans": 0
    },
    {
      "q": "भारत के पहले राष्ट्रपति कौन थे?",
      "opts": ["डॉ. राजेंद्र प्रसाद", "सुखराम", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का कुल क्षेत्रफल कितना है?",
      "opts": ["3.08 लाख वर्ग किमी", "4.23 लाख वर्ग किमी", "2.89 लाख वर्ग किमी", "5.12 लाख वर्ग किमी"],
      "ans": 0
    },
    {
      "q": "‘सर्वोच्च न्यायालय’ की स्थापना कब हुई थी?",
      "opts": ["1950", "1955", "1960", "1970"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में कौन सी नदी सबसे लंबी है?",
      "opts": ["सिंध", "नर्मदा", "तवा", "गंगा"],
      "ans": 1
    },
    {
      "q": "महात्मा गांधी का असली नाम क्या था?",
      "opts": ["मोहनदास करमचंद गांधी", "हरिलाल गांधी", "रामचंद्र गांधी", "कस्तूरबा गांधी"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में कितने जिले हैं?",
      "opts": ["50", "52", "55", "58"],
      "ans": 1
    },
    {
      "q": "भारतीय संविधान के किस अनुच्छेद में स्वतंत्रता का अधिकार दिया गया है?",
      "opts": ["19", "21", "22", "23"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश की राजधानी कौन सी है?",
      "opts": ["इंदौर", "भोपाल", "ग्वालियर", "जबलपुर"],
      "ans": 1
    },
    {
      "q": "‘अतिथि देवो भवः’ का अर्थ क्या है?",
      "opts": ["The guest is God", "God is great", "Service to mankind", "Unity is strength"],
      "ans": 0
    },
    {
      "q": "भारत के कौन से राज्य में ताजमहल स्थित है?",
      "opts": ["दिल्ली", "उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश"],
      "ans": 1
    },
    {
      "q": "किस भारतीय राज्य का राष्ट्रीय उद्यान 'कनहा' है?",
      "opts": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "छत्तीसगढ़"],
      "ans": 0
    },
    {
      "q": "भारत का सबसे बड़ा राज्य कौन सा है?",
      "opts": ["राजस्थान", "मध्य प्रदेश", "उतर प्रदेश", "महाराष्ट्र"],
      "ans": 0
    },
    {
      "q": "भारतीय संसद के दोनों सदनों को एक साथ क्या कहा जाता है?",
      "opts": ["संविधान सभा", "संसद", "राज्य सभा", "लोकसभा"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश में कौन सा त्योहार 'गौरी' के नाम से प्रसिद्ध है?",
      "opts": ["दीवाली", "दशहरा", "मकर संक्रांति", "गणेश चतुर्थी"],
      "ans": 1
    },
    {
      "q": "विधायिका के सदस्यों के चुनाव का कार्य कौन करता है?",
      "opts": ["राज्यपाल", "मुख्यमंत्री", "निर्वाचन आयोग", "संसद"],
      "ans": 2
    },
    {
      "q": "संविधान का मौलिक अधिकार कितने भागों में बांटा गया है?",
      "opts": ["6", "7", "5", "4"],
      "ans": 2
    },
    {
      "q": "नर्मदा नदी का उद्गम स्थल कौन सा है?",
      "opts": ["Amarkantak", "Mahakoshal", "Khandwa", "Jabalpur"],
      "ans": 0
    },
    {
      "q": "महात्मा गांधी ने 'नमक सत्याग्रह' कब किया था?",
      "opts": ["1930", "1942", "1947", "1920"],
      "ans": 0
    },
    {
      "q": "किस समिति ने 1950 में भारतीय संविधान को तैयार किया?",
      "opts": ["राजेंद्र प्रसाद समिति", "मंडल समिति", "संविधान सभा", "फजल अली समिति"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश में कौन सा प्रसिद्ध झील है?",
      "opts": ["सागर", "बिरला", "सिंधिया", "भेड़ाघाट"],
      "ans": 3
    },
    {
      "q": "‘स्वराज मेरा जन्मसिद्ध अधिकार है’ किसने कहा?",
      "opts": ["सुभाष चंद्र बोस", "बाल गंगाधर तिलक", "महात्मा गांधी", "भगत सिंह"],
      "ans": 1
    },
    {
      "q": "किस भारतीय पर्वत श्रृंखला को 'हिमालय' कहा जाता है?",
      "opts": ["सातपुड़ा", "विंध्य", "हिमालय", "अरावली"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश में 'बुंदेलखंड' किस जिले में है?",
      "opts": ["सागर", "छिंदवाड़ा", "दतिया", "सागर"],
      "ans": 0
    },
    {
      "q": "किस भारतीय संगीतकार को 'सुर साम्राज्ञी' कहा जाता है?",
      "opts": ["लता मंगेशकर", "सुनिधि चौहान", "किशोरी अमोनकर", "पार्वती खान"],
      "ans": 0
    },
    {
      "q": "भारतीय स्वतंत्रता संग्राम में कौन सा आंदोलन सबसे बड़ा था?",
      "opts": ["चौरी चौरा", "दांडी मार्च", "सत्याग्रह", "नमक आंदोलन"],
      "ans": 1
    },
    {
      "q": "किस दिन को भारत में स्वतंत्रता दिवस मनाया जाता है?",
      "opts": ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "5 सितंबर"],
      "ans": 0
    },
    {
      "q": "किसने कहा था 'हमारी स्वतंत्रता का कोई मतलब नहीं है यदि महिलाएं स्वतंत्र नहीं हैं'?",
      "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "इंदिरा गांधी", "सरदार वल्लभभाई पटेल"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश के प्रमुख त्योहार कौन से हैं?",
      "opts": ["दीवाली और होली", "गणेश चतुर्थी और मकर संक्रांति", "सभी उपरोक्त", "ईद और क्रिसमस"],
      "ans": 2
    },
    {
      "q": "भारत में किसका गठन सबसे पहले हुआ था?",
      "opts": ["संसद", "राज्य सरकार", "स्थानीय सरकार", "ग्राम पंचायत"],
      "ans": 0
    },
    {
      "q": "हिंदी का पहला अखबार कौन सा था?",
      "opts": ["उदंत मार्तंड", "दैनिक जागरण", "हिंदुस्तान", "दैनिक भास्कर"],
      "ans": 0
    },
    {
      "q": "किस भारतीय नेता को 'लोकनायक' कहा जाता है?",
      "opts": ["जय प्रकाश नारायण", "लाल बहादुर शास्त्री", "सुभाष चंद्र बोस", "भीमराव अंबेडकर"],
      "ans": 0
    },
    {
      "q": "भारत के संविधान में संघीय ढांचे का क्या महत्व है?",
      "opts": ["शक्ति का वितरण", "सुरक्षा", "अर्थव्यवस्था", "कृषि"],
      "ans": 0
    },
    {
      "q": "भारत में शिक्षा का अधिकार किस अनुच्छेद में है?",
      "opts": ["21", "19", "32", "30"],
      "ans": 0
    }
    ,

    {
      "q": "भारत का राष्ट्रीय फल क्या है?",
      "opts": ["सेब", "आम", "केला", "नाशपाती"],
      "ans": 1
    },
    {
      "q": "किस महापुरुष को 'भारत का नायक' कहा जाता है?",
      "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "भगत सिंह", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'Na' है?",
      "opts": ["नाइट्रोजन", "सोडियम", "निकेल", "सिलिकॉन"],
      "ans": 1
    },
    {
      "q": "‘सुख’ का विलोम क्या है?",
      "opts": ["दुख", "खुशी", "संतोष", "शांति"],
      "ans": 0
    },
    {
      "q": "किस नदी को 'गंगा' के समान माना जाता है?",
      "opts": ["यमुना", "सरस्वती", "सिंधु", "नर्मदा"],
      "ans": 0
    },
    {
      "q": "किस रंग का पत्ता हरा होता है?",
      "opts": ["लाल", "नीला", "पीला", "हरा"],
      "ans": 3
    },
    {
      "q": "4 x 4 = ?",
      "opts": ["12", "14", "16", "18"],
      "ans": 2
    },
    {
      "q": "किस महापुरुष ने 'सत्याग्रह' का विचार प्रस्तुत किया?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री", "राजा राम मोहन राय"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'मल्टी स्पोर्ट' कहा जाता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "ओलंपिक", "बैडमिंटन"],
      "ans": 2
    },
    {
      "q": "किस महापुरुष ने 'असहमति' का आंदोलन चलाया?",
      "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "20 का 10% क्या है?",
      "opts": ["1", "2", "5", "10"],
      "ans": 2
    },
    {
      "q": "किस खेल में 'शूटिंग' होती है?",
      "opts": ["फुटबॉल", "हॉकी", "क्रिकेट", "बास्केटबॉल"],
      "ans": 3
    },
    {
      "q": "किस महापुरुष को 'शांति का प्रतीक' कहा जाता है?",
      "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "7 का वर्ग क्या है?",
      "opts": ["14", "21", "49", "56"],
      "ans": 2
    },
    {
      "q": "किस देश का राष्ट्रीय खेल 'क्रिकेट' है?",
      "opts": ["भारत", "ऑस्ट्रेलिया", "इंग्लैंड", "पाकिस्तान"],
      "ans": 2
    },
    {
      "q": "किस महापुरुष ने 'आंदोलन' का नेतृत्व किया?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
      "ans": 0
    },
    {
      "q": "10 + 15 = ?",
      "opts": ["20", "25", "30", "15"],
      "ans": 1
    },
    {
      "q": "किस रंग की पेंसिल से चित्रकारी की जाती है?",
      "opts": ["लाल", "नीली", "पीली", "सभी"],
      "ans": 3
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'Cl' है?",
      "opts": ["क्लोरीन", "कैल्शियम", "क्लोरोफिल", "क्लोरोफॉर्म"],
      "ans": 0
    },
    {
      "q": "‘विद्या’ का विलोम क्या है?",
      "opts": ["अविद्या", "ज्ञान", "अनपढ़", "अज्ञान"],
      "ans": 3
    },
    {
      "q": "किस महापुरुष ने 'स्वदेशी' का आंदोलन चलाया?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "राजा राम मोहन राय", "लाल बहादुर शास्त्री"],
      "ans": 0
    },
    {
      "q": "किस खेल में 'गेंद' का प्रयोग नहीं होता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "कुश्ती", "बैडमिंटन"],
      "ans": 2
    },
    {
      "q": "यदि 5x = 20, तो x का मान क्या होगा?",
      "opts": ["2", "4", "5", "3"],
      "ans": 1
    },
    {
      "q": "किस खेल को 'अंतरराष्ट्रीय खेल' कहा जाता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "बास्केटबॉल"],
      "ans": 1
    },
    {
      "q": "किस महापुरुष ने 'भारत का झंडा' फहराया?",
      "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
      "ans": 3
    },
    {
      "q": "किस रंग का फल आम होता है?",
      "opts": ["हरा", "पीला", "लाल", "सफेद"],
      "ans": 1
    },
    {
      "q": "5 का वर्ग क्या है?",
      "opts": ["10", "15", "25", "20"],
      "ans": 2
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'Hg' है?",
      "opts": ["पारा", "सोना", "चांदी", "तांबा"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'गुलामी' के खिलाफ आवाज उठाई?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "रानी लक्ष्मीबाई"],
      "ans": 2
    },
    {
      "q": "किस खेल को 'गेंद का खेल' कहा जाता है?",
      "opts": ["फुटबॉल", "क्रिकेट", "बैडमिंटन", "सभी"],
      "ans": 3
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'K' है?",
      "opts": ["कैल्शियम", "पोटेशियम", "क्लोरीन", "कुपर"],
      "ans": 1
    },
    {
      "q": "किस महापुरुष ने 'समाज सुधार' का कार्य किया?",
      "opts": ["राजा राम मोहन राय", "महात्मा गांधी", "सुभाष चंद्र बोस", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "किस खेल में 'गेंद' का प्रयोग होता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "सभी"],
      "ans": 3
    },
    {
      "q": "किस महापुरुष को 'धर्मनिरपेक्ष' का उपासक कहा जाता है?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "डॉ. अंबेडकर", "जवाहरलाल नेहरू"],
      "ans": 3
    },
    {
      "q": "किस खेल का आयोजन ओलंपिक में होता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "सभी"],
      "ans": 3
    },
    {
      "q": "‘जल’ का विलोम क्या है?",
      "opts": ["अग्नि", "गंदगी", "वायु", "धरती"],
      "ans": 0
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'N' है?",
      "opts": ["नाइट्रोजन", "निकेल", "सोडियम", "सिलिकॉन"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'भारतीय स्वतंत्रता संग्राम' का नेतृत्व किया?",
      "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "राजा राम मोहन राय"],
      "ans": 0
    }
    ,

    {
      "q": "भारत का राष्ट्रीय पक्षी क्या है?",
      "opts": ["गौरेया", "तोता", "मोर", "उल्लू"],
      "ans": 2
    },
    {
      "q": "किस महापुरुष को 'समानता का उपासक' कहा जाता है?",
      "opts": ["डॉ. भीमराव अंबेडकर", "महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
      "ans": 0
    },
    {
      "q": "किस खेल में 'गेंद' का प्रयोग नहीं होता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "बैडमिंटन"],
      "ans": 3
    },
    {
      "q": "3 + 4 x 2 = ?",
      "opts": ["10", "14", "11", "8"],
      "ans": 2
    },
    {
      "q": "‘अग्नि’ का विलोम क्या है?",
      "opts": ["जल", "हवा", "पृथ्वी", "शीत"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'भारतीय राष्ट्रीय कांग्रेस' की स्थापना की?",
      "opts": ["महात्मा गांधी", "डॉ. राजेंद्र प्रसाद", "सुभाष चंद्र बोस", "ए.O. ह्यूम"],
      "ans": 3
    },
    {
      "q": "सूर्य का प्रकाश पृथ्वी तक पहुँचने में कितना समय लेता है?",
      "opts": ["8 मिनट", "10 मिनट", "5 मिनट", "15 मिनट"],
      "ans": 0
    },
    {
      "q": "किस पदार्थ का रासायनिक सूत्र 'H₂O' है?",
      "opts": ["जल", "अमोनिया", "कार्बन डाइऑक्साइड", "ग्लूकोज"],
      "ans": 0
    },
    {
      "q": "‘शांति’ का अर्थ क्या है?",
      "opts": ["लड़ाई", "सहमति", "अशांति", "सुख"],
      "ans": 3
    },
    {
      "q": "भारत का राष्ट्रीय ध्वज क्या दर्शाता है?",
      "opts": ["शांति", "धैर्य", "संघर्ष", "समानता"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'शिक्षा को लेकर' आंदोलन चलाया?",
      "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "डॉ. अंबेडकर"],
      "ans": 1
    },
    {
      "q": "किस रंग की पेंसिल से चित्रकारी की जाती है?",
      "opts": ["लाल", "नीली", "पीली", "सभी"],
      "ans": 3
    },
    {
      "q": "1 x 1 = ?",
      "opts": ["0", "1", "2", "3"],
      "ans": 1
    },
    {
      "q": "किस देश का राष्ट्रीय खेल 'फुटबॉल' है?",
      "opts": ["ब्राजील", "भारत", "चीन", "जापान"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'असहयोग आंदोलन' की शुरुआत की?",
      "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
      "ans": 0
    },
    {
      "q": "10 का 20% क्या है?",
      "opts": ["1", "2", "5", "10"],
      "ans": 2
    },
    {
      "q": "किस खेल को 'चेस' कहा जाता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "शतरंज", "बैडमिंटन"],
      "ans": 2
    },
    {
      "q": "‘पुस्तक’ का विलोम क्या है?",
      "opts": ["पत्रिका", "कागज", "किताब", "अखबार"],
      "ans": 0
    },
    {
      "q": "किस भारतीय पर्व को 'दीवाली' कहा जाता है?",
      "opts": ["होली", "दशहरा", "दीपावली", "मकर संक्रांति"],
      "ans": 2
    },
    {
      "q": "किस महापुरुष को 'किंग ऑफ किंग्स' कहा जाता है?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "राजा राम मोहन राय"],
      "ans": 0
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'Fe' है?",
      "opts": ["तांबा", "सोना", "लोहा", "चाँदी"],
      "ans": 2
    },
    {
      "q": "किस महापुरुष ने 'स्वतंत्रता की पहली लड़ाई' में भाग लिया?",
      "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "भगत सिंह", "रानी लक्ष्मीबाई"],
      "ans": 3
    },
    {
      "q": "यदि x + 5 = 10, तो x का मान क्या होगा?",
      "opts": ["2", "3", "4", "5"],
      "ans": 3
    },
    {
      "q": "किस खेल में 'रॉकेट' का प्रयोग होता है?",
      "opts": ["टेनिस", "बैडमिंटन", "क्रिकेट", "फुटबॉल"],
      "ans": 1
    },
    {
      "q": "किस नदी को 'गंगा' कहा जाता है?",
      "opts": ["यमुना", "सिंधु", "कावेरी", "सारस्वती"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'जय हिन्द' का नारा दिया?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाल बहादुर शास्त्री"],
      "ans": 1
    },
    {
      "q": "2² + 2³ = ?",
      "opts": ["8", "10", "12", "14"],
      "ans": 1
    },
    {
      "q": "‘गृह’ का विलोम क्या है?",
      "opts": ["बाहर", "घर", "अंदर", "संसार"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष को 'शिक्षक' कहा जाता है?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "डॉ. राजेंद्र प्रसाद", "सर्वपल्ली राधाकृष्णन"],
      "ans": 3
    },
    {
      "q": "किस खेल में 'गेंद' का प्रयोग होता है?",
      "opts": ["हॉकी", "बैडमिंटन", "कबड्डी", "क्रिकेट"],
      "ans": 3
    },
    {
      "q": "किस महापुरुष को 'शेर' कहा जाता है?",
      "opts": ["भगत सिंह", "महात्मा गांधी", "सुभाष चंद्र बोस", "रानी लक्ष्मीबाई"],
      "ans": 2
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'Au' है?",
      "opts": ["सोना", "चांदी", "तांबा", "प्लैटिनम"],
      "ans": 0
    },
    {
      "q": "‘इंसान’ का पर्यायवाची शब्द क्या है?",
      "opts": ["मानव", "जीव", "सृष्टि", "दुनिया"],
      "ans": 0
    },
    {
      "q": "किस देश को 'आज़ादी का सिपाही' कहा जाता है?",
      "opts": ["भारत", "पाकिस्तान", "अफगानिस्तान", "नेपाल"],
      "ans": 0
    },
    {
      "q": "10 का 30% क्या है?",
      "opts": ["3", "2", "4", "1"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'फुटबॉल' कहा जाता है?",
      "opts": ["गेंद से खेल", "खेल का राजा", "सभी", "कोई नहीं"],
      "ans": 1
    },
    {
      "q": "‘सपना’ का विलोम क्या है?",
      "opts": ["हकीकत", "सत्य", "आकाश", "पृथ्वी"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'जलियांवाला बाग हत्याकांड' का विरोध किया?",
      "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'He' है?",
      "opts": ["हाइड्रोजन", "हेलियम", "होलmium", "हैज़ार्ड"],
      "ans": 1
    },
    {
      "q": "7 + 5 - 3 = ?",
      "opts": ["10", "9", "8", "11"],
      "ans": 1
    },
    {
      "q": "किस खेल को 'सभी खेलों का पिता' कहा जाता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "बैडमिंटन", "हॉकी"],
      "ans": 1
    },
    {
      "q": "किस महापुरुष को 'महानायक' कहा जाता है?",
      "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "भगत सिंह", "रानी लक्ष्मीबाई"],
      "ans": 0
    },
    {
      "q": "किस रासायनिक प्रक्रिया में गैस ठोस में परिवर्तित होती है?",
      "opts": ["सublimation", "condensation", "deposition", "freezing"],
      "ans": 2
    },
    {
      "q": "5 x 5 = ?",
      "opts": ["20", "25", "30", "35"],
      "ans": 1
    }
    ,

    {
      "q": "किस भारतीय राज्य को 'सूर्य का राज्य' कहा जाता है?",
      "opts": ["राजस्थान", "मध्य प्रदेश", "गुजरात", "तमिलनाडु"],
      "ans": 0
    },
    {
      "q": "वर्गमूल का संकेत क्या होता है?",
      "opts": ["√", "∛", "∑", "∫"],
      "ans": 0
    },
    {
      "q": "किस तत्व का प्रतीक 'O' है?",
      "opts": ["ऑक्सीजन", "ओजोन", "ऑर्गन", "आर्सेनिक"],
      "ans": 0
    },
    {
      "q": "‘खुश’ का विलोम क्या है?",
      "opts": ["दुखी", "उदास", "खराब", "बुरा"],
      "ans": 0
    },
    {
      "q": "भारत का राष्ट्रीय पशु क्या है?",
      "opts": ["हाथी", "शेर", "गौ", "बाघ"],
      "ans": 3
    },
    {
      "q": "2 + 3 x 4 = ?",
      "opts": ["14", "20", "10", "15"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'गुलामी से मुक्ति' के लिए संघर्ष किया?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "‘नारी’ का पर्यायवाची शब्द क्या है?",
      "opts": ["महिला", "बालिका", "लड़की", "दादी"],
      "ans": 0
    },
    {
      "q": "किस नदी को 'भारत की गंगा' कहा जाता है?",
      "opts": ["यमुना", "गंगा", "सरस्वती", "नर्मदा"],
      "ans": 0
    },
    {
      "q": "12 x 5 = ?",
      "opts": ["60", "50", "70", "80"],
      "ans": 0
    },
    {
      "q": "‘दिल्ली’ किसका केंद्र है?",
      "opts": ["राजधानी", "शहर", "राज्य", "जिला"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'खेलों का राजा' कहा जाता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "बैडमिंटन"],
      "ans": 1
    },
    {
      "q": "पृथ्वी के चारों ओर घूमने वाला क्या कहलाता है?",
      "opts": ["चाँद", "ग्रह", "सूर्य", "तारा"],
      "ans": 0
    },
    {
      "q": "भारत के पहले प्रधानमंत्री कौन थे?",
      "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
      "ans": 2
    },
    {
      "q": "3 का वर्ग क्या है?",
      "opts": ["6", "9", "12", "15"],
      "ans": 1
    },
    {
      "q": "किस खेल को 'राजा का खेल' कहा जाता है?",
      "opts": ["शतरंज", "क्रिकेट", "फुटबॉल", "बैडमिंटन"],
      "ans": 0
    },
    {
      "q": "किस देश की मुद्रा 'डॉलर' है?",
      "opts": ["भारत", "अमेरिका", "यूरोप", "जापान"],
      "ans": 1
    },
    {
      "q": "एक समकोण त्रिभुज में एक कोण का मान क्या होता है?",
      "opts": ["90 डिग्री", "60 डिग्री", "45 डिग्री", "30 डिग्री"],
      "ans": 0
    },
    {
      "q": "‘गाय’ का विलोम क्या है?",
      "opts": ["सांड", "भैंस", "बकरी", "बिल्ली"],
      "ans": 0
    },
    {
      "q": "बंगाल की प्रसिद्ध मिठाई 'रसगुल्ला' किससे बनती है?",
      "opts": ["पनीर", "दही", "घी", "दूध"],
      "ans": 0
    },
    {
      "q": "किस नदी को 'सरस्वती' कहा जाता है?",
      "opts": ["यमुना", "गंगा", "सिंधु", "नर्मदा"],
      "ans": 0
    },
    {
      "q": "‘खुशबू’ का पर्यायवाची शब्द क्या है?",
      "opts": ["सुगंध", "दुर्गंध", "गंध", "सुवास"],
      "ans": 0
    },
    {
      "q": "किसे 'राष्ट्रपिता' कहा जाता है?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "किस खेल में 'गेंद' का उपयोग होता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "सभी"],
      "ans": 3
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'C' है?",
      "opts": ["कैल्शियम", "कार्बन", "क्लोरीन", "क्रोमियम"],
      "ans": 1
    },
    {
      "q": "किस महापुरुष ने 'सत्याग्रह' का विचार प्रस्तुत किया?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'खेलों का सम्राट' कहा जाता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "बैडमिंटन"],
      "ans": 1
    },
    {
      "q": "5 + 7 = ?",
      "opts": ["10", "11", "12", "13"],
      "ans": 3
    },
    {
      "q": "किस शब्द का अर्थ 'ज्ञान' है?",
      "opts": ["ज्ञान", "बुद्धि", "विवेक", "सभी"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष ने 'भारत छोड़ो आंदोलन' की शुरुआत की?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री", "जवाहरलाल नेहरू"],
      "ans": 0
    },
    {
      "q": "7 का वर्ग क्या है?",
      "opts": ["14", "21", "49", "56"],
      "ans": 2
    },
    {
      "q": "किस देश की स्वतंत्रता दिवस 4 जुलाई को मनाया जाता है?",
      "opts": ["भारत", "अमेरिका", "पाकिस्तान", "बांग्लादेश"],
      "ans": 1
    },
    {
      "q": "किस खेल को 'पिता का खेल' कहा जाता है?",
      "opts": ["क्रिकेट", "हॉकी", "फुटबॉल", "बैडमिंटन"],
      "ans": 0
    },
    {
      "q": "20 का 50% क्या है?",
      "opts": ["10", "15", "20", "25"],
      "ans": 0
    },
    {
      "q": "‘नारी’ का विलोम क्या है?",
      "opts": ["पुरुष", "स्त्री", "बालिका", "कन्या"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष को 'सरदार' कहा जाता है?",
      "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू"],
      "ans": 2
    },
    {
      "q": "किस खेल को 'ताकतवर खेल' कहा जाता है?",
      "opts": ["क्रिकेट", "फुटबॉल", "कुश्ती", "हॉकी"],
      "ans": 2
    },
    {
      "q": "किस तत्व का रासायनिक प्रतीक 'N' है?",
      "opts": ["नाइट्रोजन", "सोडियम", "सोडियम क्लोराइड", "कैल्शियम"],
      "ans": 0
    },
    {
      "q": "किस भारतीय राज्य में 'कोनार' जलाशय है?",
      "opts": ["झारखंड", "बिहार", "उत्तर प्रदेश", "राजस्थान"],
      "ans": 0
    }
    ,


    {
      "q": "किस महापुरुष को 'बापू' कहा जाता है?",
      "opts": ["डॉ. भीमराव अंबेडकर", "महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
      "ans": 1
    },
    {
      "q": "पानी का अद्वितीय गुण क्या है?",
      "opts": ["पिघलना", "बर्फ बनना", "उबलना", "सभी"],
      "ans": 3
    },
    {
      "q": "5 का वर्गमूल क्या है?",
      "opts": ["2", "2.5", "5", "10"],
      "ans": 1
    },
    {
      "q": "किस शब्द का अर्थ 'स्वतंत्रता' है?",
      "opts": ["बंदिश", "स्वराज", "अनुबंध", "स्वामित्व"],
      "ans": 1
    },
    {
      "q": "राजधानी 'नई दिल्ली' किस देश की है?",
      "opts": ["भारत", "पाकिस्तान", "नेपाल", "चीन"],
      "ans": 0
    },
    {
      "q": "‘बंगाल की नब्बे’ किसकी ओर इशारा करता है?",
      "opts": ["बंगाल की संस्कृति", "बंगाल का साहित्य", "बंगाल की राजनीति", "बंगाल का इतिहास"],
      "ans": 2
    },
    {
      "q": "9 का गुणा 7 क्या है?",
      "opts": ["63", "72", "49", "56"],
      "ans": 0
    },
    {
      "q": "किस नदी को 'गंगा' कहा जाता है?",
      "opts": ["यमुना", "सिंधु", "कावेरी", "नर्मदा"],
      "ans": 0
    },
    {
      "q": "‘प्याज’ का विलोम क्या है?",
      "opts": ["लहसुन", "साग", "फल", "अन्य"],
      "ans": 3
    },
    {
      "q": "यदि A = 3 और B = 4, तो A² + B² = ?",
      "opts": ["12", "25", "16", "20"],
      "ans": 1
    },
    {
      "q": "हिमालय का अर्थ क्या है?",
      "opts": ["बर्फ का घर", "पहाड़", "दूर तक फैला", "पर्वत"],
      "ans": 0
    },
    {
      "q": "किस देश को 'उगता सूर्य' कहा जाता है?",
      "opts": ["भारत", "जापान", "चीन", "कोरिया"],
      "ans": 1
    },
    {
      "q": "10 का 25% क्या है?",
      "opts": ["2.5", "5", "7.5", "10"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'गेंद का खेल' कहा जाता है?",
      "opts": ["फुटबॉल", "क्रिकेट", "हॉकी", "कबड्डी"],
      "ans": 1
    },
    {
      "q": "‘शिक्षा का उद्देश्य क्या है?’",
      "opts": ["ज्ञान का वितरण", "धन का संग्रह", "सामाजिक परिवर्तन", "सभी"],
      "ans": 0
    },
    {
      "q": "किस महाद्वीप में 'आर्कटिक महासागर' है?",
      "opts": ["उत्तर अमेरिका", "अफ्रीका", "एशिया", "यूरोप"],
      "ans": 0
    },
    {
      "q": "किस पदार्थ का रासायनिक सूत्र 'NaCl' है?",
      "opts": ["सोडियम", "सोडियम क्लोराइड", "कैल्शियम", "पोटेशियम"],
      "ans": 1
    },
    {
      "q": "‘नैतिकता’ का अर्थ क्या है?",
      "opts": ["नीति का अध्ययन", "व्यवहार की जांच", "सही और गलत का ज्ञान", "सभी"],
      "ans": 2
    },
    {
      "q": "1, 2, 3, 4, 5 का औसत क्या होगा?",
      "opts": ["2", "3", "4", "5"],
      "ans": 1
    },
    {
      "q": "किस शब्द का अर्थ 'शांति' है?",
      "opts": ["अशांति", "संतुलन", "शांति", "सुरक्षा"],
      "ans": 2
    },
    {
      "q": "किस महापुरुष ने 'सत्याग्रह' का विचार प्रस्तुत किया?",
      "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. अंबेडकर"],
      "ans": 1
    },
    {
      "q": "‘वृक्ष’ का विलोम क्या है?",
      "opts": ["गাছ", "बीज", "फूल", "पत्ते"],
      "ans": 0
    },
    {
      "q": "20 का 10% क्या है?",
      "opts": ["1", "2", "5", "10"],
      "ans": 2
    },
    {
      "q": "किस महापुरुष को 'भारत रत्न' से सम्मानित किया गया?",
      "opts": ["महात्मा गांधी", "डॉ. भीमराव अंबेडकर", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
      "ans": 0
    },
    {
      "q": "‘ब्रह्मा’ किसको दर्शाता है?",
      "opts": ["सिरजनहार", "पालक", "संहारक", "नवीन"],
      "ans": 0
    },
    {
      "q": "6 x 9 = ?",
      "opts": ["54", "63", "72", "81"],
      "ans": 0
    },
    {
      "q": "‘गाय’ का विलोम क्या है?",
      "opts": ["सांड", "भैंस", "बकरी", "भेड़"],
      "ans": 0
    },
    {
      "q": "‘आदमी’ का पर्यायवाची क्या है?",
      "opts": ["मानव", "स्त्री", "लड़का", "बच्चा"],
      "ans": 0
    },
    {
      "q": "किस नदी को 'गंगा' कहा जाता है?",
      "opts": ["सिंधु", "यमुना", "कावेरी", "नर्मदा"],
      "ans": 0
    },
    {
      "q": "‘सीखना’ का विलोम क्या है?",
      "opts": ["सिखाना", "भूलना", "गिनना", "पढ़ना"],
      "ans": 1
    },
    {
      "q": "किसके द्वारा 'संविधान' को लिखा गया था?",
      "opts": ["डॉ. भीमराव अंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
      "ans": 0
    },
    {
      "q": "यदि 15y = 45, तो y का मान क्या होगा?",
      "opts": ["1", "2", "3", "4"],
      "ans": 2
    },
    {
      "q": "100 का 25% क्या है?",
      "opts": ["10", "15", "20", "25"],
      "ans": 3
    },
    {
      "q": "किस तत्व का प्रतीक 'Hg' है?",
      "opts": ["पारा", "हाइड्रोजन", "ऑक्सीजन", "हीलियम"],
      "ans": 0
    },
    {
      "q": "किस महापुरुष को 'स्वतंत्रता संग्राम का नायक' कहा जाता है?",
      "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. अंबेडकर"],
      "ans": 0
    },
    {
      "q": "‘शांति’ का अर्थ क्या है?",
      "opts": ["लड़ाई", "सहमति", "अशांति", "शांति"],
      "ans": 3
    },
    {
      "q": "किस खेल को 'रानी का खेल' कहा जाता है?",
      "opts": ["क्रिकेट", "हॉकी", "शतरंज", "बैडमिंटन"],
      "ans": 2
    },
    {
      "q": "किस देश को 'सूर्य का देश' कहा जाता है?",
      "opts": ["भारत", "जापान", "चीन", "अमेरिका"],
      "ans": 1
    }
    ,


    {
      "q": "किस त्योहार को 'दुर्गा पूजा' कहा जाता है?",
      "opts": ["दीवाली", "ईद", "नवरात्रि", "जन्माष्टमी"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश का राज्य पशु क्या है?",
      "opts": ["बाघ", "गौ", "सांभर", "जंगली सूअर"],
      "ans": 0
    },
    {
      "q": "2 + 2 = ?",
      "opts": ["3", "4", "5", "6"],
      "ans": 1
    },
    {
      "q": "पानी का रासायनिक सूत्र क्या है?",
      "opts": ["H2O", "CO2", "O2", "N2"],
      "ans": 0
    },
    {
      "q": "संगीत में 'सुर' क्या होता है?",
      "opts": ["ताल", "स्वर", "गति", "लय"],
      "ans": 1
    },
    {
      "q": "‘हाथी’ का पर्यायवाची शब्द क्या है?",
      "opts": ["गज", "कुलर", "सिंह", "गधा"],
      "ans": 0
    },
    {
      "q": "किसी संख्या का 20% क्या होता है?",
      "opts": ["0.2", "0.5", "2", "20"],
      "ans": 0
    },
    {
      "q": "पृथ्वी का सबसे बड़ा महासागर कौन सा है?",
      "opts": ["हिंद महासागर", "अटलांटिक महासागर", "पैसिफिक महासागर", "आर्कटिक महासागर"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश की राजधानी क्या है?",
      "opts": ["इंदौर", "भोपाल", "ग्वालियर", "जबलपुर"],
      "ans": 1
    },
    {
      "q": "‘राधा-कृष्ण’ का त्योहार कब मनाया जाता है?",
      "opts": ["दीवाली", "जन्माष्टमी", "रक्षाबंधन", "गणेश चतुर्थी"],
      "ans": 1
    },
    {
      "q": "‘विज्ञान’ का अर्थ क्या है?",
      "opts": ["ज्ञान का अध्ययन", "कला का अध्ययन", "भाषा का अध्ययन", "इतिहास का अध्ययन"],
      "ans": 0
    },
    {
      "q": "4 x 5 = ?",
      "opts": ["10", "15", "20", "25"],
      "ans": 2
    },
    {
      "q": "‘गुरु’ का समानार्थी क्या है?",
      "opts": ["शिक्षक", "विद्यार्थी", "नवजोत", "विप्र"],
      "ans": 0
    },
    {
      "q": "यदि A = 5 और B = 10, तो A + B = ?",
      "opts": ["5", "10", "15", "20"],
      "ans": 2
    },
    {
      "q": "एक समकोण त्रिभुज में कोणों का योग क्या होता है?",
      "opts": ["90 डिग्री", "180 डिग्री", "270 डिग्री", "360 डिग्री"],
      "ans": 1
    },
    {
      "q": "‘मोर’ का राष्ट्रीय पक्षी होने का क्या कारण है?",
      "opts": ["रंग-बिरंगे पंख", "आवाज़", "गति", "संगीत"],
      "ans": 0
    },
    {
      "q": "यदि 7x = 35, तो x का मान क्या होगा?",
      "opts": ["4", "5", "6", "7"],
      "ans": 1
    },
    {
      "q": "‘गुलाब’ का पर्यायवाची शब्द क्या है?",
      "opts": ["कमल", "पुष्प", "चमेली", "नागफनी"],
      "ans": 1
    },
    {
      "q": "‘The sun rises in the east’ का हिंदी में अर्थ क्या है?",
      "opts": ["सूर्य पश्चिम में उगता है", "सूर्य पूर्व में उगता है", "सूर्य उत्तर में उगता है", "सूर्य दक्षिण में उगता है"],
      "ans": 1
    },
    {
      "q": "100 का 10% क्या है?",
      "opts": ["5", "10", "15", "20"],
      "ans": 1
    },
    {
      "q": "‘कविता’ का अर्थ क्या है?",
      "opts": ["संगीत", "कला", "शब्दों की रचना", "चित्र"],
      "ans": 2
    },
    {
      "q": "2 का घन क्या होता है?",
      "opts": ["4", "6", "8", "16"],
      "ans": 2
    },
    {
      "q": "किस देश को 'सूर्य का देश' कहा जाता है?",
      "opts": ["भारत", "जापान", "चीन", "अमेरिका"],
      "ans": 1
    },
    {
      "q": "यदि A = 3 और B = 4, तो A² + B² = ?",
      "opts": ["7", "12", "25", "20"],
      "ans": 2
    },
    {
      "q": "‘शिक्षा’ का मुख्य उद्देश्य क्या है?",
      "opts": ["ज्ञान का वितरण", "धन की प्राप्ति", "काम का अनुभव", "सभी"],
      "ans": 0
    },
    {
      "q": "‘Pencil’ का हिंदी में अर्थ क्या है?",
      "opts": ["कलम", "पेंसिल", "कागज़", "खिड़की"],
      "ans": 1
    },
    {
      "q": "एक वर्ग का क्षेत्रफल क्या होता है?",
      "opts": ["लंबाई x चौड़ाई", "लंबाई²", "चौड़ाई²", "लंबाई + चौड़ाई"],
      "ans": 1
    },
    {
      "q": "‘सूर्य’ का समानार्थी क्या है?",
      "opts": ["चाँद", "तारा", "आदित्य", "ग्रह"],
      "ans": 2
    },
    {
      "q": "किस प्रकार के तर्क को ‘Deductive reasoning’ कहा जाता है?",
      "opts": ["निर्णायक तर्क", "संक्षिप्त तर्क", "अन्वेषणात्मक तर्क", "समीक्षा तर्क"],
      "ans": 0
    },
    {
      "q": "‘Unity in diversity’ का क्या अर्थ है?",
      "opts": ["विविधता में एकता", "एकता में विविधता", "समानता", "विभाजन"],
      "ans": 0
    },
    {
      "q": "किसके द्वारा ‘सर्वोच्च न्यायालय’ की स्थापना की गई थी?",
      "opts": ["संविधान", "राजा", "सरकार", "न्यायपालिका"],
      "ans": 0
    },
    {
      "q": "‘B’ का परिभाषा क्या है?",
      "opts": ["2 का गुणनफल", "2 का भागफल", "2 का आधा", "2 का शून्य"],
      "ans": 0
    },
    {
      "q": "‘नदी’ का पर्यायवाची शब्द क्या है?",
      "opts": ["नदी", "नदी", "तट", "जल"],
      "ans": 0
    },
    {
      "q": "2 + 3 x 4 = ?",
      "opts": ["14", "20", "10", "5"],
      "ans": 2
    },
    {
      "q": "‘गाय’ का विलोम क्या है?",
      "opts": ["बकरी", "सांड", "भैंस", "हाथी"],
      "ans": 1
    },
    {
      "q": "‘Earth’ का हिंदी में अर्थ क्या है?",
      "opts": ["पृथ्वी", "आसमान", "जल", "अग्नि"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'रानी का खेल' कहा जाता है?",
      "opts": ["क्रिकेट", "हॉकी", "शतरंज", "बैडमिंटन"],
      "ans": 2
    },
    {
      "q": "1000 का 25% क्या है?",
      "opts": ["100", "150", "250", "200"],
      "ans": 2
    },
    {
      "q": "किस तत्व का प्रतीक 'Na' है?",
      "opts": ["नाइट्रोजन", "सोडियम", "कैल्शियम", "पोटेशियम"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का कौन सा शहर 'लौह नगरी' के नाम से जाना जाता है?",
      "opts": ["उज्जैन", "जबलपुर", "इंदौर", "सागर"],
      "ans": 1
    },

    {
      "q": "‘सूर्य’ का विलोम क्या है?",
      "opts": ["चाँद", "तारे", "ग्रह", "अंधकार"],
      "ans": 3
    },
    {
      "q": "5 x 6 = ?",
      "opts": ["30", "25", "35", "40"],
      "ans": 0
    },
    {
      "q": "‘बच्चा’ का पर्यायवाची शब्द क्या है?",
      "opts": ["बालक", "किशोर", "युवक", "महिला"],
      "ans": 0
    },
    {
      "q": "किस देश की राजधानी 'टोक्यो' है?",
      "opts": ["जापान", "चीन", "कोरिया", "भारत"],
      "ans": 0
    },
    {
      "q": "एक त्रिभुज के तीनों कोणों का योग कितना होता है?",
      "opts": ["90 डिग्री", "180 डिग्री", "270 डिग्री", "360 डिग्री"],
      "ans": 1
    },
    {
      "q": "‘कला’ का पर्यायवाची शब्द क्या है?",
      "opts": ["शिल्प", "ज्ञान", "साहित्य", "संस्कृति"],
      "ans": 0
    },
    {
      "q": "यदि 12y = 36, तो y का मान क्या होगा?",
      "opts": ["2", "3", "4", "5"],
      "ans": 1
    },
    {
      "q": "‘कविता’ का अर्थ क्या है?",
      "opts": ["शब्दों की रचना", "कला", "संगीत", "नृत्य"],
      "ans": 0
    },
    {
      "q": "किस भारतीय नेता को 'महात्मा' कहा जाता है?",
      "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "बाबा भीमराव अंबेडकर"],
      "ans": 1
    },
    {
      "q": "7 + 8 = ?",
      "opts": ["14", "15", "16", "17"],
      "ans": 0
    },
    {
      "q": "‘नदी’ का पर्यायवाची शब्द क्या है?",
      "opts": ["जल", "स्रोत", "तट", "नदी"],
      "ans": 3
    },
    {
      "q": "किसके द्वारा 'सर्वोच्च न्यायालय' की स्थापना की गई थी?",
      "opts": ["संविधान", "राजा", "सरकार", "न्यायपालिका"],
      "ans": 0
    },
    {
      "q": "10 का 50% क्या है?",
      "opts": ["2", "5", "10", "15"],
      "ans": 1
    },
    {
      "q": "‘गाय’ का विलोम क्या है?",
      "opts": ["भैंस", "सांड", "बकरी", "सूअर"],
      "ans": 1
    },
    {
      "q": "‘Write’ का हिंदी में क्या अर्थ है?",
      "opts": ["लिखना", "पढ़ना", "सुनना", "देखना"],
      "ans": 0
    },
    {
      "q": "1, 2, 3, 4, 5 के औसत (average) का क्या होगा?",
      "opts": ["3", "4", "5", "2"],
      "ans": 0
    },
    {
      "q": "किस नदी को 'गंगा' कहा जाता है?",
      "opts": ["यमुना", "नर्मदा", "सिंधु", "कावेरी"],
      "ans": 0
    },
    {
      "q": "यदि A = 8 और B = 4, तो A - B = ?",
      "opts": ["2", "4", "8", "12"],
      "ans": 1
    },
    {
      "q": "‘सप्तक’ का अर्थ क्या है?",
      "opts": ["सात", "पाँच", "छह", "चार"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'रानी का खेल' कहा जाता है?",
      "opts": ["क्रिकेट", "हॉकी", "शतरंज", "बैडमिंटन"],
      "ans": 2
    },
    {
      "q": "10 x 10 = ?",
      "opts": ["50", "100", "200", "150"],
      "ans": 1
    },
    {
      "q": "‘पुस्तक’ का पर्यायवाची शब्द क्या है?",
      "opts": ["किताब", "लेख", "साहित्य", "कविता"],
      "ans": 0
    },
    {
      "q": "‘The cat is on the mat’ का हिंदी में अर्थ क्या है?",
      "opts": ["बिल्ली गद्दे पर है", "बिल्ली गद्दे के नीचे है", "बिल्ली गद्दे के पास है", "बिल्ली गद्दे से दूर है"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का राज्य फूल क्या है?",
      "opts": ["कमल", "गुलाब", "चंपा", "गुड़हल"],
      "ans": 0
    },
    {
      "q": "20 का 10% क्या है?",
      "opts": ["2", "5", "10", "15"],
      "ans": 0
    },
    {
      "q": "‘दुनिया’ का विलोम क्या है?",
      "opts": ["जगत", "अन्यलोक", "भ्रमण", "गृह"],
      "ans": 1
    },
    {
      "q": "3, 6, 9, 12, ... में अगला संख्या क्या होगा?",
      "opts": ["12", "15", "18", "21"],
      "ans": 2
    },
    {
      "q": "‘शिक्षा’ का मुख्य उद्देश्य क्या है?",
      "opts": ["ज्ञान का वितरण", "धन की प्राप्ति", "काम का अनुभव", "सभी"],
      "ans": 0
    },
    {
      "q": "यदि A = 2 और B = 5, तो A + B = ?",
      "opts": ["5", "6", "7", "8"],
      "ans": 2
    },
    {
      "q": "किस खेल को 'रानी का खेल' कहा जाता है?",
      "opts": ["क्रिकेट", "हॉकी", "शतरंज", "बैडमिंटन"],
      "ans": 2
    },
    {
      "q": "‘गुरु’ का समानार्थी क्या है?",
      "opts": ["शिक्षक", "विद्यार्थी", "नवजोत", "विप्र"],
      "ans": 0
    },
    {
      "q": "12 - 7 = ?",
      "opts": ["5", "4", "3", "6"],
      "ans": 0
    },
    {
      "q": "यदि 5x = 30, तो x का मान क्या होगा?",
      "opts": ["4", "5", "6", "7"],
      "ans": 2
    },
    {
      "q": "‘प्याज’ का विलोम क्या है?",
      "opts": ["लहसुन", "अदरक", "मिर्च", "फल"],
      "ans": 3
    },
    {
      "q": "किस तत्व का प्रतीक 'Fe' है?",
      "opts": ["फास्फोरस", "फेरस", "कैल्शियम", "लोहा"],
      "ans": 3
    },
    {
      "q": "20 + 30 = ?",
      "opts": ["40", "50", "60", "70"],
      "ans": 1
    },
    {
      "q": "‘नृत्य’ का अर्थ क्या है?",
      "opts": ["गायन", "नृत्य", "पेंटिंग", "शिल्प"],
      "ans": 1
    },
    {
      "q": "यदि 18 / 3 = ?",
      "opts": ["3", "4", "5", "6"],
      "ans": 3
    },
    {
      "q": "‘रविवार’ का विलोम क्या है?",
      "opts": ["सोमवार", "शुक्रवार", "शनिवार", "बुधवार"],
      "ans": 0
    },
    {
      "q": "5² का मान क्या है?",
      "opts": ["25", "30", "20", "15"],
      "ans": 0
    },
    {
      "q": "‘गाजर’ का पर्यायवाची शब्द क्या है?",
      "opts": ["गाजर", "कद्दू", "शिमला मिर्च", "लौकी"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'रानी का खेल' कहा जाता है?",
      "opts": ["क्रिकेट", "हॉकी", "शतरंज", "बैडमिंटन"],
      "ans": 2
    },
    {
      "q": "‘बातचीत’ का विलोम क्या है?",
      "opts": ["चुप्पी", "संवाद", "विवाद", "अनुभव"],
      "ans": 0
    },
    {
      "q": "100 का 20% क्या है?",
      "opts": ["10", "15", "20", "25"],
      "ans": 2
    },
    {
      "q": "‘पृथ्वी’ का पर्यायवाची शब्द क्या है?",
      "opts": ["धरती", "आसमान", "जल", "अग्नि"],
      "ans": 0
    }
    ,



    {
      "q": "मध्य प्रदेश का कौन सा शहर 'मसाले की राजधानी' के नाम से जाना जाता है?",
      "opts": ["इंदौर", "भोपाल", "ग्वालियर", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "किस नदी के किनारे 'चाचौड़ा' स्थित है?",
      "opts": ["नर्मदा", "सुप्रभा", "ताप्ती", "गंगा"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश के कौन से जनजातीय क्षेत्र को 'भील' के लिए जाना जाता है?",
      "opts": ["धार", "जबलपुर", "सागर", "इंदौर"],
      "ans": 0
    },
    {
      "q": "किस मंदिर का निर्माण 'महादेव' को समर्पित है?",
      "opts": ["सांची", "खजुराहो", "उज्जैन", "बंदवगढ़"],
      "ans": 2
    },
    {
      "q": "कौन सा शहर 'पांडवों की नगरी' के नाम से जाना जाता है?",
      "opts": ["उज्जैन", "महेश्वर", "इंदौर", "ग्वालियर"],
      "ans": 1
    },
    {
      "q": "किस पर्वत पर 'धूपगढ़' स्थित है?",
      "opts": ["सातपुड़ा", "विझ्याचल", "अरावली", "गिरनार"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में किस विशेष पर्व का आयोजन होता है?",
      "opts": ["नवरात्रि", "दीवाली", "होली", "ईद"],
      "ans": 0
    },
    {
      "q": "किस किले को 'ग्वालियर किला' कहा जाता है?",
      "opts": ["उज्जैन", "इंदौर", "ग्वालियर", "धार"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश के किस शहर को 'सर्वश्रेष्ठ पर्यटन स्थल' का पुरस्कार मिला है?",
      "opts": ["भोपाल", "इंदौर", "ग्वालियर", "खजुराहो"],
      "ans": 3
    },
    {
      "q": "किस त्योहार को 'रक्षाबंधन' के दौरान मनाया जाता है?",
      "opts": ["होली", "दीवाली", "ईद", "रक्षाबंधन"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश में 'करेला' की खेती मुख्य रूप से कहाँ होती है?",
      "opts": ["ग्वालियर", "उज्जैन", "सागर", "इंदौर"],
      "ans": 0
    },
    {
      "q": "किस महल को 'जगजीत महल' कहा जाता है?",
      "opts": ["ग्वालियर", "मंडू", "उज्जैन", "खजुराहो"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का राज्य पक्षी कौन सा है?",
      "opts": ["पक्षी", "कौआ", "बाघ", "गुलाबी बगुला"],
      "ans": 3
    },
    {
      "q": "किस राष्ट्रीय उद्यान में बाघों की संख्या सबसे अधिक है?",
      "opts": ["कन्हा", "बंदवगढ़", "पचमढ़ी", "सांची"],
      "ans": 0
    },
    {
      "q": "किस झील को 'चोला झील' कहा जाता है?",
      "opts": ["बड़ा तालाब", "उज्जैन झील", "पचमढ़ी झील", "बंदवगढ़ झील"],
      "ans": 0
    },
    {
      "q": "किस किले को 'खजुराहो किला' कहा जाता है?",
      "opts": ["ग्वालियर किला", "सांची किला", "धार किला", "इंदौर किला"],
      "ans": 0
    },
    {
      "q": "कौन सा फल मध्य प्रदेश में मुख्य रूप से पैदा होता है?",
      "opts": ["सेब", "अनार", "आम", "खरबूजा"],
      "ans": 2
    },
    {
      "q": "किस नदी का पानी 'पवित्र' माना जाता है?",
      "opts": ["गंगा", "नर्मदा", "यमुना", "सुप्रभा"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश के किस शहर में 'राजवाड़ा' महल है?",
      "opts": ["इंदौर", "ग्वालियर", "उज्जैन", "सागर"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में किस खेल को 'राज्य खेल' का दर्जा मिला है?",
      "opts": ["हॉकी", "क्रिकेट", "कबड्डी", "फुटबॉल"],
      "ans": 0
    },
    {
      "q": "किस पर्वत श्रेणी में 'सातपुड़ा' और 'विंध्याचल' शामिल हैं?",
      "opts": ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
      "ans": 0
    },
    {
      "q": "किस शहर में 'श्री महाकालेश्वर ज्योतिर्लिंग' है?",
      "opts": ["उज्जैन", "ग्वालियर", "भोपाल", "इंदौर"],
      "ans": 0
    },
    {
      "q": "किस उत्सव को 'दीपावली' कहा जाता है?",
      "opts": ["होली", "ईद", "दीवाली", "रक्षाबंधन"],
      "ans": 2
    },
    {
      "q": "किस त्यौहार को 'जन्माष्टमी' के रूप में मनाया जाता है?",
      "opts": ["दुर्गा पूजा", "दीवाली", "नवरात्रि", "जन्माष्टमी"],
      "ans": 3
    },
    {
      "q": "किस विशेष प्रकार की मिट्टी में मध्य प्रदेश में खेती होती है?",
      "opts": ["काली मिट्टी", "लाल मिट्टी", "सफेद मिट्टी", "सभी"],
      "ans": 0
    },
    {
      "q": "किस स्थान पर 'बंदवगढ़' राष्ट्रीय उद्यान है?",
      "opts": ["ग्वालियर", "धार", "सागर", "इंदौर"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का राज्य गीत क्या है?",
      "opts": ["संपूर्ण गान", "मध्य प्रदेश गान", "राज्य गान", "सरस्वती वंदना"],
      "ans": 1
    },
    {
      "q": "किस पर्वत पर 'धूपगढ़' है?",
      "opts": ["सातपुड़ा", "विंध्याचल", "अरावली", "गिरनार"],
      "ans": 0
    },
    {
      "q": "किस त्यौहार को 'महाकाल की बारात' के रूप में मनाया जाता है?",
      "opts": ["रक्षाबंधन", "जन्माष्टमी", "दीवाली", "नवरात्रि"],
      "ans": 1
    },
    {
      "q": "किस जिले में 'जबलपुर' है?",
      "opts": ["जबलपुर", "ग्वालियर", "सागर", "इंदौर"],
      "ans": 0
    },
    {
      "q": "किस पर्वत श्रृंखला को 'सतपुड़ा' कहा जाता है?",
      "opts": ["सातपुड़ा", "विंध्याचल", "अरावली", "गिरनार"],
      "ans": 0
    },
    {
      "q": "किस नदी पर 'नर्मदा घाटी' की परियोजना है?",
      "opts": ["नर्मदा", "ताप्ती", "सुप्रभा", "गंगा"],
      "ans": 0
    },
    {
      "q": "किस जिले में 'कन्हा' राष्ट्रीय उद्यान है?",
      "opts": ["जबलपुर", "धार", "ग्वालियर", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "किस शहर को 'उज्जैन' कहा जाता है?",
      "opts": ["ग्वालियर", "इंदौर", "सागर", "उज्जैन"],
      "ans": 3
    },
    {
      "q": "किस नदी पर 'उज्जैन' स्थित है?",
      "opts": ["नर्मदा", "सुप्रभा", "ताप्ती", "गंगा"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का कौन सा क्षेत्र 'नर्मदा घाटी' के लिए प्रसिद्ध है?",
      "opts": ["उज्जैन", "इंदौर", "सागर", "जबलपुर"],
      "ans": 3
    },
    {
      "q": "किस उत्सव को 'दीवाली' कहा जाता है?",
      "opts": ["ईद", "होली", "नवरात्रि", "दीवाली"],
      "ans": 3
    },
    {
      "q": "किस महल को 'मंडू' में देखा जा सकता है?",
      "opts": ["राजवाड़ा", "जगजीत महल", "उज्जैन महल", "सागर महल"],
      "ans": 1
    },
    {
      "q": "किस त्योहार को 'नवरात्रि' कहा जाता है?",
      "opts": ["होली", "दीवाली", "नवरात्रि", "रक्षाबंधन"],
      "ans": 2
    },
    {
      "q": "किस त्योहार को 'दुर्गा पूजा' कहा जाता है?",
      "opts": ["दीवाली", "ईद", "नवरात्रि", "जन्माष्टमी"],
      "ans": 2
    },


    {
      "q": "मध्य प्रदेश का सबसे बड़ा कृषि उत्पाद क्या है?",
      "opts": ["गेहूं", "सोयाबीन", "चावल", "गन्ना"],
      "ans": 1
    },
    {
      "q": "कौन सा नृत्य मध्य प्रदेश का पारंपरिक नृत्य है?",
      "opts": ["क Kathak", "गुड़ी-गुड़ी", "डांडीया", "बीरता"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश में कौन सा प्रसिद्ध मेले का आयोजन होता है?",
      "opts": ["कुम्भ मेला", "सरस्वती पूजा", "नवरात्रि मेला", "सालगांव मेला"],
      "ans": 2
    },
    {
      "q": "कौन सा जीव जंतु मध्य प्रदेश के वन्य जीवन का प्रतीक है?",
      "opts": ["सांप", "बाघ", "गैंडा", "जिराफ"],
      "ans": 1
    },
    {
      "q": "खजुराहो में मंदिरों की संख्या कितनी है?",
      "opts": ["20", "25", "30", "40"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश के किस शहर में 'बोर्डिंग स्कूल' है?",
      "opts": ["इंदौर", "भोपाल", "ग्वालियर", "सागर"],
      "ans": 1
    },
    {
      "q": "कौन सा किला मध्य प्रदेश के ग्वालियर में है?",
      "opts": ["फोर्ट जैसलमेर", "ग्वालियर किला", "आगरा किला", "चित्तौड़ किला"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश की प्रमुख फसलें कौन सी हैं?",
      "opts": ["गेहूं, चावल", "कपास, सोयाबीन", "तिल, मूंगफली", "सभी"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश के कितने जिले हैं?",
      "opts": ["28", "50", "52", "60"],
      "ans": 2
    },
    {
      "q": "किस झील को 'बड़ा तालाब' कहा जाता है?",
      "opts": ["भोपाल", "इंदौर", "ग्वालियर", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "किस जिले में 'सांची' स्तूप स्थित है?",
      "opts": ["सांची", "ग्वालियर", "जबलपुर", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश के किस शहर को 'छोटी काशी' कहा जाता है?",
      "opts": ["उज्जैन", "ग्वालियर", "भोपाल", "इंदौर"],
      "ans": 0
    },
    {
      "q": "कौन सा महल मध्य प्रदेश के 'मंडू' में है?",
      "opts": ["जगमती महल", "कुतुब महल", "फतेह महल", "रानी रूपमती महल"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश के किस भाग को 'कच्छा' कहा जाता है?",
      "opts": ["ग्वालियर", "सागर", "खजुराहो", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "किस जिले में 'कन्हा राष्ट्रीय उद्यान' है?",
      "opts": ["जबलपुर", "बालाघाट", "धार", "सागर"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश के किस जिले में 'पचमढ़ी' है?",
      "opts": ["सागर", "होशंगाबाद", "जबलपुर", "उज्जैन"],
      "ans": 1
    },
    {
      "q": "किस नदी पर 'नर्मदा घाटी' परियोजना है?",
      "opts": ["ताप्ती", "नर्मदा", "गंगा", "यमुना"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का राज्य पुष्प कौन सा है?",
      "opts": ["कमल", "गुलाब", "चमेली", "तुलसी"],
      "ans": 0
    },
    {
      "q": "किस महल में 'ग्वालियर' के राजा का निवास था?",
      "opts": ["कुतुब महल", "ग्वालियर किला", "मंडू", "फतेहपुर"],
      "ans": 1
    },
    {
      "q": "कौन सा त्योहार मध्य प्रदेश में विशेष रूप से मनाया जाता है?",
      "opts": ["दीवाली", "ईद", "नवरात्रि", "क्रिसमस"],
      "ans": 2
    },
    {
      "q": "किस पर्वत श्रेणी में 'सातपुड़ा' स्थित है?",
      "opts": ["विझ्याचल", "अरेवा", "गिरनार", "अरावली"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में कौन सा प्रमुख पर्यटन स्थल है?",
      "opts": ["उज्जैन", "सांची", "बंदवगढ़", "सभी"],
      "ans": 3
    },
    {
      "q": "कौन सा प्रसिद्ध झील 'वास्तु झील' के नाम से भी जाना जाता है?",
      "opts": ["बड़ा तालाब", "छोटा तालाब", "सागर झील", "उज्जैन झील"],
      "ans": 0
    },
    {
      "q": "किस शहर को 'गुलाब नगरी' कहा जाता है?",
      "opts": ["इंदौर", "भोपाल", "उज्जैन", "सागर"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का राज्य गान कौन सा है?",
      "opts": ["बैरागी गान", "संपूर्ण गान", "विविधता गान", "मध्य प्रदेश गान"],
      "ans": 3
    },
    {
      "q": "किस जिले में 'संगीत महल' स्थित है?",
      "opts": ["ग्वालियर", "इंदौर", "उज्जैन", "भोपाल"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का सबसे ऊँचा पर्वत कौन सा है?",
      "opts": ["धूपगढ़", "सांदीप", "सतपुड़ा", "अरेवा"],
      "ans": 0
    },
    {
      "q": "किस महल को 'आशापुरा महल' कहा जाता है?",
      "opts": ["मंडू", "ग्वालियर", "उज्जैन", "सांची"],
      "ans": 1
    },
    {
      "q": "कौन सा स्थान 'धार' के लिए प्रसिद्ध है?",
      "opts": ["पचमढ़ी", "बंदवगढ़", "सांची", "उज्जैन"],
      "ans": 2
    },
    {
      "q": "किस नदी के किनारे 'उज्जैन' स्थित है?",
      "opts": ["नर्मदा", "सुप्रभा", "ताप्ती", "गंगा"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में कितने राष्ट्रीय उद्यान हैं?",
      "opts": ["5", "6", "7", "8"],
      "ans": 1
    },
    {
      "q": "कौन सा जिले का नाम 'सागर' है?",
      "opts": ["उज्जैन", "ग्वालियर", "सागर", "इंदौर"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश में किस फल की खेती प्रमुख है?",
      "opts": ["सेब", "अनार", "खरबूजा", "संतरा"],
      "ans": 1
    },
    {
      "q": "किस शहर में 'राजवाड़ा' महल है?",
      "opts": ["इंदौर", "ग्वालियर", "सागर", "भोपाल"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश के किस भाग में 'सतपुड़ा' और 'विंध्याचल' पर्वत श्रृंखलाएँ हैं?",
      "opts": ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
      "ans": 1
    },
    {
      "q": "किस नदी पर 'नर्मदा घाटी' स्थित है?",
      "opts": ["सुप्रभा", "गंगा", "ताप्ती", "नर्मदा"],
      "ans": 3
    },
    {
      "q": "किस जिले में 'ताला' महल स्थित है?",
      "opts": ["उज्जैन", "ग्वालियर", "सागर", "इंदौर"],
      "ans": 1
    },
    {
      "q": "कौन सा त्यौहार 'नवरात्रि' के दौरान मनाया जाता है?",
      "opts": ["दीवाली", "दुर्गा पूजा", "भाई दूज", "मकर संक्रांति"],
      "ans": 1
    },
    {
      "q": "किस स्थान पर 'चौसठ योगिनी' मंदिर है?",
      "opts": ["ग्वालियर", "सांची", "खजुराहो", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में कौन सी प्रमुख फसल का उत्पादन होता है?",
      "opts": ["धान", "ज्वार", "कपास", "सभी"],
      "ans": 3
    }
    ,


    {
      "q": "मध्य प्रदेश की राजधानी क्या है?",
      "opts": ["भोपाल", "इंदौर", "ग्वालियर", "जबालपुर"],
      "ans": 0
    },
    {
      "q": "कौन सी नदी मध्य प्रदेश की जीवनरेखा मानी जाती है?",
      "opts": ["गंगा", "नर्मदा", "यमुना", "ताप्ती"],
      "ans": 1
    },
    {
      "q": "कौन सा राष्ट्रीय उद्यान मध्य प्रदेश में स्थित है?",
      "opts": ["जिम कॉर्बेट", "कन्हा", "सुंदरबन", "बंदिपुर"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का प्रसिद्ध व्यंजन कौन सा है?",
      "opts": ["दक्षिण भारतीय", "पंजाबी", "मध्य प्रदेश का भोजन", "कॉन्टिनेंटल"],
      "ans": 2
    },
    {
      "q": "खजुराहो में कौन सा प्रसिद्ध मंदिर है?",
      "opts": ["बृहदीश्वर मंदिर", "खजुराहो मंदिर", "हिंदू मंदिर", "जगन्नाथ मंदिर"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश की आधिकारिक भाषा क्या है?",
      "opts": ["हिंदी", "अंग्रेजी", "मराठी", "गुजराती"],
      "ans": 0
    },
    {
      "q": "भारत के 'आयरन मैन' के रूप में कौन जाने जाते हैं?",
      "opts": ["महात्मा गांधी", "सरदार पटेल", "जवाहरलाल नेहरू", "डॉ. बी.आर. आंबेडकर"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का सबसे बड़ा शहर कौन सा है?",
      "opts": ["भोपाल", "इंदौर", "ग्वालियर", "उज्जैन"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का राज्य पशु कौन सा है?",
      "opts": ["शेर", "बाघ", "हाथी", "चीताह"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश में कौन सा प्रसिद्ध त्योहार मनाया जाता है?",
      "opts": ["दुर्गा पूजा", "दीवाली", "नवरात्रि", "होली"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश में कौन सा यूनेस्को विश्व धरोहर स्थल है?",
      "opts": ["अजन्ता गुफाएँ", "हंपी", "खजुराहो", "लाल किला"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश की मुख्य नकदी फसल कौन सी है?",
      "opts": ["गेहूं", "चावल", "कपास", "गन्ना"],
      "ans": 2
    },
    {
      "q": "किस ऐतिहासिक व्यक्ति ने मंडू शहर की स्थापना की थी?",
      "opts": ["रानी दुर्गावती", "गियासुद्दीन खिलजी", "शिवाजी महाराज", "अकबर"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश किस वन्यजीव अभयारण्य के लिए जाना जाता है?",
      "opts": ["काजीरंगा", "बंदवगढ़", "रांथाम्बोर", "सुंदरबन"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश में कौन सा प्रमुख गाना प्रसिद्ध है?",
      "opts": ["सुरमैया", "गुजरात का गाना", "हरियाणा का गाना", "पंजाब का गाना"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में किस ऐतिहासिक स्थल को 'मंडवगंज' कहा जाता है?",
      "opts": ["मंडू", "सांची", "उज्जैन", "ग्वालियर"],
      "ans": 0
    },
    {
      "q": "किस नदी पर सांची स्तूप स्थित है?",
      "opts": ["नर्मदा", "ताप्ती", "सुप्रभा", "गंगा"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश के किस जिले में 'कन्हा राष्ट्रीय उद्यान' है?",
      "opts": ["कई", "बालाघाट", "डिंडौरी", "जबलपुर"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का राज्य फूल कौन सा है?",
      "opts": ["कमल", "गुलाब", "चमेली", "कनेर"],
      "ans": 0
    },
    {
      "q": "कौन सा शहर 'राजधानी' के नाम से भी जाना जाता है?",
      "opts": ["भोपाल", "इंदौर", "ग्वालियर", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का प्रमुख उद्योग कौन सा है?",
      "opts": ["कृषि", "टेक्सटाइल", "फार्मास्यूटिकल", "इन्फॉर्मेशन टेक्नोलॉजी"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का सबसे बड़ा झील कौन सा है?",
      "opts": ["वास्तु झील", "बनास झील", "बोथ झील", "पचमढ़ी झील"],
      "ans": 0
    },
    {
      "q": "किस पर्वत श्रृंखला में पचमढ़ी स्थित है?",
      "opts": ["सातपुड़ा", "विझ्याचल", "गिरनार", "अरावली"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में कौन सी भाषा सबसे अधिक बोली जाती है?",
      "opts": ["हिंदी", "उर्दू", "संस्कृत", "अंग्रेजी"],
      "ans": 0
    },
    {
      "q": "कौन सा ऐतिहासिक किला ग्वालियर में है?",
      "opts": ["ग्वालियर किला", "फोर्ट जैसलमेर", "रेवेन्यू किला", "आगरा किला"],
      "ans": 0
    },
    {
      "q": "किस ऐतिहासिक स्थान पर 'अग्नि-शिखा' के स्मारक हैं?",
      "opts": ["ग्वालियर", "खजुराहो", "सांची", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश के किस जिले में 'उज्जैन' स्थित है?",
      "opts": ["उज्जैन", "ग्वालियर", "कौशांबी", "सागर"],
      "ans": 0
    },
    {
      "q": "कौन सा त्यौहार मध्य प्रदेश में मुख्य रूप से मनाया जाता है?",
      "opts": ["दीवाली", "ईद", "मकर संक्रांति", "होली"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश की सबसे लंबी नदी कौन सी है?",
      "opts": ["नर्मदा", "ताप्ती", "सुप्रभा", "कन्हा"],
      "ans": 0
    },
    {
      "q": "कौन सा खेल मध्य प्रदेश में लोकप्रिय है?",
      "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "कबड्डी"],
      "ans": 0
    },
    {
      "q": "किस महल को 'जगमती महल' के नाम से भी जाना जाता है?",
      "opts": ["मंडू", "ग्वालियर", "खजुराहो", "उज्जैन"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश की अर्थव्यवस्था का मुख्य स्रोत क्या है?",
      "opts": ["उद्योग", "कृषि", "सेवा क्षेत्र", "पर्यटन"],
      "ans": 1
    },
    {
      "q": "किस विश्वविद्यालय को मध्य प्रदेश का सबसे पुराना विश्वविद्यालय माना जाता है?",
      "opts": ["सागर विश्वविद्यालय", "भोपाल विश्वविद्यालय", "उज्जैन विश्वविद्यालय", "जबलपुर विश्वविद्यालय"],
      "ans": 0
    },
    {
      "q": "कौन सा प्रमुख पर्यटन स्थल 'पचमढ़ी' के निकट है?",
      "opts": ["कन्हा", "बंदवगढ़", "सांची", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश की राज्य पशु किसे माना जाता है?",
      "opts": ["बाघ", "सांप", "हाथी", "गाय"],
      "ans": 0
    },

  ],
  CLAT: [
    {
      "q": "Who is the author of the Indian Constitution?",
      "opts": ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
      "ans": 0
    },
    {
      "q": "Which of the following is a non-justiciable right under the Indian Constitution?",
      "opts": ["Right to Equality", "Right to Freedom of Speech", "Directive Principles of State Policy", "Right to Life"],
      "ans": 2
    },
    {
      "q": "Who appoints the Chief Justice of India?",
      "opts": ["President of India", "Prime Minister", "Parliament", "Supreme Court"],
      "ans": 0
    },
    {
      "q": "In which year was the Indian Constitution adopted?",
      "opts": ["1947", "1950", "1952", "1949"],
      "ans": 3
    },
    {
      "q": "Which article of the Indian Constitution deals with the prohibition of discrimination on grounds of religion, race, caste, sex or place of birth?",
      "opts": ["Article 14", "Article 15", "Article 16", "Article 17"],
      "ans": 1
    },
    {
      "q": "The First Amendment of the Indian Constitution was made in which year?",
      "opts": ["1951", "1952", "1953", "1950"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of the Indian Parliament?",
      "opts": ["Bicameral Legislature", "Unicameral Legislature", "Federal Legislature", "Single Chamber Legislature"],
      "ans": 0
    },
    {
      "q": "Who has the authority to dissolve the Lok Sabha in India?",
      "opts": ["President of India", "Prime Minister", "Chief Justice of India", "Rajya Sabha Chairman"],
      "ans": 0
    },
    {
      "q": "Which article of the Indian Constitution relates to the Right to Life and Personal Liberty?",
      "opts": ["Article 20", "Article 19", "Article 21", "Article 22"],
      "ans": 2
    },
    {
      "q": "What is the term of the President of India?",
      "opts": ["4 years", "5 years", "6 years", "7 years"],
      "ans": 1
    },
    {
      "q": "Which article of the Indian Constitution grants the right to freedom of religion?",
      "opts": ["Article 19", "Article 20", "Article 25", "Article 28"],
      "ans": 2
    },
    {
      "q": "Who is the guardian of the Constitution of India?",
      "opts": ["President", "Prime Minister", "Supreme Court", "Parliament"],
      "ans": 2
    },
    {
      "q": "The concept of ‘Judicial Review’ is borrowed from which country?",
      "opts": ["USA", "UK", "France", "Canada"],
      "ans": 0
    },
    {
      "q": "Which of the following is an important function of the Finance Commission in India?",
      "opts": ["Distribution of taxes between the Centre and States", "Imposition of taxes", "Selection of the President", "Appointment of Governors"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a Fundamental Duty under the Indian Constitution?",
      "opts": ["Respect the national flag", "Preserve the cultural heritage", "Pay taxes", "Promote harmony"],
      "ans": 2
    },
    {
      "q": "Which of the following was the first state in India to be created on linguistic basis?",
      "opts": ["Andhra Pradesh", "Madhya Pradesh", "Bihar", "Tamil Nadu"],
      "ans": 0
    },
    {
      "q": "What is the maximum strength of the Lok Sabha as per the Indian Constitution?",
      "opts": ["545", "552", "535", "535 + 2"],
      "ans": 1
    },
    {
      "q": "The term ‘Secularism’ in the Indian Constitution was added by which Amendment?",
      "opts": ["42nd Amendment", "44th Amendment", "52nd Amendment", "72nd Amendment"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT an objective of the Indian Constitution?",
      "opts": ["Justice", "Equality", "Fraternity", "Monarchy"],
      "ans": 3
    },
    {
      "q": "Which article of the Indian Constitution provides for the protection of monuments and places of national importance?",
      "opts": ["Article 49", "Article 50", "Article 52", "Article 58"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of the Indian federal system?",
      "opts": ["Dual polity", "Single citizenship", "Separation of powers", "Separation of religion and state"],
      "ans": 1
    },
    {
      "q": "Which of the following Articles empowers the Indian Parliament to make laws on matters enumerated in the Union List?",
      "opts": ["Article 245", "Article 246", "Article 247", "Article 248"],
      "ans": 1
    },
    {
      "q": "In which of the following cases did the Supreme Court rule that 'Basic Structure' of the Constitution cannot be amended?",
      "opts": ["Kesavananda Bharati Case", "Golaknath Case", "Maneka Gandhi Case", "Minerva Mills Case"],
      "ans": 0
    },
    {
      "q": "Who was the first woman to become the Chief Justice of India?",
      "opts": ["Leila Seth", "Indira Gandhi", "Ranjana Prakash Desai", "V. Ramaswami"],
      "ans": 2
    },
    {
      "q": "Which of the following is NOT a method of Constitutional amendment in India?",
      "opts": ["Simple Majority", "Two-thirds Majority", "Unanimous Consent", "Special Majority"],
      "ans": 2
    },
    {
      "q": "Which of the following is related to the concept of 'Writ of Mandamus'?",
      "opts": ["It is issued to compel the performance of a public duty", "It is issued for the release of a person from unlawful detention", "It is issued to secure the payment of a debt", "It is issued to prevent the commission of an illegal act"],
      "ans": 0
    },
    {
      "q": "Which of the following institutions is responsible for ensuring the protection of Fundamental Rights in India?",
      "opts": ["Supreme Court", "High Court", "President", "Parliament"],
      "ans": 0
    },
    {
      "q": "The Right to Information (RTI) Act came into effect in which year?",
      "opts": ["2002", "2004", "2005", "2006"],
      "ans": 2
    },
    {
      "q": "Who has the power to impeach the President of India?",
      "opts": ["Rajya Sabha", "Lok Sabha", "Both Houses of Parliament", "Supreme Court"],
      "ans": 2
    },
    {
      "q": "Who was the first woman President of India?",
      "opts": ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"],
      "ans": 2
    },
    {
      "q": "Which of the following is a function of the Election Commission in India?",
      "opts": ["Conducting Elections", "Enforcing Laws", "Constitutional Amendments", "Implementing Policies"],
      "ans": 0
    },
    {
      "q": "The provision of 'proportional representation' is related to which aspect of the Indian Constitution?",
      "opts": ["Elections to the Lok Sabha", "Elections to the Rajya Sabha", "Presidential Elections", "Elections to the Legislative Assemblies"],
      "ans": 1
    },
    {
      "q": "In which year was the 73rd Constitutional Amendment Act, related to Panchayati Raj, passed?",
      "opts": ["1991", "1992", "1993", "1994"],
      "ans": 1
    },
    {
      "q": "Which article of the Indian Constitution deals with the removal of the President of India?",
      "opts": ["Article 56", "Article 58", "Article 59", "Article 61"],
      "ans": 3
    },
    {
      "q": "Which Article of the Indian Constitution provides for the impeachment of the President?",
      "opts": ["Article 61", "Article 56", "Article 58", "Article 64"],
      "ans": 0
    },
    {
      "q": "Which article of the Indian Constitution grants the Right to Education?",
      "opts": ["Article 21A", "Article 19", "Article 32", "Article 45"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a part of the Parliament of India?",
      "opts": ["Rajya Sabha", "Lok Sabha", "Supreme Court", "President of India"],
      "ans": 2
    },
    {
      "q": "Who is the current Chief Justice of India?",
      "opts": ["N.V. Ramana", "Sharad Arvind Bobde", "D.Y. Chandrachud", "Ranjan Gogoi"],
      "ans": 2
    },
    {
      "q": "Which of the following is the final interpreter of the Constitution of India?",
      "opts": ["Supreme Court", "High Court", "President", "Parliament"],
      "ans": 0
    },
    {
      "q": "Which of the following writs is issued to prevent the unlawful exercise of jurisdiction by a lower court or tribunal?",
      "opts": ["Certiorari", "Prohibition", "Mandamus", "Habeas Corpus"],
      "ans": 1
    },
    {
      "q": "In which year was the 'National Judicial Appointments Commission (NJAC) Act' struck down by the Supreme Court?",
      "opts": ["2013", "2014", "2015", "2016"],
      "ans": 2
    },
    {
      "q": "Which article of the Indian Constitution deals with the promotion of international peace and security?",
      "opts": ["Article 51", "Article 48A", "Article 45", "Article 35"],
      "ans": 0
    },
    {
      "q": "Who was the first woman to become the Governor of an Indian state?",
      "opts": ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sushma Swaraj"],
      "ans": 0
    },
    {
      "q": "Which of the following cases established the principle of 'basic structure' of the Constitution?",
      "opts": ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Indira Gandhi Case"],
      "ans": 1
    },



    {
      "q": "Which article of the Indian Constitution allows the Parliament to legislate on matters in the Union List?",
      "opts": ["Article 245", "Article 246", "Article 247", "Article 248"],
      "ans": 1
    },
    {
      "q": "Under which article of the Indian Constitution is the protection of interest of minorities guaranteed?",
      "opts": ["Article 29", "Article 30", "Article 31", "Article 32"],
      "ans": 1
    },
    {
      "q": "What is the maximum period for which a President’s Rule can be imposed in a state?",
      "opts": ["6 months", "1 year", "2 years", "3 years"],
      "ans": 2
    },
    {
      "q": "Who has the power to dissolve the Lok Sabha in India?",
      "opts": ["President", "Prime Minister", "Speaker", "Council of Ministers"],
      "ans": 0
    },
    {
      "q": "The Directive Principles of State Policy in India are justiciable in nature. (True/False)",
      "opts": ["True", "False"],
      "ans": 1
    },
    {
      "q": "Which of the following is NOT included in the Fundamental Rights under Part III of the Indian Constitution?",
      "opts": ["Right to Equality", "Right to Property", "Right to Freedom of Religion", "Right to Life and Personal Liberty"],
      "ans": 1
    },
    {
      "q": "Which article of the Indian Constitution allows for the suspension of Fundamental Rights during a national emergency?",
      "opts": ["Article 358", "Article 352", "Article 368", "Article 366"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of the Indian Constitution?",
      "opts": ["Federal Structure", "Dual Citizenship", "Rigid Constitution", "Unicameral Legislature"],
      "ans": 0
    },
    {
      "q": "Who is the final interpreter of the Constitution of India?",
      "opts": ["President of India", "Supreme Court of India", "Parliament", "Prime Minister"],
      "ans": 1
    },
    {
      "q": "The Parliament of India is bicameral, consisting of the Lok Sabha and the...",
      "opts": ["Rajya Sabha", "State Assemblies", "Supreme Court", "High Courts"],
      "ans": 0
    },
    {
      "q": "The term 'secularism' is mentioned in the Preamble of the Indian Constitution. (True/False)",
      "opts": ["True", "False"],
      "ans": 0
    },
    {
      "q": "Which of the following writs is issued by a court to direct a public official to perform a duty?",
      "opts": ["Certiorari", "Mandamus", "Prohibition", "Quo Warranto"],
      "ans": 1
    },
    {
      "q": "Which of the following is NOT a function of the President of India?",
      "opts": ["Summoning Parliament", "Commander-in-Chief of the Armed Forces", "Leader of the ruling party", "Appointing the Prime Minister"],
      "ans": 2
    },
    {
      "q": "Which article of the Indian Constitution deals with the amendment procedure?",
      "opts": ["Article 368", "Article 368A", "Article 250", "Article 249"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the Indian Constitution?",
      "opts": ["It is a federal constitution", "It is a rigid constitution", "It is a unitary constitution", "It is both federal and flexible"],
      "ans": 3
    },
    {
      "q": "Who was the first woman Chief Justice of a High Court in India?",
      "opts": ["Ruma Pal", "Leila Seth", "Fathima Beevi", "Indira Banerjee"],
      "ans": 1
    },
    {
      "q": "Which writ is issued to prevent an authority from exceeding its jurisdiction?",
      "opts": ["Certiorari", "Mandamus", "Prohibition", "Habeas Corpus"],
      "ans": 2
    },
    {
      "q": "Which article of the Indian Constitution guarantees the right to life and personal liberty?",
      "opts": ["Article 19", "Article 21", "Article 32", "Article 29"],
      "ans": 1
    },
    {
      "q": "The President of India is elected by an indirect election method. (True/False)",
      "opts": ["True", "False"],
      "ans": 0
    },
    {
      "q": "Which article empowers the President of India to promulgate ordinances during the recess of Parliament?",
      "opts": ["Article 123", "Article 124", "Article 115", "Article 120"],
      "ans": 0
    },
    {
      "q": "Which of the following cases established the principle of judicial review in India?",
      "opts": ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Maneka Gandhi Case"],
      "ans": 1
    },
    {
      "q": "Which article of the Indian Constitution provides the right to equality before law?",
      "opts": ["Article 14", "Article 15", "Article 16", "Article 17"],
      "ans": 0
    },
    {
      "q": "What is the maximum number of members in the Rajya Sabha?",
      "opts": ["250", "245", "200", "300"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a ground for the President’s impeachment in India?",
      "opts": ["Violation of the Constitution", "Incompetence", "Misbehaviour", "Corruption"],
      "ans": 1
    },
    {
      "q": "The Indian Parliament is empowered to enact laws on which list?",
      "opts": ["Union List", "State List", "Concurrent List", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following is an example of a quasi-judicial body in India?",
      "opts": ["Election Commission", "Human Rights Commission", "National Green Tribunal", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which article provides for the protection of rights regarding arrest and detention in certain cases?",
      "opts": ["Article 21", "Article 22", "Article 23", "Article 24"],
      "ans": 1
    },
    {
      "q": "Which of the following articles of the Indian Constitution allows for a financial emergency?",
      "opts": ["Article 352", "Article 360", "Article 356", "Article 368"],
      "ans": 1
    },
    {
      "q": "Which part of the Indian Constitution deals with the Directive Principles of State Policy?",
      "opts": ["Part IV", "Part III", "Part II", "Part VI"],
      "ans": 0
    },
    {
      "q": "Who can remove the President of India from office?",
      "opts": ["Prime Minister", "Lok Sabha", "Rajya Sabha", "Both Houses of Parliament"],
      "ans": 3
    },
    {
      "q": "Which article of the Indian Constitution deals with the right to freedom of speech and expression?",
      "opts": ["Article 19", "Article 20", "Article 21", "Article 22"],
      "ans": 0
    },
    {
      "q": "Which article of the Indian Constitution lays down the procedure for the removal of judges of the Supreme Court?",
      "opts": ["Article 124", "Article 128", "Article 217", "Article 218"],
      "ans": 0
    },
    {
      "q": "The term 'Judicial Activism' refers to...",
      "opts": ["Judges making laws", "Judges interpreting the Constitution", "Judges intervening in the legislative matters", "None of the above"],
      "ans": 2
    },
    {
      "q": "Who was the first woman judge of the Supreme Court of India?",
      "opts": ["Leila Seth", "Indira Banerjee", "Fathima Beevi", "Ruma Pal"],
      "ans": 2
    },
    {
      "q": "Which of the following is the largest state by area in India?",
      "opts": ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
      "ans": 2
    },
    {
      "q": "In which year was the First Law Commission of India established?",
      "opts": ["1834", "1857", "1895", "1920"],
      "ans": 0
    },
    {
      "q": "Which part of the Indian Constitution is considered the 'Soul' of the Constitution?",
      "opts": ["Part III", "Part IV", "Part V", "Part VI"],
      "ans": 0
    },
    {
      "q": "Which article allows for the extension of the President's Rule in a state?",
      "opts": ["Article 356", "Article 357", "Article 358", "Article 359"],
      "ans": 1
    },
    {
      "q": "Which article gives the power to the Parliament to legislate on a matter in the Concurrent List?",
      "opts": ["Article 245", "Article 246", "Article 248", "Article 249"],
      "ans": 3
    },
    {
      "q": "Who was the first President of India?",
      "opts": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Dr. A.P.J. Abdul Kalam"],
      "ans": 0
    },





    {
      "q": "Which article of the Indian Constitution deals with the protection of interest of minorities?",
      "opts": ["Article 29", "Article 30", "Article 31", "Article 32"],
      "ans": 1
    },
    {
      "q": "In the Indian Constitution, the term 'Rule of Law' was borrowed from which country?",
      "opts": ["USA", "UK", "France", "Canada"],
      "ans": 1
    },
    {
      "q": "Which article of the Indian Constitution provides for the protection of cultural and educational rights of minorities?",
      "opts": ["Article 29", "Article 30", "Article 32", "Article 35"],
      "ans": 1
    },
    {
      "q": "What is the minimum age required to become the President of India?",
      "opts": ["25 years", "30 years", "35 years", "40 years"],
      "ans": 2
    },
    {
      "q": "Which article of the Indian Constitution mentions the 'Duty of the State to Promote International Peace and Security'?",
      "opts": ["Article 51", "Article 48A", "Article 32", "Article 45"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a writ jurisdiction of the Supreme Court?",
      "opts": ["Habeas Corpus", "Mandamus", "Prohibition", "Injunction"],
      "ans": 3
    },
    {
      "q": "The provision of impeachment of the President is given in which article of the Indian Constitution?",
      "opts": ["Article 55", "Article 61", "Article 67", "Article 56"],
      "ans": 1
    },
    {
      "q": "In India, the financial emergency is declared under which article of the Constitution?",
      "opts": ["Article 360", "Article 352", "Article 356", "Article 368"],
      "ans": 0
    },
    {
      "q": "The Parliament of India consists of which of the following?",
      "opts": ["Rajya Sabha", "Lok Sabha", "President", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the maximum number of members that can be nominated to the Rajya Sabha?",
      "opts": ["12", "15", "10", "14"],
      "ans": 0
    },
    {
      "q": "Which article of the Indian Constitution gives the President of India the power to dissolve the Lok Sabha?",
      "opts": ["Article 85", "Article 86", "Article 84", "Article 87"],
      "ans": 0
    },
    {
      "q": "Which of the following fundamental rights is available to only citizens of India?",
      "opts": ["Right to Equality", "Right to Freedom of Speech", "Right to Freedom of Religion", "Right to Residence and Settlement"],
      "ans": 3
    },
    {
      "q": "Which article of the Indian Constitution provides for the right to property as a legal right?",
      "opts": ["Article 19", "Article 21", "Article 31", "Article 32"],
      "ans": 2
    },
    {
      "q": "The 'Basic Structure' doctrine was established in which case?",
      "opts": ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Indira Gandhi Case"],
      "ans": 1
    },
    {
      "q": "Which of the following is a condition for the declaration of a national emergency in India?",
      "opts": ["External aggression", "Armed rebellion", "Internal disturbances", "All of the above"],
      "ans": 3
    },
    {
      "q": "Who is responsible for the formation of the Union Public Service Commission?",
      "opts": ["Prime Minister", "President", "Parliament", "Chief Justice of India"],
      "ans": 1
    },
    {
      "q": "Which of the following is the highest law of the land in India?",
      "opts": ["Supreme Court Judgments", "Indian Constitution", "Parliament Acts", "Executive Orders"],
      "ans": 1
    },
    {
      "q": "In the Indian Constitution, which article contains provisions relating to the amendment of the Constitution?",
      "opts": ["Article 368", "Article 361", "Article 250", "Article 368A"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a part of the Directive Principles of State Policy?",
      "opts": ["Right to Education", "Right to Work", "Promotion of Gandhian principles", "Uniform Civil Code"],
      "ans": 0
    },
    {
      "q": "What is the maximum period for the imposition of President's rule under Article 356 of the Indian Constitution?",
      "opts": ["3 months", "6 months", "1 year", "2 years"],
      "ans": 2
    },
    {
      "q": "Which article of the Indian Constitution mandates that the state shall not discriminate against any citizen on the grounds of religion, race, caste, sex, or place of birth?",
      "opts": ["Article 14", "Article 15", "Article 16", "Article 17"],
      "ans": 1
    },
    {
      "q": "Which of the following writs can be issued to command a lower court to transfer a case to a higher court?",
      "opts": ["Certiorari", "Mandamus", "Quo Warranto", "Prohibition"],
      "ans": 0
    },
    {
      "q": "In the Indian Constitution, the provision for the establishment of a Finance Commission is mentioned in which article?",
      "opts": ["Article 280", "Article 330", "Article 366", "Article 368"],
      "ans": 0
    },
    {
      "q": "Which of the following is a non-justiciable right under the Indian Constitution?",
      "opts": ["Right to Life", "Right to Freedom of Speech", "Right to Property", "Directive Principles of State Policy"],
      "ans": 3
    },
    {
      "q": "The Supreme Court of India has original jurisdiction in which matter?",
      "opts": ["Disputes between states", "Disputes between the President and the Prime Minister", "Disputes between citizens and the state", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the maximum number of judges that can sit in the Supreme Court of India?",
      "opts": ["15", "17", "22", "25"],
      "ans": 2
    },
    {
      "q": "Which article of the Indian Constitution relates to the impeachment of the President?",
      "opts": ["Article 61", "Article 50", "Article 44", "Article 49"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a feature of the Indian Constitution?",
      "opts": ["Federal structure", "Parliamentary system", "Written constitution", "Unitary system"],
      "ans": 3
    },
    {
      "q": "What is the power of the President of India in the matter of dissolving the Lok Sabha?",
      "opts": ["Unlimited", "Restricted", "Can be done only after 5 years", "Cannot be done"],
      "ans": 1
    },
    {
      "q": "Which of the following articles of the Indian Constitution deals with the formation of new states?",
      "opts": ["Article 3", "Article 5", "Article 10", "Article 11"],
      "ans": 0
    },
    {
      "q": "The concept of 'Single Citizenship' is a feature of which country's Constitution?",
      "opts": ["USA", "UK", "India", "Canada"],
      "ans": 2
    },
    {
      "q": "The Governor of a State in India holds office for a term of how many years?",
      "opts": ["3 years", "4 years", "5 years", "6 years"],
      "ans": 2
    },
    {
      "q": "Which of the following is true about the Parliament of India?",
      "opts": ["Bicameral", "Unicameral", "Elected body", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following writs is issued by a higher court to prevent the lower court from exceeding its jurisdiction?",
      "opts": ["Mandamus", "Certiorari", "Prohibition", "Quo Warranto"],
      "ans": 2
    },
    {
      "q": "The powers of the President of India can be exercised by which of the following?",
      "opts": ["Prime Minister", "Council of Ministers", "Cabinet Secretary", "Both 1 and 2"],
      "ans": 3
    },
    {
      "q": "Which article of the Indian Constitution deals with the distribution of legislative powers between the Union and the States?",
      "opts": ["Article 248", "Article 245", "Article 50", "Article 68"],
      "ans": 1
    },
    {
      "q": "Which of the following is an example of the 'Parliamentary Sovereignty' system?",
      "opts": ["India", "UK", "USA", "Canada"],
      "ans": 1
    },
    {
      "q": "Which article of the Indian Constitution defines the procedure of impeachment of a President?",
      "opts": ["Article 61", "Article 67", "Article 69", "Article 70"],
      "ans": 0
    },
    {
      "q": "The power of judicial review in India is vested in which body?",
      "opts": ["Supreme Court", "High Courts", "Parliament", "Executive"],
      "ans": 0
    },
    {
      "q": "Which article of the Indian Constitution lays down the procedure for the amendment of the Constitution?",
      "opts": ["Article 368", "Article 370", "Article 32", "Article 35"],
      "ans": 0
    }
    ,



    { "q": "Which of the following courts has the power of judicial review?", "opts": ["Supreme Court", "High Court", "District Court", "Both Supreme and High Court"], "ans": 3 },
    { "q": "What is the primary role of the executive branch?", "opts": ["Making laws", "Enforcing laws", "Interpreting laws", "Advising the legislature"], "ans": 1 },
    { "q": "Which fundamental right protects against discrimination?", "opts": ["Right to Equality", "Right to Freedom", "Right to Life", "Right to Privacy"], "ans": 0 },
    { "q": "What does 'sub judice' mean?", "opts": ["Under judicial consideration", "Under investigation", "Before the Supreme Court", "Closed case"], "ans": 0 },
    { "q": "Which of the following is an important feature of a democratic government?", "opts": ["Rule of law", "Arbitrary power", "Monarchy", "Totalitarianism"], "ans": 0 },
    { "q": "What does 'tort' mean in law?", "opts": ["A crime", "A civil wrong", "A contract", "A statute"], "ans": 1 },
    { "q": "Which of the following is NOT a source of law?", "opts": ["Legislation", "Custom", "Judicial precedent", "Public opinion"], "ans": 3 },
    { "q": "What is the meaning of 'legal standing'?", "opts": ["Right to appear in court", "Right to vote", "Right to be heard", "Right to appeal"], "ans": 0 },
    { "q": "Which article of the Indian Constitution deals with the right to freedom of speech?", "opts": ["Article 19", "Article 21", "Article 14", "Article 32"], "ans": 0 },
    { "q": "Who has the power to appoint the Chief Justice of India?", "opts": ["President", "Prime Minister", "Parliament", "Supreme Court"], "ans": 0 },
    { "q": "What is the maximum age for a High Court judge?", "opts": ["62 years", "65 years", "68 years", "60 years"], "ans": 1 },
    { "q": "Which fundamental right is related to the protection of life and personal liberty?", "opts": ["Right to Equality", "Right to Freedom", "Right to Life", "Right against Exploitation"], "ans": 2 },
    { "q": "What does 'mens rea' mean?", "opts": ["Guilty mind", "Actus reus", "Legal intent", "Civil liability"], "ans": 0 },
    { "q": "Which of the following is not a part of the Indian Parliament?", "opts": ["Lok Sabha", "Rajya Sabha", "President", "Legislative Assembly"], "ans": 3 },
    { "q": "What is the purpose of a writ of habeas corpus?", "opts": ["To secure the release of a person", "To ensure fair trial", "To protect rights", "To prohibit illegal detention"], "ans": 3 },
    { "q": "Under which act is the Right to Information granted?", "opts": ["RTI Act, 2005", "Information Act, 2000", "Right to Information Act, 2010", "Transparency Act, 2005"], "ans": 0 },
    { "q": "What does 'pro bono' mean?", "opts": ["For the public good", "For profit", "For charity", "For personal gain"], "ans": 0 },
    { "q": "Which doctrine relates to the separation of powers?", "opts": ["Doctrine of Necessity", "Doctrine of Precedent", "Doctrine of Separation of Powers", "Doctrine of Judicial Review"], "ans": 2 },
    { "q": "Which of the following is a non-justiciable right?", "opts": ["Right to equality", "Right to education", "Right to property", "Right to freedom of religion"], "ans": 2 },
    { "q": "Who can initiate impeachment proceedings against the President?", "opts": ["Vice President", "Lok Sabha", "Rajya Sabha", "Supreme Court"], "ans": 1 },
    { "q": "What is the term for a law that is declared unconstitutional?", "opts": ["Void", "Null", "Illegal", "All of the above"], "ans": 0 },
    { "q": "Which amendment of the Constitution abolished the Privy Purses?", "opts": ["35th", "26th", "44th", "42nd"], "ans": 2 },
    { "q": "What is the maximum strength of Lok Sabha?", "opts": ["500", "550", "600", "750"], "ans": 1 },
    { "q": "Which of the following is a directive principle of state policy?", "opts": ["Right to vote", "Right to education", "Right to property", "Right to work"], "ans": 1 },
    { "q": "Which article of the Constitution relates to the protection against arrest and detention?", "opts": ["Article 22", "Article 20", "Article 21", "Article 19"], "ans": 0 },
    { "q": "What is the term for the power of a court to review the actions of other branches?", "opts": ["Judicial Review", "Judicial Activism", "Judicial Restraint", "Judicial Oversight"], "ans": 0 },
    { "q": "Which of the following is not a constitutional body?", "opts": ["Election Commission", "Finance Commission", "National Human Rights Commission", "Planning Commission"], "ans": 2 },
    { "q": "What does 'ratio decidendi' refer to in a court judgment?", "opts": ["Reason for the decision", "Legal principle", "Judgment summary", "Precedent"], "ans": 0 },
    { "q": "Who can grant pardons under Article 72?", "opts": ["Chief Justice", "President", "Prime Minister", "Parliament"], "ans": 1 },
    { "q": "What is 'legal aid'?", "opts": ["Assistance in legal matters", "Legal advice", "Financial aid for litigation", "All of the above"], "ans": 3 },
    { "q": "Which of the following is not a type of plea in court?", "opts": ["Plea of guilty", "Plea of insanity", "Plea bargain", "Plea of immunity"], "ans": 3 },
    { "q": "Which of the following is a source of international law?", "opts": ["Custom", "Treaties", "Judicial decisions", "All of the above"], "ans": 3 },
    { "q": "What is the age of majority according to the Indian Majority Act?", "opts": ["18 years", "21 years", "16 years", "20 years"], "ans": 0 },
    { "q": "What does 'ex parte' mean?", "opts": ["By one party", "In the presence of both parties", "Without notice", "Closed hearing"], "ans": 0 },
    { "q": "Which article provides for the establishment of the Supreme Court?", "opts": ["Article 124", "Article 131", "Article 145", "Article 226"], "ans": 0 },
    { "q": "What is the main purpose of the Arbitration and Conciliation Act?", "opts": ["To provide for alternative dispute resolution", "To regulate court procedures", "To enforce contracts", "To adjudicate disputes"], "ans": 0 },
    { "q": "What does 'ad litem' mean?", "opts": ["For the lawsuit", "In the interim", "Pending resolution", "Legal standing"], "ans": 0 },
    { "q": "Which of the following is a fundamental duty?", "opts": ["To abide by the Constitution", "To vote", "To pay taxes", "To serve in the military"], "ans": 0 },
    { "q": "What is the role of the Public Interest Litigation (PIL)?", "opts": ["To protect individual rights", "To address collective issues", "To provide legal aid", "To challenge government actions"], "ans": 1 },
    { "q": "Which of the following is true about the Lok Sabha?", "opts": ["Members are elected for 5 years", "Can be dissolved by the President", "Has more powers than Rajya Sabha", "All of the above"], "ans": 3 },
    { "q": "Which case established the principle of 'basic structure' of the Constitution?", "opts": ["Kesavananda Bharati case", "Minerva Mills case", "Maneka Gandhi case", "Keshavananda Bharati case"], "ans": 0 },
    { "q": "What does 'stare decisis' mean?", "opts": ["To stand by things decided", "To interpret the law", "To apply the law", "To review the law"], "ans": 0 },
    { "q": "Who presides over the sessions of the Rajya Sabha?", "opts": ["President", "Vice President", "Speaker", "Prime Minister"], "ans": 1 },
    { "q": "Which of the following rights is not justiciable?", "opts": ["Right to Equality", "Right to Freedom", "Right to Work", "Right to Education"], "ans": 2 },
    { "q": "What is the principle of 'double jeopardy'?", "opts": ["Cannot be tried for the same offense twice", "Can appeal a verdict", "Can be tried in different courts", "None of the above"], "ans": 0 },
    { "q": "Which amendment granted the right to vote to all citizens above 18 years?", "opts": ["61st", "73rd", "86th", "52nd"], "ans": 0 }
    , { "q": "Which of the following is a part of the Constitution of India?", "opts": ["Preamble", "Fundamental Duties", "Directive Principles", "All of the above"], "ans": 3 },
    { "q": "What does 'actus reus' refer to in criminal law?", "opts": ["Guilty mind", "The physical act of the crime", "Legal justification", "Intent to commit a crime"], "ans": 1 },
    { "q": "Which article of the Indian Constitution provides for the right to constitutional remedies?", "opts": ["Article 32", "Article 14", "Article 21", "Article 19"], "ans": 0 },
    { "q": "What is the maximum strength of the Rajya Sabha?", "opts": ["250", "300", "200", "100"], "ans": 0 },
    { "q": "What does 'obiter dicta' mean?", "opts": ["Necessary remarks", "Additional comments", "Legal binding", "None of the above"], "ans": 1 },
    { "q": "Which doctrine allows courts to create law through judicial precedents?", "opts": ["Doctrine of Separation of Powers", "Doctrine of Precedent", "Doctrine of Necessity", "Doctrine of Proportionality"], "ans": 1 },
    { "q": "Under which act is the Right to Information provided?", "opts": ["RTI Act, 2005", "Freedom of Information Act, 2000", "Transparency in Government Act, 2005", "Right to Know Act, 2010"], "ans": 0 },
    { "q": "Who is known as the 'father of Indian Constitution'?", "opts": ["B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "Gandhi"], "ans": 0 },
    { "q": "Which article of the Constitution deals with the appointment of the Attorney General?", "opts": ["Article 76", "Article 78", "Article 80", "Article 83"], "ans": 0 },
    { "q": "What is the minimum age for becoming a member of the Lok Sabha?", "opts": ["25 years", "30 years", "21 years", "18 years"], "ans": 0 },
    { "q": "Which of the following is a ground for divorce under the Hindu Marriage Act?", "opts": ["Desertion", "Conversion", "Mental disorder", "All of the above"], "ans": 3 },
    { "q": "What is meant by 'res judicata'?", "opts": ["A matter already judged", "A new trial", "Legal standing", "None of the above"], "ans": 0 },
    { "q": "Which fundamental right is guaranteed under Article 21?", "opts": ["Right to Education", "Right to Life", "Right to Freedom", "Right to Property"], "ans": 1 },
    { "q": "What does 'ipso facto' mean?", "opts": ["By the fact itself", "On the contrary", "As a result", "Under the law"], "ans": 0 },
    { "q": "Which body is responsible for the appointment of the Chief Election Commissioner?", "opts": ["President", "Parliament", "Prime Minister", "Election Commission"], "ans": 0 },
    { "q": "What is the primary function of the judiciary?", "opts": ["Enacting laws", "Interpreting laws", "Executing laws", "Advising the legislature"], "ans": 1 },
    { "q": "Which of the following is a non-justiciable right?", "opts": ["Right to Life", "Right to Education", "Right to Property", "Right to Equality"], "ans": 2 },
    { "q": "What is the maximum punishment for the offense of murder under Indian law?", "opts": ["Life imprisonment", "Death penalty", "10 years imprisonment", "7 years imprisonment"], "ans": 1 },
    { "q": "Who can be impeached under the Indian Constitution?", "opts": ["President", "Vice President", "Judges of the Supreme Court", "All of the above"], "ans": 3 },
    { "q": "Which of the following is a provision of the Consumer Protection Act?", "opts": ["Right to Information", "Right to Safety", "Right to Privacy", "Right to Education"], "ans": 1 },
    { "q": "What does 'parens patriae' mean?", "opts": ["Parent of the nation", "Guardian of the public", "Protector of rights", "None of the above"], "ans": 0 },
    { "q": "Which Article of the Constitution provides for the abolition of untouchability?", "opts": ["Article 17", "Article 18", "Article 19", "Article 21"], "ans": 0 },
    { "q": "What is the age of consent for marriage under the Prohibition of Child Marriage Act?", "opts": ["18 years for girls, 21 years for boys", "16 years for girls, 18 years for boys", "18 years for both", "21 years for both"], "ans": 0 },
    { "q": "Which of the following is not a constitutional body?", "opts": ["National Human Rights Commission", "Election Commission", "Finance Commission", "Union Public Service Commission"], "ans": 0 },
    { "q": "What does 'quo warranto' mean?", "opts": ["By what authority", "Under what right", "By what means", "None of the above"], "ans": 0 },
    { "q": "Which article governs the appointment of Governors in states?", "opts": ["Article 153", "Article 160", "Article 161", "Article 164"], "ans": 0 },
    { "q": "What is the principle of 'exclusionary rule'?", "opts": ["Excludes hearsay evidence", "Excludes evidence obtained illegally", "Excludes irrelevant evidence", "Excludes all non-judicial evidence"], "ans": 1 },
    { "q": "Who has the power to dissolve the Lok Sabha?", "opts": ["President", "Prime Minister", "Speaker", "Deputy Speaker"], "ans": 0 },
    { "q": "What is the concept of 'judicial activism'?", "opts": ["Judiciary taking an active role", "Judiciary restraining itself", "Judiciary avoiding social issues", "Judiciary focusing only on legal aspects"], "ans": 0 },
    { "q": "Which of the following rights was added by the 86th Amendment?", "opts": ["Right to Education", "Right to Information", "Right to Work", "Right to Health"], "ans": 0 },
    { "q": "Which Article in the Indian Constitution relates to the amendment procedure?", "opts": ["Article 368", "Article 356", "Article 370", "Article 14"], "ans": 0 },
    { "q": "What is meant by 'legal fiction'?", "opts": ["Assumption of a fact", "False statement in law", "Legal misinterpretation", "None of the above"], "ans": 0 },
    { "q": "Which case established the concept of 'basic structure' of the Constitution?", "opts": ["Kesavananda Bharati case", "Minerva Mills case", "Maneka Gandhi case", "Golaknath case"], "ans": 0 },
    { "q": "Who is the chief legal advisor to the government of India?", "opts": ["Solicitor General", "Attorney General", "Advocate General", "Chief Justice"], "ans": 1 },
    { "q": "Which Article of the Constitution provides for the protection of the interests of minorities?", "opts": ["Article 29", "Article 30", "Both Article 29 and 30", "Article 31"], "ans": 2 },
    { "q": "What is the role of the National Green Tribunal?", "opts": ["Environmental protection", "Water rights", "Human rights", "Land rights"], "ans": 0 },
    { "q": "Which article protects the rights of children?", "opts": ["Article 21", "Article 24", "Article 19", "Article 39"], "ans": 1 },
    { "q": "Which of the following is a ground for an appeal under the Civil Procedure Code?", "opts": ["Error in law", "Error in facts", "Lack of jurisdiction", "All of the above"], "ans": 3 },
    { "q": "What does 'sine die' mean?", "opts": ["Without a date", "Without an end", "Indefinitely", "Both a and c"], "ans": 3 },
    { "q": "Which court has original jurisdiction over disputes between states?", "opts": ["Supreme Court", "High Court", "District Court", "All of the above"], "ans": 0 },
    { "q": "What is the role of the Legal Services Authority?", "opts": ["To provide free legal services", "To enforce laws", "To prosecute offenders", "To advise the government"], "ans": 0 },
    { "q": "Which of the following is not a form of alternative dispute resolution?", "opts": ["Arbitration", "Mediation", "Negotiation", "Trial"], "ans": 3 },
    { "q": "Under which Article can the President of India declare a national emergency?", "opts": ["Article 352", "Article 356", "Article 360", "Article 370"], "ans": 0 },
    { "q": "What is the meaning of 'pro tanto'?", "opts": ["For so much", "As much as", "For that reason", "None of the above"], "ans": 0 },
    { "q": "Which act regulates the registration of firms in India?", "opts": ["Indian Partnership Act, 1932", "Companies Act, 2013", "Limited Liability Partnership Act, 2008", "Indian Contract Act, 1872"], "ans": 0 }
    ,




    { "q": "Which of the following courts has the power of judicial review?", "opts": ["Supreme Court", "High Court", "District Court", "Both Supreme and High Court"], "ans": 3 },
    { "q": "What is the primary role of the executive branch?", "opts": ["Making laws", "Enforcing laws", "Interpreting laws", "Advising the legislature"], "ans": 1 },
    { "q": "Which fundamental right protects against discrimination?", "opts": ["Right to Equality", "Right to Freedom", "Right to Life", "Right to Privacy"], "ans": 0 },
    { "q": "What does 'sub judice' mean?", "opts": ["Under judicial consideration", "Under investigation", "Before the Supreme Court", "Closed case"], "ans": 0 },
    { "q": "Which of the following is an important feature of a democratic government?", "opts": ["Rule of law", "Arbitrary power", "Monarchy", "Totalitarianism"], "ans": 0 },
    { "q": "What does 'tort' mean in law?", "opts": ["A crime", "A civil wrong", "A contract", "A statute"], "ans": 1 },
    { "q": "Which of the following is NOT a source of law?", "opts": ["Legislation", "Custom", "Judicial precedent", "Public opinion"], "ans": 3 },
    { "q": "What is the meaning of 'legal standing'?", "opts": ["Right to appear in court", "Right to vote", "Right to be heard", "Right to appeal"], "ans": 0 },
    { "q": "Which is the highest law in the land?", "opts": ["Common law", "Statutory law", "Constitution", "Administrative law"], "ans": 2 },
    { "q": "What does 'null and void' mean?", "opts": ["Valid and enforceable", "Legally invalid", "Pending approval", "Legally binding"], "ans": 1 },
    { "q": "Who has the authority to amend the Constitution?", "opts": ["Parliament", "President", "Supreme Court", "State Legislatures"], "ans": 0 },
    { "q": "What is a 'plaint'? ", "opts": ["A complaint", "A legal response", "A defense", "An appeal"], "ans": 0 },
    { "q": "Which of the following is a type of injunction?", "opts": ["Prohibitory", "Mandatory", "Restraining", "All of the above"], "ans": 3 },
    { "q": "What does 'in camera' mean in legal proceedings?", "opts": ["In public view", "In private", "In front of a jury", "In front of the judge only"], "ans": 1 },
    { "q": "Which fundamental right is guaranteed under Article 21?", "opts": ["Right to Life", "Right to Equality", "Right to Freedom", "Right to Education"], "ans": 0 },
    { "q": "What is the purpose of the Constitution?", "opts": ["To create laws", "To protect rights", "To provide structure", "All of the above"], "ans": 3 },
    { "q": "What does 'ex parte' mean?", "opts": ["By one party", "By both parties", "By the judge", "By the jury"], "ans": 0 },
    { "q": "Which is the process of resolving disputes through a neutral third party?", "opts": ["Mediation", "Arbitration", "Litigation", "Negotiation"], "ans": 1 },
    { "q": "What is 'contempt of court'?", "opts": ["Disrespecting the court", "Failing to appear", "Not following orders", "All of the above"], "ans": 3 },
    { "q": "What is the term for a legislative proposal that is not yet a law?", "opts": ["Bill", "Statute", "Ordinance", "Resolution"], "ans": 0 },
    { "q": "What does 'bail' mean?", "opts": ["Release from custody", "A legal penalty", "A type of law", "A legal contract"], "ans": 0 },
    { "q": "Which of the following rights is NOT explicitly mentioned in the Constitution?", "opts": ["Right to privacy", "Right to education", "Right to free speech", "Right to equality"], "ans": 0 },
    { "q": "What is 'judicial activism'?", "opts": ["Judges making laws", "Judges interpreting laws", "Judges enforcing laws", "Judges reviewing laws"], "ans": 0 },
    { "q": "Which of the following terms refers to a wrongful act leading to civil liability?", "opts": ["Tort", "Crime", "Contract", "Negligence"], "ans": 0 },
    { "q": "What does 'amicus curiae' mean?", "opts": ["Friend of the court", "Party to a case", "Legal advisor", "Judge's assistant"], "ans": 0 },
    { "q": "Which legal principle prevents double jeopardy?", "opts": ["Nemo debet bis vexari", "Res judicata", "Stare decisis", "In loco parentis"], "ans": 0 },
    { "q": "What does 'voir dire' refer to?", "opts": ["Jury selection", "Cross-examination", "Legal advice", "Trial procedures"], "ans": 0 },
    { "q": "Which of the following is a characteristic of a common law system?", "opts": ["Codified laws", "Precedent-based", "Religious laws", "All of the above"], "ans": 1 },
    { "q": "What does 'de jure' mean?", "opts": ["By law", "In fact", "In practice", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a type of contract?", "opts": ["Written", "Oral", "Implied", "Unenforceable"], "ans": 3 },
    { "q": "What is the legal term for the person accused in a criminal case?", "opts": ["Plaintiff", "Defendant", "Prosecutor", "Witness"], "ans": 1 },
    { "q": "What does 'jurisdiction' refer to?", "opts": ["The right to govern", "The right to hear cases", "The right to enforce laws", "The right to interpret laws"], "ans": 1 },
    { "q": "Which Article deals with the protection of minorities?", "opts": ["Article 29", "Article 30", "Article 31", "Both 29 and 30"], "ans": 3 },
    { "q": "Which of the following is an example of a civil case?", "opts": ["Murder", "Divorce", "Robbery", "Assault"], "ans": 1 },
    { "q": "What is the primary purpose of a contract?", "opts": ["To create obligations", "To transfer property", "To settle disputes", "To enforce laws"], "ans": 0 },
    { "q": "What is the primary function of the judiciary?", "opts": ["Making laws", "Interpreting laws", "Enforcing laws", "Advising the government"], "ans": 1 },
    { "q": "Which of the following is a type of writ?", "opts": ["Habeas Corpus", "Mandamus", "Prohibition", "All of the above"], "ans": 3 },
    { "q": "What does 'pro bono' mean?", "opts": ["For the public good", "For profit", "For educational purposes", "For legal fees"], "ans": 0 },
    { "q": "Which Amendment added the Right to Education?", "opts": ["86th", "85th", "42nd", "44th"], "ans": 0 },
    { "q": "What is 'jurisprudence'?", "opts": ["The study of law", "The practice of law", "The enforcement of law", "The making of law"], "ans": 0 },
    { "q": "Which Article protects the right to freedom of speech?", "opts": ["Article 19", "Article 20", "Article 21", "Article 22"], "ans": 0 },
    { "q": "What is 'habeas corpus'?", "opts": ["A type of legal order", "A crime", "A defense", "A statute"], "ans": 0 },
    { "q": "Which of the following is a non-fundamental right?", "opts": ["Right to Property", "Right to Life", "Right to Freedom", "Right to Equality"], "ans": 0 },
    { "q": "What does 'double jeopardy' mean?", "opts": ["Being tried twice for the same offense", "Being tried for different offenses", "Being acquitted", "None of the above"], "ans": 0 },
    { "q": "Which Article of the Constitution deals with the appointment of the Prime Minister?", "opts": ["Article 75", "Article 74", "Article 73", "Article 72"], "ans": 0 },
    { "q": "What is 'statutory law'?", "opts": ["Law enacted by legislation", "Common law", "Constitutional law", "Administrative law"], "ans": 0 },
    { "q": "Which of the following is NOT a type of criminal offense?", "opts": ["Felony", "Misdemeanor", "Infraction", "Tort"], "ans": 3 },
    { "q": "What is the 'rule of law'?", "opts": ["Law applies to all", "Only the government is bound by law", "Law is arbitrary", "None of the above"], "ans": 0 },
    { "q": "Which court has the authority to hear appeals?", "opts": ["Supreme Court", "High Court", "District Court", "Both Supreme and High Court"], "ans": 3 },
    { "q": "What does 'in limine' mean?", "opts": ["At the beginning", "At the end", "In the middle", "In the court"], "ans": 0 },
    { "q": "What is 'substantive law'?", "opts": ["Law that defines rights", "Law that governs procedure", "Law that interprets statutes", "Law that enforces rules"], "ans": 0 },
    { "q": "Which of the following is a characteristic of a civil case?", "opts": ["Burden of proof is on the plaintiff", "Higher standard of proof", "Criminal sanctions", "None of the above"], "ans": 0 },
    { "q": "What does 'ex post facto' refer to?", "opts": ["After the fact", "Before the fact", "At the same time", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a feature of a federal system?", "opts": ["Single central government", "Division of powers", "Unitary system", "None of the above"], "ans": 1 },
    { "q": "What does 'void ab initio' mean?", "opts": ["Invalid from the beginning", "Valid from the beginning", "Pending approval", "None of the above"], "ans": 0 },
    { "q": "What is 'negligence' in law?", "opts": ["Failure to exercise reasonable care", "Intent to harm", "Criminal intent", "None of the above"], "ans": 0 },
    { "q": "What is the term for the legal principle that prevents the same case from being tried twice?", "opts": ["Double jeopardy", "Res judicata", "Stare decisis", "Habeas corpus"], "ans": 1 },
    { "q": "Which of the following is NOT a requirement for a valid contract?", "opts": ["Offer", "Acceptance", "Intention to create legal relations", "Public interest"], "ans": 3 },
    { "q": "What does 'duty of care' refer to?", "opts": ["Legal obligation to avoid harm", "Obligation to act", "Financial obligation", "None of the above"], "ans": 0 },
    { "q": "Which fundamental right is protected under Article 32?", "opts": ["Right to constitutional remedies", "Right to freedom of speech", "Right to life", "Right to education"], "ans": 0 },
    { "q": "What is 'commercial law'?", "opts": ["Law governing business transactions", "Criminal law", "Family law", "Environmental law"], "ans": 0 },
    { "q": "What is 'intellectual property'?", "opts": ["Property created by the mind", "Real estate", "Tangible assets", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a type of partnership?", "opts": ["General partnership", "Limited partnership", "Limited liability partnership", "All of the above"], "ans": 3 },
    { "q": "What is the meaning of 'plaintiff'?", "opts": ["The party bringing a lawsuit", "The party being sued", "The judge", "The lawyer"], "ans": 0 },
    { "q": "What does 'restorative justice' focus on?", "opts": ["Repairing harm", "Punishing offenders", "Deterring crime", "None of the above"], "ans": 0 },
    { "q": "What is the main purpose of tort law?", "opts": ["To provide compensation for harm", "To punish offenders", "To enforce contracts", "To regulate business"], "ans": 0 },
    { "q": "What does 'tortfeasor' mean?", "opts": ["One who commits a tort", "One who violates a contract", "One who is a witness", "One who defends a case"], "ans": 0 },
    { "q": "Which of the following is NOT a defense to negligence?", "opts": ["Contributory negligence", "Assumption of risk", "Comparative negligence", "Sole responsibility"], "ans": 3 },
    { "q": "What is 'prosecutorial discretion'?", "opts": ["The authority to decide whether to prosecute", "The authority to judge cases", "The authority to create laws", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a requirement for obtaining a search warrant?", "opts": ["Probable cause", "Evidence of guilt", "Proof beyond a reasonable doubt", "None of the above"], "ans": 0 },
    { "q": "What is 'legal precedent'?", "opts": ["A previous court decision", "A new law", "A constitutional amendment", "None of the above"], "ans": 0 },
    { "q": "What does 'ultra vires' mean?", "opts": ["Beyond one's powers", "Within one's powers", "Legal authority", "None of the above"], "ans": 0 },
    { "q": "Which Article allows for the declaration of a national emergency?", "opts": ["Article 352", "Article 356", "Article 360", "All of the above"], "ans": 0 },
    { "q": "What is 'federalism'?", "opts": ["Division of power between central and state governments", "Unitary system", "Totalitarian system", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a characteristic of a valid will?", "opts": ["Testamentary capacity", "Written document", "Free from coercion", "All of the above"], "ans": 3 },
    { "q": "What is the primary objective of the legal system?", "opts": ["To maintain order", "To enforce laws", "To protect rights", "All of the above"], "ans": 3 }, { "q": "What is the highest law of the land?", "opts": ["The Constitution", "Parliamentary laws", "State laws", "International laws"], "ans": 0 },
    { "q": "Which Article deals with the Right to Information?", "opts": ["Article 19", "Article 21", "Article 25", "None of the above"], "ans": 0 },
    { "q": "What is a 'contract'?", "opts": ["An agreement enforceable by law", "A verbal agreement", "An informal agreement", "A written promise"], "ans": 0 },
    { "q": "Which of the following is NOT a fundamental duty?", "opts": ["To respect the Constitution", "To promote harmony", "To work for the government", "To protect the environment"], "ans": 2 },
    { "q": "What does 'mens rea' refer to?", "opts": ["Guilty mind", "Guilty act", "Legal capacity", "Judicial discretion"], "ans": 0 },
    { "q": "Which of the following is a constitutional body?", "opts": ["Election Commission", "Planning Commission", "National Development Council", "None of the above"], "ans": 0 },
    { "q": "What is the minimum age for voting in India?", "opts": ["18 years", "21 years", "25 years", "16 years"], "ans": 0 },
    { "q": "What does 'res judicata' mean?", "opts": ["A matter already judged", "A new case", "An appeal", "A criminal offense"], "ans": 0 },
    { "q": "Which of the following is a non-justiciable right?", "opts": ["Right to Life", "Right to Education", "Right to Property", "Right to Equality"], "ans": 2 },
    { "q": "What is the main role of the President of India?", "opts": ["To make laws", "To execute laws", "To represent the country", "To govern states"], "ans": 2 },
    { "q": "Which Article provides for the establishment of a High Court?", "opts": ["Article 214", "Article 226", "Article 32", "Article 21"], "ans": 0 },
    { "q": "What does 'arbitration' refer to?", "opts": ["Dispute resolution outside courts", "Criminal proceedings", "Civil proceedings", "Administrative hearings"], "ans": 0 },
    { "q": "Which of the following is NOT a type of insurance?", "opts": ["Life Insurance", "Health Insurance", "Liability Insurance", "Business Insurance"], "ans": 3 },
    { "q": "What is the principle of 'legality'?", "opts": ["No one can be punished without law", "Law must be fair", "Law must be enforced", "Law must be public"], "ans": 0 },
    { "q": "Which body has the power to amend the Constitution?", "opts": ["Parliament", "Supreme Court", "President", "State Legislatures"], "ans": 0 },
    { "q": "What is 'bail'?", "opts": ["Release from custody", "Formal charge", "Legal representation", "None of the above"], "ans": 0 },
    { "q": "What does 'ex parte' mean?", "opts": ["From one party only", "From both parties", "In the presence of both parties", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a ground for divorce under Hindu law?", "opts": ["Adultery", "Desertion", "Mental illness", "Infidelity"], "ans": 3 },
    { "q": "What is the 'Doctrine of Precedent'?", "opts": ["Following previous court decisions", "Making new laws", "Overruling old laws", "None of the above"], "ans": 0 },
    { "q": "What is 'contempt of court'?", "opts": ["Disrespecting court orders", "Violating laws", "Disrupting court proceedings", "All of the above"], "ans": 3 },
    { "q": "What is the main purpose of a legal contract?", "opts": ["To define rights and obligations", "To provide information", "To persuade", "To entertain"], "ans": 0 },
    { "q": "Which of the following rights is available to both citizens and non-citizens?", "opts": ["Right to equality", "Right to freedom of speech", "Right to education", "Right to property"], "ans": 1 },
    { "q": "What is the purpose of the Consumer Protection Act?", "opts": ["To protect consumers from exploitation", "To regulate businesses", "To impose taxes", "To provide employment"], "ans": 0 },
    { "q": "What does 'locus standi' mean?", "opts": ["The right to appear in court", "The right to remain silent", "The right to vote", "The right to bear arms"], "ans": 0 },
    { "q": "What is 'homicide'?", "opts": ["Killing of a human being", "Assault", "Theft", "Burglary"], "ans": 0 },
    { "q": "What is the 'Rule of Law'?", "opts": ["No one is above the law", "Law is supreme", "Law is equal for all", "All of the above"], "ans": 3 },
    { "q": "Which of the following is a function of the legislature?", "opts": ["Making laws", "Interpreting laws", "Enforcing laws", "None of the above"], "ans": 0 },
    { "q": "What does 'force majeure' mean?", "opts": ["Unforeseeable circumstances", "Legal obligations", "Voluntary commitments", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a source of law?", "opts": ["Constitution", "Statutes", "Judicial decisions", "All of the above"], "ans": 3 },
    { "q": "What does 'exclusionary rule' refer to?", "opts": ["Exclusion of illegally obtained evidence", "Exclusion of witnesses", "Exclusion of certain laws", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a reason for constitutional amendments?", "opts": ["Social changes", "Political needs", "Judicial interpretations", "None of the above"], "ans": 3 },
    { "q": "What is 'garnishment'?", "opts": ["Legal order to withhold wages", "A type of contract", "A criminal charge", "None of the above"], "ans": 0 },
    { "q": "What does 'admissible evidence' refer to?", "opts": ["Evidence allowed in court", "Evidence not allowed in court", "Personal opinion", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a characteristic of a parliamentary system?", "opts": ["Executive is accountable to the legislature", "Separation of powers", "Fixed terms", "None of the above"], "ans": 0 },
    { "q": "What is 'jurisdiction'?", "opts": ["The authority of a court to hear a case", "The type of law", "The type of trial", "None of the above"], "ans": 0 },
    { "q": "What is 'mitigating circumstance'?", "opts": ["A factor that reduces punishment", "A factor that increases punishment", "A type of crime", "None of the above"], "ans": 0 },
    { "q": "Which Article provides for the protection of children from exploitation?", "opts": ["Article 24", "Article 25", "Article 26", "Article 27"], "ans": 0 },
    { "q": "What does 'bona fide' mean?", "opts": ["In good faith", "In bad faith", "In a hurry", "None of the above"], "ans": 0 },
    { "q": "What is the primary purpose of the Right to Information Act?", "opts": ["To promote transparency", "To provide legal aid", "To punish offenders", "To protect privacy"], "ans": 0 },
    { "q": "What does 'usufruct' refer to?", "opts": ["Right to use and enjoy property", "Right to own property", "Right to sell property", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a type of equitable remedy?", "opts": ["Injunction", "Damages", "Breach of contract", "None of the above"], "ans": 0 },
    { "q": "What is 'negligent misrepresentation'?", "opts": ["False statements made carelessly", "Intentional fraud", "A type of contract", "None of the above"], "ans": 0 },
    { "q": "Which of the following rights is available under Article 21?", "opts": ["Right to privacy", "Right to education", "Right to work", "All of the above"], "ans": 3 }, { "q": "What is the primary objective of the Constitution?", "opts": ["To establish a government", "To guarantee rights", "To protect the nation", "To ensure justice"], "ans": 3 },
    { "q": "Which Article grants freedom of speech?", "opts": ["Article 19", "Article 21", "Article 25", "Article 32"], "ans": 0 },
    { "q": "What does 'stare decisis' mean?", "opts": ["To stand by things decided", "To make new laws", "To appeal a decision", "To review a case"], "ans": 0 },
    { "q": "Which of the following is a non-fundamental right?", "opts": ["Right to property", "Right to equality", "Right to freedom", "Right to life"], "ans": 0 },
    { "q": "What is 'habeas corpus'?", "opts": ["Right to a fair trial", "Protection against unlawful detention", "Right to privacy", "None of the above"], "ans": 1 },
    { "q": "Which Constitutional body conducts elections in India?", "opts": ["Election Commission", "Judiciary", "Legislature", "Executive"], "ans": 0 },
    { "q": "What is the significance of the 73rd Amendment?", "opts": ["Panchayati Raj system", "Reservation for women", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which Article provides for a uniform civil code?", "opts": ["Article 44", "Article 45", "Article 46", "Article 47"], "ans": 0 },
    { "q": "What does 'ultra vires' mean?", "opts": ["Beyond one's power", "Within one's power", "Illegal action", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a ground for divorce under Muslim law?", "opts": ["Irretrievable breakdown", "Adultery", "Desertion", "None of the above"], "ans": 0 },
    { "q": "What does 'quasi-judicial' mean?", "opts": ["Similar to judicial", "Not fully judicial", "Judicial in nature", "None of the above"], "ans": 1 },
    { "q": "Which of the following is a fundamental duty?", "opts": ["To vote in elections", "To promote harmony", "To pay taxes", "To serve in the military"], "ans": 1 },
    { "q": "What is 'tort law'?", "opts": ["Law of civil wrongs", "Criminal law", "Contract law", "Administrative law"], "ans": 0 },
    { "q": "Which Article deals with the Right to Education?", "opts": ["Article 21A", "Article 19", "Article 32", "Article 45"], "ans": 0 },
    { "q": "What is 'diplomatic immunity'?", "opts": ["Protection of diplomats from legal action", "Immunity from taxes", "Legal protection in foreign countries", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a type of contract?", "opts": ["Bilateral", "Unilateral", "Void", "Involuntary"], "ans": 3 },
    { "q": "What does 'audi alteram partem' mean?", "opts": ["Hear the other side", "Justice delayed is justice denied", "The end justifies the means", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a discretionary power of the President?", "opts": ["Appointing the Prime Minister", "Dissolving the Lok Sabha", "Granting pardons", "None of the above"], "ans": 2 },
    { "q": "What is 'sedition'?", "opts": ["Encouraging discontent against the government", "A type of civil disobedience", "Legal protest", "None of the above"], "ans": 0 },
    { "q": "Which Article provides for the protection of minorities?", "opts": ["Article 29", "Article 30", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does 'ne bis in idem' mean?", "opts": ["Not twice in the same matter", "Twice for the same offense", "None of the above", "All of the above"], "ans": 0 },
    { "q": "Which body is responsible for the interpretation of the Constitution?", "opts": ["Supreme Court", "Parliament", "President", "State Legislatures"], "ans": 0 },
    { "q": "What is the 'Social Contract Theory'?", "opts": ["Agreement among individuals", "Government contract", "Legal agreement", "None of the above"], "ans": 0 },
    { "q": "What does 'domicile' refer to?", "opts": ["Permanent residence", "Temporary residence", "Place of birth", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a valid reason for the impeachment of the President?", "opts": ["Violation of Constitution", "Incompetence", "Misbehavior", "Political disagreements"], "ans": 3 },
    { "q": "What is the meaning of 'liability'?", "opts": ["Legal responsibility", "Moral obligation", "Financial obligation", "None of the above"], "ans": 0 },
    { "q": "Which of the following is an example of a statutory body?", "opts": ["University Grants Commission", "Indian Army", "Supreme Court", "None of the above"], "ans": 0 },
    { "q": "What is 'judicial review'?", "opts": ["Power of courts to review laws", "Power to interpret laws", "Power to enforce laws", "None of the above"], "ans": 0 },
    { "q": "Which Article allows the President to legislate during emergencies?", "opts": ["Article 123", "Article 352", "Article 356", "Article 360"], "ans": 0 },
    { "q": "What is the role of the Attorney General?", "opts": ["Chief legal advisor", "Prosecutor", "Defender", "All of the above"], "ans": 0 },
    { "q": "Which of the following is a fundamental right?", "opts": ["Right to property", "Right to education", "Right to equality", "None of the above"], "ans": 2 },
    { "q": "What is 'ex post facto' law?", "opts": ["Law applied retrospectively", "Law applied prospectively", "Current law", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a feature of a welfare state?", "opts": ["Universal healthcare", "Freedom of speech", "Poverty alleviation", "Right to education"], "ans": 1 },
    { "q": "What is the meaning of 'ab initio'?", "opts": ["From the beginning", "From now on", "In the future", "None of the above"], "ans": 0 },
    { "q": "What does 'nolo contendere' mean?", "opts": ["I do not wish to contest", "I plead guilty", "I plead not guilty", "None of the above"], "ans": 0 },
    { "q": "Which of the following rights is NOT absolute?", "opts": ["Right to freedom of speech", "Right to equality", "Right to life", "Right to education"], "ans": 0 },
    { "q": "What is the purpose of the Right to Information Act?", "opts": ["To promote transparency", "To punish corruption", "To enhance public accountability", "All of the above"], "ans": 3 },
    { "q": "Which of the following is a 'non-justiciable' right?", "opts": ["Right to work", "Right to privacy", "Right to education", "Right to freedom of religion"], "ans": 0 },
    { "q": "What does 'pro bono' mean?", "opts": ["For the public good", "Paid service", "Volunteer work", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a requirement for a valid marriage?", "opts": ["Consent", "Capacity", "Legality", "All of the above"], "ans": 3 }
    , { "q": "What is the maximum duration of the Lok Sabha?", "opts": ["4 years", "5 years", "6 years", "3 years"], "ans": 1 },
    { "q": "Which Article relates to the appointment of the Prime Minister?", "opts": ["Article 75", "Article 80", "Article 84", "Article 86"], "ans": 0 },
    { "q": "What is 'judicial activism'?", "opts": ["Judiciary taking proactive role", "Judiciary being passive", "Judiciary ignoring laws", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a non-fundamental duty?", "opts": ["To protect the environment", "To promote brotherhood", "To vote in elections", "To provide education"], "ans": 2 },
    { "q": "What is the age of retirement for Supreme Court judges?", "opts": ["60 years", "65 years", "70 years", "58 years"], "ans": 1 },
    { "q": "Which Article provides for the establishment of a Finance Commission?", "opts": ["Article 280", "Article 300", "Article 370", "Article 450"], "ans": 0 },
    { "q": "What is the concept of 'separation of powers'?", "opts": ["Division of government powers", "Concentration of powers", "Judicial supremacy", "Executive dominance"], "ans": 0 },
    { "q": "Which of the following is NOT a form of intellectual property?", "opts": ["Patents", "Copyrights", "Trademarks", "Public domain"], "ans": 3 },
    { "q": "What is the primary function of the Rajya Sabha?", "opts": ["Represent states", "Control finances", "Enact laws", "None of the above"], "ans": 0 },
    { "q": "Which of the following rights can be suspended during a national emergency?", "opts": ["Right to life", "Right to equality", "Right to freedom", "All of the above"], "ans": 2 },
    { "q": "What does 'mens rea' refer to?", "opts": ["Guilty mind", "Guilty act", "Legal ignorance", "None of the above"], "ans": 0 },
    { "q": "Which Article provides for the right to life?", "opts": ["Article 21", "Article 19", "Article 32", "Article 45"], "ans": 0 },
    { "q": "What is the meaning of 'suo motu'?", "opts": ["On its own motion", "Upon request", "By law", "None of the above"], "ans": 0 },
    { "q": "Which Constitutional Amendment granted the right to education?", "opts": ["86th Amendment", "73rd Amendment", "61st Amendment", "52nd Amendment"], "ans": 0 },
    { "q": "What is the role of the Chief Election Commissioner?", "opts": ["Conduct elections", "Advise the President", "Legislate", "None of the above"], "ans": 0 },
    { "q": "What does 'double jeopardy' refer to?", "opts": ["Trial for the same offense twice", "Trial for different offenses", "Being punished for the same crime", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a power of the President?", "opts": ["Veto laws", "Dissolve Parliament", "Declare emergency", "All of the above"], "ans": 3 },
    { "q": "What is 'compromise' in legal terms?", "opts": ["Settlement of dispute", "Legal punishment", "Judicial review", "None of the above"], "ans": 0 },
    { "q": "What does 'prima facie' mean?", "opts": ["At first glance", "After investigation", "Beyond reasonable doubt", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a characteristic of a parliamentary system?", "opts": ["Fusion of powers", "Rigid constitution", "Single-party dominance", "None of the above"], "ans": 0 },
    { "q": "What is 'arbitration'?", "opts": ["Dispute resolution method", "Criminal procedure", "Civil procedure", "None of the above"], "ans": 0 },
    { "q": "Which of the following rights is available to citizens only?", "opts": ["Right to equality", "Right to freedom", "Right to education", "Right to vote"], "ans": 3 },
    { "q": "What is the role of the Lok Sabha?", "opts": ["Make laws", "Approve budgets", "Represent people", "All of the above"], "ans": 3 },
    { "q": "Which Article empowers the state to make special provisions for women?", "opts": ["Article 15", "Article 16", "Article 20", "Article 30"], "ans": 0 },
    { "q": "What does 'ex parte' mean?", "opts": ["One-sided", "Mutual agreement", "Legal representation", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a legal document?", "opts": ["Contract", "Will", "Deed", "All of the above"], "ans": 3 },
    { "q": "What does 'in camera' mean?", "opts": ["In private", "In public", "In open court", "None of the above"], "ans": 0 },
    { "q": "What is the meaning of 'bona fide'?", "opts": ["In good faith", "Bad faith", "Malicious intent", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a type of bail?", "opts": ["Regular bail", "Interim bail", "Anticipatory bail", "Preventive bail"], "ans": 3 },
    { "q": "What does 'quash' mean?", "opts": ["To reject", "To approve", "To amend", "To uphold"], "ans": 0 },
    { "q": "Which of the following is a ground for divorce?", "opts": ["Adultery", "Cruelty", "Desertion", "All of the above"], "ans": 3 },
    { "q": "What is the primary function of the High Court?", "opts": ["To hear appeals", "To conduct trials", "To legislate", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a constitutional body?", "opts": ["Finance Commission", "National Development Council", "Planning Commission", "None of the above"], "ans": 0 },
    { "q": "What does 'mandamus' mean?", "opts": ["Order to perform a duty", "Prohibition of action", "A declaration", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a limitation on fundamental rights?", "opts": ["Public order", "National security", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the age of majority in India?", "opts": ["18 years", "21 years", "16 years", "25 years"], "ans": 0 },
    { "q": "Which Article protects the rights of minorities?", "opts": ["Article 29", "Article 30", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is 'res judicata'?", "opts": ["A matter already judged", "Pending case", "New evidence", "None of the above"], "ans": 0 },
    { "q": "What is the role of the Ombudsman?", "opts": ["Investigate complaints", "Enforce laws", "Legislate", "None of the above"], "ans": 0 },
    { "q": "What does 'pro se' mean?", "opts": ["Representing oneself", "Represented by an attorney", "In court", "None of the above"], "ans": 0 }
    , { "q": "What is the primary source of law in India?", "opts": ["Constitution", "Legislation", "Judicial precedents", "Customs"], "ans": 0 },
    { "q": "Which Article provides for the abolition of untouchability?", "opts": ["Article 17", "Article 15", "Article 21", "Article 25"], "ans": 0 },
    { "q": "What is the highest court of appeal in India?", "opts": ["High Court", "Supreme Court", "District Court", "Subordinate Court"], "ans": 1 },
    { "q": "Which of the following is NOT a fundamental right?", "opts": ["Right to education", "Right to privacy", "Right to work", "Right to property"], "ans": 3 },
    { "q": "Which Constitutional body conducts elections in India?", "opts": ["Election Commission", "Parliament", "Supreme Court", "None of the above"], "ans": 0 },
    { "q": "What is the function of the Speaker of the Lok Sabha?", "opts": ["Preside over sessions", "Legislate", "Vote", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a type of criminal offense?", "opts": ["Cognizable", "Non-cognizable", "Bailable", "All of the above"], "ans": 3 },
    { "q": "What does 'habeas corpus' mean?", "opts": ["To have the body", "To be free", "To produce evidence", "None of the above"], "ans": 0 },
    { "q": "Which Article deals with the protection of minorities?", "opts": ["Article 29", "Article 30", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is 'judicial review'?", "opts": ["Review of laws", "Power of courts", "Evaluation of evidence", "None of the above"], "ans": 1 },
    { "q": "Which Article provides for the right to free speech?", "opts": ["Article 19", "Article 21", "Article 32", "Article 25"], "ans": 0 },
    { "q": "What does 'tort' refer to?", "opts": ["Civil wrong", "Criminal wrong", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a legal remedy?", "opts": ["Damages", "Injunction", "Specific performance", "All of the above"], "ans": 3 },
    { "q": "What is the primary function of the Attorney General?", "opts": ["Advise the government", "Represent the government in court", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does 'furtherance of justice' mean?", "opts": ["Promoting justice", "Obstructing justice", "Ignoring laws", "None of the above"], "ans": 0 },
    { "q": "Which Article grants the right to information?", "opts": ["Article 19", "Article 21", "Right to Information Act", "Article 32"], "ans": 2 },
    { "q": "What is 'public interest litigation'?", "opts": ["Lawsuit for public interest", "Criminal trial", "Civil case", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a type of evidence?", "opts": ["Direct evidence", "Circumstantial evidence", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does 'pro bono' mean?", "opts": ["For the public good", "For profit", "For private clients", "None of the above"], "ans": 0 },
    { "q": "Which Article provides for the right to assemble peacefully?", "opts": ["Article 19", "Article 21", "Article 25", "Article 32"], "ans": 0 },
    { "q": "What is 'negligence' in law?", "opts": ["Failure to act", "Intentional harm", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "Which of the following can be a witness?", "opts": ["Adult", "Minor", "Incompetent person", "None of the above"], "ans": 0 },
    { "q": "What is the term for a legal agreement?", "opts": ["Contract", "Agreement", "Treaty", "None of the above"], "ans": 0 },
    { "q": "Which Article allows the government to impose reasonable restrictions on rights?", "opts": ["Article 19", "Article 21", "Article 32", "Article 45"], "ans": 0 },
    { "q": "What is the role of the judiciary?", "opts": ["Interpret laws", "Enforce laws", "Create laws", "None of the above"], "ans": 0 },
    { "q": "Which of the following is NOT a type of bail?", "opts": ["Regular bail", "Interim bail", "Preventive bail", "Cognizable bail"], "ans": 3 },
    { "q": "What does 'jurisdiction' refer to?", "opts": ["Authority to decide", "Legal power", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the principle of 'natural justice'?", "opts": ["Fair hearing", "Right to appeal", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a defense in tort?", "opts": ["Consent", "Necessity", "Self-defense", "All of the above"], "ans": 3 },
    { "q": "What is 'mediation'?", "opts": ["Dispute resolution", "Criminal proceeding", "Civil procedure", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a characteristic of a democratic government?", "opts": ["Free elections", "Rule of law", "Accountability", "All of the above"], "ans": 3 },
    { "q": "What does 'legislative supremacy' mean?", "opts": ["Legislature is supreme", "Judiciary is supreme", "Executive is supreme", "None of the above"], "ans": 0 },
    { "q": "Which Article relates to the right to move freely?", "opts": ["Article 19", "Article 21", "Article 32", "Article 45"], "ans": 0 },
    { "q": "What is the significance of the Preamble?", "opts": ["Introductory statement", "Legal provision", "None of the above", "All of the above"], "ans": 0 },
    { "q": "What is the purpose of the Constitution?", "opts": ["Framework for government", "Protection of rights", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which of the following is a type of legislative power?", "opts": ["Exclusive power", "Concurrent power", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does 'discretionary power' refer to?", "opts": ["Power to decide", "Power to legislate", "Power to execute", "None of the above"], "ans": 0 },
    { "q": "Which Article provides for the right to equality?", "opts": ["Article 14", "Article 15", "Article 16", "All of the above"], "ans": 3 },
    { "q": "What is 'punitive damages'?", "opts": ["Compensatory damages", "Exemplary damages", "None of the above", "Both A and B"], "ans": 1 },
    { "q": "Which of the following is a limitation of the right to freedom?", "opts": ["Public order", "Security", "Morality", "All of the above"], "ans": 3 },
    { "q": "What does 'bailment' mean?", "opts": ["Delivery of goods", "Contractual agreement", "Both A and B", "None of the above"], "ans": 2 }


















  ],
  MPPSC: [
    {
      "q": "मध्य प्रदेश का सबसे बड़ा जिला कौन सा है?",
      "opts": ["सागर", "जबलपुर", "इंदौर", "उज्जैन"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश की राजधानी क्या है?",
      "opts": ["ग्वालियर", "जबलपुर", "भोपाल", "इंदौर"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश में कितने जिले हैं?",
      "opts": ["52", "51", "55", "50"],
      "ans": 1
    },
    {
      "q": "कौन सा पर्व मध्य प्रदेश में 'गणेश चतुर्थी' के नाम से मनाया जाता है?",
      "opts": ["दीवाली", "होली", "दशहरा", "गणेश उत्सव"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश का राज्य पशु कौन सा है?",
      "opts": ["गाय", "बकरी", "गिलहरी", "बाघ"],
      "ans": 3
    },
    {
      "q": "किस वर्ष में मध्य प्रदेश राज्य का गठन हुआ था?",
      "opts": ["1950", "1956", "1960", "1972"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश का राज्य पक्षी कौन सा है?",
      "opts": ["पारिजात", "कौआ", "मोर", "गुलाब"],
      "ans": 2
    },
    {
      "q": "किस नदी को 'नर्मदा' के नाम से जाना जाता है?",
      "opts": ["तवा", "सतपुड़ा", "गंगा", "सिंध"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में 'कैलाश' किस जिले में स्थित है?",
      "opts": ["सागर", "कटनी", "उज्जैन", "कन्हान"],
      "ans": 3
    },
    {
      "q": "किस महापुरुष ने 'सत्याग्रह' की नींव रखी?",
      "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश में कौन सा प्रमुख त्योहार 'करेला' के नाम से मनाया जाता है?",
      "opts": ["दीवाली", "होलिका दहन", "मकर संक्रांति", "गणेश चतुर्थी"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश की औसत वार्षिक वर्षा कितनी है?",
      "opts": ["1000 मिमी", "1200 मिमी", "900 मिमी", "800 मिमी"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में सबसे ऊँचा पहाड़ कौन सा है?",
      "opts": ["सातपुड़ा", "विंध्याचल", "नर्मदा", "धूपगढ़"],
      "ans": 3
    },
    {
      "q": "किस अनुच्छेद के अंतर्गत सभी नागरिकों को मताधिकार दिया गया है?",
      "opts": ["326", "325", "324", "327"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश की राज्य भाषा क्या है?",
      "opts": ["हिंदी", "उर्दू", "संस्कृत", "अंग्रेजी"],
      "ans": 0
    },
    {
      "q": "किस वर्ष में 'मध्य प्रदेश लोक सेवा आयोग' की स्थापना हुई थी?",
      "opts": ["1956", "1949", "1960", "1950"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का राज्य गान क्या है?",
      "opts": ["विजयी विश्व तिरंगा प्यारा", "सारे जहाँ से अच्छा", "हम सब का राज्य", "जयहिंद"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश में कुल कितने लोकसभा निर्वाचन क्षेत्र हैं?",
      "opts": ["28", "29", "30", "31"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश का राज्य फल कौन सा है?",
      "opts": ["सेब", "आम", "केला", "अनार"],
      "ans": 1
    },
    {
      "q": "किस प्रमुख नदी का उद्गम मध्य प्रदेश में होता है?",
      "opts": ["सिंधु", "गंगा", "नर्मदा", "यमुना"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश का कौन सा जिला 'भील' जनजाति का निवास स्थान है?",
      "opts": ["इंदौर", "उज्जैन", "बड़वानी", "सागर"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश का कौन सा महल 'ग्वालियर किला' के नाम से जाना जाता है?",
      "opts": ["सागर किला", "ग्वालियर किला", "उज्जैन किला", "जबलपुर किला"],
      "ans": 1
    },
    {
      "q": "किस वर्ष में 'महात्मा गांधी' ने 'दांडी यात्रा' की थी?",
      "opts": ["1930", "1932", "1935", "1942"],
      "ans": 0
    },
    {
      "q": "मध्य प्रदेश में 'जबलपुर' का प्रमुख उद्योग क्या है?",
      "opts": ["कपड़ा", "लकड़ी", "अन्न", "पुल"],
      "ans": 1
    },
    {
      "q": "किस भारतीय महापुरुष को 'जवाहरलाल नेहरू' के नाम से जाना जाता है?",
      "opts": ["पिता", "शिक्षक", "मित्र", "बच्चों के दोस्त"],
      "ans": 3
    },
    {
      "q": "किस पर्व को 'मकर संक्रांति' के नाम से जाना जाता है?",
      "opts": ["दीवाली", "गणेश उत्सव", "छठ", "भाई दूज"],
      "ans": 2
    },
    {
      "q": "भारत में पहला संविधान कब लागू हुआ था?",
      "opts": ["1947", "1950", "1952", "1956"],
      "ans": 1
    },
    {
      "q": "मध्य प्रदेश में किसको 'आधुनिक गायक' के नाम से जाना जाता है?",
      "opts": ["किशोर कुमार", "मोहम्मद रफी", "लता मंगेशकर", "अजित सिंह"],
      "ans": 0
    },
    {
      "q": "किस अनुच्छेद में राज्य की नीति के निर्देशक तत्वों का उल्लेख है?",
      "opts": ["36", "37", "38", "39"],
      "ans": 2
    },
    {
      "q": "मध्य प्रदेश में 'ग्वालियर' किस के लिए प्रसिद्ध है?",
      "opts": ["किला", "हवेली", "जलप्रपात", "तालाब"],
      "ans": 0
    },
    {
      "q": "किस वर्ष में 'अंबेडकर जयंती' मनाई जाती है?",
      "opts": ["14 अप्रैल", "15 अप्रैल", "16 अप्रैल", "17 अप्रैल"],
      "ans": 0
    },
    {
      "q": "किस भारतीय फिल्म को 'गोल्डन ग्लोब' पुरस्कार मिला है?",
      "opts": ["तामस", "गंदा पानी", "बंदूक", "शुभ मंगल सावधान"],
      "ans": 0
    },
    {
      "q": "किस अनुच्छेद के अनुसार भारत के राष्ट्रपति का चुनाव होता है?",
      "opts": ["52", "53", "54", "55"],
      "ans": 1
    },
    {
      "q": "किस त्योहार को 'त्यौहारों का त्यौहार' कहा जाता है?",
      "opts": ["दीवाली", "होलिका दहन", "ईद", "दशहरा"],
      "ans": 0
    },
    {
      "q": "किस भारतीय राज्य की राजधानी 'भोपाल' है?",
      "opts": ["मध्य प्रदेश", "राजस्थान", "उत्तर प्रदेश", "गुजरात"],
      "ans": 0
    },
    {
      "q": "किस खेल को 'राज्य खेल' के रूप में मान्यता प्राप्त है?",
      "opts": ["क्रिकेट", "हॉकी", "बैडमिंटन", "कबड्डी"],
      "ans": 3
    },
    {
      "q": "मध्य प्रदेश का प्रमुख उद्योग कौन सा है?",
      "opts": ["कृषि", "उद्योग", "सेवा", "व्यापार"],
      "ans": 0
    },
    {
      "q": "किस अनुच्छेद में अपील का अधिकार दिया गया है?",
      "opts": ["21", "22", "23", "24"],
      "ans": 0
    }, { "q": "मध्य प्रदेश का सबसे बड़ा जिला कौन सा है?", "opts": ["सागर", "जबलपुर", "इंदौर", "उज्जैन"], "ans": 0 },
    { "q": "मध्य प्रदेश की राजधानी क्या है?", "opts": ["ग्वालियर", "जबलपुर", "भोपाल", "इंदौर"], "ans": 2 },
    { "q": "मध्य प्रदेश में कितने जिले हैं?", "opts": ["52", "51", "55", "50"], "ans": 1 },
    { "q": "कौन सा पर्व मध्य प्रदेश में 'गणेश चतुर्थी' के नाम से मनाया जाता है?", "opts": ["दीवाली", "होली", "दशहरा", "गणेश उत्सव"], "ans": 3 },
    { "q": "मध्य प्रदेश का राज्य पशु कौन सा है?", "opts": ["गाय", "बकरी", "गिलहरी", "बाघ"], "ans": 3 },
    { "q": "किस वर्ष में मध्य प्रदेश राज्य का गठन हुआ था?", "opts": ["1950", "1956", "1960", "1972"], "ans": 1 },
    { "q": "मध्य प्रदेश का राज्य पक्षी कौन सा है?", "opts": ["पारिजात", "कौआ", "मोर", "गुलाब"], "ans": 2 },
    { "q": "किस नदी को 'नर्मदा' के नाम से जाना जाता है?", "opts": ["तवा", "सतपुड़ा", "गंगा", "सिंध"], "ans": 0 },
    { "q": "मध्य प्रदेश में 'कैलाश' किस जिले में स्थित है?", "opts": ["सागर", "कटनी", "उज्जैन", "कन्हान"], "ans": 3 },
    { "q": "किस महापुरुष ने 'सत्याग्रह' की नींव रखी?", "opts": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"], "ans": 1 },
    { "q": "मध्य प्रदेश में कौन सा प्रमुख त्योहार 'करेला' के नाम से मनाया जाता है?", "opts": ["दीवाली", "होलिका दहन", "मकर संक्रांति", "गणेश चतुर्थी"], "ans": 3 },
    { "q": "मध्य प्रदेश की औसत वार्षिक वर्षा कितनी है?", "opts": ["1000 मिमी", "1200 मिमी", "900 मिमी", "800 मिमी"], "ans": 0 },
    { "q": "मध्य प्रदेश में सबसे ऊँचा पहाड़ कौन सा है?", "opts": ["सातपुड़ा", "विंध्याचल", "नर्मदा", "धूपगढ़"], "ans": 3 },
    { "q": "किस अनुच्छेद के अंतर्गत सभी नागरिकों को मताधिकार दिया गया है?", "opts": ["326", "325", "324", "327"], "ans": 0 },
    { "q": "मध्य प्रदेश की राज्य भाषा क्या है?", "opts": ["हिंदी", "उर्दू", "संस्कृत", "अंग्रेजी"], "ans": 0 },
    { "q": "किस वर्ष में 'मध्य प्रदेश लोक सेवा आयोग' की स्थापना हुई थी?", "opts": ["1956", "1949", "1960", "1950"], "ans": 0 },
    { "q": "मध्य प्रदेश का राज्य गान क्या है?", "opts": ["विजयी विश्व तिरंगा प्यारा", "सारे जहाँ से अच्छा", "हम सब का राज्य", "जयहिंद"], "ans": 2 },
    { "q": "मध्य प्रदेश में कुल कितने लोकसभा निर्वाचन क्षेत्र हैं?", "opts": ["28", "29", "30", "31"], "ans": 0 },
    { "q": "मध्य प्रदेश का राज्य फल कौन सा है?", "opts": ["सेब", "आम", "केला", "अनार"], "ans": 1 },
    { "q": "किस प्रमुख नदी का उद्गम मध्य प्रदेश में होता है?", "opts": ["सिंधु", "गंगा", "नर्मदा", "यमुना"], "ans": 2 },
    { "q": "मध्य प्रदेश का कौन सा जिला 'भील' जनजाति का निवास स्थान है?", "opts": ["इंदौर", "उज्जैन", "बड़वानी", "सागर"], "ans": 2 },
    { "q": "मध्य प्रदेश का कौन सा महल 'ग्वालियर किला' के नाम से जाना जाता है?", "opts": ["सागर किला", "ग्वालियर किला", "उज्जैन किला", "जबलपुर किला"], "ans": 1 },
    { "q": "किस वर्ष में 'महात्मा गांधी' ने 'दांडी यात्रा' की थी?", "opts": ["1930", "1932", "1935", "1942"], "ans": 0 },
    { "q": "मध्य प्रदेश में किसको 'आधुनिक गायक' के नाम से जाना जाता है?", "opts": ["किशोर कुमार", "मोहम्मद रफी", "लता मंगेशकर", "अजित सिंह"], "ans": 0 },
    { "q": "किस अनुच्छेद में राज्य की नीति के निर्देशक तत्वों का उल्लेख है?", "opts": ["36", "37", "38", "39"], "ans": 2 },
    { "q": "मध्य प्रदेश में 'ग्वालियर' किस के लिए प्रसिद्ध है?", "opts": ["किला", "हवेली", "जलप्रपात", "तालाब"], "ans": 0 },
    { "q": "किस वर्ष में 'अंबेडकर जयंती' मनाई जाती है?", "opts": ["14 अप्रैल", "15 अप्रैल", "16 अप्रैल", "17 अप्रैल"], "ans": 0 },
    { "q": "किस भारतीय महापुरुष को 'जवाहरलाल नेहरू' के नाम से जाना जाता है?", "opts": ["पिता", "शिक्षक", "मित्र", "बच्चों के दोस्त"], "ans": 3 },
    { "q": "किस त्योहार को 'त्यौहारों का त्यौहार' कहा जाता है?", "opts": ["दीवाली", "होलिका दहन", "ईद", "दशहरा"], "ans": 0 },
    { "q": "किस अनुच्छेद में अपील का अधिकार दिया गया है?", "opts": ["21", "22", "23", "24"], "ans": 0 },
    { "q": "भारत में पहला संविधान कब लागू हुआ था?", "opts": ["1947", "1950", "1952", "1956"], "ans": 1 },
    { "q": "किस खेल को 'राज्य खेल' के रूप में मान्यता प्राप्त है?", "opts": ["क्रिकेट", "हॉकी", "बैडमिंटन", "कबड्डी"], "ans": 3 },
    { "q": "मध्य प्रदेश का प्रमुख उद्योग कौन सा है?", "opts": ["कृषि", "उद्योग", "सेवा", "व्यापार"], "ans": 0 },
    { "q": "किस अनुच्छेद के अनुसार भारत के राष्ट्रपति का चुनाव होता है?", "opts": ["52", "53", "54", "55"], "ans": 1 },
    { "q": "किस भारतीय राज्य की राजधानी 'भोपाल' है?", "opts": ["मध्य प्रदेश", "राजस्थान", "उत्तर प्रदेश", "गुजरात"], "ans": 0 },
    { "q": "किस पर्व को 'मकर संक्रांति' के नाम से जाना जाता है?", "opts": ["दीवाली", "गणेश उत्सव", "छठ", "भाई दूज"], "ans": 2 },
    { "q": "किस अनुच्छेद में संविधान की व्याख्या की गई है?", "opts": ["13", "14", "15", "16"], "ans": 0 },
    { "q": "किस भारतीय फिल्म को 'गोल्डन ग्लोब' पुरस्कार मिला है?", "opts": ["तामस", "गंदा पानी", "बंदूक", "शुभ मंगल सावधान"], "ans": 0 },
    { "q": "मध्य प्रदेश की सबसे बड़ी झील कौन सी है?", "opts": ["सागर झील", "भेड़ाघाट झील", "लखौरी झील", "ग्वालियर झील"], "ans": 0 },
    { "q": "किस नदी को 'पवित्र नदी' माना जाता है?", "opts": ["सिंध", "नर्मदा", "गंगा", "यमुना"], "ans": 1 },
    { "q": "मध्य प्रदेश का राज्य नारा क्या है?", "opts": ["सर्वे भवन्तु सुखिनः", "जय जवान, जय किसान", "मध्य प्रदेश - मस्तिष्क प्रदेश", "सर्वे सन्तु निरामयाः"], "ans": 2 },
    { "q": "किस जीव जन्तु को 'राज्य पशु' घोषित किया गया है?", "opts": ["गिलहरी", "बाघ", "गधा", "सांप"], "ans": 1 },
    { "q": "मध्य प्रदेश में 'खजुराहो' का क्या महत्व है?", "opts": ["धार्मिक स्थल", "ऐतिहासिक स्थल", "प्राकृतिक स्थल", "कृषि स्थल"], "ans": 1 },
    { "q": "किस वर्ष में 'मध्य प्रदेश कृषि विश्वविद्यालय' की स्थापना हुई थी?", "opts": ["1964", "1968", "1972", "1976"], "ans": 1 },
    { "q": "किस पर्व को 'छठ पूजा' के रूप में मनाया जाता है?", "opts": ["दीवाली", "होलिका दहन", "सूर्य पूजा", "गणेश उत्सव"], "ans": 2 },
    { "q": "मध्य प्रदेश का कौन सा शहर 'राजधानी' के रूप में जाना जाता है?", "opts": ["इंदौर", "भोपाल", "ग्वालियर", "जबलपुर"], "ans": 1 },
    { "q": "किस अनुच्छेद में शिक्षा का अधिकार दिया गया है?", "opts": ["21", "19", "45", "32"], "ans": 2 },
    { "q": "मध्य प्रदेश का राज्य फूल कौन सा है?", "opts": ["कमल", "गुलाब", "चंपा", "जूही"], "ans": 0 },
    { "q": "किस नदी का जल विद्युत केंद्र 'सरदार सरोवर' के नाम से जाना जाता है?", "opts": ["नर्मदा", "गंगा", "सिंधु", "यमुना"], "ans": 0 },
    { "q": "किस त्योहार को 'त्यौहारों का राजा' कहा जाता है?", "opts": ["दीवाली", "होलिका दहन", "ईद", "रक्षाबंधन"], "ans": 0 },
    { "q": "किस अनुच्छेद के अंतर्गत सभी नागरिकों को समानता का अधिकार है?", "opts": ["14", "15", "16", "17"], "ans": 0 },
    { "q": "किस महापुरुष को 'बाबा साहेब' कहा जाता है?", "opts": ["महात्मा गांधी", "डॉ. भीमराव अंबेडकर", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"], "ans": 1 },
    { "q": "मध्य प्रदेश में 'संकल्प' कार्यक्रम किससे संबंधित है?", "opts": ["शिक्षा", "स्वास्थ्य", "कृषि", "विज्ञान"], "ans": 0 },
    { "q": "किस वर्ष में 'मध्य प्रदेश विधान सभा' का गठन हुआ था?", "opts": ["1956", "1960", "1952", "1949"], "ans": 0 },
    { "q": "किस नदी का नाम 'बेतवा' है?", "opts": ["सिंध", "नर्मदा", "गंगा", "यमुना"], "ans": 0 },
    { "q": "किस महापुरुष का जन्मदिन 14 अप्रैल को मनाया जाता है?", "opts": ["महात्मा गांधी", "डॉ. भीमराव अंबेडकर", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"], "ans": 1 },
    { "q": "किस जीव को 'राज्य पक्षी' कहा जाता है?", "opts": ["मोर", "गुलाब", "कौआ", "चिड़िया"], "ans": 0 },
    { "q": "किस पर्व को 'बासंतिक पंचमी' के नाम से जाना जाता है?", "opts": ["दीवाली", "होली", "सरस्वती पूजा", "रक्षाबंधन"], "ans": 2 },
    { "q": "किस अनुच्छेद के अनुसार 'भारत का राष्ट्रपति' चुना जाता है?", "opts": ["52", "53", "54", "55"], "ans": 1 },
    { "q": "किस वर्ष में 'भारत का संविधान' लागू हुआ था?", "opts": ["1950", "1949", "1947", "1952"], "ans": 0 },
    { "q": "किस भारतीय महापुरुष ने 'सत्याग्रह' की नींव रखी?", "opts": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "डॉ. भीमराव अंबेडकर"], "ans": 0 },
    { "q": "किस खेल को 'राज्य खेल' के रूप में मान्यता प्राप्त है?", "opts": ["क्रिकेट", "हॉकी", "बैडमिंटन", "कबड्डी"], "ans": 3 },
    { "q": "किस अनुच्छेद में 'भ्रष्टाचार' के खिलाफ कानून का उल्लेख है?", "opts": ["13", "14", "15", "16"], "ans": 0 },
    { "q": "किस महापुरुष को 'शेर-ए-पंजाब' के नाम से जाना जाता है?", "opts": ["सुभाष चंद्र बोस", "भगत सिंह", "रविंद्र नाथ ठाकुर", "रानी झाँसी"], "ans": 1 },
    { "q": "किस पर्व को 'गणेश चतुर्थी' के नाम से मनाया जाता है?", "opts": ["दीवाली", "होली", "गणेश उत्सव", "मकर संक्रांति"], "ans": 2 },
    { "q": "किस अनुच्छेद में 'समाजवाद' का उल्लेख है?", "opts": ["14", "15", "16", "17"], "ans": 0 },
    { "q": "किस पर्व को 'शादी का पर्व' कहा जाता है?", "opts": ["दीवाली", "होलिका दहन", "ईद", "रक्षाबंधन"], "ans": 3 },
    { "q": "किस नदी का जल विद्युत केंद्र 'नर्मदा' है?", "opts": ["सिंध", "गंगा", "यमुना", "नर्मदा"], "ans": 3 },
    { "q": "किस अनुच्छेद में 'व्यक्तिगत स्वतंत्रता' का अधिकार दिया गया है?", "opts": ["19", "20", "21", "22"], "ans": 2 },
    { "q": "किस खेल का विश्व कप 'क्रिकेट' के नाम से जाना जाता है?", "opts": ["फुटबॉल", "हॉकी", "बैडमिंटन", "क्रिकेट"], "ans": 3 },
    { "q": "किस अनुच्छेद में 'मौलिक अधिकार' का उल्लेख है?", "opts": ["21", "22", "23", "24"], "ans": 0 },
    { "q": "किस महापुरुष का जन्मदिन 2 अक्टूबर को मनाया जाता है?", "opts": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"], "ans": 0 },
    { "q": "किस पर्व को 'मकर संक्रांति' के नाम से जाना जाता है?", "opts": ["दीवाली", "गणेश उत्सव", "छठ", "भाई दूज"], "ans": 2 },
    { "q": "किस अनुच्छेद में 'राजनीतिक दल' का उल्लेख है?", "opts": ["13", "14", "15", "16"], "ans": 0 },
    { "q": "किस भारतीय महापुरुष ने 'स्वतंत्रता संग्राम' में योगदान दिया?", "opts": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "डॉ. भीमराव अंबेडकर"], "ans": 1 },
    { "q": "किस पर्व को 'त्यौहारों का त्यौहार' कहा जाता है?", "opts": ["दीवाली", "होलिका दहन", "ईद", "दशहरा"], "ans": 0 },
    { "q": "मध्य प्रदेश का राज्य पुष्प क्या है?", "opts": ["कमल", "गुलाब", "आम", "चमेली"], "ans": 0 },
    { "q": "मध्य प्रदेश के कौन से जिले में कांची नदी बहती है?", "opts": ["सागर", "उज्जैन", "छिंदवाड़ा", "जबलपुर"], "ans": 1 },
    { "q": "मध्य प्रदेश का सबसे बड़ा शहर कौन सा है?", "opts": ["भोपाल", "इंदौर", "जबलपुर", "ग्वालियर"], "ans": 1 },
    { "q": "मध्य प्रदेश का ऐतिहासिक किला कौन सा है?", "opts": ["ग्वालियर किला", "कनखल किला", "राजमहल किला", "खजुराहो किला"], "ans": 0 },
    { "q": "कौन सा त्योहार मध्य प्रदेश में मनाया जाता है?", "opts": ["दीवाली", "होलिका", "सूरज उत्सव", "भाई दूज"], "ans": 2 },
    { "q": "मध्य प्रदेश का राजकीय पशु कौन है?", "opts": ["बाघ", "गिलहरी", "गधा", "चूहा"], "ans": 0 },
    { "q": "मध्य प्रदेश का राज्य नारा क्या है?", "opts": ["सर्वे भवन्तु सुखिनः", "पारमिति लघुत्व", "संगठन में शक्ति", "मध्य प्रदेश में हरियाली"], "ans": 2 },
    { "q": "मध्य प्रदेश की प्रमुख नदियों में से कौन सी है?", "opts": ["नर्मदा", "गंगा", "यमुना", "सुंदरबन"], "ans": 0 },
    { "q": "मध्य प्रदेश का क्षेत्रफल कितना है?", "opts": ["3.08 लाख वर्ग किलोमीटर", "2.80 लाख वर्ग किलोमीटर", "3.25 लाख वर्ग किलोमीटर", "4.00 लाख वर्ग किलोमीटर"], "ans": 0 },
    { "q": "कौन सा नगर मध्य प्रदेश की राजधानी है?", "opts": ["भोपाल", "जबलपुर", "इंदौर", "ग्वालियर"], "ans": 0 },
    { "q": "मध्य प्रदेश में कुल कितने जिले हैं?", "opts": ["52", "50", "48", "54"], "ans": 0 },
    { "q": "कौन सी भाषा मध्य प्रदेश की राजकीय भाषा है?", "opts": ["हिंदी", "उर्दू", "संस्कृत", "अंग्रेजी"], "ans": 0 },
    { "q": "मध्य प्रदेश का सबसे ऊँचा पर्वत कौन सा है?", "opts": ["फुटीझील", "कंचनजंगा", "सतपुड़ा", "Vindhyas"], "ans": 2 },
    { "q": "मध्य प्रदेश के किस जिले में खजुराहो का मंदिर है?", "opts": ["छतरपुर", "सागर", "उज्जैन", "रीवा"], "ans": 0 },
    { "q": "मध्य प्रदेश में सबसे अधिक कृषि उत्पादन किसका है?", "opts": ["गेहूँ", "धान", "ज्वार", "चना"], "ans": 1 },
    { "q": "मध्य प्रदेश का राज्य पक्षी कौन है?", "opts": ["गौरेया", "कौआ", "चिड़िया", "हिरन"], "ans": 0 },
    { "q": "मध्य प्रदेश के किस पर्वत श्रृंखला को सतपुड़ा कहा जाता है?", "opts": ["Vindhyas", "सतपुड़ा", "गढ़वाल", "कर्मा"], "ans": 1 },
    { "q": "कौन सा जिला मध्य प्रदेश के उत्तर में स्थित है?", "opts": ["ग्वालियर", "सागर", "उज्जैन", "कटनी"], "ans": 0 },
    { "q": "मध्य प्रदेश का पहला मुख्यमंत्री कौन था?", "opts": ["ब्रह्मदत्त", "दिग्विजय सिंह", "रवि शंकर शुक्ल", "सुभाष चंद्र बोस"], "ans": 2 },
    { "q": "कौन सा त्योहार मध्य प्रदेश में खास तौर पर मनाया जाता है?", "opts": ["गणेश चतुर्थी", "दीवाली", "गुरुपर्व", "टिहरी"], "ans": 3 },
    { "q": "किस नदी का जलग्रहण क्षेत्र मध्य प्रदेश में है?", "opts": ["नर्मदा", "सतपुड़ा", "गंगा", "यमुना"], "ans": 0 },
    { "q": "कौन सी औद्योगिक क्षेत्र मध्य प्रदेश में है?", "opts": ["किर्णा", "पीथमपुर", "ग्वालियर", "सागर"], "ans": 1 },
    { "q": "मध्य प्रदेश में मुख्य रूप से कौन सी फसल होती है?", "opts": ["गन्ना", "आलू", "धान", "चना"], "ans": 2 },
    { "q": "मध्य प्रदेश का लोकप्रिय व्यंजन कौन सा है?", "opts": ["दाल बाफला", "संदेश", "सर्वसिद्धी", "पकोड़े"], "ans": 0 },
    { "q": "मध्य प्रदेश में प्रमुख उद्योग क्या हैं?", "opts": ["कपास", "सरसों", "गुड़", "चाय"], "ans": 1 },
    { "q": "कौन सा शहर मध्य प्रदेश का स्मार्ट सिटी है?", "opts": ["इंदौर", "सागर", "जबलपुर", "भोपाल"], "ans": 0 },
    { "q": "किस नदी का जलस्तर मध्य प्रदेश में सबसे अधिक है?", "opts": ["नर्मदा", "ताप्ती", "सिंध", "सुतली"], "ans": 0 },
    { "q": "मध्य प्रदेश के किस जिले में ओरछा स्थित है?", "opts": ["जबलपुर", "छतरपुर", "सागर", "इंदौर"], "ans": 1 },
    { "q": "मध्य प्रदेश का मुख्यालय कहाँ है?", "opts": ["इंदौर", "जबलपुर", "भोपाल", "ग्वालियर"], "ans": 2 },
    { "q": "कौन सा खेल मध्य प्रदेश का प्रमुख खेल है?", "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "बैडमिंटन"], "ans": 0 },
    { "q": "मध्य प्रदेश में कितने बाघ हैं?", "opts": ["100", "200", "300", "400"], "ans": 1 },
    { "q": "किस चिड़िया को मध्य प्रदेश का राज्य पक्षी माना गया है?", "opts": ["गौरेया", "तीतर", "सारस", "हंस"], "ans": 2 },
    { "q": "मध्य प्रदेश का सबसे पुराना शहर कौन सा है?", "opts": ["उज्जैन", "जबलपुर", "ग्वालियर", "इंदौर"], "ans": 0 },
    { "q": "किस जगह को 'भोपाल की रानी' कहा जाता है?", "opts": ["सागर", "ग्वालियर", "भोपाल", "जबलपुर"], "ans": 2 },
    { "q": "किस राज्य की सीमा मध्य प्रदेश से जुड़ी है?", "opts": ["उत्तर प्रदेश", "राजस्थान", "महाराष्ट्र", "छत्तीसगढ़"], "ans": 3 },
    { "q": "किस पर्व का उत्सव मध्य प्रदेश में मनाया जाता है?", "opts": ["बासंतिक पंचमी", "होलिका", "सत्यनारायण", "रक्षाबंधन"], "ans": 0 },
    { "q": "मध्य प्रदेश की संस्कृति का प्रमुख हिस्सा कौन सा है?", "opts": ["नृत्य", "गायन", "कला", "सभी"], "ans": 3 },
    { "q": "कौन सा संग्रहालय मध्य प्रदेश में स्थित है?", "opts": ["राजीव गांधी संग्रहालय", "मध्य प्रदेश विज्ञान संस्थान", "ग्वालियर किला", "बीरसिंह किला"], "ans": 1 },
    { "q": "किस जगह को 'जंगलों का शहर' कहा जाता है?", "opts": ["पचमढ़ी", "जबलपुर", "इंदौर", "ग्वालियर"], "ans": 0 },
    { "q": "किस रानी के लिए ग्वालियर किला प्रसिद्ध है?", "opts": ["रानी लक्ष्मीबाई", "रानी दुर्गावती", "रानी चनमा", "रानी पद्मिनी"], "ans": 1 },
    { "q": "मध्य प्रदेश में कितने कृषि अनुसंधान संस्थान हैं?", "opts": ["3", "5", "7", "9"], "ans": 2 },
    { "q": "किस पर्व को 'हरियाली तीज' कहा जाता है?", "opts": ["सावन", "फाल्गुन", "चैत्र", "भाद्रपद"], "ans": 0 },
    { "q": "कौन सा खेल मध्य प्रदेश का राष्ट्रीय खेल है?", "opts": ["क्रिकेट", "फुटबॉल", "हॉकी", "बैडमिंटन"], "ans": 2 },
    { "q": "मध्य प्रदेश में ग्वालियर का किला कब बनाया गया था?", "opts": ["12वीं सदी", "15वीं सदी", "16वीं सदी", "18वीं सदी"], "ans": 1 },
    { "q": "कौन सा पर्व देशभर में मनाया जाता है?", "opts": ["मकर संक्रांति", "दशहरा", "दीवाली", "ईद"], "ans": 3 },
    { "q": "किस त्यौहार में रंगों का प्रयोग होता है?", "opts": ["दीवाली", "दशहरा", "होली", "बासंतिक पंचमी"], "ans": 2 },
    { "q": "मध्य प्रदेश में स्थित सबसे पुराना किला कौन सा है?", "opts": ["ग्वालियर किला", "कनखल किला", "राजमहल किला", "खजुराहो किला"], "ans": 0 }
    , { "q": "मध्य प्रदेश का राजकीय वृक्ष कौन सा है?", "opts": ["पीपल", "बरगद", "नीम", "तुलसी"], "ans": 1 },
    { "q": "कौन सा शहर मध्य प्रदेश का वाणिज्यिक केंद्र है?", "opts": ["सागर", "इंदौर", "उज्जैन", "जबलपुर"], "ans": 1 },
    { "q": "मध्य प्रदेश में ग्रीष्मकालीन जलवायु किसे कहते हैं?", "opts": ["अतिसुश्क", "शुष्क", "गर्मी", "सर्दी"], "ans": 2 },
    { "q": "कौन सी नदी मध्य प्रदेश से निकलती है?", "opts": ["गंगा", "यमुना", "नर्मदा", "सिंधु"], "ans": 2 },
    { "q": "कौन सा ताजगी का प्रतीक है?", "opts": ["कमल", "गुलाब", "सूरजमुखी", "लिली"], "ans": 0 },
    { "q": "मध्य प्रदेश की कुल जनसंख्या क्या है?", "opts": ["8 करोड़", "7 करोड़", "6 करोड़", "9 करोड़"], "ans": 0 },
    { "q": "मध्य प्रदेश का सबसे बड़ा वन्यजीव अभयारण्य कौन सा है?", "opts": ["कन्हा", "बांधवगढ़", "पचमढ़ी", "सतपुड़ा"], "ans": 0 },
    { "q": "मध्य प्रदेश की प्रमुख फसल कौन सी है?", "opts": ["चना", "सोयाबीन", "गेहूँ", "ज्वार"], "ans": 1 },
    { "q": "मध्य प्रदेश की सबसे ऊँची चोटी कौन सी है?", "opts": ["सतपुड़ा", "विंध्या", "कंचनजंगा", "नकुल"], "ans": 0 },
    { "q": "कौन सा त्यौहार मध्य प्रदेश में विशेष रूप से मनाया जाता है?", "opts": ["दीवाली", "होलिका", "गणेश चतुर्थी", "गुरुपर्व"], "ans": 3 },
    { "q": "मध्य प्रदेश में कब राज्य की स्थापना हुई थी?", "opts": ["1950", "1956", "1960", "1970"], "ans": 1 },
    { "q": "मध्य प्रदेश का सबसे बड़ा शहर कौन सा है?", "opts": ["भोपाल", "इंदौर", "जबलपुर", "ग्वालियर"], "ans": 1 },
    { "q": "मध्य प्रदेश में कितने लोकसभा निर्वाचन क्षेत्र हैं?", "opts": ["29", "30", "28", "31"], "ans": 0 },
    { "q": "मध्य प्रदेश का राज्य नारा क्या है?", "opts": ["सर्वे भवन्तु सुखिनः", "पारमिति लघुत्व", "संगठन में शक्ति", "मध्य प्रदेश में हरियाली"], "ans": 2 },
    { "q": "कौन सी नदी मध्य प्रदेश को पार करती है?", "opts": ["गंगा", "यमुना", "सिंध", "नर्मदा"], "ans": 3 },
    { "q": "कौन सा शहर मध्य प्रदेश का हृदय है?", "opts": ["भोपाल", "इंदौर", "जबलपुर", "ग्वालियर"], "ans": 0 },
    { "q": "कौन सा पर्व मध्य प्रदेश में विशेष रूप से मनाया जाता है?", "opts": ["रक्षाबंधन", "दीवाली", "होली", "गणेश चतुर्थी"], "ans": 1 },
    { "q": "मध्य प्रदेश के किस जिले में खजुराहो स्थित है?", "opts": ["छतरपुर", "सागर", "उज्जैन", "जबलपुर"], "ans": 0 },
    { "q": "कौन सा पशु मध्य प्रदेश का राज्य पशु है?", "opts": ["बाघ", "गिलहरी", "गधा", "चूहा"], "ans": 0 },
    { "q": "कौन सा त्योहार मध्य प्रदेश में बासंती मनाया जाता है?", "opts": ["होलिका", "दीवाली", "गणेश चतुर्थी", "बासंतिक पंचमी"], "ans": 3 },
    { "q": "कौन सा उद्योग मध्य प्रदेश में विकसित है?", "opts": ["कपास", "सिल्क", "पारंपरिक हस्तशिल्प", "आभूषण"], "ans": 1 },
    { "q": "मध्य प्रदेश के किस जिले में पचमढ़ी है?", "opts": ["जबलपुर", "सागर", "छिंदवाड़ा", "इंदौर"], "ans": 2 },
    { "q": "कौन सा पर्व ग्रीष्म ऋतु में मनाया जाता है?", "opts": ["रक्षाबंधन", "दीवाली", "नवरात्रि", "होली"], "ans": 2 },
    { "q": "किस प्रकार की खेती मध्य प्रदेश में सबसे अधिक होती है?", "opts": ["उच्च उत्पादन", "पारंपरिक", "नैतिक", "सहज"], "ans": 0 },
    { "q": "कौन सा खेल मध्य प्रदेश में लोकप्रिय है?", "opts": ["फुटबॉल", "क्रिकेट", "बैडमिंटन", "हॉकी"], "ans": 1 },
    { "q": "कौन सा पर्व मध्य प्रदेश में धूमधाम से मनाया जाता है?", "opts": ["मकर संक्रांति", "दीवाली", "गणेश चतुर्थी", "पंचमी"], "ans": 1 },
    { "q": "मध्य प्रदेश की मुख्य भाषा क्या है?", "opts": ["हिंदी", "उर्दू", "संस्कृत", "अंग्रेजी"], "ans": 0 },
    { "q": "किस खेल को मध्य प्रदेश में खेला जाता है?", "opts": ["क्रिकेट", "हॉकी", "बैडमिंटन", "सभी"], "ans": 3 },
    { "q": "मध्य प्रदेश के किस शहर को 'लौह नगर' कहा जाता है?", "opts": ["जबलपुर", "ग्वालियर", "उज्जैन", "इंदौर"], "ans": 1 },
    { "q": "कौन सा जीव मध्य प्रदेश के वन्य जीवन का प्रतीक है?", "opts": ["बाघ", "हाथी", "गिलहरी", "कौआ"], "ans": 0 },
    { "q": "मध्य प्रदेश के किस नगर में सागर झील है?", "opts": ["सागर", "जबलपुर", "उज्जैन", "ग्वालियर"], "ans": 0 },
    { "q": "कौन सा फूल मध्य प्रदेश का राज्य फूल है?", "opts": ["कमल", "गुलाब", "चमेली", "तुलसी"], "ans": 0 },
    { "q": "मध्य प्रदेश का सबसे प्रसिद्ध किला कौन सा है?", "opts": ["ग्वालियर किला", "कनखल किला", "राजमहल किला", "खजुराहो किला"], "ans": 0 },
    { "q": "मध्य प्रदेश में किस फसल की बुवाई सबसे अधिक होती है?", "opts": ["धान", "गेहूँ", "ज्वार", "चना"], "ans": 1 },
    { "q": "मध्य प्रदेश में कितने मछली पालन केंद्र हैं?", "opts": ["3", "5", "7", "9"], "ans": 2 },
    { "q": "कौन सा पर्व विशेष रूप से संक्रांति के समय मनाया जाता है?", "opts": ["मकर संक्रांति", "वसंत पंचमी", "दीवाली", "गणेश चतुर्थी"], "ans": 0 },
    { "q": "कौन सा गीत मध्य प्रदेश में विशेष रूप से गाया जाता है?", "opts": ["रागिनी", "फाग", "बिदाई", "भजन"], "ans": 1 },
    { "q": "किस जिले में सागर झील है?", "opts": ["सागर", "जबलपुर", "उज्जैन", "ग्वालियर"], "ans": 0 },
    { "q": "कौन सा चिड़िया मध्य प्रदेश का राज्य चिड़िया है?", "opts": ["गौरेया", "कौआ", "सारस", "हंस"], "ans": 2 },
    { "q": "कौन सा पर्व मुख्य रूप से मध्य प्रदेश में मनाया जाता है?", "opts": ["दीवाली", "होलिका", "गणेश चतुर्थी", "भाई दूज"], "ans": 2 }



  ]
  ,
  JavaScript: [
    {
      "q": "What is the result of the following code?\n\nconsole.log( '1' + 2 + 3 );",
      "opts": ["'123'", "6", "'32'", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = {}; console.log(a instanceof Object);",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What is the result of the following code?\n\nconsole.log( typeof ({} === {}) );",
      "opts": ["'boolean'", "'object'", "'undefined'", "'NaN'"],
      "ans": 0
    },
    {
      "q": "What will be the result of the following code?\n\nconsole.log( 1 + 1 == '2' );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code output?\n\nlet x = 10;\nfunction foo() { var x = 20; };\nfoo(); console.log(x);",
      "opts": ["10", "20", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = []; console.log(a instanceof Array);",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nconsole.log( [1] == true );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will be logged by the following code?\n\nconsole.log( {} + [] );",
      "opts": ["'[object Object]'", "'0'", "undefined", "'NaN'"],
      "ans": 0
    },
    {
      "q": "What is the output of the following?\n\nconsole.log( '2' - 1 );",
      "opts": ["1", "2", "NaN", "'21'"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nconst a = [1, 2, 3]; const b = a; b.push(4); console.log(a.length);",
      "opts": ["4", "3", "2", "1"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nlet foo = { bar: 1 }; foo.bar = 2; console.log(foo);",
      "opts": ["{ bar: 2 }", "{ bar: 1 }", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet x = 10;\nfunction fn() { x = 20; };\nfn();\nconsole.log(x);",
      "opts": ["20", "10", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nfunction test() { console.log(this); }\ntest();",
      "opts": ["Global object (window in browsers)", "undefined", "null", "test"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = [1, 2]; let b = [1, 2]; console.log(a == b);",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What will the following code log?\n\nlet a = { x: 10 }; a.y = 20; console.log(a);",
      "opts": ["{ x: 10, y: 20 }", "{ x: 10 }", "{ y: 20 }", "undefined"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nlet x = 'hello'; x[0] = 'H'; console.log(x);",
      "opts": ["'hello'", "'Hello'", "'Helo'", "undefined"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nconst a = [1, 2, 3]; const b = a; b[0] = 4; console.log(a[0]);",
      "opts": ["4", "1", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What is the result of the following expression?\n\n'10' == 10",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nconsole.log( typeof (function() {}) );",
      "opts": ["'function'", "'object'", "'undefined'", "'NaN'"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = 10;\nfunction foo() { let a = 20; return a; }\nconsole.log(a);",
      "opts": ["10", "20", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = { x: 1, y: 2 }; let b = Object.create(a); b.z = 3; console.log(b.x);",
      "opts": ["1", "2", "3", "undefined"],
      "ans": 0
    },
    {
      "q": "What will be the output of this code?\n\nconsole.log( 1 + '1' == 11 );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will be logged by this code?\n\nconsole.log( typeof [] );",
      "opts": ["'array'", "'object'", "'undefined'", "'function'"],
      "ans": 1
    },
    {
      "q": "What is the result of the following expression?\n\nconsole.log( null == undefined );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What is the result of 'null == false' in JavaScript?",
      "opts": ["false", "true", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What does 'this' refer to in a JavaScript class method?",
      "opts": ["The instance of the class", "The global object", "undefined", "The function object"],
      "ans": 0
    },
    {
      "q": "What is the output of the following code?\n\nconsole.log( Number('123') + 1 );",
      "opts": ["124", "123", "NaN", "undefined"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nconsole.log( [1] == true );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will be the result of this code?\n\nconsole.log( NaN === NaN );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What will the following code log?\n\nconsole.log( {} == {} );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What is the result of '0 === -0' in JavaScript?",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = [1, 2, 3]; console.log(a.length); a[5] = 4; console.log(a.length);",
      "opts": ["3, 6", "3, 5", "6, 6", "5, 6"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet obj = {a: 1, b: 2}; delete obj.b; console.log(obj.b);",
      "opts": ["undefined", "2", "NaN", "error"],
      "ans": 0
    },
    {
      "q": "What is the result of 'console.log( [1, 2] == '1,2' )'?",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What is the result of '[] == false' in JavaScript?",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nconst obj = { x: 10, y: 20 }; delete obj.x; console.log(obj.x);",
      "opts": ["undefined", "10", "20", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = [1, 2, 3]; a.length = 2; console.log(a[2]);",
      "opts": ["undefined", "NaN", "3", "2"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nconsole.log( 'abc'.slice(1, 3) );",
      "opts": ["'bc'", "'ab'", "'ac'", "'abc'"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nlet x = 10;\nfunction test() { x = 20; }\ntest();\nconsole.log(x);",
      "opts": ["20", "10", "undefined", "NaN"],
      "ans": 0
    }
    ,
    {
      "q": "What is the result of the following code?\n\nconsole.log( 1 + '1' - 1 );",
      "opts": ["'10'", "11", "NaN", "1"],
      "ans": 1
    },
    {
      "q": "What will this code log?\n\nconsole.log( [] == [] );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "Which of the following will create a deep copy of an object in JavaScript?",
      "opts": ["Object.assign()", "JSON.parse(JSON.stringify(obj))", "Object.create()", "Spread operator"],
      "ans": 1
    },
    {
      "q": "What is the result of the following?\n\nconsole.log( 0 == false );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What does 'setTimeout' do in JavaScript?",
      "opts": ["Schedules a function to run after a delay", "Executes a function immediately", "Stops a function from executing", "Delays the script execution"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = [1, 2]; let b = a; b[0] = 3; console.log(a[0]);",
      "opts": ["3", "1", "undefined", "2"],
      "ans": 0
    },
    {
      "q": "What does the following code log?\n\nlet foo = 'bar'; foo = 10; console.log(typeof foo);",
      "opts": ["'string'", "'number'", "'undefined'", "'boolean'"],
      "ans": 1
    },
    {
      "q": "Which of the following is not a valid JavaScript variable name?",
      "opts": ["var 1x;", "let _x;", "const $y;", "var x1;"],
      "ans": 0
    },
    {
      "q": "What is the result of the following expression?\n\ntypeof null === 'object'",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "Which of the following will not throw an error in JavaScript?",
      "opts": ["function*(){}", "async function(){}", "class A {}", "var x = 10;"],
      "ans": 3
    },
    {
      "q": "What is the result of the following?\n\nconsole.log( 5 + 5 + '5' );",
      "opts": ["'55'", "10", "'55'", "NaN"],
      "ans": 0
    },
    {
      "q": "Which of the following will correctly define a generator function?",
      "opts": ["function* gen() {}", "function gen*() {}", "gen function*() {}", "function gen(){}*"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nlet obj = { x: 1, y: 2 }; delete obj.x; console.log(obj.x);",
      "opts": ["undefined", "1", "2", "null"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet x = 10;\n(function() { var x = 5; console.log(x); })();",
      "opts": ["5", "10", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What is the result of 'console.log( '1' == 1 )'?",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nconsole.log( 2 * '3' );",
      "opts": ["6", "NaN", "undefined", "'23'"],
      "ans": 0
    },
    {
      "q": "What will be the output of the following?\n\nlet a = [1, 2]; let b = [...a]; b[0] = 3; console.log(a[0]);",
      "opts": ["1", "2", "3", "undefined"],
      "ans": 0
    },
    {
      "q": "What is the result of 'typeof []'?",
      "opts": ["'array'", "'object'", "'undefined'", "'array'"],
      "ans": 1
    },
    {
      "q": "Which of the following will create a new instance of an object?",
      "opts": ["new Object()", "Object()", "Object.create()", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the following code log?\n\nconst obj = { x: 10 }; obj.x = 20; console.log(obj.x);",
      "opts": ["20", "10", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet arr = [1, 2, 3]; arr[2] = 4; console.log(arr.length);",
      "opts": ["3", "4", "5", "2"],
      "ans": 3
    },
    {
      "q": "What is the result of the following?\n\nconsole.log( 0 == [] );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following code output?\n\nconsole.log( {} == {} );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What will the following log?\n\nconst x = 10;\n(function() { const x = 20; console.log(x); })();",
      "opts": ["10", "20", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What is the output of the following?\n\nconsole.log( 'foo' === 'foo' );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "Which of the following does not result in an error?",
      "opts": ["try { throw 'error' } catch(e) {}", "throw new Error('error')", "throw 'error'", "All of the above"],
      "ans": 3
    },
    {
      "q": "What will the following code log?\n\nlet obj = { a: 1 }; obj = null; console.log(obj);",
      "opts": ["null", "undefined", "1", "error"],
      "ans": 0
    },
    {
      "q": "What is the result of 'typeof NaN'?",
      "opts": ["'number'", "'NaN'", "'undefined'", "'object'"],
      "ans": 0
    },
    {
      "q": "What is the result of the following code?\n\nconsole.log( 0 === 0 );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What does 'this' refer to inside an arrow function?",
      "opts": ["The parent scope", "The function's own scope", "The global object", "undefined"],
      "ans": 0
    },
    {
      "q": "What will the following code log?\n\nlet a = [1, 2, 3]; a.length = 2; console.log(a[2]);",
      "opts": ["undefined", "3", "2", "NaN"],
      "ans": 0
    },
    {
      "q": "What does the 'spread' operator do?",
      "opts": ["Spreads elements of an array or object", "Combines multiple arrays", "Both A and B", "None of the above"],
      "ans": 2
    },
    {
      "q": "What will this code log?\n\nlet x = 'test'; x[0] = 'T'; console.log(x);",
      "opts": ["'test'", "'Test'", "'Ttst'", "undefined"],
      "ans": 0
    },
    {
      "q": "What is the result of this code?\n\nconsole.log( 10 / '2' );",
      "opts": ["5", "NaN", "'5'", "undefined"],
      "ans": 0
    },
    {
      "q": "What will this code log?\n\nconsole.log( 'hello' == 'HELLO'.toLowerCase() );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "Which of the following will throw an error?\n\nconst arr = [1,2,3]; arr.length = 0; console.log(arr);",
      "opts": ["None", "TypeError", "ReferenceError", "SyntaxError"],
      "ans": 0
    },
    {
      "q": "What does 'undefined' mean in JavaScript?",
      "opts": ["A variable that has not been assigned a value", "A null object", "A function with no return value", "A reserved keyword"],
      "ans": 0
    },
    {
      "q": "What is the output of the following?\n\nconsole.log( typeof typeof 1 );",
      "opts": ["'number'", "'string'", "'undefined'", "'NaN'"],
      "ans": 1
    },
    {
      "q": "What is the result of 'console.log( 0 == '' )'?",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What will the following log?\n\nconst obj = { x: 10, y: 20 }; delete obj.x; console.log(obj.x);",
      "opts": ["undefined", "NaN", "error", "10"],
      "ans": 0
    },
    {
      "q": "What is the result of the following?\n\nconsole.log( !true );",
      "opts": ["false", "true", "undefined", "NaN"],
      "ans": 0
    }
    ,
    {
      "q": "What will the following code log in the console?\n\nconsole.log( [] + [] );",
      "opts": ["'', empty string", "'0'", "'NaN'", "undefined"],
      "ans": 0
    },
    {
      "q": "What will the following code log in the console?\n\nconsole.log( {} + [] );",
      "opts": ["'[object Object]'", "'NaN'", "undefined", "'0'"],
      "ans": 3
    },
    {
      "q": "What is the output of the following expression?\n\nfalse == '0'",
      "opts": ["true", "false", "undefined", "null"],
      "ans": 0
    },
    {
      "q": "What will the following code log in the console?\n\nconsole.log( NaN === NaN );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What is the output of the following expression?\n\ntypeof null",
      "opts": ["object", "null", "undefined", "function"],
      "ans": 0
    },
    {
      "q": "What is the result of `[] == ![]` in JavaScript?",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What is the output of the following?\n\nconsole.log( {} === {} );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What does the following code output?\n\nconsole.log( typeof (function() {}) );",
      "opts": ["'function'", "'object'", "'undefined'", "'null'"],
      "ans": 0
    },
    {
      "q": "What does the following code do?\n\nconst a = { x: 1, y: 2 };\nconst b = a;\nb.x = 10;\nconsole.log(a.x);",
      "opts": ["10", "1", "undefined", "error"],
      "ans": 0
    },
    {
      "q": "What will the following code log in the console?\n\nlet foo = { x: 1 };\nlet bar = foo;\nbar.x = 2;\nconsole.log(foo.x);",
      "opts": ["2", "1", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about closures in JavaScript?",
      "opts": ["A closure is a function that retains access to its lexical scope even after the outer function has returned", "Closures are only created for anonymous functions", "A closure is a function defined within an object", "Closures can only access global variables"],
      "ans": 0
    },
    {
      "q": "What will be logged in the following code?\n\nfunction test() {\n  var x = 1;\n  if (true) {\n    var x = 2;\n  }\n  console.log(x);\n}\ntest();",
      "opts": ["1", "2", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What will the following code log?\n\nconsole.log( [] == false );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "Which of the following will create a reference to the same object?",
      "opts": ["let x = {}; let y = x;", "let x = {}; let y = {};", "let x = {}; let y = null;", "let x = {}; let y = undefined;"],
      "ans": 0
    },
    {
      "q": "What is the output of the following code?\n\nconsole.log( '5' - 2 );",
      "opts": ["'3'", "'NaN'", "'52'", "3"],
      "ans": 3
    },
    {
      "q": "What is the result of the following expression?\n\n[] + {}",
      "opts": ["'[object Object]'", "'NaN'", "undefined", "'0'"],
      "ans": 0
    },
    {
      "q": "What will be the output of the following?\n\nconsole.log( '0' == false );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What does the following code return?\n\nconsole.log( 3 + 4 + '5' );",
      "opts": ["'75'", "'12'", "'34'", "'345'"],
      "ans": 3
    },
    {
      "q": "What will the following code output?\n\nconsole.log( typeof [1,2,3] );",
      "opts": ["'array'", "'object'", "'undefined'", "'function'"],
      "ans": 1
    },
    {
      "q": "What will the following code log?\n\nconst a = (x = 1) => { x = 2; console.log(x); };\na();",
      "opts": ["1", "2", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What is the result of the following expression?\n\nfunction test() { return typeof arguments; }\nconsole.log(test());",
      "opts": ["'object'", "'arguments'", "'undefined'", "'function'"],
      "ans": 0
    },
    {
      "q": "What will be logged in the following code?\n\nvar x = 1;\nfunction fn() { x = 2; };\nfn();\nconsole.log(x);",
      "opts": ["2", "1", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "Which of the following expressions will give you an error?\n\nlet obj = {};\nobj.length = 1;\nconsole.log(obj.length);",
      "opts": ["None, it will output 1", "ReferenceError", "TypeError", "NaN"],
      "ans": 0
    },
    {
      "q": "Which method can be used to make a function asynchronous?\n",
      "opts": ["async", "defer", "await", "function(){}"],
      "ans": 0
    },
    {
      "q": "What is the result of the following code?\n\nconsole.log( Boolean( NaN ) );",
      "opts": ["false", "true", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "What is the output of this code?\n\nconsole.log( !!'false' );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "Which of the following is a valid way to declare a generator function in JavaScript?",
      "opts": ["function* myGenerator() {}", "function myGenerator() *{}", "function* myGenerator() {} and yield", "function*myGenerator() yield"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'new' in JavaScript?",
      "opts": ["To create a new object", "To define a new variable", "To add a new property to an object", "To create a new function"],
      "ans": 0
    },
    {
      "q": "What does the following code return?\n\nconsole.log( NaN === NaN );",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 1
    },
    {
      "q": "What will the following code output?\n\nvar a = 1;\n(function() { console.log(a); var a = 2; })();",
      "opts": ["undefined", "1", "2", "NaN"],
      "ans": 0
    },
    {
      "q": "What does the following code do?\n\nfunction foo() { let bar = 10; }\nconsole.log(bar);",
      "opts": ["Throws a ReferenceError", "Outputs 10", "Outputs undefined", "Outputs null"],
      "ans": 0
    },
    {
      "q": "What is the output of this?\n\nvar a = 1;\nconsole.log(a++ === ++a);",
      "opts": ["true", "false", "undefined", "NaN"],
      "ans": 0
    },
    {
      "q": "Which statement correctly invokes the 'setTimeout' function with a delay of 1000ms?",
      "opts": ["setTimeout(fn, 1000);", "setTimeout(1000, fn);", "setTimeout(1000);", "setTimeout(1000ms);"],
      "ans": 0
    },
    {
      "q": "What will be the output of the following code?\n\nconsole.log( Array(3) );",
      "opts": ["[empty × 3]", "[3]", "[, , , ]", "[3, 3, 3]"],
      "ans": 0
    },
    {
      "q": "Which of the following will throw an error in JavaScript?",
      "opts": ["function* () {}", "async function() {}", "let x = 10;", "const x = 10;"],
      "ans": 0
    },
    {
      "q": "What will the following code return?\n\nconsole.log( '5' + 5 );",
      "opts": ["'55'", "10", "NaN", "5"],
      "ans": 0
    },
    {
      "q": "Which of the following will print the value 1000?",
      "opts": ["(function() { return 1000; })()", "(function() { return new Number(1000); })()", "new Number(1000)", "1000.toString()"],
      "ans": 0
    }
    ,
    { "q": "What is the correct syntax to declare a variable in JavaScript?", "opts": ["var myVar;", "variable myVar;", "v myVar;", "myVar = var;"], "ans": 0 },
    { "q": "Which of the following is a JavaScript data type?", "opts": ["String", "Boolean", "Number", "All of the above"], "ans": 3 },
    { "q": "How do you create a function in JavaScript?", "opts": ["function myFunction()", "function:myFunction()", "create myFunction()", "myFunction() = function"], "ans": 0 },
    { "q": "What does '===' mean in JavaScript?", "opts": ["Equal to", "Identical to", "Not equal", "Strict equal"], "ans": 1 },
    { "q": "Which method is used to convert a string to an integer?", "opts": ["parseInt()", "convertToInt()", "toInt()", "Integer()"], "ans": 0 },
    { "q": "What is the output of 2 + '2' in JavaScript?", "opts": ["4", "22", "Error", "undefined"], "ans": 1 },
    { "q": "How do you comment in JavaScript?", "opts": ["// This is a comment", "# This is a comment", "/* This is a comment */", "%% This is a comment"], "ans": 0 },
    { "q": "What is the purpose of the 'this' keyword?", "opts": ["To refer to the global object", "To refer to the current object", "To create a new object", "To define a variable"], "ans": 1 },
    { "q": "Which of the following is a way to create an object in JavaScript?", "opts": ["var obj = new Object();", "var obj = {};", "var obj = Object.create();", "All of the above"], "ans": 3 },
    { "q": "What does JSON stand for?", "opts": ["JavaScript Object Notation", "JavaScript Online Notation", "Java Source Object Notation", "None of the above"], "ans": 0 },
    { "q": "Which operator is used to assign a value to a variable?", "opts": ["=", "==", "===", "=>"], "ans": 0 },
    { "q": "What is the output of typeof NaN?", "opts": ["number", "undefined", "NaN", "string"], "ans": 0 },
    { "q": "What is an IIFE?", "opts": ["Immediately Invoked Function Expression", "Inside Function Expression", "Initial Function Expression", "Immediate Function Evaluation"], "ans": 0 },
    { "q": "How do you create an array in JavaScript?", "opts": ["var arr = [];", "var arr = ();", "var arr = new Array();", "Both A and C"], "ans": 3 },
    { "q": "Which method is used to add an element to the end of an array?", "opts": ["push()", "pop()", "shift()", "unshift()"], "ans": 0 },
    { "q": "What will be the output of the following code: console.log(0.1 + 0.2 === 0.3);", "opts": ["true", "false", "undefined", "Error"], "ans": 1 },
    { "q": "Which keyword is used to define a constant in JavaScript?", "opts": ["const", "let", "var", "constant"], "ans": 0 },
    { "q": "How do you access the first element of an array called 'myArray'?", "opts": ["myArray[0]", "myArray(0)", "myArray{0}", "first(myArray)"], "ans": 0 },
    { "q": "Which of the following is NOT a JavaScript framework?", "opts": ["React", "Angular", "Django", "Vue"], "ans": 2 },
    { "q": "What does 'use strict' do in JavaScript?", "opts": ["Enables strict mode", "Enables loose mode", "Disables error checking", "None of the above"], "ans": 0 },
    { "q": "How do you declare a JavaScript variable that can change?", "opts": ["const", "var", "let", "All of the above"], "ans": 3 },
    { "q": "What is the output of the following code: console.log(typeof null);", "opts": ["object", "null", "undefined", "number"], "ans": 0 },
    { "q": "Which method is used to remove the last element from an array?", "opts": ["pop()", "push()", "shift()", "unshift()"], "ans": 0 },
    { "q": "How can you check if a variable is an array?", "opts": ["typeof var === 'array'", "Array.isArray(var)", "var instanceof Array", "Both B and C"], "ans": 3 },
    { "q": "What does the map() method do in JavaScript?", "opts": ["Transforms each element", "Filters elements", "Finds an element", "Sorts elements"], "ans": 0 },
    { "q": "Which method is used to convert a JSON string into a JavaScript object?", "opts": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "None of the above"], "ans": 0 },
    { "q": "What is the difference between '==' and '==='?", "opts": ["No difference", "Type checking", "Value checking", "None of the above"], "ans": 1 },
    { "q": "Which method is used to find the index of an element in an array?", "opts": ["findIndex()", "indexOf()", "searchIndex()", "getIndex()"], "ans": 1 },
    { "q": "What is a closure in JavaScript?", "opts": ["A function with a scope", "A function that returns another function", "A function with private variables", "All of the above"], "ans": 3 },
    { "q": "What is the output of '5' + 3?", "opts": ["53", "8", "Error", "undefined"], "ans": 0 },
    { "q": "Which method is used to stop an interval in JavaScript?", "opts": ["clearInterval()", "stopInterval()", "clearTimeout()", "endInterval()"], "ans": 0 },
    { "q": "What does 'async' function do?", "opts": ["Makes a function return a promise", "Makes a function run synchronously", "Makes a function wait", "None of the above"], "ans": 0 },
    { "q": "What will be the output of the following code: console.log(1 + '1');", "opts": ["11", "2", "Error", "undefined"], "ans": 0 },
    { "q": "Which of the following is used to handle exceptions in JavaScript?", "opts": ["try/catch", "if/else", "for/loop", "while"], "ans": 0 },
    { "q": "What is the purpose of the 'return' statement?", "opts": ["To exit a function", "To return a value from a function", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "How can you add a property to an object in JavaScript?", "opts": ["obj.property = value;", "obj['property'] = value;", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which of the following is NOT a JavaScript primitive type?", "opts": ["String", "Number", "Object", "Boolean"], "ans": 2 },
    { "q": "What will be the output of console.log(3 == '3');", "opts": ["true", "false", "Error", "undefined"], "ans": 0 },
    { "q": "Which event is triggered when an element is clicked?", "opts": ["onclick", "onchange", "onblur", "onhover"], "ans": 0 },
    { "q": "How do you prevent the default action of an event in JavaScript?", "opts": ["event.preventDefault()", "event.stopPropagation()", "return false", "Both A and C"], "ans": 3 },
    { "q": "What is the purpose of the 'bind' method?", "opts": ["To create a new function", "To bind a function to an object", "To change 'this' context", "All of the above"], "ans": 3 },
    { "q": "Which of the following is a way to create a promise?", "opts": ["new Promise()", "Promise.create()", "Promise.resolve()", "None of the above"], "ans": 0 },
    { "q": "What does 'console.log' do?", "opts": ["Displays output in the console", "Alerts the user", "Changes the webpage", "None of the above"], "ans": 0 },
    { "q": "Which method is used to get the length of an array?", "opts": ["array.length", "array.size()", "array.count()", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'typeof []'?", "opts": ["array", "object", "undefined", "null"], "ans": 1 }, { "q": "Which symbol is used for comments in JavaScript?", "opts": ["//", "#", "/* */", "/*"], "ans": 0 },
    { "q": "What is NaN in JavaScript?", "opts": ["Not a Number", "Number", "Null Value", "None of the above"], "ans": 0 },
    { "q": "What does the splice() method do?", "opts": ["Adds/removes items from an array", "Sorts an array", "Searches for an item", "None of the above"], "ans": 0 },
    { "q": "Which method is used to combine two or more arrays?", "opts": ["concat()", "merge()", "join()", "combine()"], "ans": 0 },
    { "q": "What does the filter() method do in JavaScript?", "opts": ["Filters elements based on a condition", "Maps each element", "Reduces elements", "None of the above"], "ans": 0 },
    { "q": "What is the purpose of the 'forEach()' method?", "opts": ["Iterates over an array", "Creates a new array", "Sorts an array", "None of the above"], "ans": 0 },
    { "q": "Which statement is used to terminate a loop in JavaScript?", "opts": ["break", "continue", "stop", "exit"], "ans": 0 },
    { "q": "What does 'this' refer to in an event handler?", "opts": ["The global object", "The element that fired the event", "The function", "None of the above"], "ans": 1 },
    { "q": "How do you define a class in JavaScript?", "opts": ["class MyClass {}", "define MyClass {}", "MyClass: function {}", "class: MyClass()"], "ans": 0 },
    { "q": "What will be the output of console.log(1 + '2' + '3');", "opts": ["123", "6", "Error", "undefined"], "ans": 0 },
    { "q": "Which method is used to round a number to the nearest integer?", "opts": ["Math.round()", "Math.floor()", "Math.ceil()", "Math.random()"], "ans": 0 },
    { "q": "What is an object in JavaScript?", "opts": ["A collection of key/value pairs", "A data type", "A function", "None of the above"], "ans": 0 },
    { "q": "Which operator is used to concatenate strings?", "opts": ["+", "-", "*", "/"], "ans": 0 },
    { "q": "What does the 'delete' operator do?", "opts": ["Removes a property from an object", "Deletes an array", "Removes an element from an array", "None of the above"], "ans": 0 },
    { "q": "Which function is used to parse a JSON string?", "opts": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "None of the above"], "ans": 0 },
    { "q": "What will be the output of console.log(2 == '2');", "opts": ["true", "false", "Error", "undefined"], "ans": 0 },
    { "q": "How do you declare a variable in JavaScript?", "opts": ["let myVar;", "var myVar;", "const myVar;", "All of the above"], "ans": 3 },
    { "q": "Which method can be used to find an element in an array?", "opts": ["find()", "filter()", "includes()", "All of the above"], "ans": 3 },
    { "q": "What does 'async' mean in JavaScript?", "opts": ["Asynchronous", "Synchronous", "Simultaneous", "Sequential"], "ans": 0 },
    { "q": "How do you declare a constant in JavaScript?", "opts": ["const myVar;", "constant myVar;", "var myVar;", "let myVar;"], "ans": 0 },
    { "q": "Which of the following is a valid way to create an array?", "opts": ["var arr = new Array();", "var arr = [];", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What will be the output of console.log(!!'Hello');", "opts": ["true", "false", "Hello", "undefined"], "ans": 0 },
    { "q": "Which method is used to add a new element at the beginning of an array?", "opts": ["unshift()", "push()", "shift()", "pop()"], "ans": 0 },
    { "q": "What is the output of console.log('Hello'.length);", "opts": ["5", "Hello", "Error", "undefined"], "ans": 0 },
    { "q": "What does the 'map()' method return?", "opts": ["A new array", "An object", "A string", "None of the above"], "ans": 0 },
    { "q": "What is the output of console.log(3 * '3');", "opts": ["9", "33", "Error", "undefined"], "ans": 0 },
    { "q": "How can you convert a string to a number in JavaScript?", "opts": ["parseInt()", "Number()", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which keyword is used to create a new function?", "opts": ["function", "def", "method", "new"], "ans": 0 },
    { "q": "What does 'throw' do in JavaScript?", "opts": ["Throws an error", "Catches an error", "Returns a value", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a method to remove an element from an array?", "opts": ["pop()", "shift()", "splice()", "All of the above"], "ans": 3 },
    { "q": "What is the output of console.log(false + 1);", "opts": ["1", "false", "Error", "undefined"], "ans": 0 },
    { "q": "How do you create a promise in JavaScript?", "opts": ["new Promise()", "Promise.create()", "Promise()", "None of the above"], "ans": 0 },
    { "q": "What does 'undefined' mean in JavaScript?", "opts": ["Variable has no value", "Variable is not declared", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which operator checks for both value and type?", "opts": ["==", "===", "!=", "!=="], "ans": 1 },
    { "q": "What is a prototype in JavaScript?", "opts": ["An object from which other objects inherit", "A function", "A variable", "None of the above"], "ans": 0 },
    { "q": "How do you access the last element of an array?", "opts": ["array[array.length - 1]", "array.last()", "array[length]", "array[length - 1]"], "ans": 0 },
    { "q": "Which function is used to sort an array in JavaScript?", "opts": ["sort()", "order()", "filter()", "map()"], "ans": 0 },
    { "q": "What does the 'Promise.all()' method do?", "opts": ["Waits for all promises to resolve", "Rejects all promises", "None of the above", "Returns the first resolved promise"], "ans": 0 },
    { "q": "What is the output of console.log(1 + 2 + '3');", "opts": ["33", "6", "Error", "undefined"], "ans": 0 },
    { "q": "Which method is used to remove whitespace from both sides of a string?", "opts": ["trim()", "slice()", "substring()", "replace()"], "ans": 0 },
    { "q": "What will console.log(typeof []); output?", "opts": ["array", "object", "undefined", "null"], "ans": 1 },
    { "q": "What is the use of the 'finally' block in JavaScript?", "opts": ["To execute code after try/catch", "To catch errors", "To declare variables", "None of the above"], "ans": 0 },
    { "q": "How can you check if a variable is an object?", "opts": ["typeof var === 'object'", "var instanceof Object", "Both A and B", "None of the above"], "ans": 2 }
    , { "q": "Which of the following is a JavaScript framework?", "opts": ["React", "Laravel", "Django", "Ruby on Rails"], "ans": 0 },
    { "q": "What does JSON stand for?", "opts": ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Online Notation", "None of the above"], "ans": 0 },
    { "q": "What is the purpose of the 'strict mode' in JavaScript?", "opts": ["To enforce stricter parsing and error handling", "To allow global variables", "To optimize performance", "None of the above"], "ans": 0 },
    { "q": "What does the 'setTimeout()' function do?", "opts": ["Delays the execution of a function", "Stops the execution of a function", "Repeats a function", "None of the above"], "ans": 0 },
    { "q": "How do you declare a function in JavaScript?", "opts": ["function myFunction() {}", "myFunction() {}", "declare myFunction() {}", "None of the above"], "ans": 0 },
    { "q": "What is the output of console.log(typeof null);", "opts": ["null", "object", "undefined", "error"], "ans": 1 },
    { "q": "Which operator is used for equality comparison?", "opts": ["==", "=", "===", "All of the above"], "ans": 2 },
    { "q": "What does the 'reduce()' method do?", "opts": ["Reduces the size of an array", "Combines array elements into a single value", "Filters the array", "None of the above"], "ans": 1 },
    { "q": "What is the use of the 'console.log()' method?", "opts": ["To print messages to the console", "To create an alert", "To log errors", "None of the above"], "ans": 0 },
    { "q": "Which keyword is used to handle exceptions in JavaScript?", "opts": ["catch", "try", "throw", "All of the above"], "ans": 3 },
    { "q": "What will console.log(0.1 + 0.2 === 0.3); output?", "opts": ["true", "false", "undefined", "error"], "ans": 1 },
    { "q": "How do you create an object in JavaScript?", "opts": ["var obj = {};", "var obj = new Object();", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is a closure in JavaScript?", "opts": ["A function that retains access to its lexical scope", "A way to handle errors", "A built-in function", "None of the above"], "ans": 0 },
    { "q": "What is the purpose of the 'bind()' method?", "opts": ["Sets the value of 'this' in a function", "Binds a variable", "Creates a new function", "None of the above"], "ans": 0 },
    { "q": "What does the 'slice()' method do?", "opts": ["Extracts a section of an array", "Adds elements to an array", "Removes elements from an array", "None of the above"], "ans": 0 },
    { "q": "What is the output of console.log(1 === '1');", "opts": ["true", "false", "undefined", "error"], "ans": 1 },
    { "q": "Which method converts a string to an array?", "opts": ["split()", "slice()", "join()", "indexOf()"], "ans": 0 },
    { "q": "What does 'typeof' operator return?", "opts": ["The type of a variable", "The value of a variable", "The length of a variable", "None of the above"], "ans": 0 },
    { "q": "Which built-in method returns the character at a specified index?", "opts": ["charAt()", "get()", "index()", "None of the above"], "ans": 0 },
    { "q": "How can you prevent a function from executing multiple times?", "opts": ["Using a flag variable", "Using the 'debounce' technique", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does the 'indexOf()' method do?", "opts": ["Finds the index of a specified value", "Adds a new element", "Removes an element", "None of the above"], "ans": 0 },
    { "q": "What is the purpose of the 'return' statement?", "opts": ["To return a value from a function", "To stop the execution of a function", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does the 'filter()' method return?", "opts": ["A new array with elements that pass the test", "An object", "A number", "None of the above"], "ans": 0 },
    { "q": "Which method adds one or more elements to the end of an array?", "opts": ["push()", "pop()", "unshift()", "shift()"], "ans": 0 },
    { "q": "What is the output of console.log(1 + 2 + '3' + 4);", "opts": ["1234", "334", "Error", "undefined"], "ans": 0 },
    { "q": "How can you create a new array from an existing array?", "opts": ["Using map()", "Using slice()", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does 'localStorage' allow you to do?", "opts": ["Store data locally in the user's browser", "Store data on the server", "Encrypt data", "None of the above"], "ans": 0 },
    { "q": "Which method is used to get the first element of an array?", "opts": ["first()", "shift()", "pop()", "head()"], "ans": 1 },
    { "q": "What will console.log('5' - 2); output?", "opts": ["3", "'3'", "Error", "undefined"], "ans": 0 },
    { "q": "Which keyword is used to declare a variable in JavaScript?", "opts": ["var", "let", "const", "All of the above"], "ans": 3 },
    { "q": "What does the 'includes()' method do?", "opts": ["Checks if an array includes a certain value", "Filters an array", "Maps an array", "None of the above"], "ans": 0 },
    { "q": "What will be the output of console.log(!!'false');", "opts": ["true", "false", "Error", "undefined"], "ans": 0 },
    { "q": "What is a promise in JavaScript?", "opts": ["An object representing the eventual completion of an asynchronous operation", "A function", "An error handler", "None of the above"], "ans": 0 },
    { "q": "What does the 'await' keyword do?", "opts": ["Waits for a promise to resolve", "Stops the execution of a loop", "None of the above", "Both A and B"], "ans": 0 },
    { "q": "What is the output of console.log([] + []);", "opts": ["''", "'undefined'", "[]", "Error"], "ans": 0 },
    { "q": "Which method is used to create a copy of an array?", "opts": ["slice()", "copy()", "clone()", "All of the above"], "ans": 0 },
    { "q": "What will console.log('Hello' instanceof String); output?", "opts": ["true", "false", "Error", "undefined"], "ans": 1 },
    { "q": "Which method can be used to combine two or more strings?", "opts": ["concat()", "join()", "merge()", "combine()"], "ans": 0 },
    { "q": "What is the purpose of 'finally' in a try-catch block?", "opts": ["To execute code after try/catch", "To catch errors", "Both A and B", "None of the above"], "ans": 0 }
    ,
    { "q": "How can you create a copy of an array?", "opts": ["array.slice()", "array.copy()", "array.clone()", "None of the above"], "ans": 0 },
    { "q": "What will the following code output: console.log('Hello'.charAt(0));", "opts": ["H", "Hello", "Error", "undefined"], "ans": 0 }
    ,
    {
      q: "Which of the following is a JavaScript data type?",
      opts: ["Undefined", "Integer", "Float", "Character"],
      ans: 0
    },
    {
      q: "What keyword is used to define a variable in JavaScript?",
      opts: ["var", "define", "let", "const"],
      ans: 0
    }
  ],
  Java: [{ "q": "What is the default value of a boolean variable in Java?", "opts": ["true", "false", "0", "1"], "ans": 1 },
  { "q": "Which keyword is used to define a class in Java?", "opts": ["class", "define", "object", "struct"], "ans": 0 },
  { "q": "What is the size of an int in Java?", "opts": ["16 bits", "32 bits", "64 bits", "8 bits"], "ans": 1 },
  { "q": "Which of the following is not a valid identifier in Java?", "opts": ["$myVar", "_myVar", "2myVar", "myVar"], "ans": 2 },
  { "q": "What is the output of System.out.println(2 + 3 + '5');", "opts": ["25", "55", "Error", "7"], "ans": 1 },
  { "q": "What is the main method in Java?", "opts": ["public static void main(String args[])", "public void main(String args[])", "static void main(String args[])", "void main(String args[])"], "ans": 0 },
  { "q": "Which collection class allows duplicate elements?", "opts": ["Set", "List", "Map", "None of the above"], "ans": 1 },
  { "q": "What is the purpose of the 'static' keyword?", "opts": ["To create instance variables", "To define class-level methods and variables", "Both A and B", "None of the above"], "ans": 1 },
  { "q": "Which of the following is a valid constructor in Java?", "opts": ["MyClass()", "MyClass[]", "MyClass:()", "MyClass;()"], "ans": 0 },
  { "q": "What does the 'final' keyword indicate?", "opts": ["A variable can be changed", "A method cannot be overridden", "A class cannot be subclassed", "All of the above"], "ans": 3 },
  { "q": "What is the purpose of the 'this' keyword?", "opts": ["To refer to the current object", "To refer to the superclass", "To refer to the static method", "None of the above"], "ans": 0 },
  { "q": "What is an interface in Java?", "opts": ["A class that cannot be instantiated", "A collection of abstract methods", "A way to implement multiple inheritance", "All of the above"], "ans": 3 },
  { "q": "Which exception is thrown when dividing by zero?", "opts": ["ArithmeticException", "NullPointerException", "IOException", "IndexOutOfBoundsException"], "ans": 0 },
  { "q": "What is the purpose of the 'super' keyword?", "opts": ["To call the parent class constructor", "To access parent class methods", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "Which of the following is a wrapper class?", "opts": ["int", "Integer", "float", "Double"], "ans": 1 },
  { "q": "What is the default value of a String variable?", "opts": ["null", "''", "0", "undefined"], "ans": 0 },
  { "q": "Which method is used to compare two strings for equality?", "opts": ["equals()", "==", "compare()", "Both A and B"], "ans": 0 },
  { "q": "What will be the output of System.out.println(10 == 10.0);", "opts": ["true", "false", "Error", "undefined"], "ans": 0 },
  { "q": "Which collection class is used for key-value pairs?", "opts": ["List", "Set", "Map", "Queue"], "ans": 2 },
  { "q": "What is the use of the 'abstract' keyword?", "opts": ["To declare a class that cannot be instantiated", "To declare a method without a body", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "What does the 'throw' keyword do?", "opts": ["Defines a method", "Handles exceptions", "Throws an exception", "Catches an exception"], "ans": 2 },
  { "q": "What is the output of System.out.println(3 + 4 + '7');", "opts": ["34", "47", "Error", "74"], "ans": 1 },
  { "q": "What does the 'ArrayList' class implement?", "opts": ["List", "Set", "Map", "Queue"], "ans": 0 },
  { "q": "Which of the following is not a Java access modifier?", "opts": ["private", "protected", "public", "hidden"], "ans": 3 },
  { "q": "What is the return type of the 'hashCode()' method?", "opts": ["int", "String", "Object", "void"], "ans": 0 },
  { "q": "Which keyword is used to inherit a class?", "opts": ["extends", "implements", "inherits", "uses"], "ans": 0 },
  { "q": "What will be the output of System.out.println('5' + 5);", "opts": ["55", "10", "Error", "5"], "ans": 0 },
  { "q": "What is the purpose of the 'volatile' keyword?", "opts": ["To ensure thread safety", "To make a variable accessible across threads", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "Which method is used to read a file in Java?", "opts": ["read()", "readLine()", "FileReader()", "All of the above"], "ans": 3 },
  { "q": "What is the base class of all exceptions in Java?", "opts": ["Throwable", "Exception", "Error", "RuntimeException"], "ans": 0 },
  { "q": "Which of the following is not a primitive data type?", "opts": ["int", "float", "String", "char"], "ans": 2 },
  { "q": "What is the purpose of the 'instanceof' keyword?", "opts": ["To check if an object is an instance of a class", "To create an object", "To define a class", "None of the above"], "ans": 0 },
  { "q": "Which method can be used to convert a string to an integer?", "opts": ["parseInt()", "Integer.valueOf()", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "What is the default value of an int variable?", "opts": ["0", "1", "null", "undefined"], "ans": 0 },
  { "q": "Which of the following statements is true about constructors?", "opts": ["They do not have a return type", "They can be overloaded", "They can be private", "All of the above"], "ans": 3 },
  { "q": "What will be the output of System.out.println(10 + '5');", "opts": ["105", "15", "Error", "None of the above"], "ans": 0 },
  { "q": "Which of the following is used to create a thread in Java?", "opts": ["Thread class", "Runnable interface", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "What is the output of System.out.println(0.1 + 0.2 == 0.3);", "opts": ["true", "false", "Error", "undefined"], "ans": 1 },
  { "q": "Which of the following is a method to sort an array in Java?", "opts": ["sort()", "Arrays.sort()", "Collections.sort()", "Both B and C"], "ans": 3 },
  { "q": "What is the function of the 'main' method?", "opts": ["To start the execution of a Java program", "To end the execution", "To call other methods", "None of the above"], "ans": 0 },
  { "q": "Which of the following can be used to create an immutable class?", "opts": ["Using 'final' keyword", "Using private fields", "Using getter methods", "All of the above"], "ans": 3 },
  { "q": "What does the 'synchronized' keyword do?", "opts": ["Prevents multiple threads from accessing a resource", "Makes a method run faster", "Allows thread access", "None of the above"], "ans": 0 },
  { "q": "What is the purpose of the 'break' statement?", "opts": ["To exit a loop or switch statement", "To pause execution", "To continue the loop", "None of the above"], "ans": 0 },
  { "q": "Which of the following is not a method of the String class?", "opts": ["length()", "substring()", "charAt()", "toChar()"], "ans": 3 }
    ,
  { "q": "Which of the following is a feature of Java?", "opts": ["Platform independence", "Object-oriented", "Automatic memory management", "All of the above"], "ans": 3 },
  { "q": "What is the output of System.out.println(1 + 2 + '3');", "opts": ["6", "3", "Error", "123"], "ans": 3 },
  { "q": "Which of the following is a marker interface?", "opts": ["Serializable", "Cloneable", "Remote", "All of the above"], "ans": 3 },
  { "q": "Which of the following cannot be a superclass?", "opts": ["Object", "String", "ArrayList", "int"], "ans": 3 },
  { "q": "What is a constructor?", "opts": ["A method with no return type", "A method to initialize objects", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "What does the 'instanceof' operator do?", "opts": ["Checks if an object is an instance of a class", "Checks if a variable is null", "Creates an instance of a class", "None of the above"], "ans": 0 },
  { "q": "Which of the following statements is correct about Java?", "opts": ["Java is platform-dependent", "Java uses a compiler and an interpreter", "Java is a procedural programming language", "Java does not support multithreading"], "ans": 1 },
  { "q": "What will be the output of System.out.println('A' + 1);", "opts": ["A1", "66", "B", "Error"], "ans": 1 },
  { "q": "Which access modifier is the most restrictive?", "opts": ["public", "protected", "private", "default"], "ans": 2 },
  { "q": "What is the purpose of the 'continue' statement?", "opts": ["To exit the loop", "To skip the current iteration", "To restart the loop", "None of the above"], "ans": 1 },
  { "q": "Which of the following is not an interface in Java?", "opts": ["List", "Set", "Map", "Array"], "ans": 3 },
  { "q": "What is the output of System.out.println(2 + 3 + '4' + 5);", "opts": ["2345", "25", "Error", "None of the above"], "ans": 0 },
  { "q": "Which method can be used to find the length of an array?", "opts": ["length()", "size()", "getLength()", "None of the above"], "ans": 0 },
  { "q": "Which of the following is a valid declaration of a double variable?", "opts": ["double 1stValue;", "double firstValue;", "double first Value;", "double first-Value;"], "ans": 1 },
  { "q": "What is the purpose of the 'default' keyword in interfaces?", "opts": ["To provide default method implementations", "To indicate access level", "To define a variable", "None of the above"], "ans": 0 },
  { "q": "Which class is used to read data from a file?", "opts": ["FileReader", "BufferedReader", "Scanner", "All of the above"], "ans": 3 },
  { "q": "What is the output of System.out.println(10 != 10);", "opts": ["true", "false", "Error", "None of the above"], "ans": 1 },
  { "q": "Which of the following is an abstract class?", "opts": ["Thread", "Runnable", "Exception", "All of the above"], "ans": 3 },
  { "q": "What is the output of System.out.println(5.0 / 2);", "opts": ["2", "2.5", "2.0", "Error"], "ans": 1 },
  { "q": "Which of the following is used for memory management in Java?", "opts": ["Garbage Collection", "Manual Deallocation", "Destructor", "None of the above"], "ans": 0 },
  { "q": "What does the 'finalize()' method do?", "opts": ["Releases system resources", "Finalizes a thread", "Cleans up before an object is destroyed", "None of the above"], "ans": 2 },
  { "q": "What is the default value of an object reference variable?", "opts": ["0", "null", "undefined", "false"], "ans": 1 },
  { "q": "Which of the following is true about Java arrays?", "opts": ["Arrays can grow dynamically", "Arrays are zero-indexed", "Arrays can hold different types", "All of the above"], "ans": 1 },
  { "q": "What will be the output of System.out.println(10 + 20 + '30');", "opts": ["30", "1020", "Error", "None of the above"], "ans": 1 },
  { "q": "Which of the following cannot be overridden?", "opts": ["Static methods", "Final methods", "Private methods", "All of the above"], "ans": 3 },
  { "q": "What is the purpose of the 'throw' keyword?", "opts": ["To create an exception", "To throw an exception", "To catch an exception", "None of the above"], "ans": 1 },
  { "q": "What is an anonymous class?", "opts": ["A class without a name", "A class with multiple instances", "A class defined without a constructor", "None of the above"], "ans": 0 },
  { "q": "Which keyword is used to implement an interface?", "opts": ["implements", "extends", "inherits", "uses"], "ans": 0 },
  { "q": "What is the output of System.out.println('5' + 2 + 3);", "opts": ["10", "53", "Error", "None of the above"], "ans": 1 },
  { "q": "What is the purpose of the 'assert' keyword?", "opts": ["To perform debugging", "To handle exceptions", "To validate assumptions", "None of the above"], "ans": 2 },
  { "q": "Which of the following is a valid Java package name?", "opts": ["com.myApp", "1stApp", "my app", "com.my-App"], "ans": 0 },
  { "q": "Which of the following is not a reserved keyword in Java?", "opts": ["class", "interface", "method", "package"], "ans": 2 },
  { "q": "What is the output of System.out.println(true && false);", "opts": ["true", "false", "Error", "undefined"], "ans": 1 },
  { "q": "Which of the following is used to implement encapsulation?", "opts": ["Access modifiers", "Static methods", "Inheritance", "None of the above"], "ans": 0 },
  { "q": "Which exception is thrown when trying to access an index outside the bounds of an array?", "opts": ["IndexOutOfBoundsException", "ArrayStoreException", "NullPointerException", "ClassCastException"], "ans": 0 },
  { "q": "What is the output of System.out.println(5 / 2);", "opts": ["2", "2.5", "3", "Error"], "ans": 0 },
  { "q": "Which of the following is true about Java strings?", "opts": ["Strings are mutable", "Strings are immutable", "Strings can be changed", "None of the above"], "ans": 1 },
  { "q": "What does the 'return' statement do?", "opts": ["Exits a method", "Returns a value from a method", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "Which method can be used to convert a string to lowercase?", "opts": ["toLowerCase()", "lowerCase()", "convertToLower()", "None of the above"], "ans": 0 },
  { "q": "What is the purpose of the 'break' statement in switch cases?", "opts": ["To exit the loop", "To skip a case", "To end a switch block", "None of the above"], "ans": 2 },
  { "q": "What does the 'synchronized' block do?", "opts": ["Prevents thread interference", "Allows multiple threads", "Increases performance", "None of the above"], "ans": 0 },
  { "q": "Which of the following is not a feature of Java?", "opts": ["Simple", "Secure", "Architectural-neutral", "Complex"], "ans": 3 },
  { "q": "Which of the following is a valid Java data type?", "opts": ["char", "string", "integer", "all of the above"], "ans": 0 },
  { "q": "Which of the following is not a primitive data type in Java?", "opts": ["int", "float", "String", "char"], "ans": 2 },
  { "q": "What is the size of an int variable in Java?", "opts": ["16 bits", "32 bits", "64 bits", "8 bits"], "ans": 1 },
  { "q": "What is the default value of a boolean variable?", "opts": ["true", "false", "0", "1"], "ans": 1 },
  { "q": "What does JVM stand for?", "opts": ["Java Virtual Machine", "Java Variable Machine", "Java Visual Machine", "None of the above"], "ans": 0 },
  { "q": "Which method is used to compare two strings in Java?", "opts": ["compare()", "equals()", "equalsIgnoreCase()", "All of the above"], "ans": 3 },

  { "q": "What is the output of System.out.println(10 + 20 + '30');", "opts": ["1030", "30", "Error", "None of the above"], "ans": 0 },
  { "q": "Which of the following is used to handle exceptions?", "opts": ["try", "catch", "finally", "All of the above"], "ans": 3 },
  { "q": "What will be the output of System.out.println('Hello' + 5 + 6);", "opts": ["Hello56", "Hello11", "Error", "None of the above"], "ans": 0 },
  { "q": "Which of the following keywords is used to define a class in Java?", "opts": ["class", "define", "create", "new"], "ans": 0 },
  { "q": "What is the purpose of the 'static' keyword?", "opts": ["To create an instance", "To access a method without an object", "To define a class", "None of the above"], "ans": 1 },
  { "q": "Which of the following is a built-in exception class?", "opts": ["IOException", "SQLException", "ClassNotFoundException", "All of the above"], "ans": 3 },
  { "q": "What does 'this' keyword refer to?", "opts": ["Current class instance", "Super class instance", "Global variable", "None of the above"], "ans": 0 },
  { "q": "What is the result of the expression 2 + 3 + '5'?", "opts": ["55", "25", "Error", "None of the above"], "ans": 0 },
  { "q": "Which of the following cannot be changed in a final variable?", "opts": ["Its value", "Its type", "Its reference", "None of the above"], "ans": 0 },
  { "q": "Which statement is used to terminate a loop?", "opts": ["break", "exit", "return", "stop"], "ans": 0 },
  { "q": "Which of the following is not a valid identifier in Java?", "opts": ["myVar", "1stVar", "_myVar", "$myVar"], "ans": 1 },
  { "q": "What is the purpose of the 'volatile' keyword?", "opts": ["To indicate a variable is shared between threads", "To prevent a variable from being optimized", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "What will be the output of System.out.println(10 == 10.0);", "opts": ["true", "false", "Error", "None of the above"], "ans": 0 },
  { "q": "Which of the following is a valid way to declare an array?", "opts": ["int arr[];", "int[] arr;", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "What is the use of the 'super' keyword?", "opts": ["To refer to the immediate parent class", "To call the parent class constructor", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "Which method is used to remove an element from an ArrayList?", "opts": ["remove()", "delete()", "clear()", "discard()"], "ans": 0 },
  { "q": "What is the output of System.out.println(5 * 2 + '3');", "opts": ["10", "53", "Error", "None of the above"], "ans": 1 },
  { "q": "What is a lambda expression?", "opts": ["An anonymous function", "A way to create objects", "A method with a return type", "None of the above"], "ans": 0 },
  { "q": "Which of the following interfaces is used to iterate over collections?", "opts": ["Iterator", "Collection", "List", "Map"], "ans": 0 },
  { "q": "What is the purpose of the 'abstract' keyword?", "opts": ["To define an abstract class", "To declare an abstract method", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "Which of the following is not a part of the Java Collections Framework?", "opts": ["List", "Set", "Map", "Array"], "ans": 3 },
  { "q": "What does the 'break' statement do in a switch case?", "opts": ["Ends the switch statement", "Continues with the next case", "Exits the loop", "None of the above"], "ans": 0 },
  { "q": "Which keyword is used to inherit a class?", "opts": ["extends", "implements", "inherits", "uses"], "ans": 0 },
  { "q": "What is the output of System.out.println(4 > 5);", "opts": ["true", "false", "Error", "None of the above"], "ans": 1 },
  { "q": "Which of the following is used for multi-threading in Java?", "opts": ["Thread class", "Runnable interface", "Both A and B", "None of the above"], "ans": 2 },
  { "q": "What is the default value of a reference type variable?", "opts": ["0", "null", "undefined", "None of the above"], "ans": 1 },
  { "q": "Which of the following is a valid way to handle exceptions?", "opts": ["try-catch", "throws", "throw", "All of the above"], "ans": 3 },
  { "q": "What will be the output of System.out.println(2 + '2');", "opts": ["22", "4", "Error", "None of the above"], "ans": 0 },
  { "q": "What is the significance of the 'final' keyword?", "opts": ["It makes variables constant", "It prevents method overriding", "It prevents inheritance", "All of the above"], "ans": 3 },
  { "q": "What will be the output of System.out.println(10 / 0);", "opts": ["0", "Infinity", "Error", "None of the above"], "ans": 2 },
  { "q": "Which of the following is an interface in Java?", "opts": ["List", "ArrayList", "Vector", "All of the above"], "ans": 0 },
  { "q": "What is the purpose of the 'package' keyword?", "opts": ["To group related classes", "To create a new class", "To define an interface", "None of the above"], "ans": 0 },
  { "q": "Which of the following is a collection class?", "opts": ["HashMap", "ArrayList", "TreeSet", "All of the above"], "ans": 3 },
  { "q": "What is the output of System.out.println('5' + 5);", "opts": ["55", "10", "Error", "None of the above"], "ans": 0 },
  { "q": "Which of the following statements is used to terminate the program?", "opts": ["exit()", "terminate()", "stop()", "quit()"], "ans": 0 },
  { "q": "What is the main purpose of Java Garbage Collector?", "opts": ["Freeing up memory", "Speeding up execution", "Optimizing performance", "None of the above"], "ans": 0 }


  ],
  Python: [





    { "q": "What is the output of print(type(5))?", "opts": ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a mutable data type in Python?", "opts": ["list", "tuple", "str", "int"], "ans": 0 },
    { "q": "What is the correct way to define a function in Python?", "opts": ["def myFunction():", "function myFunction():", "def myFunction[]:", "None of the above"], "ans": 0 },
    { "q": "What is the output of print(2 ** 3)?", "opts": ["6", "8", "9", "None of the above"], "ans": 1 },
    { "q": "Which method is used to convert a string to lowercase?", "opts": ["lower()", "tolower()", "lowercase()", "None of the above"], "ans": 0 },
    { "q": "What does the len() function do?", "opts": ["Counts characters in a string", "Returns the length of an object", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which of the following is not a valid way to create a list?", "opts": ["my_list = []", "my_list = list()", "my_list = (1, 2, 3)", "my_list = [1, 2, 3]"], "ans": 2 },
    { "q": "What is the output of print('Hello' + 'World')?", "opts": ["Hello World", "HelloWorld", "Error", "None of the above"], "ans": 1 },
    { "q": "What does the 'pass' statement do?", "opts": ["Skips the current loop", "Does nothing", "Raises an error", "None of the above"], "ans": 1 },
    { "q": "Which of the following is used to handle exceptions?", "opts": ["try", "catch", "finally", "All of the above"], "ans": 3 },
    { "q": "What is the output of print(5 == 5)?", "opts": ["True", "False", "1", "0"], "ans": 0 },
    { "q": "How do you create a dictionary in Python?", "opts": ["my_dict = {}", "my_dict = []", "my_dict = ()", "my_dict = dict()"], "ans": 0 },
    { "q": "Which keyword is used to define a class?", "opts": ["class", "def", "new", "create"], "ans": 0 },
    { "q": "What will be the output of print(3 * 'A')?", "opts": ["AAA", "AA", "Error", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a Python tuple?", "opts": ["[1, 2, 3]", "{1: 'one', 2: 'two'}", "(1, 2, 3)", "None of the above"], "ans": 2 },
    { "q": "What is the output of print(10 // 3)?", "opts": ["3", "3.33", "4", "Error"], "ans": 0 },
    { "q": "How do you comment a line in Python?", "opts": ["// This is a comment", "# This is a comment", "/* This is a comment */", "None of the above"], "ans": 1 },
    { "q": "Which operator is used for floor division in Python?", "opts": ["//", "/", "%%", "**"], "ans": 0 },
    { "q": "What is the purpose of the 'self' keyword?", "opts": ["To refer to the current instance", "To refer to the parent class", "To define a global variable", "None of the above"], "ans": 0 },
    { "q": "Which function can be used to read a file in Python?", "opts": ["read()", "open()", "input()", "All of the above"], "ans": 1 },
    { "q": "What is the output of print(bool(''))?", "opts": ["True", "False", "Error", "None of the above"], "ans": 1 },
    { "q": "Which method is used to add an element to a list?", "opts": ["add()", "append()", "insert()", "extend()"], "ans": 1 },
    { "q": "What will be the output of print([1, 2, 3] + [4, 5])?", "opts": ["[1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1]", "Error", "None of the above"], "ans": 0 },
    { "q": "What is the correct way to import a module?", "opts": ["import module", "include module", "from module import", "import module as"], "ans": 0 },
    { "q": "Which of the following is a valid set in Python?", "opts": ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "None of the above"], "ans": 0 },
    { "q": "What will be the output of print(2 ** 4)?", "opts": ["8", "16", "4", "None of the above"], "ans": 1 },
    { "q": "Which keyword is used to define a generator in Python?", "opts": ["def", "return", "yield", "generate"], "ans": 2 },
    { "q": "What will be the output of print('Python'.lower())?", "opts": ["PYTHON", "python", "Error", "None of the above"], "ans": 1 },
    { "q": "Which of the following is a valid way to create an empty set?", "opts": ["set()", "{}", "[]", "None of the above"], "ans": 0 },
    { "q": "What is the output of print(0.1 + 0.2 == 0.3)?", "opts": ["True", "False", "Error", "None of the above"], "ans": 1 },
    { "q": "How do you define a class variable?", "opts": ["self.variable", "ClassName.variable", "variable", "None of the above"], "ans": 1 },
    { "q": "Which method is used to convert a string to a list?", "opts": ["split()", "join()", "to_list()", "None of the above"], "ans": 0 },
    { "q": "What is the output of print([1, 2] * 2)?", "opts": ["[1, 2, 1, 2]", "[1, 2, 2]", "[1, 2, 1, 2]", "Error"], "ans": 0 },
    { "q": "Which keyword is used to define a constant?", "opts": ["const", "constant", "final", "None of the above"], "ans": 3 },
    { "q": "What will be the output of print('A' in 'ABC')?", "opts": ["True", "False", "Error", "None of the above"], "ans": 0 },
    { "q": "Which of the following functions is used to convert a string to an integer?", "opts": ["str()", "int()", "float()", "None of the above"], "ans": 1 },
    { "q": "What is the output of print(list(range(5)))?", "opts": ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 5]", "Error"], "ans": 0 },
    { "q": "Which of the following is a correct way to create a dictionary?", "opts": ["my_dict = {}", "my_dict = dict()", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the purpose of the 'with' statement?", "opts": ["To open files", "To handle exceptions", "To manage resources", "None of the above"], "ans": 2 },
    { "q": "Which of the following is not a keyword in Python?", "opts": ["if", "else", "while", "switch"], "ans": 3 },
    { "q": "What is the output of print(10 % 3)?", "opts": ["1", "3", "0", "2"], "ans": 3 },
    { "q": "Which operator is used for string formatting in Python?", "opts": ["%", "+", "format()", "f-string"], "ans": 3 },
    { "q": "What will be the output of print('Hello, World!'[7:12])?", "opts": ["Hello", "World", "Hello, W", "None of the above"], "ans": 1 },
    { "q": "What is the purpose of the 'assert' statement?", "opts": ["To handle exceptions", "To validate expressions", "To exit the program", "None of the above"], "ans": 1 },
    { "q": "What is the output of print('10' * 2)?", "opts": ["1010", "20", "Error", "None of the above"], "ans": 0 },
    { "q": "How do you create a virtual environment in Python?", "opts": ["python -m venv", "virtualenv", "pipenv", "All of the above"], "ans": 3 },


  ],
  C: [


    { "q": "What is the output of 'printf(\"%d\", 10 % 3);'?", "opts": ["1", "3", "0", "Error"], "ans": 0 },
    { "q": "What does 'strcat' function do?", "opts": ["Concatenates two strings", "Copies a string", "Calculates string length", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a valid declaration of a float?", "opts": ["float f;", "float 1f;", "float f = 1;", "All of the above"], "ans": 0 },
    { "q": "What is the purpose of the 'const' keyword?", "opts": ["Define constant values", "Define variable types", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%f\", 5.0/2);'?", "opts": ["2.5", "2", "3", "Error"], "ans": 0 },
    { "q": "What is an array in C?", "opts": ["Collection of similar data types", "Collection of different data types", "Function", "None of the above"], "ans": 0 },
    { "q": "What does the 'exit' function do?", "opts": ["Terminates the program", "Returns control to OS", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the use of 'volatile' keyword?", "opts": ["Prevent compiler optimization", "Allow variable to change", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the output of 'printf(\"%d\", 1 + 2 * 3);'?", "opts": ["9", "7", "6", "Error"], "ans": 1 },
    { "q": "What does 'fgets' function do?", "opts": ["Read a string", "Write a string", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "Which of the following is not a looping construct?", "opts": ["for", "while", "repeat", "do-while"], "ans": 2 },
    { "q": "What is the use of 'sizeof' operator with a type?", "opts": ["Returns size in bytes", "Returns value", "Returns address", "None of the above"], "ans": 0 },
    { "q": "What will happen if you forget to use 'return' in a function?", "opts": ["Compiler error", "Undefined behavior", "Returns zero", "None of the above"], "ans": 1 },
    { "q": "What is a static variable?", "opts": ["Retains its value between function calls", "Initialized only once", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does the 'switch' statement do?", "opts": ["Multiple if statements", "Multiple cases", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the output of 'printf(\"%d\", 5 == 5);'?", "opts": ["1", "0", "True", "False"], "ans": 0 },
    { "q": "Which function is used to compare two strings?", "opts": ["strcmp", "strcpy", "strlen", "strcat"], "ans": 0 },
    { "q": "What does 'scanf' return if successful?", "opts": ["1", "0", "Number of inputs", "Error"], "ans": 2 },
    { "q": "What is the purpose of the 'break' statement in a switch?", "opts": ["To end the switch", "To skip cases", "To exit the loop", "None of the above"], "ans": 0 },
    { "q": "Which operator is used to dereference a pointer?", "opts": ["&", "*", "->", "::"], "ans": 1 },
    { "q": "What does 'calloc' do differently from 'malloc'?", "opts": ["Allocates single block", "Initializes memory to zero", "Faster allocation", "None of the above"], "ans": 1 },
    { "q": "What is the output of 'printf(\"%d\", sizeof(char));'?", "opts": ["1", "2", "4", "Depends on the compiler"], "ans": 0 },
    { "q": "What is the purpose of the 'continue' statement?", "opts": ["Skip to the next iteration", "Terminate a loop", "End the program", "None of the above"], "ans": 0 },
    { "q": "What is a function pointer?", "opts": ["Pointer to a function", "Pointer to a variable", "Pointer to a structure", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a valid syntax for a structure?", "opts": ["struct name { int a; };", "struct name a;", "struct name { int a; int b; };", "Both A and C"], "ans": 3 },
    { "q": "What will happen if you assign a value to a constant variable?", "opts": ["No error", "Compile-time error", "Runtime error", "Undefined behavior"], "ans": 1 },
    { "q": "What is the use of 'typedef'?", "opts": ["Create new data types", "Rename existing types", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which function is used to open a file?", "opts": ["fopen", "fileopen", "openfile", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%s\", \"Hello World\");'?", "opts": ["Hello World", "Hello", "World", "Error"], "ans": 0 },
    { "q": "What is the default value of a static int?", "opts": ["0", "Undefined", "1", "None"], "ans": 0 },
    { "q": "Which of the following is not a C data type?", "opts": ["int", "char", "float", "decimal"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%d\", 5 & 3);'?", "opts": ["1", "0", "5", "None"], "ans": 0 },
    { "q": "What does the 'sizeof' operator return for an array?", "opts": ["Number of elements", "Total bytes", "Size of first element", "None of the above"], "ans": 1 },
    { "q": "Which of the following is a valid string declaration?", "opts": ["char str[] = \"Hello\";", "char str = \"Hello\";", "char str[5];", "Both A and C"], "ans": 3 },
    { "q": "What does 'puts' function do?", "opts": ["Prints a string", "Reads a string", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "What is the purpose of 'fclose' function?", "opts": ["Close a file", "Open a file", "Read from file", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a correct format specifier for a float?", "opts": ["%f", "%d", "%c", "%s"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", 1 << 2);'?", "opts": ["2", "4", "8", "Error"], "ans": 2 },
    { "q": "What is a local variable?", "opts": ["Declared inside a function", "Global scope", "Static", "None of the above"], "ans": 0 },
    { "q": "Which function is used to remove a file?", "opts": ["unlink", "remove", "delete", "Both A and B"], "ans": 3 },
    { "q": "What does 'fprintf' do?", "opts": ["Writes formatted data to a file", "Reads formatted data from a file", "Writes to stdout", "None of the above"], "ans": 0 },
    { "q": "What is the result of 'printf(\"%d\", 10 && 5);'?", "opts": ["1", "0", "Error", "None"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 0 || 1);'?", "opts": ["0", "1", "Error", "None"], "ans": 1 },
    { "q": "Which of the following is a compound data type?", "opts": ["struct", "union", "enum", "All of the above"], "ans": 3 },
    { "q": "What is the purpose of the 'volatile' qualifier?", "opts": ["Prevent optimization", "Enhance performance", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "Which operator is used for pointer arithmetic?", "opts": ["+", "-", "*", "&"], "ans": 0 }
    ,
    { "q": "What is the output of 'printf(\"%d\", 10 % 3);'?", "opts": ["1", "3", "0", "Error"], "ans": 0 },
    { "q": "What does 'strcat' function do?", "opts": ["Concatenates two strings", "Copies a string", "Calculates string length", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a valid declaration of a float?", "opts": ["float f;", "float 1f;", "float f = 1;", "All of the above"], "ans": 0 },
    { "q": "What is the purpose of the 'const' keyword?", "opts": ["Define constant values", "Define variable types", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%f\", 5.0/2);'?", "opts": ["2.5", "2", "3", "Error"], "ans": 0 },
    { "q": "What is an array in C?", "opts": ["Collection of similar data types", "Collection of different data types", "Function", "None of the above"], "ans": 0 },
    { "q": "What does the 'exit' function do?", "opts": ["Terminates the program", "Returns control to OS", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the use of 'volatile' keyword?", "opts": ["Prevent compiler optimization", "Allow variable to change", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the output of 'printf(\"%d\", 1 + 2 * 3);'?", "opts": ["9", "7", "6", "Error"], "ans": 1 },
    { "q": "What does 'fgets' function do?", "opts": ["Read a string", "Write a string", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "Which of the following is not a looping construct?", "opts": ["for", "while", "repeat", "do-while"], "ans": 2 },
    { "q": "What is the use of 'sizeof' operator with a type?", "opts": ["Returns size in bytes", "Returns value", "Returns address", "None of the above"], "ans": 0 },
    { "q": "What will happen if you forget to use 'return' in a function?", "opts": ["Compiler error", "Undefined behavior", "Returns zero", "None of the above"], "ans": 1 },
    { "q": "What is a static variable?", "opts": ["Retains its value between function calls", "Initialized only once", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does the 'switch' statement do?", "opts": ["Multiple if statements", "Multiple cases", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is the output of 'printf(\"%d\", 5 == 5);'?", "opts": ["1", "0", "True", "False"], "ans": 0 },
    { "q": "Which function is used to compare two strings?", "opts": ["strcmp", "strcpy", "strlen", "strcat"], "ans": 0 },
    { "q": "What does 'scanf' return if successful?", "opts": ["1", "0", "Number of inputs", "Error"], "ans": 2 },
    { "q": "What is the purpose of the 'break' statement in a switch?", "opts": ["To end the switch", "To skip cases", "To exit the loop", "None of the above"], "ans": 0 },
    { "q": "Which operator is used to dereference a pointer?", "opts": ["&", "*", "->", "::"], "ans": 1 },
    { "q": "What does 'calloc' do differently from 'malloc'?", "opts": ["Allocates single block", "Initializes memory to zero", "Faster allocation", "None of the above"], "ans": 1 },
    { "q": "What is the output of 'printf(\"%d\", sizeof(char));'?", "opts": ["1", "2", "4", "Depends on the compiler"], "ans": 0 },
    { "q": "What is the purpose of the 'continue' statement?", "opts": ["Skip to the next iteration", "Terminate a loop", "End the program", "None of the above"], "ans": 0 },
    { "q": "What is a function pointer?", "opts": ["Pointer to a function", "Pointer to a variable", "Pointer to a structure", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a valid syntax for a structure?", "opts": ["struct name { int a; };", "struct name a;", "struct name { int a; int b; };", "Both A and C"], "ans": 3 },
    { "q": "What will happen if you assign a value to a constant variable?", "opts": ["No error", "Compile-time error", "Runtime error", "Undefined behavior"], "ans": 1 },
    { "q": "What is the use of 'typedef'?", "opts": ["Create new data types", "Rename existing types", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which function is used to open a file?", "opts": ["fopen", "fileopen", "openfile", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%s\", \"Hello World\");'?", "opts": ["Hello World", "Hello", "World", "Error"], "ans": 0 },
    { "q": "What is the default value of a static int?", "opts": ["0", "Undefined", "1", "None"], "ans": 0 },
    { "q": "Which of the following is not a C data type?", "opts": ["int", "char", "float", "decimal"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%d\", 5 & 3);'?", "opts": ["1", "0", "5", "None"], "ans": 0 },
    { "q": "What does the 'sizeof' operator return for an array?", "opts": ["Number of elements", "Total bytes", "Size of first element", "None of the above"], "ans": 1 },
    { "q": "Which of the following is a valid string declaration?", "opts": ["char str[] = \"Hello\";", "char str = \"Hello\";", "char str[5];", "Both A and C"], "ans": 3 },
    { "q": "What does 'puts' function do?", "opts": ["Prints a string", "Reads a string", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "What is the purpose of 'fclose' function?", "opts": ["Close a file", "Open a file", "Read from file", "None of the above"], "ans": 0 },
    { "q": "Which of the following is a correct format specifier for a float?", "opts": ["%f", "%d", "%c", "%s"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", 1 << 2);'?", "opts": ["2", "4", "8", "Error"], "ans": 2 },
    { "q": "What is a local variable?", "opts": ["Declared inside a function", "Global scope", "Static", "None of the above"], "ans": 0 },
    { "q": "Which function is used to remove a file?", "opts": ["unlink", "remove", "delete", "Both A and B"], "ans": 3 },
    { "q": "What does 'fprintf' do?", "opts": ["Writes formatted data to a file", "Reads formatted data from a file", "Writes to stdout", "None of the above"], "ans": 0 },
    { "q": "What is the result of 'printf(\"%d\", 10 && 5);'?", "opts": ["1", "0", "Error", "None"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 0 || 1);'?", "opts": ["0", "1", "Error", "None"], "ans": 1 },
    { "q": "Which of the following is a compound data type?", "opts": ["struct", "union", "enum", "All of the above"], "ans": 3 },
    { "q": "What is the purpose of the 'volatile' qualifier?", "opts": ["Prevent optimization", "Enhance performance", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "Which operator is used for pointer arithmetic?", "opts": ["+", "-", "*", "&"], "ans": 0 }
    ,
    { "q": "What is the correct way to declare a function in C?", "opts": ["void func()", "func void()", "void func[]", "func[] void"], "ans": 0 },
    { "q": "Which of the following is a correct pointer declaration?", "opts": ["int ptr;", "int *ptr;", "int &ptr;", "ptr int;"], "ans": 1 },
    { "q": "What does the 'sizeof' operator do?", "opts": ["Returns the size of a variable", "Returns the size of a type", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What will be the output of 'printf(\"%d\", 2 * 3 + 5);'?", "opts": ["11", "6", "7", "5"], "ans": 0 },
    { "q": "Which function is used to read formatted input from stdin?", "opts": ["scanf", "input", "read", "fscanf"], "ans": 0 },
    { "q": "What is the purpose of the 'return' statement?", "opts": ["To exit a function", "To return a value", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which keyword is used to declare a variable in C?", "opts": ["var", "let", "int", "define"], "ans": 2 },
    { "q": "What will be the output of 'printf(\"%d\", 10 / 3);'?", "opts": ["3", "3.33", "4", "Error"], "ans": 0 },
    { "q": "Which operator is used to access a member of a structure?", "opts": [".", "->", "&", "%"], "ans": 0 },
    { "q": "What does the 'free' function do?", "opts": ["Allocate memory", "Deallocate memory", "Resize memory", "None of the above"], "ans": 1 },
    { "q": "What will be the output of 'printf(\"%d\", 3 && 0);'?", "opts": ["1", "0", "Error", "None"], "ans": 1 },
    { "q": "Which of the following is a valid loop structure in C?", "opts": ["for", "while", "do-while", "All of the above"], "ans": 3 },
    { "q": "What is the purpose of a header file in C?", "opts": ["Declare functions", "Include libraries", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What will be the output of 'printf(\"%d\", 1 << 2);'?", "opts": ["2", "4", "1", "Error"], "ans": 1 },
    { "q": "Which of the following statements is true about arrays?", "opts": ["Arrays can store different data types", "Array size is fixed", "Arrays cannot be passed to functions", "None of the above"], "ans": 1 },
    { "q": "What is the output of 'printf(\"%d\", (10 < 20) ? 1 : 0);'?", "opts": ["1", "0", "Error", "None"], "ans": 0 },
    { "q": "Which function is used to terminate the program immediately?", "opts": ["exit", "terminate", "stop", "abort"], "ans": 0 },
    { "q": "What does the 'static' keyword indicate?", "opts": ["Global variable", "Local variable", "Lifetime of variable", "None of the above"], "ans": 2 },
    { "q": "What is a pointer?", "opts": ["Variable that stores address", "Variable that stores value", "Data structure", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 10 % 3);'?", "opts": ["1", "3", "0", "Error"], "ans": 0 },
    { "q": "Which of the following is not a valid data type in C?", "opts": ["int", "float", "string", "char"], "ans": 2 },
    { "q": "What is the purpose of the 'break' statement?", "opts": ["End the loop", "Skip to next iteration", "Terminate the program", "None of the above"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", sizeof(1.5));'?", "opts": ["4", "8", "2", "Error"], "ans": 1 },
    { "q": "Which function is used to find the absolute value of an integer?", "opts": ["abs", "fabs", "math.abs", "absolute"], "ans": 0 },
    { "q": "What is a function prototype?", "opts": ["Definition of a function", "Declaration of a function", "Call of a function", "None of the above"], "ans": 1 },
    { "q": "Which keyword is used for a function that does not return a value?", "opts": ["void", "return", "int", "none"], "ans": 0 },
    { "q": "What is the purpose of 'strcat' function?", "opts": ["Concatenate two strings", "Compare two strings", "Copy a string", "None of the above"], "ans": 0 },
    { "q": "What is a stack?", "opts": ["Last In First Out", "First In First Out", "Random access", "None of the above"], "ans": 0 },
    { "q": "Which operator is used to dereference a pointer?", "opts": ["*", "&", "%", "#"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", 5 + ++5);'?", "opts": ["10", "11", "12", "Error"], "ans": 1 },
    { "q": "Which of the following can be used to iterate over an array?", "opts": ["for loop", "while loop", "do-while loop", "All of the above"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%s\", \"C Programming\");'?", "opts": ["C Programming", "C", "Programming", "Error"], "ans": 0 },
    { "q": "Which keyword is used to create a union?", "opts": ["union", "struct", "class", "enum"], "ans": 0 },
    { "q": "What does the 'sizeof' operator return for an array?", "opts": ["Size of array", "Size of each element", "Number of elements", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 1 + 2 * 3);'?", "opts": ["7", "9", "8", "5"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", 10 & 3);'?", "opts": ["2", "3", "1", "Error"], "ans": 0 },
    { "q": "What is the purpose of 'fclose' function?", "opts": ["Close a file", "Open a file", "Read a file", "None of the above"], "ans": 0 },
    { "q": "Which function is used to allocate memory for an array?", "opts": ["malloc", "calloc", "realloc", "Both A and B"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%d\", (10 == 10));'?", "opts": ["1", "0", "True", "False"], "ans": 0 },
    { "q": "Which of the following is used to define a constant value?", "opts": ["const", "#define", "define", "All of the above"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%d\", 0 || 1);'?", "opts": ["1", "0", "Error", "None"], "ans": 0 },
    { "q": "What is the correct syntax to declare a multidimensional array?", "opts": ["int arr[10][10];", "int arr(10,10);", "int arr{10,10};", "int arr[10];"], "ans": 0 },
    { "q": "What does 'scanf' function return?", "opts": ["Number of items read", "Input value", "Error code", "None of the above"], "ans": 0 },
    { "q": "Which of the following is not a C standard library?", "opts": ["<stdio.h>", "<stdlib.h>", "<math.h>", "<stringify.h>"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%d\", 4 >> 1);'?", "opts": ["2", "4", "1", "Error"], "ans": 0 },
    { "q": "Which function is used to sort an array?", "opts": ["sort", "qsort", "order", "arrange"], "ans": 1 },
    { "q": "What is the purpose of the 'continue' statement?", "opts": ["Skip current iteration", "End loop", "Terminate program", "None of the above"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", 5 - 2 * 3);'?", "opts": ["-1", "1", "2", "Error"], "ans": 0 }
    , { "q": "Which of the following is a valid variable name?", "opts": ["1variable", "variable_1", "variable-1", "variable@1"], "ans": 1 },
    { "q": "What will be the output of 'printf(\"%d\", 3 * 2 + 1);'?", "opts": ["7", "6", "5", "8"], "ans": 0 },
    { "q": "What does 'printf(\"Hello, World!\");' do?", "opts": ["Prints 'Hello, World!'", "Declares a variable", "Creates a function", "None of the above"], "ans": 0 },
    { "q": "Which operator is used to get the address of a variable?", "opts": ["&", "*", "%", "#"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 10 / 2);'?", "opts": ["5", "2", "10", "Error"], "ans": 0 },
    { "q": "Which of the following is not a looping structure?", "opts": ["for", "while", "do-while", "if"], "ans": 3 },
    { "q": "What will be the output of 'printf(\"%d\", 4 == 4);'?", "opts": ["1", "0", "Error", "None"], "ans": 0 },
    { "q": "What is the purpose of the 'sizeof' operator?", "opts": ["Returns the size of a type", "Returns the size of a variable", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which function is used to copy a string?", "opts": ["strcpy", "copy", "stringcopy", "strdup"], "ans": 0 },
    { "q": "What does 'break' do inside a loop?", "opts": ["Continues to the next iteration", "Exits the loop", "Exits the program", "None of the above"], "ans": 1 },
    { "q": "What will be the output of 'printf(\"%d\", 2 & 3);'?", "opts": ["2", "3", "0", "1"], "ans": 0 },
    { "q": "Which of the following is a correct comment?", "opts": ["// This is a comment", "/* This is a comment */", "// This is a comment /*", "Both A and B"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%d\", 3 | 4);'?", "opts": ["7", "3", "4", "1"], "ans": 0 },
    { "q": "What type of loop is guaranteed to execute at least once?", "opts": ["for", "while", "do-while", "none"], "ans": 2 },
    { "q": "Which of the following is a valid way to declare an array?", "opts": ["int arr[];", "int arr[10];", "int arr(10);", "Both A and B"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%d\", 2 + 3 * 4);'?", "opts": ["14", "20", "26", "14"], "ans": 0 },
    { "q": "What is a function?", "opts": ["Block of code", "Data type", "Variable", "None of the above"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", 3 && 5);'?", "opts": ["0", "1", "3", "5"], "ans": 1 },
    { "q": "Which of the following can be used to return multiple values?", "opts": ["Arrays", "Structures", "Pointers", "All of the above"], "ans": 3 },
    { "q": "What is the output of 'printf(\"%d\", 1 + 2 + 3);'?", "opts": ["6", "5", "4", "Error"], "ans": 0 },
    { "q": "Which function is used to find the length of a string?", "opts": ["strlen", "size", "length", "strlength"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", 10 > 5);'?", "opts": ["1", "0", "True", "False"], "ans": 0 },
    { "q": "What is the purpose of 'return 0;'", "opts": ["End the program", "Return a value from main", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What is a typedef?", "opts": ["Alias for a data type", "Function type", "Pointer type", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 4 % 2);'?", "opts": ["0", "1", "4", "Error"], "ans": 0 },
    { "q": "Which function is used to compare two strings?", "opts": ["strcmp", "compare", "stringcmp", "strcomp"], "ans": 0 },
    { "q": "What does 'continue' do in a loop?", "opts": ["Skip the current iteration", "Exit the loop", "Stop the program", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 1 << 3);'?", "opts": ["8", "3", "2", "4"], "ans": 0 },
    { "q": "Which keyword is used to define a structure?", "opts": ["struct", "class", "define", "data"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 5 && 0);'?", "opts": ["1", "0", "Error", "None"], "ans": 1 },
    { "q": "Which operator is used for logical AND?", "opts": ["&", "&&", "|", "||"], "ans": 1 },
    { "q": "What is the output of 'printf(\"%d\", 1 ^ 2);'?", "opts": ["3", "0", "1", "2"], "ans": 0 },
    { "q": "Which function is used to read a single character?", "opts": ["getchar", "readchar", "getc", "fgetc"], "ans": 0 },
    { "q": "What will be the output of 'printf(\"%d\", 0 == 0);'?", "opts": ["1", "0", "Error", "None"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 7 >> 1);'?", "opts": ["3", "4", "5", "Error"], "ans": 1 },
    { "q": "Which of the following is a valid declaration for a string?", "opts": ["char str[];", "char str[10];", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does 'malloc' do?", "opts": ["Allocates memory", "Frees memory", "Reallocates memory", "None of the above"], "ans": 0 },
    { "q": "What is the purpose of 'fopen' function?", "opts": ["Open a file", "Close a file", "Read a file", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 0 && 1);'?", "opts": ["1", "0", "Error", "None"], "ans": 1 },
    { "q": "Which of the following is a valid way to declare a constant?", "opts": ["const int x = 5;", "#define x 5", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What will be the output of 'printf(\"%d\", (3 * 2) + 1);'?", "opts": ["7", "6", "5", "8"], "ans": 0 },
    { "q": "Which operator is used for logical OR?", "opts": ["|", "||", "&&", "&"], "ans": 1 },
    { "q": "What is the purpose of the 'exit' function?", "opts": ["Terminate program", "Return a value", "Open a file", "None of the above"], "ans": 0 }
    ,









    { "q": "What is the size of an int in C?", "opts": ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"], "ans": 1 },
    { "q": "Which of the following is a valid variable name in C?", "opts": ["2ndVar", "_varName", "var-name", "float"], "ans": 1 },
    { "q": "What does the 'printf' function return?", "opts": ["int", "void", "char", "float"], "ans": 0 },
    { "q": "Which operator is used to access a member of a structure?", "opts": [".", "&", "->", "::"], "ans": 0 },
    { "q": "What is the purpose of the 'break' statement?", "opts": ["Exit a loop", "Continue a loop", "Stop the program", "None of the above"], "ans": 0 },
    { "q": "What is a pointer in C?", "opts": ["Variable that stores memory address", "Variable that stores value", "Data structure", "Function"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 5 + 10);'?", "opts": ["5", "10", "15", "Error"], "ans": 2 },
    { "q": "Which header file is required for using the 'malloc' function?", "opts": ["stdio.h", "stdlib.h", "string.h", "conio.h"], "ans": 1 },
    { "q": "What does 'sizeof' operator do?", "opts": ["Returns the size of a variable", "Returns the address of a variable", "Returns the value of a variable", "None of the above"], "ans": 0 },
    { "q": "What is the correct way to declare a function in C?", "opts": ["void functionName()", "functionName(void)", "functionName[]", "None of the above"], "ans": 0 },
    { "q": "Which of the following is not a valid data type in C?", "opts": ["int", "float", "real", "char"], "ans": 2 },
    { "q": "What will be the output of 'printf(\"%c\", 'A' + 1);'?", "opts": ["A", "B", "C", "Error"], "ans": 1 },
    { "q": "What is the default return type of a function in C?", "opts": ["int", "void", "float", "char"], "ans": 0 },
    { "q": "Which loop is guaranteed to execute at least once?", "opts": ["for loop", "while loop", "do-while loop", "none"], "ans": 2 },
    { "q": "What is a NULL pointer?", "opts": ["Pointer to zero", "Pointer with no memory allocated", "Pointer that points to itself", "None of the above"], "ans": 1 },
    { "q": "What does 'free' function do?", "opts": ["Allocates memory", "Deallocates memory", "Resizes memory", "None of the above"], "ans": 1 },
    { "q": "Which of the following is a correct pointer declaration?", "opts": ["int *p;", "int p*;", "int &p;", "int p[];"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 10 / 3);'?", "opts": ["3.33", "3", "3.0", "Error"], "ans": 1 },
    { "q": "What is a structure in C?", "opts": ["User-defined data type", "Built-in data type", "Function", "Array"], "ans": 0 },
    { "q": "Which of the following is the correct syntax to declare an array?", "opts": ["int arr[5];", "arr int[5];", "int[5] arr;", "None of the above"], "ans": 0 },
    { "q": "What does 'static' keyword do?", "opts": ["Limits variable scope", "Allocates memory", "Makes variable global", "None of the above"], "ans": 0 },
    { "q": "Which of the following statements is true about 'malloc'?", "opts": ["Allocates memory at compile time", "Allocates memory at runtime", "Deallocates memory", "None of the above"], "ans": 1 },
    { "q": "What is the output of 'printf(\"%d\", sizeof(int));' if int is 4 bytes?", "opts": ["4", "2", "8", "Error"], "ans": 0 },
    { "q": "What is the function of 'scanf'?", "opts": ["Output data", "Input data", "Both A and B", "None of the above"], "ans": 1 },
    { "q": "What is a union in C?", "opts": ["Data structure that can store different data types", "Similar to structure", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which of the following is a control statement?", "opts": ["if", "while", "for", "All of the above"], "ans": 3 },
    { "q": "What is recursion?", "opts": ["Function calling itself", "Looping", "Nested functions", "None of the above"], "ans": 0 },
    { "q": "What does 'exit(0)' do?", "opts": ["Terminates the program", "Returns to the main function", "Continues execution", "None of the above"], "ans": 0 },
    { "q": "What is a macro in C?", "opts": ["Preprocessor directive", "Function", "Variable", "None of the above"], "ans": 0 },
    { "q": "What does 'strcpy' function do?", "opts": ["Copies a string", "Concatenates strings", "Returns string length", "None of the above"], "ans": 0 },
    { "q": "Which of the following is not a keyword in C?", "opts": ["volatile", "return", "goto", "label"], "ans": 3 },
    { "q": "What is the use of 'continue' statement?", "opts": ["Skip the current iteration", "Terminate the loop", "Exit the program", "None of the above"], "ans": 0 },
    { "q": "What is 'file handling' in C?", "opts": ["Managing files", "Reading files", "Writing files", "All of the above"], "ans": 3 },
    { "q": "What is the purpose of 'header files'?", "opts": ["Store function declarations", "Store variables", "Both A and B", "None of the above"], "ans": 0 },
    { "q": "What is a dangling pointer?", "opts": ["Pointer that points to a deleted object", "Uninitialized pointer", "Null pointer", "None of the above"], "ans": 0 },
    { "q": "What is the output of 'printf(\"%d\", 1 + 2 + 3);'?", "opts": ["6", "123", "None", "Error"], "ans": 0 },
    { "q": "Which operator is used to get the address of a variable?", "opts": ["&", "*", "%", "#"], "ans": 0 },
    { "q": "What is the purpose of the 'return' statement?", "opts": ["Exit a function", "Return a value", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "What does 'strlen' function do?", "opts": ["Returns string length", "Copies a string", "Concatenates strings", "None of the above"], "ans": 0 },
    { "q": "Which of the following can be used to comment in C?", "opts": ["//", "/* */", "// and /* */", "All of the above"], "ans": 3 },
    { "q": "What does the 'sizeof' operator return for an array?", "opts": ["Total number of elements", "Total bytes allocated", "Size of the first element", "None of the above"], "ans": 1 },
    { "q": "Which of the following is a looping structure?", "opts": ["for", "while", "do-while", "All of the above"], "ans": 3 },
    { "q": "What is 'enum' in C?", "opts": ["User-defined type", "Built-in data type", "Function", "Array"], "ans": 0 },
    { "q": "Which of the following is an example of a control structure?", "opts": ["if", "switch", "for", "All of the above"], "ans": 3 },
    { "q": "What is the purpose of 'main' function?", "opts": ["Entry point of a program", "Returns value", "Both A and B", "None of the above"], "ans": 2 },
    { "q": "Which function is used to allocate memory dynamically?", "opts": ["malloc", "calloc", "realloc", "All of the above"], "ans": 3 }












  ],
  CPlus: [
    {
      "q": "Which of the following is used for input in C++?",
      "opts": ["cin", "in", "input", "scanf"],
      "ans": 0
    },
    {
      "q": "What is the correct way to declare a variable in C++?",
      "opts": ["int 1x;", "int x;", "1int x;", "x int;"],
      "ans": 1
    },
    {
      "q": "Which operator is used to access members of a class?",
      "opts": [".", "->", ":", "*"],
      "ans": 0
    },
    {
      "q": "Which of the following is not a fundamental data type in C++?",
      "opts": ["int", "float", "string", "char"],
      "ans": 2
    },
    {
      "q": "What is the output of cout << 5 + 2 * 3?",
      "opts": ["11", "21", "18", "16"],
      "ans": 0
    },
    {
      "q": "How do you create a comment in C++?",
      "opts": ["// comment", "# comment", "/* comment */", "Both 1 and 3"],
      "ans": 3
    },
    {
      "q": "Which keyword is used to define a constant in C++?",
      "opts": ["const", "define", "constant", "final"],
      "ans": 0
    },
    {
      "q": "What is the size of an int in C++?",
      "opts": ["2 bytes", "4 bytes", "8 bytes", "depends on the compiler"],
      "ans": 3
    },
    {
      "q": "Which of the following can be used to handle exceptions?",
      "opts": ["try", "catch", "throw", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the 'new' keyword do in C++?",
      "opts": ["Allocates memory", "Deletes memory", "Creates a constant", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is the correct syntax for a for loop?",
      "opts": ["for (int i = 0; i < 10; i++)", "for (i = 0; i < 10; i++)", "for int i = 0; i < 10; i++", "for (int i; i < 10; i++)"],
      "ans": 0
    },
    {
      "q": "Which statement is used to exit a loop in C++?",
      "opts": ["exit", "break", "stop", "return"],
      "ans": 1
    },
    {
      "q": "What does 'std::' represent in C++?",
      "opts": ["Standard namespace", "Standard function", "Standard variable", "Standard library"],
      "ans": 0
    },
    {
      "q": "What is a pointer in C++?",
      "opts": ["A variable that holds the address of another variable", "A variable that holds a value", "A special type of function", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which keyword is used to inherit a class in C++?",
      "opts": ["inherits", "extends", "base", "public"],
      "ans": 3
    },
    {
      "q": "What is the default access specifier for class members?",
      "opts": ["public", "private", "protected", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is a valid C++ function?",
      "opts": ["void myFunction()", "myFunction(void)", "function myFunction()", "Both 1 and 2"],
      "ans": 3
    },
    {
      "q": "What is the purpose of the 'return' statement in C++?",
      "opts": ["To end a function", "To return a value from a function", "To exit the program", "Both 1 and 2"],
      "ans": 3
    },
    {
      "q": "What is an array in C++?",
      "opts": ["A collection of variables of the same type", "A collection of different types", "A single variable", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the correct way to declare an array of integers in C++?",
      "opts": ["int arr[5];", "int arr(5);", "int arr{5};", "array<int, 5> arr;"],
      "ans": 0
    },
    {
      "q": "What is a destructor in C++?",
      "opts": ["A function called when an object is created", "A function called when an object is destroyed", "A special type of variable", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which operator is used to allocate memory dynamically?",
      "opts": ["malloc", "new", "calloc", "alloc"],
      "ans": 1
    },
    {
      "q": "Which of the following is a C++ standard library?",
      "opts": ["iostream", "string", "vector", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the 'sizeof' operator do?",
      "opts": ["Returns the size of a variable", "Returns the size of a data type", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the correct way to define a function in C++?",
      "opts": ["returnType functionName(parameters) {}", "function functionName(parameters) {}", "void functionName[] {}", "function returnType functionName(parameters) {}"],
      "ans": 0
    },
    {
      "q": "What is the output of the following code: cout << (10 == 10);",
      "opts": ["1", "0", "true", "false"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to include a library in C++?",
      "opts": ["#include <library>", "#library", "include <library>", "library <library>"],
      "ans": 0
    },
    {
      "q": "What is the purpose of a constructor in C++?",
      "opts": ["To initialize objects", "To destroy objects", "To create classes", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following represents a logical operator in C++?",
      "opts": ["&&", "||", "&", "|"],
      "ans": 0
    },
    {
      "q": "What is a class in C++?",
      "opts": ["A blueprint for creating objects", "A function", "A type of variable", "None of the above"],
      "ans": 0
    },
    {
      "q": "What keyword is used to define a namespace?",
      "opts": ["namespace", "namespace_def", "namespace_type", "ns"],
      "ans": 0
    },
    {
      "q": "Which of the following is a loop construct in C++?",
      "opts": ["for", "while", "do-while", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the main function's return type in C++?",
      "opts": ["void", "int", "char", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is used for output in C++?",
      "opts": ["cout", "out", "print", "display"],
      "ans": 0
    },
    {
      "q": "What is the use of the 'delete' keyword in C++?",
      "opts": ["To free dynamically allocated memory", "To delete a variable", "To remove an object", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a valid way to declare a string in C++?",
      "opts": ["string str;", "str string;", "String str;", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of cout << (3 > 2) << endl;",
      "opts": ["1", "true", "0", "false"],
      "ans": 0
    },
    {
      "q": "Which header file is required for using 'cout'?",
      "opts": ["<iostream>", "<cstdio>", "<cstdlib>", "<string>"],
      "ans": 0
    },
    {
      "q": "What is an inline function?",
      "opts": ["A function defined inside a class", "A function that is expanded in line", "A function with no body", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following allows you to create templates in C++?",
      "opts": ["template", "class", "function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a virtual function?",
      "opts": ["A function that can be overridden", "A function that cannot be overridden", "A function with no definition", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'void' mean in a function declaration?",
      "opts": ["Returns no value", "Returns an integer", "Returns a string", "Returns a boolean"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'friend' keyword?",
      "opts": ["To allow access to private members", "To define a friend function", "To declare friendship between classes", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the output of the following code: cout << (5 != 3);",
      "opts": ["1", "0", "true", "false"],
      "ans": 0
    },
    {
      "q": "Which of the following is a type of constructor?",
      "opts": ["Default constructor", "Parameterized constructor", "Copy constructor", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does 'static' mean when used with a variable?",
      "opts": ["Lifetime of the variable is throughout the program", "Variable can only be accessed within its function", "Variable cannot be modified", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which operator is used to access a member of a structure?",
      "opts": [".", "->", ":", "@"],
      "ans": 0
    },
    {
      "q": "What does the 'continue' statement do in a loop?",
      "opts": ["Exits the loop", "Skips to the next iteration", "Breaks the loop", "None of the above"],
      "ans": 1
    },
    {
      "q": "What is a dynamic array?",
      "opts": ["An array with a fixed size", "An array that can change size", "An array of pointers", "None of the above"],
      "ans": 1
    },
    {
      "q": "What is the purpose of the 'this' pointer?",
      "opts": ["To refer to the current object", "To refer to the parent class", "To refer to a global variable", "None of the above"],
      "ans": 0
    }, {
      "q": "What is the purpose of the 'const' keyword?",
      "opts": ["To declare a constant variable", "To define a constant function", "To prevent variable modification", "Both 1 and 3"],
      "ans": 3
    },
    {
      "q": "Which of the following is a valid pointer declaration?",
      "opts": ["int *ptr;", "ptr int;", "int ptr*;", "int &ptr;"],
      "ans": 0
    },
    {
      "q": "What is a reference variable?",
      "opts": ["An alias for another variable", "A pointer to a variable", "A special type of variable", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which keyword is used to define an abstract class?",
      "opts": ["abstract", "interface", "virtual", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the result of the expression (5 > 3 && 3 > 1)?",
      "opts": ["true", "false", "1", "0"],
      "ans": 0
    },
    {
      "q": "What type of loop guarantees at least one execution?",
      "opts": ["for", "while", "do-while", "None of the above"],
      "ans": 2
    },
    {
      "q": "What does the 'static_cast' operator do?",
      "opts": ["Converts types safely", "Forces a type conversion", "Used for dynamic casting", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is not a valid access specifier?",
      "opts": ["public", "private", "protected", "friend"],
      "ans": 3
    },
    {
      "q": "What is the correct way to define a macro in C++?",
      "opts": ["#define MACRO value", "define MACRO value", "MACRO = value", "#macro value"],
      "ans": 0
    },
    {
      "q": "Which of the following allows for polymorphism?",
      "opts": ["Function overloading", "Operator overloading", "Virtual functions", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the main use of the 'new[]' operator?",
      "opts": ["To allocate memory for an array", "To deallocate memory", "To create a pointer", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a lambda function in C++?",
      "opts": ["A function with no name", "A function that returns a lambda expression", "A recursive function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What will the following code output: cout << (5 + 3) * 2;",
      "opts": ["16", "14", "10", "8"],
      "ans": 1
    },
    {
      "q": "Which operator is used for pointer dereferencing?",
      "opts": ["*", "&", "->", ":"],
      "ans": 0
    },
    {
      "q": "What does the 'throw' keyword do?",
      "opts": ["Generates an exception", "Catches an exception", "Defines an error", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a stack?",
      "opts": ["A linear data structure", "A type of function", "A data structure that follows LIFO", "Both 1 and 3"],
      "ans": 3
    },
    {
      "q": "Which of the following is a correct way to define a structure?",
      "opts": ["struct MyStruct {}", "MyStruct struct {}", "struct MyStruct[]", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'using namespace std;'?",
      "opts": ["To include the standard library", "To avoid prefixing with 'std::'", "To create a new namespace", "None of the above"],
      "ans": 1
    },
    {
      "q": "What is an overloaded operator?",
      "opts": ["An operator with multiple meanings", "An operator that can work on different types", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "Which of the following is used to define a class in C++?",
      "opts": ["class ClassName {}", "define ClassName {}", "class ClassName[]", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a namespace in C++?",
      "opts": ["A way to group related functions", "A method to define variables", "A type of data structure", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which keyword is used to terminate a switch statement?",
      "opts": ["break", "exit", "return", "continue"],
      "ans": 0
    },
    {
      "q": "What is the purpose of a copy constructor?",
      "opts": ["To create a copy of an object", "To initialize an object", "To destroy an object", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is used for multi-threading in C++?",
      "opts": ["thread", "mutex", "future", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does 'virtual' keyword signify in a function?",
      "opts": ["The function can be overridden", "The function cannot be overridden", "The function is static", "None of the above"],
      "ans": 0
    },
    {
      "q": "What will happen if you forget to include a return statement in a non-void function?",
      "opts": ["Compiler error", "Undefined behavior", "Default return value", "None of the above"],
      "ans": 1
    },
    {
      "q": "What is the purpose of the 'sizeof' operator?",
      "opts": ["To return the size of a variable", "To return the size of a type", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What does 'inline' mean in C++?",
      "opts": ["Function call optimization", "Function definition", "Variable definition", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the difference between 'struct' and 'class'?",
      "opts": ["No difference", "Struct members are public by default", "Class members are public by default", "Both 2 and 3"],
      "ans": 3
    },
    {
      "q": "Which of the following is a valid return type for a function?",
      "opts": ["void", "int", "float", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the output of cout << (true + false);",
      "opts": ["0", "1", "2", "true"],
      "ans": 1
    },
    {
      "q": "What is the correct way to declare a constant integer in C++?",
      "opts": ["const int x = 5;", "int const x = 5;", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "Which of the following is used to handle memory allocation failures?",
      "opts": ["try-catch blocks", "if-else statements", "error codes", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the use of the 'volatile' keyword?",
      "opts": ["To indicate a variable can change unexpectedly", "To optimize code", "To prevent optimization", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is an example of a header file?",
      "opts": ["iostream", "iostream.h", "stdio.h", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the 'delete[]' operator do?",
      "opts": ["Deallocates memory for an array", "Deallocates memory for a single object", "Creates an array", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the default value of uninitialized static variables?",
      "opts": ["0", "null", "undefined", "random value"],
      "ans": 0
    },
    {
      "q": "Which of the following allows for type conversion?",
      "opts": ["static_cast", "dynamic_cast", "reinterpret_cast", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the output of cout << 10 / 3 << endl;",
      "opts": ["3.33", "3", "3.0", "4"],
      "ans": 1
    },
    {
      "q": "What is the purpose of the 'extern' keyword?",
      "opts": ["To declare a variable in another file", "To create a global variable", "To define a constant", "None of the above"],
      "ans": 0
    },
    {
      "q": "What will the following code output: cout << (3 == 3 ? 'A' : 'B');",
      "opts": ["A", "B", "Error", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a union in C++?",
      "opts": ["A data structure that can hold multiple types", "A special type of function", "A collection of objects", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a dynamic_cast used for?",
      "opts": ["Safe casting of pointers", "Static casting", "Creating dynamic arrays", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of the following code: cout << 5 / 2;",
      "opts": ["2", "2.5", "3", "1"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to create a thread in C++?",
      "opts": ["thread", "create_thread", "start_thread", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a smart pointer in C++?",
      "opts": ["A pointer that manages memory automatically", "A regular pointer", "A function pointer", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'std::unique_ptr' do?",
      "opts": ["Manages a single object", "Manages an array of objects", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'volatile' keyword?",
      "opts": ["To indicate a variable may change unexpectedly", "To prevent variable modification", "To optimize performance", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which operator can be overloaded in C++?",
      "opts": ["Arithmetic operators", "Relational operators", "All of the above", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is a multi-dimensional array?",
      "opts": ["An array of arrays", "An array with fixed size", "An array with dynamic size", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'catch' block do?",
      "opts": ["Handles exceptions", "Throws exceptions", "Defines an error", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the correct way to include a library in C++?",
      "opts": ["#include <library>", "#library <library>", "include <library>", "library <library>"],
      "ans": 0
    },
    {
      "q": "What does the 'const_cast' operator do?",
      "opts": ["Changes the constness of a variable", "Creates a constant variable", "Returns the size of a variable", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a segmentation fault?",
      "opts": ["Accessing invalid memory", "Memory leak", "Stack overflow", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the difference between 'new' and 'malloc'?",
      "opts": ["new initializes objects; malloc does not", "malloc initializes objects; new does not", "Both are the same", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a virtual destructor?",
      "opts": ["A destructor that can be overridden", "A destructor that cannot be overridden", "A default destructor", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'std::shared_ptr' do?",
      "opts": ["Shares ownership of an object", "Manages a unique object", "Creates a thread", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'friend' keyword?",
      "opts": ["To allow access to private members", "To define a friend function", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "Which of the following is a feature of C++?",
      "opts": ["Encapsulation", "Inheritance", "Polymorphism", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the output of cout << (1 && 0);",
      "opts": ["1", "0", "true", "false"],
      "ans": 1
    },
    {
      "q": "What is a binary tree?",
      "opts": ["A tree data structure with at most two children", "A type of array", "A special function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'nullptr' represent in C++?",
      "opts": ["A null pointer", "A defined variable", "An error state", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a copy assignment operator?",
      "opts": ["An operator for copying objects", "An operator for assigning values", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'override' keyword indicate?",
      "opts": ["A method is overriding a base class method", "A method cannot be overridden", "A variable is constant", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a valid way to declare an enumerated type?",
      "opts": ["enum Color {Red, Green, Blue};", "Color enum {Red, Green, Blue};", "enum Color Red, Green, Blue;", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a stack overflow?",
      "opts": ["Too much memory allocated on the stack", "An infinite loop", "Too many threads created", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is an iterator?",
      "opts": ["An object that points to elements in a container", "A special type of pointer", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'static' keyword signify?",
      "opts": ["Variable retains its value between function calls", "Variable is local to the function", "Variable cannot be modified", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a base class?",
      "opts": ["A class that is inherited from", "A class that inherits", "A type of variable", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'new' keyword do?",
      "opts": ["Allocates memory dynamically", "Deallocates memory", "Creates a constant", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'decltype'?",
      "opts": ["To determine the type of an expression", "To define a type", "To create a new variable", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is an abstract class?",
      "opts": ["A class that cannot be instantiated", "A class with at least one pure virtual function", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What does the 'alignas' specifier do?",
      "opts": ["Sets alignment for a variable", "Defines a constant", "Specifies data type", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'dynamic_cast' do?",
      "opts": ["Safely casts pointers or references", "Converts types", "Creates objects dynamically", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of cout << (true || false);",
      "opts": ["1", "0", "true", "false"],
      "ans": 2
    },
    {
      "q": "What is the correct syntax for a typedef declaration?",
      "opts": ["typedef int myInt;", "typedef myInt int;", "typedef int = myInt;", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a shallow copy?",
      "opts": ["Copying only the object's value", "Copying the entire object including dynamic members", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is an abstract method?",
      "opts": ["A method without an implementation", "A method that cannot be called", "A static method", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'final' keyword do in C++?",
      "opts": ["Prevents further inheritance", "Indicates a constant", "Defines a function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'using' directive?",
      "opts": ["To avoid prefixing with 'std::'", "To include a library", "To define a namespace", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is an example of an STL container?",
      "opts": ["vector", "list", "map", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is a constructor initializer list?",
      "opts": ["Used to initialize members of a class", "A list of constructors", "A way to define a class", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the default access specifier for class members?",
      "opts": ["public", "private", "protected", "friend"],
      "ans": 1
    },
    {
      "q": "Which of the following is used to create a copy of an object?",
      "opts": ["Copy constructor", "Assignment operator", "Clone method", "All of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'new' keyword return?",
      "opts": ["Pointer to the allocated memory", "Size of the allocated memory", "Reference to the allocated memory", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'std::move'?",
      "opts": ["Transfers ownership of resources", "Creates a copy of an object", "Allocates memory", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following can be a lambda expression?",
      "opts": ["[] {}", "[&]() {}", "[x] { return x; }", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is a pure virtual function?",
      "opts": ["A function that must be implemented by derived classes", "A function that has no implementation", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the purpose of 'const' in function parameters?",
      "opts": ["To prevent modification of arguments", "To create constant references", "To indicate output parameters", "Both 1 and 2"],
      "ans": 3
    },
    {
      "q": "What is an exception?",
      "opts": ["An error during execution", "A compile-time error", "A logical error", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'try' block do?",
      "opts": ["Catches exceptions", "Defines a function", "Handles errors", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is not a standard data type in C++?",
      "opts": ["int", "float", "double", "decimal"],
      "ans": 3
    },
    {
      "q": "What is a default constructor?",
      "opts": ["Constructor with no parameters", "Constructor with default values", "Constructor with multiple parameters", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is function overloading?",
      "opts": ["Multiple functions with the same name", "Multiple functions with different names", "Changing the function definition", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of cout << (3 == 2 ? 'A' : 'B');",
      "opts": ["A", "B", "Error", "None of the above"],
      "ans": 1
    },
    {
      "q": "What is the purpose of the 'sizeof' operator?",
      "opts": ["To return the size of a type or variable", "To return the size of an array", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What does 'std::vector' represent?",
      "opts": ["A dynamic array", "A linked list", "A static array", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is an inline function?",
      "opts": ["A function that is expanded in line when called", "A function that cannot be called", "A function that has no return type", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'static_assert'?",
      "opts": ["To perform compile-time assertions", "To create static variables", "To check for errors", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a C++11 feature?",
      "opts": ["Range-based for loops", "nullptr", "auto keyword", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the 'std::list' represent?",
      "opts": ["A doubly linked list", "A dynamic array", "A stack", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a dynamic memory allocation?",
      "opts": ["Allocating memory at runtime", "Allocating memory at compile time", "Fixed size allocation", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a constructor?",
      "opts": ["A special member function that initializes an object", "A function that destructs an object", "A regular function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'default' keyword do in C++?",
      "opts": ["Defines a default constructor", "Indicates a default parameter value", "Defines a default function", "None of the above"],
      "ans": 1
    },
    {
      "q": "What is a template in C++?",
      "opts": ["A blueprint for creating functions or classes", "A type of data structure", "A library function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'std::string' represent?",
      "opts": ["A class for string manipulation", "A C-style string", "An array of characters", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a reference in C++?",
      "opts": ["An alias for another variable", "A pointer to a variable", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is not a storage class in C++?",
      "opts": ["auto", "register", "extern", "static_assert"],
      "ans": 3
    },
    {
      "q": "What is a nested class?",
      "opts": ["A class defined inside another class", "A class with multiple inheritance", "A class that is abstract", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'sizeof' operator return for a pointer?",
      "opts": ["Size of the pointer", "Size of the data it points to", "Size of the array", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a destructor?",
      "opts": ["A special member function that cleans up resources", "A function that initializes an object", "A regular function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a default member initializer?",
      "opts": ["An initializer for class members", "An automatic value for a member", "A special constructor", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'mutable' keyword?",
      "opts": ["To allow modification of a member in a const object", "To define a constant variable", "To prevent changes", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is an example of a move constructor?",
      "opts": ["A constructor that transfers resources", "A constructor that copies resources", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a virtual function?",
      "opts": ["A function that can be overridden", "A function that cannot be overridden", "A static function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of cout << 10 % 3;",
      "opts": ["3", "1", "2", "0"],
      "ans": 2
    },
    {
      "q": "What does 'std::map' represent?",
      "opts": ["An associative container", "A type of array", "A linked list", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a dynamic_cast used for?",
      "opts": ["Safely downcasting pointers", "Static casting", "Creating objects dynamically", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'override' indicate?",
      "opts": ["A method overrides a base class method", "A variable is constant", "Defines a static method", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of cout << (true && true);",
      "opts": ["1", "0", "true", "false"],
      "ans": 2
    },
    {
      "q": "What is the main function in a C++ program?",
      "opts": ["Entry point of the program", "A type of function", "A user-defined function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'cout' stand for?",
      "opts": ["Console output", "Count output", "Character output", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a static variable?",
      "opts": ["Retains its value between function calls", "Only exists in the current function", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'std::pair' represent?",
      "opts": ["A container to hold two values", "A function pair", "A pointer pair", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is an example of a scoped enumeration?",
      "opts": ["enum class Color {Red, Green, Blue};", "enum Color {Red, Green, Blue};", "Color {Red, Green, Blue};", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a namespace?",
      "opts": ["A way to organize code", "A type of variable", "A function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'return' statement?",
      "opts": ["Exits a function and optionally returns a value", "Ends the program", "Declares a variable", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the difference between 'struct' and 'class'?",
      "opts": ["Default access specifier", "Inheritance", "Memory allocation", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'const' mean when used with a pointer?",
      "opts": ["The pointer cannot be changed", "The value pointed to cannot be changed", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the purpose of a destructor?",
      "opts": ["Releases resources when an object is destroyed", "Initializes an object", "Creates a copy of an object", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is operator overloading?",
      "opts": ["Defining custom behavior for operators", "Changing the operator's precedence", "Using operators in new ways", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of cout << 5 + 2 * 3;",
      "opts": ["11", "21", "16", "13"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'volatile' keyword?",
      "opts": ["Indicates that a variable can change unexpectedly", "Prevents optimization", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is a linked list?",
      "opts": ["A data structure consisting of nodes", "An array", "A type of pointer", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'nullptr' represent?",
      "opts": ["A null pointer constant", "A type of variable", "An error", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a function pointer?",
      "opts": ["A pointer that points to a function", "A special type of variable", "A regular pointer", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'using namespace std;'?",
      "opts": ["To simplify code by avoiding std:: prefix", "To create a new namespace", "To define a function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'friend' keyword allow?",
      "opts": ["Access to private and protected members", "Create friend functions", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is a multi-threaded program?",
      "opts": ["A program that runs multiple threads concurrently", "A program that runs sequentially", "A single-threaded program", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a const member function?",
      "opts": ["A function that cannot modify the object", "A function that can modify the object", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'this' pointer refer to?",
      "opts": ["Current object", "Previous object", "Next object", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is an accessor method?",
      "opts": ["A method that retrieves a value", "A method that modifies a value", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a mutator method?",
      "opts": ["A method that modifies a value", "A method that retrieves a value", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'override' indicate in a derived class?",
      "opts": ["A method overrides a base class method", "A method cannot be overridden", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of a lambda function?",
      "opts": ["To create anonymous functions", "To define a function inline", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is a virtual base class?",
      "opts": ["A base class that can be inherited virtually", "A class with virtual functions", "A special type of class", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'dynamic_cast' do?",
      "opts": ["Safely downcasts pointers", "Converts types", "Creates objects dynamically", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is an exception handler?",
      "opts": ["Code that handles exceptions", "Code that throws exceptions", "Code that defines functions", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of cout << (2 + 3) * 4;",
      "opts": ["20", "10", "12", "15"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'delete' in C++?",
      "opts": ["To deallocate memory", "To free resources", "Both 1 and 2", "None of the above"],
      "ans": 2
    },
    {
      "q": "What does 'std::array' represent?",
      "opts": ["A fixed-size array", "A dynamic array", "A linked list", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of cout << (3 > 2 ? 'A' : 'B');",
      "opts": ["A", "B", "Error", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a stack in C++?",
      "opts": ["A last-in, first-out data structure", "A queue", "An array", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'break' statement do?",
      "opts": ["Exits the nearest loop or switch", "Ends the program", "Continues the loop", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'continue' statement do?",
      "opts": ["Skips to the next iteration of a loop", "Exits the loop", "Ends the program", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a queue?",
      "opts": ["A first-in, first-out data structure", "A stack", "An array", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the 'throw' statement do?",
      "opts": ["Throws an exception", "Creates a variable", "Defines a function", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of 'static' in a function?",
      "opts": ["To preserve the value between function calls", "To make the function accessible globally", "To restrict access", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a deep copy?",
      "opts": ["Copying an object including dynamic resources", "Shallow copy", "Reference copy", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does 'const_cast' do?",
      "opts": ["Cast away const-ness of a variable", "Cast to a different type", "Both 1 and 2", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a file stream?",
      "opts": ["An object that reads/writes data to files", "A data structure", "A function", "None of the above"],
      "ans": 0
    }





  ],
  DotNet: [
    {
      "q": "What does .NET Framework provide?",
      "opts": ["Development tools", "Database management", "Web hosting", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which language is NOT used with .NET?",
      "opts": ["C#", "VB.NET", "Java", "F#"],
      "ans": 2
    },
    {
      "q": "What is the purpose of the Common Language Runtime (CLR)?",
      "opts": ["Memory management", "Type safety", "Exception handling", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following is a .NET web framework?",
      "opts": ["ASP.NET", "Django", "Ruby on Rails", "Laravel"],
      "ans": 0
    },
    {
      "q": "What is the primary use of ADO.NET?",
      "opts": ["Building user interfaces", "Data access", "Web services", "Mobile applications"],
      "ans": 1
    },
    {
      "q": "Which of the following is true about .NET Core?",
      "opts": ["Cross-platform", "Open-source", "Lightweight", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the file extension of a C# source file?",
      "opts": [".cs", ".cpp", ".java", ".html"],
      "ans": 0
    },
    {
      "q": "Which .NET component handles security?",
      "opts": ["CLR", "BCL", "ASP.NET", "WCF"],
      "ans": 0
    },
    {
      "q": "What does the 'using' statement do in C#?",
      "opts": ["Includes namespaces", "Declares variables", "Manages memory", "Defines classes"],
      "ans": 0
    },
    {
      "q": "Which of the following is not a type of JIT compiler?",
      "opts": ["Pre-JIT", "Normal JIT", "Econo-JIT", "Rapid JIT"],
      "ans": 3
    },
    {
      "q": "What does ASP.NET stand for?",
      "opts": ["Active Server Pages.NET", "Application Server Pages.NET", "Advanced Server Pages.NET", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a valid value for the 'Target Framework' in a .NET project?",
      "opts": [".NET 5", ".NET 6", ".NET Framework 4.8", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the purpose of the Global Assembly Cache (GAC)?",
      "opts": ["Store application data", "Share assemblies", "Handle requests", "Compile code"],
      "ans": 1
    },
    {
      "q": "Which .NET technology is used for building RESTful services?",
      "opts": ["WCF", "ASP.NET Web API", "WebForms", "WinForms"],
      "ans": 1
    },
    {
      "q": "What does the 'static' keyword indicate in C#?",
      "opts": ["Instance-level", "Class-level", "Thread-level", "Method-level"],
      "ans": 1
    },
    {
      "q": "What type of applications can be built using .NET?",
      "opts": ["Web", "Desktop", "Mobile", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following is a built-in collection type in .NET?",
      "opts": ["ArrayList", "HashSet", "Dictionary", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does MVC stand for in ASP.NET MVC?",
      "opts": ["Model-View-Controller", "Model-View-Customer", "Model-View-Component", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of LINQ?",
      "opts": ["Querying data", "Data manipulation", "Data transformation", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the purpose of NuGet in .NET?",
      "opts": ["Package management", "Source control", "Deployment", "Testing"],
      "ans": 0
    },
    {
      "q": "Which of the following is a type of .NET application?",
      "opts": ["Windows Forms", "WPF", "ASP.NET", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the primary benefit of using Entity Framework?",
      "opts": ["Direct SQL execution", "ORM capabilities", "Increased performance", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is a design pattern commonly used in .NET?",
      "opts": ["Singleton", "Observer", "Factory", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is a delegate in C#?",
      "opts": ["Type-safe function pointer", "Object type", "Event handler", "All of the above"],
      "ans": 0
    },
    {
      "q": "Which method is called when an object is created in C#?",
      "opts": ["Constructor", "Finalizer", "Destructor", "Initializer"],
      "ans": 0
    },
    {
      "q": "What does the 'async' keyword signify in C#?",
      "opts": ["Synchronous execution", "Asynchronous execution", "Multi-threading", "Event handling"],
      "ans": 1
    },
    {
      "q": "What is the function of the Dispose method?",
      "opts": ["To release unmanaged resources", "To clean up after garbage collection", "To initialize objects", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is an example of a value type in C#?",
      "opts": ["int", "string", "array", "class"],
      "ans": 0
    },
    {
      "q": "What is the main purpose of the `try-catch` block?",
      "opts": ["Exception handling", "Variable declaration", "Looping", "Conditional execution"],
      "ans": 0
    },
    {
      "q": "What is the default access modifier for class members in C#?",
      "opts": ["private", "public", "protected", "internal"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the 'override' keyword?",
      "opts": ["To define new methods", "To modify inherited methods", "To hide methods", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which is the latest version of .NET Framework as of 2023?",
      "opts": [".NET 6", ".NET 7", ".NET Framework 4.8", ".NET Core 3.1"],
      "ans": 2
    },
    {
      "q": "What is a common use of the `async` and `await` keywords?",
      "opts": ["Multithreading", "Asynchronous programming", "Synchronous programming", "Database connections"],
      "ans": 1
    },
    {
      "q": "What is the main purpose of interfaces in C#?",
      "opts": ["Implementing multiple inheritance", "Providing a contract for classes", "Encapsulating data", "All of the above"],
      "ans": 1
    },
    {
      "q": "What is the role of the `IEnumerable` interface?",
      "opts": ["To support collection iteration", "To define properties", "To handle events", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is not a valid C# data type?",
      "opts": ["float", "decimal", "char", "text"],
      "ans": 3
    },
    {
      "q": "Which keyword is used to inherit a class in C#?",
      "opts": ["inherits", "extends", "base", ": :"],
      "ans": 0
    },
    {
      "q": "What is the difference between `==` and `===` in C#?",
      "opts": ["No difference", "Type checking", "Value checking", "Reference checking"],
      "ans": 0
    },
    {
      "q": "What does WCF stand for?",
      "opts": ["Windows Communication Foundation", "Web Communication Framework", "Windows Control Framework", "Web Control Foundation"],
      "ans": 0
    },
    {
      "q": "Which of the following is a benefit of using Entity Framework?",
      "opts": ["Code-first development", "Direct SQL manipulation", "Increased performance", "Manual database management"],
      "ans": 0
    },
    {
      "q": "What is the primary function of the Garbage Collector in .NET?",
      "opts": ["Memory management", "Thread management", "Data access", "Compilation"],
      "ans": 0
    },
    {
      "q": "Which of the following is a collection type that allows duplicate elements?",
      "opts": ["HashSet", "Dictionary", "List", "Queue"],
      "ans": 2
    },
    {
      "q": "What is the primary purpose of the `new` keyword in C#?",
      "opts": ["To declare variables", "To create instances of objects", "To inherit classes", "To define methods"],
      "ans": 1
    },
    {
      "q": "Which of the following is a valid exception handling block in C#?",
      "opts": ["try-catch-finally", "try-except-finally", "catch-finally-try", "try-catch"],
      "ans": 0
    },
    {
      "q": "What is the function of the `virtual` keyword?",
      "opts": ["To define abstract classes", "To allow method overriding", "To prevent inheritance", "To create interfaces"],
      "ans": 1
    },
    {
      "q": "Which of the following is a valid way to declare an array in C#?",
      "opts": ["int[] arr = new int[5];", "int arr = new int[5];", "int arr(5);", "array int arr = new int[5];"],
      "ans": 0
    },
    {
      "q": "What is an indexer in C#?",
      "opts": ["A type of collection", "A method for array manipulation", "A property for accessing elements", "None of the above"],
      "ans": 2
    },
    {
      "q": "Which method is used to convert a string to an integer in C#?",
      "opts": ["int.Parse()", "Convert.ToInt()", "Convert.ToInt32()", "string.ToInt()"],
      "ans": 2
    },
    {
      "q": "What does the `sealed` keyword do?",
      "opts": ["Prevents method overriding", "Prevents inheritance", "Allows multiple inheritance", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is a .NET library for data access?",
      "opts": ["Entity Framework", "ASP.NET", "WPF", "Windows Forms"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `async` keyword in C#?",
      "opts": ["To create a new thread", "To define an asynchronous method", "To handle exceptions", "To synchronize threads"],
      "ans": 1
    },
    {
      "q": "Which of the following is NOT a C# access modifier?",
      "opts": ["private", "protected", "public", "friend"],
      "ans": 3
    },
    {
      "q": "What is the default value of a boolean variable in C#?",
      "opts": ["true", "false", "0", "1"],
      "ans": 1
    },
    {
      "q": "Which interface must be implemented for an object to be enumerable?",
      "opts": ["ICollection", "IEnumerable", "IList", "IDisposable"],
      "ans": 1
    },
    {
      "q": "What is the output of `Console.WriteLine(10 / 3);` in C#?",
      "opts": ["3", "3.333", "3.0", "2"],
      "ans": 0
    },
    {
      "q": "Which of the following represents a tuple in C#?",
      "opts": ["(int, string)", "(int, string)[]", "Tuple<int, string>", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the use of the `override` keyword?",
      "opts": ["To implement an interface", "To hide a base class member", "To replace a base class implementation", "None of the above"],
      "ans": 2
    },
    {
      "q": "Which method is used to release unmanaged resources in C#?",
      "opts": ["Dispose()", "Finalize()", "Release()", "Free()"],
      "ans": 0
    },
    {
      "q": "What is the output of `bool a = true; bool b = !a;`?",
      "opts": ["true", "false", "0", "1"],
      "ans": 1
    },
    {
      "q": "Which of the following keywords is used to create an abstract class?",
      "opts": ["abstract", "virtual", "interface", "none"],
      "ans": 0
    },
    {
      "q": "Which collection type does not allow duplicate elements?",
      "opts": ["List", "Array", "HashSet", "Dictionary"],
      "ans": 2
    },
    {
      "q": "Which of the following is a valid LINQ query syntax?",
      "opts": ["from x in collection select x", "collection.select(x)", "select x from collection", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `params` keyword?",
      "opts": ["To pass a variable number of arguments", "To define parameters", "To initialize arrays", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about string immutability in C#?",
      "opts": ["Strings can be modified", "Strings cannot be modified", "Strings are mutable", "None of the above"],
      "ans": 1
    },
    {
      "q": "What is the purpose of the `try-finally` block?",
      "opts": ["To handle exceptions", "To ensure code execution", "To define methods", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is a valid way to define a method in C#?",
      "opts": ["void MyMethod()", "MyMethod void()", "MyMethod(): void", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `yield` keyword?",
      "opts": ["To pause execution", "To return multiple values", "To define properties", "None of the above"],
      "ans": 1
    },
    {
      "q": "What is the use of the `interface` keyword?",
      "opts": ["To define a contract", "To create abstract classes", "To implement inheritance", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the default implementation of an interface in C#?",
      "opts": ["Must be implemented", "Optional", "None", "Public"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about C# properties?",
      "opts": ["They can have getters and setters", "They cannot be static", "They cannot be initialized", "All of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `using` directive?",
      "opts": ["To include namespaces", "To declare variables", "To manage memory", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does `Console.ReadLine()` return?",
      "opts": ["Integer", "String", "Boolean", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which keyword is used to define a constant in C#?",
      "opts": ["const", "readonly", "static", "final"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `override` keyword in C#?",
      "opts": ["To replace a method from a base class", "To prevent inheritance", "To implement an interface", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does `IQueryable` allow in C#?",
      "opts": ["Execution of queries", "Modification of data", "Immediate execution", "All of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a feature of C#?",
      "opts": ["Garbage Collection", "Properties", "Multiple Inheritance", "Delegates"],
      "ans": 2
    },
    {
      "q": "What is the output of `Console.WriteLine(5 + 10);`?",
      "opts": ["5", "10", "15", "20"],
      "ans": 2
    },
    {
      "q": "What does WPF stand for?",
      "opts": ["Windows Presentation Foundation", "Web Presentation Framework", "Windows Programming Framework", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the role of an `Assembly` in .NET?",
      "opts": ["To package code", "To define namespaces", "To manage versions", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which is the primary unit of deployment in .NET?",
      "opts": ["Project", "Solution", "Assembly", "Namespace"],
      "ans": 2
    },
    {
      "q": "Which of the following is the correct way to declare a delegate in C#?",
      "opts": ["delegate void MyDelegate();", "void delegate MyDelegate();", "delegate MyDelegate();", "MyDelegate delegate void();"],
      "ans": 0
    },
    {
      "q": "What does the `static` keyword signify in C#?",
      "opts": ["Instance members", "Shared members across instances", "Abstract members", "Virtual members"],
      "ans": 1
    },
    {
      "q": "What is the main use of the `IDisposable` interface?",
      "opts": ["To dispose of unmanaged resources", "To handle events", "To create properties", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `sealed` keyword in C#?",
      "opts": ["Prevent inheritance", "Allow inheritance", "Allow multiple inheritance", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to create an asynchronous method in C#?",
      "opts": ["async", "await", "Task", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the output of `Console.WriteLine(5 == 5 ? 'Yes' : 'No');`?",
      "opts": ["Yes", "No", "Error", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is an extension method in C#?",
      "opts": ["A method that adds functionality to existing types", "A method in a base class", "A method that is private", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a valid way to handle exceptions in C#?",
      "opts": ["try-catch-finally", "try-catch", "try-finally", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the purpose of `ref` keyword in C#?",
      "opts": ["Pass by value", "Pass by reference", "Return multiple values", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which method is used to convert a string to an integer in C#?",
      "opts": ["Convert.ToInt32()", "int.Parse()", "Both of the above", "None of the above"],
      "ans": 2
    },
    {
      "q": "What does the `abstract` keyword signify in C#?",
      "opts": ["A class that cannot be instantiated", "A class that can be instantiated", "A class that can have multiple implementations", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the default value of a boolean variable in C#?",
      "opts": ["true", "false", "null", "0"],
      "ans": 1
    },
    {
      "q": "What is the use of the `StringBuilder` class in C#?",
      "opts": ["Immutable string handling", "Mutable string handling", "String comparison", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is used to perform dependency injection in ASP.NET Core?",
      "opts": ["IServiceCollection", "IServiceProvider", "Both of the above", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the output of `Console.WriteLine(10 / 3);`?",
      "opts": ["3", "3.33", "Error", "3.0"],
      "ans": 0
    },
    {
      "q": "Which of the following is a valid LINQ query syntax?",
      "opts": ["from x in y select x", "select x from y", "x => y", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `Task.Run` method?",
      "opts": ["To run a task asynchronously", "To wait for a task", "To cancel a task", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a type of ASP.NET MVC action result?",
      "opts": ["ViewResult", "JsonResult", "RedirectResult", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the `override` keyword do?",
      "opts": ["Provides a new implementation for a base class method", "Creates a new method", "Prevents method overriding", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about `interface` in C#?",
      "opts": ["Cannot have implementation", "Can have properties", "Supports multiple inheritance", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the main use of the `async` and `await` keywords?",
      "opts": ["To handle exceptions", "To perform tasks asynchronously", "To manage threads", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which method is called when an ASP.NET MVC application starts?",
      "opts": ["Application_Start", "Global.asax", "Main()", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `HttpStatusCode` enumeration?",
      "opts": ["Defines HTTP status codes", "Defines application states", "Defines session states", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the `continue` statement do in a loop?",
      "opts": ["Skips the current iteration", "Exits the loop", "Ends the program", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to access environment variables in C#?",
      "opts": ["Environment.GetEnvironmentVariable()", "EnvironmentVariables()", "GetEnvironment()", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the default access level for a class in C#?",
      "opts": ["public", "private", "protected", "internal"],
      "ans": 1
    },
    {
      "q": "Which of the following is used for unit testing in .NET?",
      "opts": ["NUnit", "MSTest", "xUnit", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is a `partial` class in C#?",
      "opts": ["A class defined in multiple files", "A class that cannot be instantiated", "A class with no members", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of the `Dictionary` collection?",
      "opts": ["Key-value pairs", "Indexing", "Sorting", "All of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of `Console.WriteLine(true && false);`?",
      "opts": ["true", "false", "Error", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is NOT a built-in data type in C#?",
      "opts": ["int", "float", "string", "real"],
      "ans": 3
    },
    {
      "q": "What does the `is` keyword do in C#?",
      "opts": ["Checks the type of an object", "Checks for null values", "Checks for equality", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to create a web service in .NET?",
      "opts": ["ASP.NET Web API", "WCF", "Both of the above", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the main purpose of the `Main()` method in C#?",
      "opts": ["To start execution of the program", "To handle exceptions", "To define classes", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `try-catch` block?",
      "opts": ["To handle exceptions", "To define variables", "To loop through data", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about properties in C#?",
      "opts": ["They can have both getters and setters", "They can only have setters", "They cannot be accessed outside the class", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `Virtual` keyword?",
      "opts": ["Allows method overriding", "Prevents inheritance", "Creates a new class", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a `Tuple` in C#?",
      "opts": ["A data structure that can hold multiple values", "A method for sorting", "A class for string manipulation", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is used for dependency injection in .NET Core?",
      "opts": ["ServiceProvider", "ServiceCollection", "Both of the above", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the purpose of the `await` keyword?",
      "opts": ["To wait for a task to complete", "To run a task synchronously", "To start a new thread", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a part of the .NET Standard Library?",
      "opts": ["System.IO", "System.Console", "System.Web", "System.Collections"],
      "ans": 2
    },

    {
      "q": "What is the output of `Console.WriteLine(5 * 2 + 10);`?",
      "opts": ["10", "20", "25", "30"],
      "ans": 2
    },
    {
      "q": "What is a `Nullable` type in C#?",
      "opts": ["A type that can hold null", "A type that cannot hold null", "A type that holds default values", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following can be used to serialize an object?",
      "opts": ["BinaryFormatter", "XmlSerializer", "JsonSerializer", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the `await` keyword do in C#?",
      "opts": ["Pauses execution", "Starts a new thread", "Calls a synchronous method", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of LINQ?",
      "opts": ["Querying data", "Data manipulation", "Data projection", "All of the above"],
      "ans": 3
    },
    {
      "q": "Which of the following is used to handle multiple exceptions in C#?",
      "opts": ["try-catch", "try-finally", "catch-all", "catch"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `object` class in C#?",
      "opts": ["Base class for all types", "Class for primitives", "Class for collections", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the use of the `lock` statement in C#?",
      "opts": ["To synchronize access to a resource", "To declare variables", "To create threads", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about structs in C#?",
      "opts": ["They are reference types", "They are value types", "They can inherit from other structs", "None of the above"],
      "ans": 1
    },
    {
      "q": "What does the `foreach` loop do in C#?",
      "opts": ["Iterates through a collection", "Counts elements in an array", "Initializes variables", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the use of the `base` keyword?",
      "opts": ["To call base class methods", "To create an instance", "To declare a variable", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is a `static` constructor in C#?",
      "opts": ["Constructors that can be called multiple times", "Constructors that are called only once", "Constructors for instance members", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is NOT a valid C# collection type?",
      "opts": ["List", "HashSet", "Dictionary", "ArrayList"],
      "ans": 3
    },
    {
      "q": "What is the default access modifier for class members in C#?",
      "opts": ["public", "private", "protected", "internal"],
      "ans": 1
    },
    {
      "q": "What is the difference between `==` and `Equals()` in C#?",
      "opts": ["`==` checks for reference equality; `Equals()` checks for value equality", "`==` checks for value equality; `Equals()` checks for reference equality", "They are the same", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of ASP.NET?",
      "opts": ["Session management", "ViewState", "Web APIs", "All of the above"],
      "ans": 3
    },
    {
      "q": "What does the `Global.asax` file do in an ASP.NET application?",
      "opts": ["Handles application-level events", "Defines web services", "Handles routing", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a feature of Entity Framework?",
      "opts": ["ORM", "Data migrations", "LINQ support", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the output of `string.Join('-', new string[] { 'a', 'b', 'c' });`?",
      "opts": ["a-b-c", "abc", "a b c", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a common pattern in ASP.NET MVC?",
      "opts": ["Model-View-Controller", "View-Model-Controller", "Model-View-ViewModel", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `HttpContext` class?",
      "opts": ["Provides information about the HTTP request", "Defines routes", "Handles session state", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is used to configure services in ASP.NET Core?",
      "opts": ["Startup.cs", "Program.cs", "Web.config", "appsettings.json"],
      "ans": 0
    },
    {
      "q": "What is a `Web API` in .NET?",
      "opts": ["A framework for building web services", "A UI component", "A data access layer", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a method of the `List<T>` class?",
      "opts": ["Add()", "Remove()", "Find()", "Select()"],
      "ans": 3
    },
    {
      "q": "What is the purpose of the `using` statement?",
      "opts": ["To include namespaces", "To manage memory", "To declare variables", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is a valid C# lambda expression?",
      "opts": ["x => x * x", "x => { return x * x; }", "Both of the above", "None of the above"],
      "ans": 2
    },
    {
      "q": "What is the function of `ASP.NET Identity`?",
      "opts": ["User authentication and management", "Session management", "Data access", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is a common file format for configuration in .NET?",
      "opts": ["JSON", "XML", "YAML", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the primary use of `NuGet` in .NET?",
      "opts": ["Package management", "Dependency injection", "Data access", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of `Console.WriteLine(5 + '5');`?",
      "opts": ["10", "55", "Error", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is true about attributes in C#?",
      "opts": ["They provide metadata", "They cannot be inherited", "They must be applied to methods", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the purpose of the `HttpClient` class?",
      "opts": ["To send HTTP requests", "To handle sessions", "To manage cookies", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the `async` modifier indicate about a method?",
      "opts": ["It is synchronous", "It can run asynchronously", "It must return a Task", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is true about boxing in C#?",
      "opts": ["Converting a value type to an object type", "Converting an object type to a value type", "It is faster than unboxing", "None of the above"],
      "ans": 0
    },
    {
      "q": "What is the output of `Console.WriteLine(0.1 + 0.2 == 0.3);`?",
      "opts": ["true", "false", "Error", "None of the above"],
      "ans": 1
    },
    {
      "q": "Which of the following is a method of the `String` class?",
      "opts": ["Length", "ToLower", "Substring", "All of the above"],
      "ans": 3
    },
    {
      "q": "What is the main purpose of the `Main()` method?",
      "opts": ["Entry point of a C# program", "To handle exceptions", "To manage resources", "None of the above"],
      "ans": 0
    },
    {
      "q": "What does the `yield return` statement do?",
      "opts": ["Pauses execution", "Returns a value from an iterator", "Both of the above", "None of the above"],
      "ans": 2
    },
    {
      "q": "Which of the following is a valid method of string concatenation in C#?",
      "opts": ["string.Concat()", "string.Add()", "string.Join()", "string.Combine()"],
      "ans": 0
    },
    {
      "q": "What does `var` mean in C#?",
      "opts": ["Implicitly typed variable", "Static type", "Dynamic type", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is NOT a valid collection type in C#?",
      "opts": ["Stack", "Queue", "HashMap", "Array"],
      "ans": 2
    },
    {
      "q": "What is the purpose of the `Task` class?",
      "opts": ["To represent an asynchronous operation", "To manage threads", "To handle exceptions", "None of the above"],
      "ans": 0
    },
    {
      "q": "Which of the following is true about the `finally` block?",
      "opts": ["It always executes", "It never executes", "It can be skipped", "None of the above"],
      "ans": 0
    }




  ]
};
