---
title: Network Science
description: "Network science applications and mathematics."
pub_date: 2026-05-25T00:00:00.000Z
hero_image: "/uploads/Network-science-blog-post.png"
tags:
  - Applied Mathematics
draft: true
---
Network science is an academic field that studies complex networks such as telecommunication, computer, biological, cognitive, and semantic, and social networks, in which distinct elements or actors are represented as nodes (or vertices) and their connections as links (or edges).

In this post I am going to cover the background of Network science, the fundamental mathematics behind different concepts, and end with a small python project implementing these concepts.

​

###### Applications

You can apply concepts from network science in many different areas in both real life and conceptually. Common areas where network science is used could include computer science, biology, finance, and social science.

​

###### Mathematical Fundamentals

A graph represents nodes and edges. Where the nodes are endpoints, and the edges (also can be called vertices) are the lines connecting the nodes. There are two common types of graphs, **directed** or **undirected**. Directed graphs mean the connection between two nodes have some type of direction or flow between the two nodes, compared to undirected, there is no direction or flow, the nodes are just connected by the edge.

![Directed vs Undirected graph.](https://media.geeksforgeeks.org/wp-content/uploads/20251129171131163099/directed_graph.webp)

The **Adjecency Matrix** describes the structure of a simple graph. The adjecency matrix provides an algebraic view on networks by representing their structure in form of a matrix.

\$\$A = \[A\_\_ij]\$\$
