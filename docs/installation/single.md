---
title: Single Node
id: single-node
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

Next, install Bee itself, simply choose the appropriate command from the ones below. This will set up Bee and start running it in the background as a service on your computer.

:::info
Follow post install guide in terminal for initial configuration and how to start `bee`.
:::


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

<!-- #### Light Node

Since Bee can take a lot of resources when providing services to the network in exchange for gBZZ, your Bee node starts off in Light Node mode by default. To allow your Bee to use your network bandwidth and computing resources to serve the network, change the ...

```
swap-endpoint: https://rpc.slock.it/goerli
```
 -->
#### Ethereum blockchain

Your Bee node must have access to the Ethereum Goerli testnet blockchain, so that it
can interact with and deploy your chequebook contract. You can run your
[own Goerli node](https://github.com/goerli/testnet) or, use a provider instead - we recommend
[Infura](https://infura.io/).

By default, Bee expects a local Goerli node at `http://localhost:8545`. To use a provider instead, change your configuration as follows.

```
swap-endpoint: https://goerli.infura.io/v3/<<your-api-key>>
```

If you would like to use your node to resolve ENS domain names, you must also provide the endpoint for an Ethereum mainnet provider.

```
resolver-options: ["https://mainnet.infura.io/v3/<<your-api-key>>"]
```

#### Debug API

For a new installation of Bee, the debug API endpoint is not yet exposed for security reasons. To enable the debug API endpoints, set `debug-api-enable` to `true` in your [configuration file](/docs/installation/configuration#configuring-bee-installed-using-a-package-manager) and restart your Bee service.

```
debug-api-enable: true
debug-api-addr: 127.0.0.1:1635
```

:::caution
Your Debug API contains sensitive endpoints, ensure that port `1635` is firewalled and *never* exposed to the public internet.
:::

#### Open File Descriptors

Bee can be very intensive on your hardware. We are under in active development and we are fine tuning our settings to work best on all sorts of hardware. Try changing this to a higher number to allow your Bee to take full advantage of your hardware.

```
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

## Check Bee Is Working

Once Bee has been funded, its HTTP based
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

Perfect! We are accumulating peers, this means you are connected to the network. Welcome to the swarm!

### Linux

We can now manage the Bee service using `systemctl`.

```bash
systemctl status bee
```

```
● bee.service - Bee - Ethereum Swarm node
     Loaded: loaded (/lib/systemd/system/bee.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2020-11-20 23:50:15 GMT; 6s ago
```

Logs are available using the `journalctl` command:

```bash
journalctl --lines=100 --follow --unit bee
```

```text
INFO[2021-02-09T18:55:11Z] swarm public key 03379f7aa673b7f03737064fd23ba1453619924a4602e70bbccc133ba67d0968bd
DEBU[2021-02-09T18:55:11Z] using existing libp2p key
DEBU[2021-02-09T18:55:11Z] using existing pss key
INFO[2021-02-09T18:55:11Z] pss public key 03bae655ce94431e1f2c2de8d017f88c8c5c293ef0057379223084aba9e318596e
INFO[2021-02-09T18:55:11Z] using ethereum address 99c9e7868d22244106a5ffbc2f5d6b7c88e2c85a
INFO[2021-02-09T18:55:14Z] using default factory address for chain id 5: f0277caffea72734853b834afc9892461ea18474
INFO[2021-02-09T18:55:14Z] no chequebook found, deploying new one.
WARN[2021-02-09T18:55:15Z] cannot continue until there is sufficient ETH (for Gas) and at least 10 BZZ available on 99c9e7868d22244106a5ffbc2f5d6b7c88e2c85a
WARN[2021-02-09T18:55:15Z] get your Goerli ETH and Goerli BZZ now via the bzzaar at https://bzz.ethswarm.org/?transaction=buy&amount=10&slippage=30&receiver=0x99c9e7868d22244106a5ffbc2f5d6b7c88e2c85a

```

### MacOS

Services are managed using Homebrew services.

```bash
brew services restart swarm-bee
```

Logs are available at `/usr/local/var/log/swarm-bee/bee.log`

```bash
tail -f /usr/local/var/log/swarm-bee/bee.log
```

### Fund Your Node

A SWAP enabled Bee node requires both gETH and gBZZ to begin
operation. The current version of Swarm incentives is running on the
Ethereum Goerli testnet. To acquire free gBZZ tokens
visit the [Bzzaar](https://bzz.ethswarm.org) and follow the following steps!

#### 1. Find your Bee node's address.

To find a Bee node's Ethereum address you can:
 - look into its logs (see above),
 - use the handy `bee-get-addr` utility,

```bash
bee-get-addr
```

```
WARN[2021-02-09T18:55:15Z] get your Goerli ETH and Goerli BZZ now via the bzzaar at https://bzz.ethswarm.org/?transaction=buy&amount=10&slippage=30&receiver=0x99c9e7868d22244106a5ffbc2f5d6b7c88e2c85a
```

```bash
curl -s localhost:1635/addresses | jq .ethereum
```

 - send a request to our Bee node's
   [debug API](/docs/api-reference/api-reference) endpoint
   called  *addresses*.

```json
"0x97a472ff3a28a2e93ef4d2f523ff48e39c4bf579"
```

#### 2. Come to the [Bzzaar](https://bzz.ethswarm.org) and buy some gBZZ! 

*You can get to the Bzzaar by navigating to the link shown in your logs. It should look something like this, note that the Ethereum address of your node is prefilled in the `receiver` query parameter.*

`https://bzz.ethswarm.org/?transaction=buy&amount=10&slippage=30&receiver=0xbee467355...`

*Make sure that your Bee node's correct address is displayed above the transaction modal.*

`You are minting to receiver - 0xbee467355...`

#### 3. Connect your wallet, we recommend [Metamask](https://metamask.io/) or [Portis](https://www.portis.io/). 

#### 3. Click the `GET G-ETH` button in the bottom left hand corner of your screen.

#### 4. Wait for the Goerli ETH to arrive in your wallet.

*We will send a small amount of gETH to both your connected wallet, and your Bee's wallet!*

*This can take a couple of minutes, check the [faucet address on Etherscan](https://goerli.etherscan.io/address/0x44f9fda7a5bf504ddf16dd37b8411c3fba34461d) and look for the transactions to your addresses.*

*You may need to reconnect your wallet to see your balance increase once the transaction has completed.*

#### 5. Once you have balance, enter at least 10 in the `gBZZ` field, you may even have enough gETH to buy a little more!

*This is another blockchain transaction, minutes check Metamask to see how your transaction is getting on.*

#### 6. When your transaction is complete, your Bee node should be the proud owner of some freshly minted gBZZ!	

#### 7. Check your Bee node, it should now begin deploying your checkbook contract.

*If your node has stopped polling for updates, you may now need to restart it.*

Once your Bee node is fully loaded with gBZZ, we can now watch our logs and watch as Bee automatically deploys a chequebook and makes an initial deposit.

```bash
journalctl --lines=100 --follow --unit bee
```

Once this is complete, we should start to see our Bee node connect to other nodes in the network as it begins to take part in the swarm.

```
...
Nov 20 23:52:44 sig-ln bee[55528]: time="2020-11-20T23:52:44Z" level=info msg="greeting <Welcome to the Swarm, you are Bee-ing connected!> from peer: a0c8fb41346b877b87e7aa31b109a9eef1f38f476304631f4962407b732e3db0"
...
```

:::info
The Bzzaar is brand new. If you have any issues, please [get in touch](/docs/#community) and let us know! You may also visit our legacy Goerli faucet at [https://faucet.ethswarm.org](https://faucet.ethswarm.org) and fill out the form with your Bee node's address to receive your nodes initial supply of gBZZ and GETH.
:::

If these messages are missing, check out our comprehensive guide to Bee [connectivity](/docs/installation/connectivity).

### Upgrading Bee

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

Bee sure to [backup](/docs/maintenance/backups) your clef key material and Bee data before applying updates.

## Uninstalling Bee

If you need to remove Bee, you may simply run the below commands.

### Ubuntu / Debian / Raspbian

:::danger
Uninstalling Bee will also delete Bee and Bee-clef data! Make sure you [make backups](/docs/maintenance/backups) so you don't lose your keys and data.
:::

```bash
sudo apt-get remove bee
sudo apt-get remove bee-clef
```

### Centos

:::danger
Uninstalling Bee will also delete Bee and Bee-clef data! Make sure you [make backups](/docs/maintenance/backups) so you don't lose your keys and data.
:::

```bash
sudo yum remove bee
sudo yum remove bee-clef
```


## Data Locations

### Bee-clef

Configuration files are stored in `/etc/bee-clef/`

Key material and other data is stored in `/var/lib/bee-clef/`

### Bee

Configuration files are stored in `/etc/bee/`

State, chunks and other data is stored in `/var/lib/bee/`
