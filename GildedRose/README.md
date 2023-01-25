

### Items included: 

*These items seem to be exceptions to the normal rules*

Aged Brie 
Backstage passes to a TAFKAL80ETC concert 
Sulfuras, Hand of Ragnaros


### Update Quality Method



### For our GOlden Master Test -

let's create 6 items, the 3 mentioned plus 3 more items with very different Quality and sellIn values to each other



### Possible Refactoring We can Do 



Changing '==' to '===' 

Using ++ and -- where applicable instead of 'x = x-1' syntax 

Assign all the this.item[i].varName to variables so the code looks neater

Combine the three named items into an 'exclusions' function (BUT check they are indeed always exclusions somewhere else)

Remove Sulfuras from all checks - I *think* that neither quality nor sellIn ever changes (it says it 'never needs to be sold' in the instructions but doesn't confirm that sellIn doesn't still change) 

Explore using forEach method rather than a for loop

catch expections at start of a function and handle separately


### Results of golden master tests

0th run - 
[
  Item { name: 'Aged Brie', sellIn: 19, quality: 24 },
  Item {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 0,
    quality: 15
  },
  Item { name: 'Sulfuras, Hand of Ragnaros', sellIn: 100, quality: 80 },
  Item { name: 'Chocolate', sellIn: 11, quality: 3 },
  Item { name: 'Rollerskates', sellIn: 6, quality: 49 },
  Item { name: 'Dishwasher', sellIn: 399, quality: 47 }

  --
  First Run: 
[
  Item { name: 'Aged Brie', sellIn: 19, quality: 24 },
  Item {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 0,
    quality: 15
  },
  Item { name: 'Sulfuras, Hand of Ragnaros', sellIn: 100, quality: 80 },
  Item { name: 'Chocolate', sellIn: 11, quality: 3 },
  Item { name: 'Rollerskates', sellIn: 6, quality: 49 },
  Item { name: 'Dishwasher', sellIn: 399, quality: 47 }
]
Second Run:
[
  Item { name: 'Aged Brie', sellIn: 18, quality: 25 },
  Item {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: -1,
    quality: 0
  },
  Item { name: 'Sulfuras, Hand of Ragnaros', sellIn: 100, quality: 80 },
  Item { name: 'Chocolate', sellIn: 10, quality: 2 },
  Item { name: 'Rollerskates', sellIn: 5, quality: 48 },
  Item { name: 'Dishwasher', sellIn: 398, quality: 46 }
]
Third Run:
[
  Item { name: 'Aged Brie', sellIn: 17, quality: 26 },
  Item {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: -2,
    quality: 0
  },
  Item { name: 'Sulfuras, Hand of Ragnaros', sellIn: 100, quality: 80 },
  Item { name: 'Chocolate', sellIn: 9, quality: 1 },
  Item { name: 'Rollerskates', sellIn: 4, quality: 47 },
  Item { name: 'Dishwasher', sellIn: 397, quality: 45 }