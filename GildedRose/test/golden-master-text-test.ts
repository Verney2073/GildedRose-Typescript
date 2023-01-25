import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here

//6 items in total 
const myAgedBrie = new Item("Aged Brie",20,23);
const myBackstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert',1,12) 
const mySulfuras = new Item("Sulfuras, Hand of Ragnaros", 100, 80)
const myChocolate = new Item("Chocolate",12,4)
const myRollerskates = new Item("Rollerskates",7,50);
const myDishwasher = new Item("Dishwasher",400,48);

const ourItems = [myAgedBrie,myBackstagePasses,mySulfuras,myChocolate,myRollerskates,myDishwasher]; 

const ourGildedRose = new GildedRose(ourItems);

console.log("First Run: ")
console.log(ourGildedRose.updateQuality());
console.log("Second Run: ")
console.log(ourGildedRose.updateQuality());
console.log("Third Run:")
console.log(ourGildedRose.updateQuality());



//create a list of things of Class Item 
// Run the updateQuality() method a couple of times
//Console.log results 
// Make a note of results
//After refactoring, compare with old results 