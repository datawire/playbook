---
layout: page
title: 'What are microservices?'
---
Microservices is a software architecture that is gaining rapid adoption by cloud native companies. Popularized by companies such as Netflix, Gilt Groupe, Twitter, and HubSpot, microservices enable organizations to dramatically shorten the time required to bring new functionality to market. Traditional cloud applications were built and deployed as a single unit. With microservices, software applications are built as a set of loosely coupled, self-contained services that connect to each other over a network. Ultimately, microservices can accelerate innovation, as they empower small development teams to quickly test and iterate with real market feedback and data.

![Iteration Cycles]({{site.baseurl}}/images/iteration-cycles.png)

For example, the Twitter homepage is composed through calls to dozens of microservices, including a “who to follow” microservice, a “trends” microservice, a “tweets” microservice, and many others -- some of which in turn call other microservices. The key to a successful microservices architecture is the loose coupling, which enables each microservice to be developed, tested, and released independently of the other microservices.

### Isn’t this just SOA?

Many people frequently point out that the core concepts of microservices were pioneered in service oriented architectures (SOA). While there are some technical similarities between microservices and SOA, microservices is focused on a different class of problems -- how to organizationally and computationally scale your cloud-native application architecture -- and takes advantage of cloud and DevOps technologies to create a more powerful, flexible approach to software architecture for cloud-native applications.
