import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: type', () => {
    /**
     * https://bdocodex.com/us/item/9601/
     * Balenos Meal
     */
    describe('9601', () => {
        let result: Scrapers.Result;

        before(async () => {
            result = await ScrapeMock('9601',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#type', () => {
            expect(result.type).to.equal('consumable');
        });
    });

    /**
     * https://bdocodex.com/us/item/9746/
     * Abyssal Brass Ingot
     */
    describe('9746', () => {
        let result: Scrapers.Result;

        before(async () => {
            result = await ScrapeMock('9746',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#type', () => {
            expect(result.type).to.equal('crafting_material');
        });
    });

    /**
     * https://bdocodex.com/us/item/10817/
     * Zereth Helmet
     */
    describe('10817', () => {
        let result: Scrapers.Result;

        before(async () => {
            result = await ScrapeMock('10817',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#type', () => {
            expect(result.type).to.equal('equipment');
        });
    });

    /**
     * https://bdocodex.com/us/item/10991/
     * Beia's Black Magic Gloves
     */
    describe('10991', () => {
        let result: Scrapers.Result;

        before(async () => {
            result = await ScrapeMock('10991',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#type', () => {
            expect(result.type).to.equal('equipment');
        });
    });

    /**
     * https://bdocodex.com/us/item/11016/
     * Muskan's Shoes
     */
    describe('11016', () => {
        let result: Scrapers.Result;

        before(async () => {
            result = await ScrapeMock('11016',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#type', () => {
            expect(result.type).to.equal('equipment');
        });
    });
});