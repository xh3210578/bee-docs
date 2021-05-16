---
title: Hive
id: hive
---

:::tip
We recommend even our most 1337 readers go through a [single installation](/docs/installation/single) first to get a flavour of Bee, and to understand the nuances of the implementations. 👾
:::

Because of [how the swarm is structured](/), we recommend that users wishing to scale up their Bee operation, or set up a commercial Bee hive should seek to run many instances of Bee simulataneously, rather than extend the storage size of individual nodes.

Swarm provides tooling to help you install many Bees at once.

### Docker

Up to date [Docker images for Bee and Bee Clef](/docs/installation/docker) are provided.

### Docker-Compose

It becomes easier to run multiple Bee nodes with `docker-compose`. Check out the Docker-Compose section of the [Docker README](https://github.com/ethersphere/bee/tree/master/packaging/docker).

### Helm

If you really want to run a lot of Bee nodes and you have experience using Kubernetes with Helm, you can have a look at how we manage our cluster under [Ethersphere/helm](https://github.com/ethersphere/helm/tree/master/charts/bee).

### Manually

If you just want to run a handful of bee nodes, you can run multiple bee nodes by creating separate configuration files.

Create your first configuration file by running

```console
bee printconfig \
  &> bee-config-1.yaml
```
Make as many copies of bee-config-1.yaml as you want to run bee nodes. Increment the number in the name (`bee-config-1` to `bee-config-2`) for each new configuration file.

Configure your nodes as desired, but ensure that the values `api-addr`, `data-dir`, `debug-api-addr`, `p2p-addr` and `clef-signer-endpoint` are unique for each configuration.

# Why Run Multiple Nodes?

To understand why this is the case, we must understand the level of pickiness (how picky a node is when deciding to store a chunk) of nodes with a large capacity versus a node with a small capacity.
A node with a large capacity has a much lower pickiness than a node with a smaller capacity. Hence, the node will store chunks that would not have been stored by a more picky node.
If your node has a much larger capacity than the average node in the network, it is likely to store chunks that belong together with chunks that were already deleted by other nodes.
Since your node gets paid by serving chunks upon request and it is less likely that chunks are requested that belong to content that is mostly gone from Swarm, it is best to run a node whose pickiness is equal to the average pickiness of the network. Read [The Book of Swarm](https://gateway.ethswarm.org/bzz/latest.bookofswarm.eth/) for more info.