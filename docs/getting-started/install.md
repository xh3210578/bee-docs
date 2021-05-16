---
title: Install Bee
id: install
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The swarm thrives on decentralisation, and Bee is designed so that it works at it's best when many many individuals contribute a few Bee's each to the health and distributed nature of the system. It is easy to set up Bee on small and inexpensive computers, such as a [Raspberry Pi 4](https://www.raspberrypi.org/), spare hardware you have lying around, or even a cheap cloud hosted VPS (we recommend small, independent providers and colocations). 

## Installing Bee

Bee is packaged for MacOS and Ubuntu, Raspbian, Debian and CentOS based Linux distributions.

If your system is not supported, please see the [manual installation](/docs/installation/manual) section for information on how to install Bee.

:::info
If you would like to run a hive of many Bees, checkout the [node hive operators](/docs/advanced/node-hive-operators) for section for information on how to operate and monitor many Bees at once.
:::

To install Bee you will go through the following process.

 1. Set up the external signer for Bee, [Bee Clef](/docs/tooling/bee-clef). (Recommended) 
 2. Install Bee and set it up to run as a service.
 3. Configure Bee.
 4. [fund your node](/docs/installation/quick-start#fund-your-node) with gETH and gBZZ
 5. Wait for your chequebook transactions to complete and batch store to update.
 6. Check Bee is working.

## Recommended Hardware

tbc

## Install Bee Clef

Bee makes use of Go Ethereum's external signer, [Clef](https://geth.ethereum.org/docs/clef/tutorial).

Because Bee must sign a lot of transactions automatically and quickly, a Bee specific version of Clef, [Bee-clef](https://github.com/ethersphere/bee-clef) has been packaged which includes all the relevant configuration and implements the specific configuration needed to make Clef work with Bee.

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu / Debian / Raspbian', value: 'debian'},
    {label: 'CentOS', value: 'centos'},
    {label: 'MacOS', value: 'macos'},
  ]}>
<TabItem value="debian">

#### AMD64

```bash
wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_amd64.deb
sudo dpkg -i bee-clef_0.4.9_amd64.deb
```

#### ARM (Raspberry Pi)

##### ARMv7

```bash
wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_armv7.deb
sudo dpkg -i bee-clef_0.4.9_armv7.deb
```

##### ARM64

```bash
wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_arm64.deb
sudo dpkg -i bee-clef_0.4.9_arm64.deb
```

</TabItem>
<TabItem value="centos">

#### AMD64

```bash
wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_amd64.rpm
sudo rpm -i bee-clef_0.4.9_amd64.rpm
```

#### ARM (Raspberry Pi)

##### ARMv7

```bash
wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_armv7.rpm
sudo rpm -i bee-clef_0.4.9_armv7.rpm
```

##### ARM64

```bash
wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_arm64.rpm
sudo rpm -i bee-clef_0.4.9_arm64.rpm
```

</TabItem>
<TabItem value="macos">

```bash
brew tap ethersphere/tap
brew install swarm-clef
```

To run Bee Clef as a service now and on startup, run:

```bash
brew services start swarm-clef
```

</TabItem>
</Tabs>

Finally, let's check Bee Clef is running.

<Tabs
  defaultValue="linux"
  values={[
    {label: 'Linux', value: 'linux'},
    {label: 'MacOS', value: 'macos'},
  ]}>
  <TabItem value="linux">

```bash
systemctl status bee-clef
```

```
● bee-clef.service - Bee Clef
     Loaded: loaded (/lib/systemd/system/bee-clef.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2020-11-20 23:45:16 GMT; 1min 29s ago
```


</TabItem>
  <TabItem value="macos">

```bash
launchctl list | grep swarm-clef
```

  </TabItem>
</Tabs>


## Install Bee

Next, install Bee itself, simply choose the appropriate command from the ones below. This will set automatically up your Bee and start running it in the background as a service on your computer.

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu / Debian / Raspbian', value: 'debian'},
    {label: 'CentOS', value: 'centos'},
    {label: 'MacOS', value: 'macos'},
  ]}>
