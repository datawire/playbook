---
layout: page
title: 'How Your Stack Changes'
parent: microservices-playbook
previous: how-do-i-adopt
next: the-microwizard
---
#### The new DevOps/Microservices stack.

The rapid evolution of DevOps and microservices has resulted in a rapidly changing technology stack. A typical monolithic stack looks like this:

![Traditional Monolith Stack](/images/typical.png)

Adopting a microservice architecture requires a technology stack that supports two major paradigm shifts:

1. Microservices separates an application’s business logic into smaller components. The software stack needs to support connecting these smaller components into a complete application.
2. Individual microservices need to be quickly and easily developed, tested, and released to customers. The deployment infrastructure must support rapid iteration and release of individual microservices.

Organizations incrementally update their stack as needed to support microservices. Consider the Netflix technology stack, circa 2012:

![Netflix Microservices Stack](/images/netflix.png)

Netflix is deployed on Amazon Web Services. Circa 2012, Netflix used a deployment infrastructure common to AWS deployments: [AWS Auto Scaling Groups for resource management](https://www.google.com/url?q=http://techblog.netflix.com/2012/01/auto-scaling-in-amazon-cloud.html&amp;sa=D&amp;usg=AFQjCNGliRlmdrTri_re1DLQo7nflCygvA), with individual [microservices packaged into AMIs](https://www.google.com/url?q=http://techblog.netflix.com/2013/03/ami-creation-with-aminator.html&amp;sa=D&amp;usg=AFQjCNGXPwjbVleIVaHPsIiKHxXvY5K6JA). Netflix then uses a homegrown set of technologies for the service infrastructure, including [Eureka](https://www.google.com/url?q=https://github.com/Netflix/eureka&amp;sa=D&amp;usg=AFQjCNEP11fKjeCgNbvIINeYj453uC9iBw) and [Hystrix](https://www.google.com/url?q=https://github.com/Netflix/Hystrix&amp;sa=D&amp;usg=AFQjCNGUV5mRwdB5NCdmuQH4QIOABgVXhQ).

The Netflix stack, while open source, assumes that your organization should make the exact same technology choices they did(e.g., AWS, Java). In addition, the Netflix stack is difficult to incrementally adopt. Fortunately, a number of open source technologies are gaining traction, and enable organizations to adopt a complete end-to-end microservices stack:

In the microservices stack, the deployment infrastructure changes:

![Microservices Stack Changes](/images/microservices.png)

* Microservices are deployed in containers, which provide a lightweight mechanism to fully package a microservice and all its dependencies. Unlike VMs, containers share a kernel with other containers, enabling a container to be much lighter weight. And unlike systems packaging technologies, a container is designed to include all the dependencies of a given microservice.
* A container-based resource manager and scheduling system allocates compute resources on demand to containers, replacing a traditional VM-centric resource scheduler.

A microservice stack also introduces several new service-level technologies. These technologies are used to add service-level resilience so that the unavailability of a given microservice has no effect on the overall system behavior.


* A service discovery and routing framework is used to route traffic between microservices. A service discovery and routing framework provides a real-time view of service availability via health checks, and can use that information to dynamically route traffic to available microservices. While DNS can be used for service discovery, it typically isn’t directly used due to propagation delays, lack of native health checks, and limited control over routing.<sup>[1]</sup>
* An application protocol that provides efficient and reliable communication is deployed to connect microservices. Unlike HTTP, a microservices application protocol is non-blocking, and also introduces other behaviors such as timeouts and retries to improve resilience.

Do you need all of these pieces to start adopting microservices? Not at all. In the next example, we’ll show an example application built using a microservices architecture.
