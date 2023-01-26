export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    AgedBrieCheck() {
        this.sellIn--;
        if (this.quality < 50) this.quality++;
        if (this.sellIn < 0 && this.quality < 50) this.quality++;
    }

    //Note that Sulfurus appears to never change, so we can encode this directly in the switch statement, 
    //no need for a function

    backstagePassesCheck() {
        this.sellIn--
        if (this.sellIn > 10) {
            this.quality++;
        } else if (this.sellIn > 5 && this.sellIn <= 10) {
            this.quality += 2;
        } else if (this.sellIn > 0 && this.sellIn <= 5) {
            this.quality += 3;
        } else {
            this.quality = 0;
        }
    }

    conjuredManaCakeCheck() {
        this.sellIn--
            if (this.sellIn < 0) {
                //using math.max to set to either 0 or this.quality -2, whichever is greater
                this.quality = Math.max(0, this.quality - 4)
            }
            else { this.quality =  Math.max(0, this.quality -2)}
        }
    
    // if quality is 0, do nothing
    // if quality is 1 or 2, set it to 0; 
    // if quality is 3, subtract 2 if sellIn >= 0, else subtract 3
    // if quality is 4+, subtract 2 if sellIn >= 0, else subtract 4



    standardItemCheck() {
        this.sellIn--
            if (this.sellIn < 0) {
                //using math.max to set to either 0 or this.quality -2, whichever is greater
                this.quality = Math.max(0, this.quality - 2)
            }
            else { this.quality =  Math.max(0, this.quality -1 )}
        }
    }

// this.sellIn --
// if quality is 0, do nothing 
// if quality is 1, subtract 1 
// if quality is 2 or above, => if sellin is less than 0, subtract two, else subtract 1



export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }


    updateQuality() {
        for (const item of this.items) {

            switch (item.name) {
                case "Aged Brie":
                    item.AgedBrieCheck();
                    break;
                case "Backstage passes to a TAFKAL80ETC concert":
                    item.backstagePassesCheck();
                    break;
                case "Sulfuras, Hand of Ragnaros":
                    break; 
                case "Conjured Mana Cake":
                    item.conjuredManaCakeCheck();
                    break;  
                default:
                    item.standardItemCheck();
                    break;
            }
        }
        return this.items;
    }
}

    //old code 
/*
        if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
                if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                    item.quality--;
                }
            }
            //Below describes if the item is equal to Aged Brie, Backstage Passes or Sulfurus... 
        } else {
            if (item.quality < 50) {
                item.quality++;
                if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality++;
                        }
                    }
                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality++;
                        }
                    }
                }
            }
        }
        //Whenever we run update quality, reduce sellIn by 1 except for when the item name is  Sulfuras
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn--;
        }
        // If this item is not one of the 'exception' items and its sellIn is under zero (i.e. it's expired), reduce quality by 1; Is 'quality' supposed to be 'quantity'?
        if (item.sellIn < 0) {
            if (item.name !== 'Aged Brie') {
                if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.quality > 0) {
                        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                            item.quality--;
                        }
                    }
                }
                // I think this describes the situation where items[i].name === "backstage passes..." and if sellIn < 0, it should be set to 0 i.e. by minus itself
                else {
                    item.quality = 0;
                }
                //describing the situation where it is named Aged Brie
            } else {
                if (item.quality < 50) {
                    item.quality++
                }
            }
        }
    }

    return this.items;
}
}
*/