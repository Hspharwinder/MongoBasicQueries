# basic queries

# updating all doc

db.getCollection('songs').updateMany( <br>
    {},<br></br>
    { $set: { "songType": 2 } },<br></br>
    { multi: true }<br></br>
)<br></br>

# condition
db.getCollection('songs').updateMany(<br></br>
    { "userType": 1 },<br></br>
    { $set: { "songType": 2 } },<br></br>
    { multi: true }<br></br>
)
