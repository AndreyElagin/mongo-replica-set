admin = db.getSiblingDB("admin")
// creation of the admin user
admin.createUser(
  {
    user: "myUserAdmin",
    pwd: "abc123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
// let's authenticate to create the other user
// db.getSiblingDB("admin").auth("cristian", "cristianPassword2017" )
// creation of the replica set admin user
db.getSiblingDB("admin").createUser(
  {
    user: "myUserAdmin",
    pwd: "abc123",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)