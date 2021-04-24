---
title: Upload and Download Files
id: upload-and-download
---


ENCRYPT ENCRYPT


## Download

Once your file is uploaded into Swarm, it can be retrieved with a simple HTTP GET request.

Substitute the *hash* in the last part of the url to be the reference to your own data.

```bash
curl -OJ http://localhost:1633/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4
```

You may even simply navigate to the URL in your browser:

[http://localhost:1633/files/042d4fe...2291dd4](http://localhost:1633/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4)

## Public Gateways

To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!

[https://gateway.ethswarm.org/files/042d4fe...2291dd4](https://gateway.ethswarm.org/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4)

<!-- If you are unable to download your file from a different Bee node, you may be experiencing connection issues, see [troubleshooting connectivity](/docs/troubleshooting/connectivitiy) for assistance. -->
