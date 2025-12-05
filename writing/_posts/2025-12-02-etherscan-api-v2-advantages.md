---
title: "Etherscan's API V2: A Pragmatic Step for Sustainable Blockchain Infra"
date: 2025-12-05
author: "Elem Oghenekaro"
tags: ["Web3", "APIs", "Infrastructure", "Etherscan", "Blockchain", "Developer Tools"]
excerpt: "Exploring Etherscan's API tier adjustments and the changing landscape of blockchain data tools."
banner:
  path: assets/images/free_apis_banner.jpeg
  alt: "Etherscan API V2 Architecture Diagram"
---

# Etherscan's API V2: A Pragmatic Step for Sustainable Blockchain Infra

I was intrigued (and a bit saddened) to see the recent ripple effects from Etherscan's announcement on their free API tier. 

For those catching up: exactly two weeks ago, November 22, 2025, Etherscan reduced coverage for the free tier by ["roughly 10%"](https://info.etherscan.com/whats-changing-in-the-free-api-tier-coverage-and-why/) to sustainably support demand for its API.

> tldr; the old free tier is now a Lite plan (at 25% of the prior entry-level price).

Affected chains (i.e. the 10% reduction) like Base, Optimism, and BNB Smart Chain (BSC) now require the new Lite plan for full access. We've seen this pattern before - the "Lite plan" often becomes the new "Free tier" to meet economic realities.

Ironically, I had touched on this [topic](https://www.linkedin.com/feed/update/urn:li:activity:7402779843509215232/) two months ago:


![LinkedIn Post Discussion](/assets/images/linkedin_post.png)

So no, this isn't a "rug pull," it's a business reality check in a multichain ecosystem that's exploding with TPS and volume. Etherscan has subsidized free access for over a decade, powering countless dApps, wallets, and analytics tools without which we'd be scrambling. Kudos to the team for transparency in their blog post, explaining how surging demands (faster blocks, higher tx volumes) made full free coverage unsustainable. 

This isn't new. Five days prior, DappRadar shut down after seven years due to unsustainable costs. The era of infinite free subsidies is over. [sadly!].

![DappRadar Announcement](/assets/images/dappradar_annoucement.png)

However, the conversation shouldn't stop at pricing...

While business models are being adjusted, improvements are being made. Much attention has focused on the API pricing, but Etherscan's rollout of **API V2** represents a significant technical advancement that deserves equal attention. Having recently migrated my DeFi tools to V2, I've discovered substantial benefits that go beyond the surface-level changes.

> Every Dev tool should have a unified multichain architecture


**The Game-Changer:** Single API key for 60+ blockchain networks.

```javascript
// V1 - Fragmented approach
const v1Endpoints = {
  ethereum: 'https://api.etherscan.io/api',
  arbitrum: 'https://api.arbiscan.io/api',
  base: 'https://api.basescan.org/api',
  // ...separate for each chain
}

// V2 - Unified approach
const v2BaseUrl = 'https://api.etherscan.io/v2/api'
const getTransaction = (txHash, chainId) => 
  `${v2BaseUrl}?chainid=${chainId}&action=tx&txhash=${txHash}`
```


This is something I've been waiting for, single authentication point across all networks, it's a game-changer for multi-chain applications. And its future-proof for new chain integrations, the kind of architecture that will be needed as the multichain space matures.

While researching the Balancer V2 and Yearn exploit last week, I simulated them using the V2 API and it was a breeze.

```python
# Before V2 - Complex multi-chain management
class MultiChainAnalyzerV1:
    def __init__(self):
        self.chains = {
            'ethereum': {'url': '...', 'api_key': 'key1'},
            'arbitrum': {'url': '...', 'api_key': 'key2'},
            'base': {'url': '...', 'api_key': 'key3'},
            # ...and so on
        }
    
    def analyze_exploit(self, chain, tx_hash):
        config = self.chains[chain]
        # Different implementation for each chain

# After V2 - Streamlined approach
class MultiChainAnalyzerV2:
    def __init__(self):
        self.base_url = 'https://api.etherscan.io/v2/api'
        self.api_key = 'single_key_for_all_chains'
    
    def analyze_exploit(self, chain_id, tx_hash):
        # Same implementation for all chains
        return self._make_request(chain_id, 'tx', {'txhash': tx_hash})
```

That said, the timing, right amid Devconnect chaos, stung. I think that can be better and with more notice.

And yes, alternatives exist: Alchemy, Infura, Blockscout, Routescan. But Etherscan's has been the go-to for years, its UX and reliability set a high bar that's tough to match without their scale.

From a professional lens, this is Web3 maturing. Explorers aren't pure public goods—though perhaps they should be?

Finally, I must say, the adjustments spotlight innovation opportunities:
- **Open-source repos** for verified contract code
- **Community-funded indexers** and data providers
- **ICP-style on-protocol queries** to reduce RPC reliance
- **Decentralized alternatives** that need to gain traction.

>Shoutout to Etherscan for keeping verified contracts free across all tiers and chains. 

This adjustment foreshadows something else: the eventuality of protocol fee switches and the impact they will have on the ecosystem. As crypto matures and enters the institutional era, we also enter the revenue era. Hopefully, all of these growth will spur more innovation and competition. 

I'm already excited about alternatives gaining traction. Recent favorite is [Helius' Orb](https://orb.helius.dev/) in addition to [Solscan](https://solscan.io/) (acquired by Etherscan) and [Solanafm](https://solana.fm/), and [Routescan](https://routescan.io/) for multichain EVM.

The more options, the merrier, competition drives innovation.

The Web3 ecosystem is growing up, and with maturity comes both challenges and opportunities. Etherscan's V2 API represents a pragmatic step forward and we will see more of this in the future. 