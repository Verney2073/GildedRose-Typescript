import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    //Test to check that a non-exception item decreases in quality by 1 when sellIn data is above 0; 
    it('should decrease quality by 1 while sellIn > 0 ', function () {
        const gildedRose = new GildedRose([new Item('ourItem', 2, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });

    it('should decrease quality by 2 while sellIn < 0 ', function () {
        const gildedRose = new GildedRose([new Item('ourItem', 0, 10)]);
        //implies that sellIn is changed first, then Quality is checked and changed
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });

    it('aged brie gains +2 quality when sellIn is under 0', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(12);

    });

    it('Backstage pass gains +1 quality when sellIn is > 10', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);

    });

    it('Backstage pass gains +2 quality when sellIn is between 6-10', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(12);

    });

    it('Backstage pass gains +3 quality when sellIn is between 0-5', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);

    });

    it('Backstage pass quality reduces to 0 once sellIn < 0', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);

    });

    it('Sulfurus item never decreases sellIn or Quality', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
        expect(items[0].sellIn).to.equal(10);

    });

    it('aged brie check increments quality by 1 when sellIn > 0', function () {
        const newBrie = new Item('aged Brie', 10, 40);
        newBrie.AgedBrieCheck();
        expect(newBrie.quality).to.equal(41);
        expect(newBrie.sellIn).to.equal(9);

    });

    it('Backstage Pass check increments quality by 1 when sellIn > 10', function () {
        const backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 12);
        backstagePass.backstagePassesCheck();
        expect(backstagePass.quality).to.equal(13);
        expect(backstagePass.sellIn).to.equal(14);

    });

    it('Standard item quality doesnt descrease below 0', function () {
        const Rollerskates = new Item('Rollerskates', 2, 0);
        const chocolate = new Item('Chocolate', -1, 1);
        Rollerskates.standardItemCheck();
        chocolate.standardItemCheck();
        expect(Rollerskates.quality).to.equal(0);
        expect(chocolate.quality).to.equal(0);
    });

    //JT - testing when conjured mana cake is at 1 or 2 
    it.only('Conjured Mana Cake item decreases to 0 but not below', function () {
        const myManaCakeWithinSellIn = new Item('Conjured Mana Cake', 2, 1);
        const myManaCakePastSellIn = new Item('Conjured Mana Cake',0,2)
        myManaCakeWithinSellIn.conjuredManaCakeCheck();
        myManaCakePastSellIn.conjuredManaCakeCheck();

        expect(myManaCakeWithinSellIn.quality).to.equal(0);
        expect(myManaCakePastSellIn.quality).to.equal(0);

    });

    // Michael - testing when conjured mana cake is at 3 or 4

    it.only('Conjured mana cake item decreases only to 0 and quality reduction doubles', function () {
        const manaCake = new Item('Conjured Mana Cake', 3, 4);
        const manaCake2 = new Item('Conjured Mana Cake', -1, 3);
        manaCake.conjuredManaCakeCheck();
        manaCake2.conjuredManaCakeCheck();
        expect(manaCake.quality).to.equal(2);
        expect(manaCake2.quality).to.equal(0);
    });

});
