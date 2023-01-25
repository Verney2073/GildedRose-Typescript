import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    //Test to check that a non-exception item decreases in quality by 1 when sellIn data is above 0; 
    it('should decrease quality by 1 while sellIn > 0 ', function() {
        const gildedRose = new GildedRose([ new Item('ourItem', 2, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });

    it('should decrease quality by 2 while sellIn < 0 ', function() {
        const gildedRose = new GildedRose([ new Item('ourItem', 0, 10) ]);
        //implies that sellIn is changed first, then Quality is checked and changed
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });

});
