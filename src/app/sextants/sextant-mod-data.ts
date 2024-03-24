import { SextantMod } from "./sextant-mod";


export class SextantData {
  static sextantMod: SextantMod;

  private static calculateTotal(): number {
    return this.sextantMod.sextantMods.reduce(
      (accumulator, currentValue) => accumulator + currentValue.weight,
      0
    );
  }

  static {
    SextantData.sextantMod = {
      totalWeight: 0,
      sextantMods: [
        {
          shortName: 'Boss Drop Unique',
          longName: 'Map Bosses drop 1 additional Unique Item',
          weight: 500,
        },
        {
          shortName: 'Shaper Guardian',
          longName:
            'Map Bosses deal 100% more Damage Map Bosses have 200% more Life Final Map Boss in each Map drops an additional Shaper Guardian Map (Tier 14+)',
          weight: 50,
        },
        {
          shortName: 'Elder Guardian',
          longName:
            'Map Bosses deal 100% more Damage Map Bosses have 200% more Life Final Map Boss in each Map drops an additional Elder Guardian Map (Tier 14+)',
          weight: 50,
        },
        {
          shortName: 'Conqueror Map',
          longName:
            'Map Bosses deal 100% more Damage Map Bosses have 200% more Life Final Map Boss in each Map drops an additional Conqueror Map',
          weight: 50,
        },
        {
          shortName: 'Unidentified Map',
          longName:
            'Items found in your Identified Maps are Identified 20% increased Pack Size in your Unidentified Maps',
          weight: 250,
        },
        {
          shortName: 'Fire Monsters',
          longName:
            'Players and Monsters take 12% increased Fire Damage Your Maps contain 6 additional packs of Monsters that deal Fire Damage',
          weight: 1000,
        },
        {
          shortName: 'Cold Monsters',
          longName:
            'Players and Monsters take 12% increased Cold Damage Your Maps contain 6 additional packs of Monsters that deal Cold Damage',
          weight: 1000,
        },
        {
          shortName: 'Lightning Monsters',
          longName:
            'Players and Monsters take 12% increased Lightning Damage Your Maps contain 6 additional packs of Monsters that deal Lightning Damage',
          weight: 1000,
        },
        {
          shortName: 'Physical Monsters',
          longName:
            'Players and Monsters take 12% increased Physical Damage Your Maps contain 6 additional packs of Monsters that deal Physical Damage',
          weight: 1000,
        },
        {
          shortName: 'Chaos Monsters',
          longName:
            'Players and Monsters take 12% increased Chaos Damage Your Maps contain 6 additional packs of Monsters that deal Chaos Damage',
          weight: 1000,
        },
        {
          shortName: 'Unique Monsters Drop Corrupted',
          longName: 'Unique Monsters drop Corrupted Items',
          weight: 250,
        },
        {
          shortName: 'Map 20% Quality',
          longName:
            'Map Bosses deal 20% increased Damage Your Maps have 20% Quality',
          weight: 500,
        },
        {
          shortName: 'Map Quality to Rarity',
          longName:
            'Map Bosses have 20% increased Life Quality bonus of your Maps also applies to Rarity of Items found',
          weight: 500,
        },
        {
          shortName: 'Alluring',
          longName: 'Your Maps are Alluring',
          weight: 10,
        },
        {
          shortName: 'Einhar',
          longName: 'Your Maps contain Einhar',
          weight: 125,
        },
        {
          shortName: 'Alva',
          longName: 'Your Maps contain Alva',
          weight: 125,
        },
        {
          shortName: 'Niko',
          longName: 'Your Maps contain Niko',
          weight: 125,
        },
        {
          shortName: 'Jun',
          longName: 'Your Maps contain Jun',
          weight: 125,
        },
        {
          shortName: 'Strongbox Corrupted',
          longName:
            'Your Maps contain 2 additional Strongboxes Strongboxes in your Maps are Corrupted Strongboxes in your Maps are at least Rare',
          weight: 500,
        },
        {
          shortName: 'Boss Drop Vaal',
          longName:
            'Map Bosses of your Corrupted Maps drop 2 additional Vaal Items Items found in your Maps have 5% chance to be Corrupted',
          weight: 500,
        },
        {
          shortName: 'Magic Pack Size',
          longName: '25% increased Magic Pack Size',
          weight: 500,
        },
        {
          shortName: 'Rogue Exiles',
          longName:
            'Rogue Exiles deal 20% increased Damage Rogue Exiles drop 2 additional Jewels Rogue Exiles in your Maps have 20% increased Life Your Maps are inhabited by 2 additional Rogue Exiles',
          weight: 500,
        },
        {
          shortName: 'Rare Map Rare Packs',
          longName:
            'Your Magic Maps contain 4 additional packs of Magic Monsters Your Normal Maps contain 4 additional packs of Normal Monsters Your Rare Maps contain 4 additional Rare Monster packs',
          weight: 1000,
        },
        {
          shortName: 'Reflected',
          longName:
            'Players and their Minions cannot take Reflected Damage Your Maps contain 4 additional Packs with Mirrored Rare Monsters',
          weight: 1000,
        },
        {
          //
          // 5 total of the same name in poedb, 4 extra compared to ours
          //
          shortName: 'Mysterious Barrels',
          longName:
            'Your Maps contain 25 additional Clusters of Mysterious Barrels',
          weight: 250,
        },
        {
          shortName: 'Strongbox Enraged',
          longName:
            'Strongbox Monsters are Enraged Strongbox Monsters have 500% increased Item Quantity Your Maps contain an additional Strongbox',
          weight: 250,
        },
        {
          shortName: 'Hunted Traitors',
          longName: 'Your Maps contain hunted traitors',
          weight: 250,
        },
        {
          shortName: 'Convert Monsters',
          longName:
            'Your Maps contain 6 additional packs of Monsters that Convert when Killed',
          weight: 1000,
        },
        {
          shortName: 'Flasks Instant',
          longName:
            "Player's Life and Mana Recovery from Flasks are instant Your Maps contain 6 additional packs of Monsters that Heal",
          weight: 1000,
        },
        {
          shortName: 'Bodyguards',
          longName:
            'Map Bosses are accompanied by Bodyguards An additional Map drops on Completing your Maps',
          weight: 250,
        },
        {
          shortName: 'Breach',
          longName:
            'Your Maps can contain Breaches Your Maps contain an additional Breach',
          weight: 250,
        },
        {
          shortName: 'Xoph',
          longName:
            'Breaches in your Maps belong to Xoph Breaches in your Maps contain 3 additional Clasped Hands',
          weight: 50,
        },
        {
          shortName: 'Tul',
          longName:
            'Breaches in your Maps belong to Tul Breaches in your Maps contain 3 additional Clasped Hands',
          weight: 50,
        },
        {
          shortName: 'Esh',
          longName:
            'Breaches in your Maps belong to Esh Breaches in your Maps contain 3 additional Clasped Hands',
          weight: 50,
        },
        {
          shortName: 'Uul-Netol',
          longName:
            'Breaches in your Maps belong to Uul-Netol Breaches in your Maps contain 3 additional Clasped Hands',
          weight: 50,
        },
        {
          shortName: 'Chayula',
          longName:
            'Breaches in your Maps belong to Chayula Breaches in your Maps contain 3 additional Clasped Hands',
          weight: 50,
        },
        {
          shortName: 'Abyss',
          longName:
            'Your Maps contain an additional Abyss Your Maps can contain Abysses',
          weight: 250,
        },
        {
          shortName: 'Gloom Shrine',
          longName:
            'Your Maps contain an additional Gloom Shrine 50% increased Duration of Shrine Effects on Players in your Maps',
          weight: 1000,
        },
        {
          shortName: 'Resonating Shrine',
          longName:
            'Your Maps contain an additional Resonating Shrine 50% increased Duration of Shrine Effects on Players in your Maps',
          weight: 1000,
        },
        {
          shortName: 'Essence',
          longName:
            'Monsters Imprisoned by Essences have a 50% chance to contain a Remnant of Corruption Your Maps contain an additional Essence',
          weight: 500,
        },
        {
          shortName: '8 Modifiers',
          longName: 'Maps found in your Maps are Corrupted with 8 Modifiers',
          weight: 50,
        },
        {
          shortName: 'Copy of Beasts',
          longName: 'Create a copy of Beasts Captured in your Maps',
          weight: 50,
        },
        {
          shortName: 'Runic Monster Markers',
          longName:
            'Your Maps contain 100% increased number of Runic Monster Markers',
          weight: 50,
        },
        {
          shortName: 'Splinters Emblems Duplicate',
          longName:
            'Legion Monsters in your Maps have 100% more Life Splinters and Emblems dropped by Legion Monsters in your Maps are duplicated',
          weight: 50,
        },
        // {
        //   shortName: 'Catalysts Duplicate',
        //   longName:
        //     'Catalysts dropped by Metamorphs in your Maps are Duplicated Metamorphs in your Maps have 100% more Life',
        //   weight: 50,
        // },
        {
          shortName: 'Oils Tier',
          longName:
            'Oils found in your Maps are 1 tier higher Cost of Building and Upgrading Blight Towers in your Maps is doubled',
          weight: 50,
        },
        {
          shortName: 'Syndicate Intelligence',
          longName:
            '100% increased Intelligence gained from Immortal Syndicate targets encountered in your Maps',
          weight: 50,
        },
        {
          shortName: 'Delirium Reward',
          longName: 'Delirium Reward Bars fill 100% faster in your Maps',
          weight: 50,
        },
        {
          shortName: 'Blue Plants',
          longName:
            'Lifeforce dropped by Harvest Monsters in your Maps is Duplicated Harvest Monsters in your Maps have 100% more Life Harvests in your Maps contain at least one Crop of Blue Plants',
          weight: 50,
        },
        {
          shortName: 'Purple Plants',
          longName:
            'Lifeforce dropped by Harvest Monsters in your Maps is Duplicated Harvest Monsters in your Maps have 100% more Life Harvests in your Maps contain at least one Crop of Purple Plants',
          weight: 50,
        },
        {
          shortName: 'Yellow Plants',
          longName:
            'Lifeforce dropped by Harvest Monsters in your Maps is Duplicated Harvest Monsters in your Maps have 100% more Life Harvests in your Maps contain at least one Crop of Yellow Plants',
          weight: 50,
        },
        {
          shortName: 'Contracts Implicit',
          longName:
            'Non-Unique Heist Contracts found in your Maps have an additional Implicit Modifier',
          weight: 50,
        },
        {
          shortName: 'Ritual Rerolling',
          longName:
            'Rerolling Favours at Ritual Altars in your Maps has no Cost the first 1 time',
          weight: 50,
        },
        {
          shortName: 'Mysterious Harbinger',
          longName:
            'Map Bosses are accompanied by a mysterious Harbinger Map Bosses drop additional Currency Shards Harbingers in your Maps drop additional Currency Shards',
          weight: 250,
        },
        {
          shortName: 'Vaal Soul on Kill',
          longName:
            'Players gain an additional Vaal Soul on Kill Your Maps contain 6 additional packs of Corrupted Vaal Monsters',
          weight: 500,
        },
        {
          shortName: 'Vaal Monsters Items Corrupted',
          longName:
            'Your Maps contain 6 additional packs of Corrupted Vaal Monsters Items dropped by Corrupted Vaal Monsters in your Maps have 25% chance to be Corrupted',
          weight: 250,
        },
        {
          shortName: 'Beyond',
          longName:
            'Slaying Enemies close together can attract monsters from Beyond this realm 25% increased Beyond Demon Pack Size in your Maps',
          weight: 250,
        },
        {
          shortName: 'Rusted Scarab',
          longName:
            'The First 3 Possessed Monsters drop an additional Rusted Scarab Your Maps contain an additional Tormented Betrayer',
          weight: 520,
        },
        {
          shortName: 'Polished Scarab',
          longName:
            'The First 3 Possessed Monsters drop an additional Polished Scarab Your Maps contain an additional Tormented Betrayer',
          weight: 175,
        },
        {
          shortName: 'Gilded Scarab',
          longName:
            'The First 3 Possessed Monsters drop an additional Gilded Scarab Your Maps contain an additional Tormented Betrayer',
          weight: 60,
        },
        {
          shortName: 'Tormented Heretic',
          longName:
            'The First 3 Possessed Monsters drop an additional Map Your Maps contain an additional Tormented Heretic',
          weight: 250,
        },
        {
          shortName: 'Tormented Graverobber',
          longName:
            'The First 3 Possessed Monsters drop an additional Unique Item Your Maps contain an additional Tormented Graverobber',
          weight: 250,
        },
        {
          shortName: 'Mortal/Sacrifice Fragment',
          longName:
            'Your Maps contain 6 additional packs of Corrupted Vaal Monsters Your Maps have a 50% chance to contain Gifts of the Red Queen per Mortal Fragment used Your Maps have a 50% chance to contain Gifts of the Sacrificed per Sacrifice Fragment used',
          weight: 250,
        },
        {
          shortName: 'Soul Gain Prevention',
          longName:
            "Players' Vaal Skills do not apply Soul Gain Prevention Your Maps contain 6 additional packs of Corrupted Vaal Monsters",
          weight: 250,
        },
        {
          shortName: 'Legion',
          longName: 'Your Maps contain an additional Legion Encounter',
          weight: 250,
        },
        // {
        //   shortName: 'Metamorph',
        //   longName: 'Area contains Metamorph Monsters',
        //   weight: 250,
        // },
        {
          shortName: 'Blight',
          longName: 'Your Maps contain a Blight Encounter',
          weight: 250,
        },
        {
          shortName: 'Mirror of Delirium',
          longName: 'Your Maps contain a Mirror of Delirium',
          weight: 100,
        },
        {
          shortName: 'Sacred Grove',
          longName: 'Your Maps contain The Sacred Grove',
          weight: 100,
        },
        {
          shortName: "Smuggler's Cache",
          longName: "Area contains a Smuggler's Cache",
          weight: 250,
        },
        {
          shortName: 'Ritual Altars',
          longName: 'Your Maps contain Ritual Altars',
          weight: 100,
        },
        {
          shortName: 'Ultimatum',
          longName: 'Your Maps contain an Ultimatum Encounter',
          weight: 100,
        },
      ],
    };
    SextantData.sextantMod.totalWeight = SextantData.calculateTotal();
  }
}
