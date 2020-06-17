import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: enhancement_stats', () => {
    /**
     * https://bdocodex.com/us/item/11629/
     * Tungrad Necklace
     */
    describe('11629', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = await ScrapeMock('11629',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#enhancement_stats[0]', () => {
            expect(result.enhancement_stats[0]).to.deep.equal({
                stats: {
                    damage: 10,
                    defense: 0,
                    accuracy: 4,
                    evasion: 0,
                    dmg_reduction: 0,
                },
                success_rate: 25.00,
                durability: 100,
                cron_value_next: 62,
                cron_value_total: 62,
                enchant_item_counter: 1,
                pe_item_counter: 0,
                durability_loss_on_failure: 10,
                pe_dura_dec: 0,
                required_enhancement_item: {
                    id: '11629',
                    icon: 'https://bdocodex.com/new_icon/06_pc_equipitem/00_common/15_necklace/00011629.png',
                    name: 'Tungrad Necklace',
                },
                enhancement_effects: [],
            });
        });

        it('#enhancement_stats[5]', () => {
            expect(result.enhancement_stats[5]).to.deep.equal({
                stats: {
                    damage: 35,
                    defense: 0,
                    accuracy: 24,
                    evasion: 0,
                    dmg_reduction: 0,
                },
                success_rate: 0,
                durability: 100,
                cron_value_next: 0,
                cron_value_total: 9872,
                enhancement_effects: [],
            });
        });

        it('#enhancement_stats.length', () => {
            expect(result.enhancement_stats.length).to.equal(6);
        });
    });

    /**
     * https://bdocodex.com/us/item/13210/
     * Kzarka Shortsword
     */
    describe('13210', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = await ScrapeMock('13210',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#enhancement_stats[1]', () => {
            expect(result.enhancement_stats[1]).to.deep.equal({
                stats: {
                    damage: [22, 26],
                    defense: 0,
                    accuracy: 20,
                    evasion: 0,
                    dmg_reduction: 0,
                },
                success_rate: 100.00,
                durability: 100,
                cron_value_next: 0,
                cron_value_total: 0,
                enchant_item_counter: 1,
                pe_item_counter: 0,
                durability_loss_on_failure: 5,
                pe_dura_dec: 0,
                required_enhancement_item: {
                    id: '16001',
                    icon: 'https://bdocodex.com/new_icon/03_etc/11_enchant_material/00000008.png',
                    name: 'Black Stone (Weapon)',
                },
                enhancement_effects: [
                    'Extra AP against monsters up (enhancement level PRI or up)',
                    'Extra Damage to All Species Up',
                    'All AP Up',
                    'All Accuracy Up'
                ],
            });
        });

        it('#enhancement_stats.length', () => {
            expect(result.enhancement_stats.length).to.deep.equal(21);
        });
    });
});