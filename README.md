# MongoUpdateQuery
basic queries

# updating all doc 

db.getCollection('songs').updateMany(
    { "userType" : 1 },
    {$set : {"songType":2}},
    { multi : true}
    )
    
# condition
db.getCollection('songs').updateMany(
    { "userType" : 1 },
    {$set : {"songType":2}},
    { multi : true}
    )
