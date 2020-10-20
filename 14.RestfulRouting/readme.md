## RESTful Routing

## Introduction

- Define REST and explain why it matters?
  => REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.

- List all 7 RESTful routes.
  => Restful Routing is based around the idea of Resources and the Golden Seven actions:

Action || HTTP Method
INDEX || GET
SHOW || GET
CREATE || POST
NEW || GET
EDIT || GET
UPDATE || PUT
DESTROY || DELETE
The aim of Restful Routing is to make you conscious of your controllers. While you may bend the rules when appropriate, you should really focus on keeping all controllers limited to these seven actions. If you fight the conventions of Restful Routing, you will not be leveraging the strength of our opinionated framework and be miserable doing so.