<TabItem value="debian">

#### AMD64

```bash
wget https://github.com/ethersphere/bee/releases/download/v0.5.3/bee_0.5.3_amd64.deb
sudo dpkg -i bee_0.5.3_amd64.deb
```

#### ARM (Raspberry Pi)

##### ARMv7

```bash
wget https://github.com/ethersphere/bee/releases/download/v0.5.3/bee_0.5.3_armv7.deb
sudo dpkg -i bee_0.5.3_armv7.deb
```

##### ARM64

```bash
wget https://github.com/ethersphere/bee/releases/download/v0.5.3/bee_0.5.3_arm64.deb
sudo dpkg -i bee_0.5.3_arm64.deb
```
</TabItem>
<TabItem value="centos">

### CentOS

#### AMD64

```bash
wget https://github.com/ethersphere/bee/releases/download/v0.5.3/bee_0.5.3_amd64.rpm
sudo rpm -i bee_0.5.3_amd64.rpm
```

#### ARM (Raspberry Pi)

##### ARMv7

```bash
wget https://github.com/ethersphere/bee/releases/download/v0.5.3/bee_0.5.3_armv7.rpm
sudo rpm -i bee_0.5.3_armv7.rpm
```

##### ARM64

```bash
wget https://github.com/ethersphere/bee/releases/download/v0.5.3/bee_0.5.3_arm64.rpm
sudo rpm -i bee_0.5.3_arm64.rpm
```
</TabItem>
<TabItem value="macos">

### MacOS

```bash
brew tap ethersphere/tap
brew install swarm-bee
```

To run Bee as a service now and on startup, run:

```bash
brew services start swarm-bee
```

</TabItem>
</Tabs>

## Configure Bee

Because Bee has many use cases and may run on many different specifications of hardware, it is important that you configure Bee so it will work best for you.

### Important Configuration Parameters

Please consider changing the following parameters. See below on how to change your configuration and restart your Bee service.

#### Full Node or Light Node

Since Bee can take a lot of resources when providing services to the network in exchange for gBZZ, your Bee node starts off in Light Node mode by default. To allow your Bee to use your network bandwidth and computing resources to serve the network, set the `--full-node` flag to `true`.

#### Ethereum blockchain

