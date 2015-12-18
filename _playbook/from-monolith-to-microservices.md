---
layout: page
title: 'From Monolith to Microservices'
---
A thoughtful, incremental approach to adopting microservices can have a significant impact on the success of a microservices architecture. In this chapter, we'll discuss one such incremental approach.

### A Resilient Microservice

We'll start with deploying a single, resilient microservice that is connected to the monolith. Why resilience?

1. A new microservice should not impact the availability of the overall service. For example, a monolith-based service that has 99.99% availability would have 99.98% availability (99.99<sup>2</sup>%) when an additional microservice is added unless resilience is designed into the architecture.

2. Developers need to be able to iterate and deploy the microservice independently of the monolith. A resilient microservice insures that the impact of any microservice changes are isolated from the monolith.

### The Microwizard

We've created a simple project, <a href="https://github.com/datawire/microwizard">the Microwizard</a>, which illustrates adding a single resilient microservice to an existing monolith. The Microwizard is set up as a <a href="https://www.vagrantup.com">Vagrant VM</a>.

The Microwizard is a Getting Started tool for developers with no experience with microservice architectures who want to learn more about them. It lets you get your feet wet and see some of the benefits of microservices by starting with a common adoption pattern: adding a single microservice to an existing monolith (as the first step in migrating from a monolith to a microservices architecture). This enables more rapid feature development of the new service without any possibility of unintentionally inducing bugs into the existing code.

By default, Microwizard ships with and uses an existing Ruby on Rails application named <a href="https://github.com/jcs/lobsters">Lobsters</a> as the demonstration monolith. We will walk you through how to add new functionality to the main Lobsters application by creating a microservice in Python (you do not need to know Python to understand this example).

The Microwizard uses the following simplified technology stack:

![Microwizard Stack]({{site.baseurl}}/images/microwizard.png)

The Microwizard uses both Ruby on Rails (for the monolith) and Python/Flask (for the microservice). <a href="http://bakerstreet.io">Baker Street</a> is used for the services layer. Baker Street provides a resilient service discovery and routing framework over HTTP, and connects the different services in the Microwizard. The monolith, popularity microservice, and database are all deployed in individual Docker containers.

The Microwizard simplifies a few components of the technology stack in the interest of simplicity, as noted above. It’s deployed on a single Vagrant virtual machine. It also does not deploy a resource management framework such as Kubernetes or Docker Swarm. Both of these issues would need to be addressed in a production architecture.
