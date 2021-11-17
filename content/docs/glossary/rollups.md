+++
title = "Naive rollups"
template = "doc.html"
[extra]
category = "azimuth"
+++

**Naive rollups**, also referred to as **layer 2**, is an upgrade to
[Azimuth](/docs/glossary/azimuth) implemented in 2021 that reduces Ethereum gas
costs associated with Urbit ID transactions and friction associated with using
cryptocurrency in general.

This system allows batches of Urbit ID transactions to be submitted together as
a single transaction using an urbit node known as a "roller". The PKI state
transitions resulting from these transactions are computed locally by your
[ship](/docs/glossary/ship) rather than by the [Ethereum Virtual
Machine](https://ethereum.org/en/developers/docs/evm/).

Due to the dramatically reduced cost, Tlon offers their own roller that is free
for ordinary public use. This enables new users to get started with a permanent
Urbit ID without any prior knowledge of Ethereum, cryptocurrency, or
blockchains.

### Further reading

- [The Gang Solves the Gas Crisis](/blog/rollups): A casual overview of how
naive rollups works.
- Pilot's Guide to layer 2 : insert link
- [Layer 2 Overview](/docs/azimuth/l2/layer2): where developers should go to learn
about the technical details of naive rollups.