Your Bee node must have access to the Ethereum Goerli testnet blockchain, so that it
can interact with and deploy your chequebook contract. You can run your
[own Goerli node](https://github.com/goerli/testnet) or, use a provider instead - we recommend
[Infura](https://infura.io/).

By default, Bee expects a local Goerli node at `http://localhost:8545`. To use a provider instead, change your configuration as follows.

```yaml
swap-endpoint: https://goerli.infura.io/v3/<<your-api-key>>
```

If you would like to use your node to resolve ENS domain names, you must also provide the endpoint for an Ethereum mainnet provider.

```yaml
resolver-options: ["https://mainnet.infura.io/v3/<<your-api-key>>"]
```

#### DB Open File Descriptors Limit

Bee is designed to work on a lot of different hardware. To facilitate the exploration of this during our beeta phase, we have given node operators access to leveldb's `--db-open-files-limit`. This helps determine the speed with which Bee can read and write to it's database, and therefore it's efficiency in forwarding and serving chunks. Some say setting this to much more than the default 200 leads to a much enhanced ability to participate in the swarm and get those gBZZ! Share your experience in the #node-operators channel of our [Discord server](https://discord.gg/wdghaQsGq5) to help us make this process more automated in the future!

#### Debug API

For a new installation of Bee, the debug API endpoint is not yet exposed for security reasons. To enable the debug API endpoints, set `debug-api-enable` to `true` in your [configuration file](/docs/installation/configuration#configuring-bee-installed-using-a-package-manager) and restart your Bee service.

```yaml
debug-api-enable: true
debug-api-addr: 127.0.0.1:1635
```

:::caution
Your Debug API contains sensitive endpoints, ensure that port `1635` is firewalled and *never* exposed to the public internet.
:::

#### Open File Descriptors

Bee can be very intensive on your hardware. We are under in active development and we are fine tuning our settings to work best on all sorts of hardware. Try changing this to a higher number to allow your Bee to take full advantage of your hardware.

```yaml
db-open-files-limit: 2000
```

:::info
See the [configuration](configuration) section for more information on how to fine tune your Bee.
:::

### Edit Config File

To alter Bee's configuration, edit the relevant configuration file, and then restart your Bee service.

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu / Debian / Raspbian', value: 'debian'},
    {label: 'CentOS', value: 'centos'},
    {label: 'MacOS', value: 'macos'},
  ]}>
<TabItem value="debian">

#### Linux

```bash
sudo vi /etc/bee/bee.yaml
sudo systemctl restart bee
```

</TabItem>
<TabItem value="centos">

### CentOS

```bash
sudo vi /etc/bee/bee.yaml
sudo systemctl restart bee
```

</TabItem>
<TabItem value="macos">

#### MacOS

```bash
vi /usr/local/etc/swarm-bee/bee.yaml
brew services restart swarm-bee
```

</TabItem>
</Tabs>


## Fund Your Bee

In order to deploy it's chequebook, your Bee needs gBZZ and gETH.

First, find out your Ethereum address.

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu / Debian / Raspbian', value: 'debian'},
    {label: 'CentOS', value: 'centos'},
    {label: 'MacOS', value: 'macos'},
  ]}>
<TabItem value="debian">

#### Linux

```bash
sudo bee-get-addr
```

</TabItem>
<TabItem value="centos">

### CentOS

```bash
sudo bee-get-addr
```

</TabItem>
<TabItem value="macos">

#### MacOS

```bash
head -18 $(brew --prefix)/var/log/swarm-bee/bee.log | grep ethereum
```

</TabItem>
</Tabs>

Once you have determined your Ethereum address, join our [Discord server](https://discord.gg/wdghaQsGq5) and navigate to the [#faucet-request](https://discord.gg/4dtgqAueGh) channel. After you have [verified](https://discord.gg/tXGPdzZQaV) (and said hi 👋!), write a message like the following, remembering to replace your Ethereum address for this one:

```
sprinkle 0xefbc376472dd4654cb04472e2370ae02d0102520
```

gBZZ and gETH will be then sent to your Ethereum address!

:::info
If too much time has elapsed, you may need to restart your node at this point (see above).
:::

## Wait for Initialisation

When first started, Bee must deploy a chequebook to the Goerli blockchain, and sync the postage stamp batch store so that it can check chunks for validity when storing or forwarding them. This can take a while, so please be patient! Once this is completed, you will see Bee starting to add peers and connect to the network.

While you are waiting for Bee to initalise, this is a great time to [back up your keys](/docs/working-with-bee/backups) for safe keeping.

## Check Bee Is Working

Once Bee has been funded, chequebooks deplyed and postage stamp batch store synced, its HTTP
[API](/docs/api-reference/api-reference) will start listening at
`localhost:1633`.

To check everything is working as expected, send a GET request to localhost port 1633.

```bash
curl localhost:1633
```

```
Ethereum Swarm Bee
```

Great! Our api is listening!

Next, let's see if we have connected with any peers.

```bash
curl -s localhost:1635/peers | jq ".peers | length"
```

```
6
```

Perfect! We are accumulating peers, this means you are connected to the network, and ready to start accumulating cheques you can [cash to get your gBZZ](/docs/working-with-bee/cashing-out) and [using Bee](/docs/using-bee/install) to [upload and download](/docs/using-bee/upload-and-download) content or host and browse [websites](/docs/using-bee/host-your-website) on the unstoppable swarm network.

Welcome to the swarm! 🐝 🐝 🐝 🐝 🐝