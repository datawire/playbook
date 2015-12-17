---
layout: page
title: 'How Your Stack Changes'
---

### The Microservices Ecosystem

Adopting a microservice architecture adds two key requirements to the traditional application technology stack:

1. Microservices separates an application’s business logic into smaller components. The software stack needs to support connecting these smaller components into a complete application.

2. Individual microservices need to be quickly and easily developed, tested, and released to customers. The deployment infrastructure must support rapid iteration and release of individual microservices.

Supporting these requirements does not necessarily require new technology, although there are limitations to using status quo technology.

### The Traditional Stack

The traditional application stack typically looks like this:

![Traditional Monolith Stack]({{site.baseurl}}/images/typical.png)

Business logic is written in an application framework, packaged, and then deployed on virtual or physical machines.

### The Services Layer

In a microservices environment, the traditional application stack gains an additional layer, the services layer. The services layer is responsible for connecting microservices together, and fits between the packaging layer and the application framework.

![Microservices Stack Changes]({{site.baseurl}}/images/microservices.png)

In addition, containers are used to package microservices, enabling a more agile deployment infrastructure. 

* Microservices are deployed in containers, which provide a lightweight mechanism to fully package a microservice and all its dependencies. Unlike VMs, containers share a kernel with other containers, enabling a container to be much lighter weight. And unlike systems packaging technologies, a container is designed to include all the dependencies of a given microservice.
* A container-based resource manager and scheduling system allocates compute resources on demand to containers, replacing a traditional VM-centric resource scheduler.

### The Netflix Stack, circa 2012

As previously discussed, organizations should incrementally adopt microservices, and iterate on the technology stack. Consider the Netflix technology stack, circa 2012:

![Netflix Microservices Stack]({{site.baseurl}}/images/netflix.png)

Netflix is deployed on Amazon Web Services. Netflix used a deployment infrastructure common to AWS deployments: [AWS Auto Scaling Groups for resource management](http://techblog.netflix.com/2012/01/auto-scaling-in-amazon-cloud.html), with individual [microservices packaged into AMIs](http://techblog.netflix.com/2013/03/ami-creation-with-aminator.html). Netflix then uses a homegrown set of technologies for the service infrastructure, including [Eureka](https://github.com/Netflix/eureka) and [Hystrix](https://github.com/Netflix/Hystrix).

The Netflix stack, while open source, assumes that your organization should make the exact same technology choices they did (e.g., AWS, Java). In addition, the Netflix stack is difficult to incrementally adopt. Fortunately, a number of open source technologies are gaining traction, and enable organizations to adopt a complete end-to-end microservices stack:
