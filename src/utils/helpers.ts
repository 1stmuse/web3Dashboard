import nft1 from "../assets/images/nft1.png"
import nft2 from "../assets/images/nft2.png"
import nft3 from "../assets/images/nft3.png"
import nft4 from "../assets/images/nft4.png"
import nft5 from "../assets/images/nft5.png"
import nft6 from "../assets/images/nft6.png"
import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png"
import Eth from "../assets/icons/ethereum.svg"
import Sol from "../assets/icons/solana.svg"

import Punk1 from "../assets/images/punk1.png"

export type nfts = {
    author: string,
    name: string,
    bid: number,
    ending: string,
    profileImg: string,
    ntfs1: string,
    nfts2: string,
    network?: string
}

export const NFTs: nfts[] = [
    {
        author: "MiSchowalki.eth",
        name: "Moon bird",
        bid: 0.4,
        ending: "10h 30min",
        profileImg: person1,
        nfts2: nft3,
        ntfs1: nft1,
        network: Eth
    },
    {
        author: "ArtBlomin.sol",
        name: "Total Strangers",
        bid: 3.1,
        ending: "10h 30min",
        profileImg: person1,
        nfts2: nft4,
        ntfs1: nft2,
        network: Sol
    },
    {
        author: "John Duckket",
        name: "Dirty Flies",
        bid: 2.4,
        ending: "2h 30min",
        profileImg: person2,
        nfts2: nft4,
        ntfs1: nft6,
        network: Sol
    },
    {
        author: "Ochuko Muiz",
        name: "City Boys",
        bid: 0.31,
        ending: "10h 30min 13sec",
        profileImg: person2,
        nfts2: nft5,
        ntfs1: nft2,
        network: Sol
    },
    {
        author: "Muse Jakande",
        name: "Moon bird",
        bid: 0.4,
        ending: "10h 30min",
        profileImg: person2,
        nfts2: nft3,
        ntfs1: nft1,
        network: Eth
    },
    {
        author: "James Johnson",
        name: "Perfect Enemies",
        bid: 3.1,
        ending: "10h 30min",
        profileImg: person1,
        nfts2: nft4,
        ntfs1: nft6,
        network: Sol
    },
]

export type collection = {
    name: string,
    username: string,
    volume: string,
    percent: string,
    owners: string,
    items: string,
    profileImg: string,
}

export const collections: collection[] = [
    {
        name: "Cool Cyber Apes",
        username: "@cybasseman",
        volume: "0.24E",
        percent: "25",
        owners: "2.2K",
        items: "12K",
        profileImg: Punk1
    },
    {
        name: "Cyrmson Stone",
        username: "@championEth",
        volume: "2E",
        percent: "10",
        owners: "0.2K",
        items: "1K",
        profileImg: Punk1

    },
    {
        name: "ScaryMonger",
        username: "@ModaneHK",
        volume: "0.24E",
        percent: "25",
        owners: "2.2K",
        items: "12K",
        profileImg: Punk1
    },
    {
        name: "MoonBirds",
        username: "@SparkHo",
        volume: "2E",
        percent: "10",
        owners: "0.2K",
        items: "1K",
        profileImg: Punk1

    },
    {
        name: "Cool Cyber Apes",
        username: "@cybasseman",
        volume: "0.24E",
        percent: "25",
        owners: "2.2K",
        items: "12K",
        profileImg: Punk1
    },
    {
        name: "Cyrmson Stone",
        username: "@championEth",
        volume: "2E",
        percent: "10",
        owners: "0.2K",
        items: "1K",
        profileImg: Punk1

    },
    {
        name: "ScaryMonger",
        username: "@ModaneHK",
        volume: "0.24E",
        percent: "25",
        owners: "2.2K",
        items: "12K",
        profileImg: Punk1
    },
    {
        name: "MoonBirds",
        username: "@SparkHo",
        volume: "2E",
        percent: "10",
        owners: "0.2K",
        items: "1K",
        profileImg: Punk1

    },
    {
        name: "Cool Cyber Apes",
        username: "@cybasseman",
        volume: "0.24E",
        percent: "25",
        owners: "2.2K",
        items: "12K",
        profileImg: Punk1
    },
    {
        name: "Cyrmson Stone",
        username: "@championEth",
        volume: "2E",
        percent: "10",
        owners: "0.2K",
        items: "1K",
        profileImg: Punk1

    },
    {
        name: "ScaryMonger",
        username: "@ModaneHK",
        volume: "0.24E",
        percent: "25",
        owners: "2.2K",
        items: "12K",
        profileImg: Punk1
    },
    {
        name: "MoonBirds",
        username: "@SparkHo",
        volume: "2E",
        percent: "10",
        owners: "0.2K",
        items: "1K",
        profileImg: Punk1

    },
]