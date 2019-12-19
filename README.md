# MongoUpdateQuery
basic queries

db.getCollection('songs').updateMany(
    { "userType" : 1 },
    {$set : {"songType":2}},
    { multi : true}
    )
