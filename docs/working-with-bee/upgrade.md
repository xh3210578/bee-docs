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

You will be greeted by the following prompt:

```
Configuration file '/etc/bee/bee.yaml'
 ==> Modified (by you or by a script) since installation.
 ==> Package distributor has shipped an updated version.
   What would you like to do about it ?  Your options are:
    Y or I  : install the package maintainer's version
    N or O  : keep your currently-installed version
      D     : show the differences between the versions
      Z     : start a shell to examine the situation
 The default action is to keep your current version.
*** bee.yaml (Y/I/N/O/D/Z) [default=N] ?
```

Select `N` to keep your current data and keys.

You may now start your node again.

```sh
sudo systemctl start bee
```

#### Manual Installations

To upgrade your manual installation, simply stop Bee, replace the Bee binary and restart.

#### Docker

To upgrade your docker installation, simply increment the version number in your configurations and restart.