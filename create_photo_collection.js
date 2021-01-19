use photo_database;
db.createCollection("photo",{capped: true,size: 6142800});
db.photo.createIndex(
    {
        "writer.userId": 1
    },
    {
        unique: false,
        sparse: false,
        expireAfterSeconds: 3600
    }
)

