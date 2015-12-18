---
layout: page
title: 'Microservices In Action'
---
Now we’re ready for the fun part - launching a new microservice to interact with our existing Lobsters monolith application. Do the following:

1. In the base deployment of the Microwizard example, visit <a href="http://127.0.0.1:3000/popular">http://127.0.0.1:3000/popular</a>. You'll notice that no users are displayed and the string "NO SERVICES AVAILABLE" is shown. This is because no services are deployed by default.

1. Let's deploy a service! Leave the popularity.py file as it is for the moment and run the following commands to launch three new lobster-popularity microservices:

    ```
     ./scripts/svrun lobsters-popularity lobpop_v1 UNCOMMITTED_COPY
     ./scripts/svrun lobsters-popularity lobpop_v1 UNCOMMITTED_COPY
     ./scripts/svrun lobsters-popularity lobpop_v1 UNCOMMITTED_COPY
    ```

    The UNCOMMITTED_COPY argument tells the Microwizard service that
    it should take the current state of your repository (instead of
    deploying from the official system of record, the committed state
    within git), copy it to a new directory on the Docker host, and
    then mount the code as a Docker volume. Effectively this means you
    are running your current changes when the service starts.

1. Once the containers are deployed, go back to <a href="http://127.0.0.1:3000/popular">http://127.0.0.1:3000/popular</a> and you should see some data on the page including statistical information like the query speed and which service handled the request.

1. Now, let's take a look at the code for the microservice. Open `src/lobsters-popularity/popularity.py`. A few things to note:
    * It uses Flask. A microservice can be written in any application
      framework or runtime. You don't need anything special here.
    * It exposes two URLs: / and /health. /health is for processing
      health checks and / provides the meat of the service by querying
      the MySQL DB used by the existing monolith for the most popular
      Lobsters users (as determined by karma points)


1. Let's make a bad modification to our service and then deploy it to one new microservice instance without modifying the three existing instances. Find the following two lines:

    ```
    #users = inefficient_query()
    users = efficient_query()
    ```
    
    Change the code to look like this:
    
    ```
    users = inefficient_query()
    #users = efficient_query()
    ```
    
1. Roll out one of the poorly implemented services:

    `./scripts/svrun lobsters-popularity lobpop_v2 UNCOMMITTED_COPY`

1. Once it is up and running, refresh the <a
   href="http://127.0.0.1:3000/popular">http://127.0.0.1:3000/popular</a>
   page repeatedly. You should notice that occasionally the page takes
   a long time to load. This is because Baker Street is routing to the
   service with the inefficient code. Note that even though the
   service is operating slowly it is not causing the rest of the
   application to grind to a halt! You can demonstrate this by
   clicking on other links within the Lobsters application and
   noticing that they all load quickly even when the microservice page
   is slow.

1. To remove the bad service run the following command:

    `./scripts/svkill lobpop_v2`

1. Refresh the <a href="http://127.0.0.1:3000/popular">http://127.0.0.1:3000/popular</a> page repeatedly and notice that all of the page loads are fast. The slow loads are gone because we removed the instance running the bad code.
