import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../../utils/query-mock";

describe('Query for Obtained from', () => {
    /**
     * https://bdocodex.com/us/item/10103/
     * Axion Shield
     */
    describe('10103', () => {
        const expected: Queries.Result<Queries.Entities.Item> = require('./json/10103.json');
        let result: Queries.Result<Queries.Entities.Item>;

        before(async () => {
            result = await QueryMock('10103', Queries.Types.OBTAINED_FROM);
        });

        it('#type', () => {
            expect(result.type).to.equal(expected.type);
        });

        it('#url', () => {
            expect(result.url).to.equal(expected.url);
        });

        it('#data', () => {
            expect(result.data).to.containSubset(expected.data);
        });
    });
});