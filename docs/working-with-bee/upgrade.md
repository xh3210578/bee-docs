---
title: Upgrading Bee
id: upgrading-bee
---

Bee sure to [backup](/docs/maintenance/backups) your clef key material and Bee data before applying updates.

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
