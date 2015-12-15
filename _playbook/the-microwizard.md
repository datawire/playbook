---
layout: page
title: 'The Microwizard'
previous: how-your-stack-changes
next: getting-everything-setup
---
### From Monolith to Microservices

Few organizations adopt a microservice architecture all at once. Much more common is an organization that has developed a functional cloud application (“the monolith”) and incrementally adopts microservices. We’ll illustrate this by showing a new feature written and deployed as a microservice, rather than being directly added to the monolith.

We’ve set up an example, the Microwizard, in a Vagrant VM that you can try. The Microwizard is a Getting Started tool for developers with no experience with microservice architectures who want to learn more about them. It lets you get your feet wet and see some of the benefits of microservices by starting with a common adoption pattern: adding a single microservice to an existing monolith (as the first step in migrating from a monolith to a microservices architecture). This enables more rapid feature development of the new service without any possibility of unintentionally inducing bugs into the existing code.

By default, Microwizard ships with and uses an existing Ruby on Rails application named <a href="https://www.google.com/url?q=https://github.com/jcs/lobsters&amp;sa=D&amp;usg=AFQjCNFJ4Rmb8eBthniUhDImLF4rA1Mx_w">Lobsters</a> as the demonstration monolith. We will walk you through how to add new functionality to the main Lobsters application by creating a microservice in Python (you do not need to know Python to understand this example).

The Microwizard uses the following simplified technology stack:

![Microwizard Stack]({{site.baseurl}}/images/microwizard.png)

The Microwizard uses both Ruby on Rails (for the monolith) and Python/Flask (for the microservice). The services are connected directly using HTTP, which is sufficient for a small scale microservices deployment. <a href="https://www.google.com/url?q=http://bakerstreet.io&amp;sa=D&amp;usg=AFQjCNGfCgcuxm9MTRgV-kfmGoiyuM7qhQ">Baker Street</a> is used for service discovery and routing, as it provides a simple setup and configuration experience. The monolith, popularity microservice, and database are all deployed in individual Docker containers.

The Microwizard simplifies a few components of the technology stack in the interest of simplicity, as noted above. It’s deployed on a single Vagrant virtual machine. It also does not deploy a resource management framework such as Kubernetes or Docker Swarm. Both of these issues would need to be addressed in a production architecture.
