---
layout: page
title: 'From Monolith to Microservices'
---
Few organizations adopt a microservice architecture all at once. Much more common is an organization that has developed a functional cloud application (“the monolith”) and incrementally adopts microservices. A thoughtful, incremental approach to adopting microservices can have a significant impact on the success of a microservices architecture.

### A Resilient Microservice

In practice, a typical approach to adopting microservices involves starting with a single, resilient microservice that is connected to the monolith. Why resilience?

1. A new microservice should not impact the availability of the overall service. For example, a monolith-based service that has 99.99% availability would have 99.98% availability (99.99%^2) when an additional microservice is added unless resilience is designed into the architecture.

2. Developers need to be able to iterate and deploy the microservice independently of the monolith. A resilient microservice insures that the impact of any microservice changes are isolated from the monolith.

### The Microwizard

The Microwizard illustrates this approach in a Vagrant VM that you can try. The Microwizard implements a new feature that is written and deployed as a microservice. The Microwizard is a Getting Started tool for developers with no experience with microservice architectures who want to learn more about them. It lets you get your feet wet and see some of the benefits of microservices by starting with a common adoption pattern: adding a single microservice to an existing monolith (as the first step in migrating from a monolith to a microservices architecture). This enables more rapid feature development of the new service without any possibility of unintentionally inducing bugs into the existing code.

By default, Microwizard ships with and uses an existing Ruby on Rails application named <a href="https://github.com/jcs/lobsters">Lobsters</a> as the demonstration monolith. We will walk you through how to add new functionality to the main Lobsters application by creating a microservice in Python (you do not need to know Python to understand this example).

The Microwizard uses the following simplified technology stack:

![Microwizard Stack]({{site.baseurl}}/images/microwizard.png)

The Microwizard uses both Ruby on Rails (for the monolith) and Python/Flask (for the microservice). The services are connected directly using HTTP, which is sufficient for a small scale microservices deployment. <a href="http://bakerstreet.io">Baker Street</a> is used for service discovery and routing, as it provides a simple setup and configuration experience. The monolith, popularity microservice, and database are all deployed in individual Docker containers.

The Microwizard simplifies a few components of the technology stack in the interest of simplicity, as noted above. It’s deployed on a single Vagrant virtual machine. It also does not deploy a resource management framework such as Kubernetes or Docker Swarm. Both of these issues would need to be addressed in a production architecture.
