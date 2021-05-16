---
title: Upgrading Bee
id: upgrading-bee
---

Keep a close eye on the [#bee-node-updates](https://discord.gg/vQcngMzZ9c) channel in our [Discord Server](https://discord.gg/wdghaQsGq5) for information on the latest software updates for Bee. It's very important to keep Bee up to date to benefit from security updates and ensure you are able to properly interact with the swarm. 

:::warning
Bee sure to [backup](/docs/working-with-bee/backups) your clef key material and Bee data before applying updates.
:::

#### Ubuntu / Debian / Raspbian

To upgrade Bee, simply stop the Bee service.

```sh
sudo systemctl stop bee
```

Now follow the steps above to download the new package and install the new version, as usual.

You may now start your node again.

```sh
sudo systemctl start bee
```

#### Manual Installations

To upgrade your manual installation, simply stop Bee, replace the Bee binary and restart.

#### Docker

To upgrade your docker installation, simply increment the version id in your configurations and restart.