# DATABASES

## Intro to Databases
* What is a database? 
  * A collection of information/data 
  * Has an interface 
* SQL(relational) vs NoSQL(Non-relational)

==========================
SQL OR RELATIONAL DATABASE
==========================
 =>
  USERS TABLE
  -----------
  id | name | age | city
  ----------------------
  1  | Tom | 34  | Hyd
  2  | Dic | 22  | Mum
  3  | Har | 45  | Del

 =>   
  COMMENTS TABLE 
  --------------
  id |         text
  ---------------------
  1  | "lol"
  2  | "Come visit Manchester!"
  3  | "I love coding!"
  4  | "Seriously, Manchester is great!"

 => 
  USER/COMMENTS JOIN TABLE 
  ------------------------
  userId   |   commentId
  1             3
  2             2
  2             4
  3             1

================================
NoSQL OR NON-RELATIONAL DATABASE
================================
=> 
 {
     name: "Shashi",
     age: 35,
     city: Manchester,
     comments: [
         {
             text: "Come visit Manchester!"
         }, 
         {
             text: "Seriously, Hyd is Manchester!"
         },
      favColor: "teal"   
     ]
 }

 # INTRO TO MONGODB
 * What is MongoDB?
 * Why are we using it?
 * Let's install it!

# Mongo Shell Basics:
 # Our First Mongo Commands

 * mongod
 * mongo
 * help
 * show dbs
 * use
 * insert
 * find
 * update
 * remove
  
