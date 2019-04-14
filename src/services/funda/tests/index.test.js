/**
 * Funda api function tests
 * @jest-environment node
 */
import { getKoop } from '../funda.services';

describe('funda', () => {
    describe('stubbing successful response', () => {
        it('should load koop response correctly', async (done) => {
            const sampleId = '6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6';
            await getKoop(sampleId);
            done();
        });
    });
});
