db.getCollection('songs').aggregate([
  {$project: {
    noOfAudio: {$cond: [{$eq: ["$songType", 2]}, 1, 0]},
    noOfVideo: {$cond: [{$eq: ["$songType", 1]}, 1, 0]},
  }},
  {$group: { _id: null, noOfAudio: {$sum: "$noOfAudio"},
                        noOfVideo: {$sum: "$noOfVideo"},
                        total: {$sum: 1},
  }},
])
