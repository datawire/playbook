---
layout: page
title: 'Architectural Details'
parent: the-microwizard
previous: microservices-in-action
next: ''
---
JANICE: I’m experimenting a little bit with this section, so ignore for now.

Service Discovery and Routing

A microservices deployment is a dynamic environment, with many instances of a given microservice being added and removed.

* different approaches and tradeoffs

The demonstration is composed of the following pieces which all run inside Docker containers:

1. Lobsters Ruby on Rails application
2. MariaDB (open source MySQL fork)
3. Popularity microservice written in Python Flask.
4. <a href="https://www.google.com/url?q=http://www.bakerstreet.io/&amp;sa=D&amp;usg=AFQjCNGwYPzLY4-np3UtZi4Vizm3KawC4w">Baker Street</a>

The popularity microservice is written so that during initialization of each instance's container the instance is registered as alive by its local Watson component which sends the information to the Datawire Directory. The Sherlock instance we added to the Lobsters monolith subscribes to popularity service availability information and receives push notices from the Datawire Directory indicating new instances are available as each instance is brought up. Calls to the popularity microservice instances at each page reload is distributed among all of the available instances as noted in the local Sherlock.

The popularity microservice has a directory called microwizard/ in its root project directory. This directory contains three important files that configure everything and make it all work:

1. `datawire.conf` - configures Datawire settings
2. `microwizard.yml` - describes the deployment to Microwizard
3. `mw.sh` - the service initialization and startup routines.

### This is how it works:

1. Microservice code is committed into a Git repository.
2. When a new service is launched the Microwizard performs a checkout against the specified Git commit.
3. The checked out code is moved into a directory specifically for that commit.
4. Microwizard then launches a container and mounts the source code as a volume on the container.
5. The container starts and runs the init() function in your services mw.sh
6. The container starts and runs the run() function in your services mw.sh
7. Sherlock and Watson are automatically installed on the container so when the service starts it automatically registers with the Datawire directory.

### Microservices in Production

How does the Microwizard translate into a production deployment? The Microwizard does not use production ready deployment infrastructure; in production you would want to use Amazon EC2 + AutoScalingGroups (or equivalent) or Docker + Kubernetes (or equivalent). If you have an existing application, using your existing deployment infrastructure is the common sense solution.

The application infrastructure (HTTP and Baker Street) is simple in design and implementation. As shown in the Microwizard, this approach requires minimal changes to your existing code and infrastructure. This architecture also scales even to large numbers of microservices (Yelp, for example, uses a very similar architecture).

There are other differences and shortcuts we took to ensure a fast and easy experience for the demonstration. For example, we turned off ssh key checking within the environment since the demo is designed to run everything locally.

### What’s Next?

* Ready to write your own microservice? Check out Baker Street on GitHub, and give us feedback!
* Contribute and give feedback on the Microwizard.
* Datawire is building additional tools to address some of the other challenges in developing microservices. Sign up for our Early Access Program (LINK) to get notified when we have updates.

<hr>

<href="#ftnt_ref1" name="ftnt1">[1] There are some DNS-based service discovery and routing systems, e.g., SkyDNS, that build on top of DNS. The reference to DNS here is a pure DNS-only solution.</href="#ftnt_ref1">
