import * as chai from 'chai';
import 'mocha';
import * as R from 'ramda';

import { CryptoCompareOHLCVSource } from '../../../src/data_sources/ohlcv_external/crypto_compare';
import { chaiSetup } from '../../utils/chai_setup';

chaiSetup.configure();
const expect = chai.expect;

// tslint:disable:custom-no-magic-numbers
describe('ohlcv_external data source (Crypto Compare)', () => {
    describe('generateBackfillIntervals', () => {
        it('generates pairs with intervals to query', () => {
            const source = new CryptoCompareOHLCVSource();
            const pair = {
                fromSymbol: 'ETH',
                toSymbol: 'ZRX',
                latest: new Date().getTime() - source.interval * 2,
            };

            const expected = [
                pair,
                R.merge(pair, { latest: pair.latest + source.interval }),
                R.merge(pair, { latest: pair.latest + source.interval * 2 }),
            ];

            const actual = source.generateBackfillIntervals(pair);
            expect(actual).deep.equal(expected);
        });

        it('returns single pair if no backfill is needed', () => {
            const source = new CryptoCompareOHLCVSource();
            const pair = {
                fromSymbol: 'ETH',
                toSymbol: 'ZRX',
                latest: new Date().getTime() - source.interval + 5000,
            };

            const expected = [pair];

            const actual = source.generateBackfillIntervals(pair);
            expect(actual).deep.equal(expected);
        });
    });
});
