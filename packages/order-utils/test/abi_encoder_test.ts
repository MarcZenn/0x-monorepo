import * as chai from 'chai';
import 'mocha';
import ethUtil = require('ethereumjs-util');

var _ = require('lodash');

// import { assert } from '@0x/order-utils/src/assert';

import { chaiSetup } from './utils/chai_setup';

import { MethodAbi, DataItem } from 'ethereum-types';

import { BigNumber } from '@0x/utils';
import { assert } from '@0x/order-utils/src/assert';
import * as AbiEncoder from './abi_encoder';
import * as AbiSamples from './abi_samples';

chaiSetup.configure();
const expect = chai.expect;

describe.only('ABI Encoder', () => {
    describe.only('Just a Greg, Eh', () => {


        it('Crazy ABI', async () => {
            const method = new AbiEncoder.Method(AbiSamples.crazyAbi);
            console.log(method.getSignature());

            const args = [[new BigNumber(127), new BigNumber(14), new BigNumber(54)],
            [
                'the little piping piper piped a piping pipper papper',
                'the kid knows how to write poems, what can I say -- I guess theres a lot I could say to try to fill this line with a lot of text.',
            ], // l
            [
                '0x38745637834987324827439287423897238947239847',
                '0x7283472398237423984723984729847248927498748974284728947239487498749847874329423743492347329847239842374892374892374892347238947289478947489374289472894738942749823743298742389472389473289472389437249823749823742893472398',
                '0x283473298473248923749238742398742398472894729843278942374982374892374892743982',
            ], // m
            [
                [
                    'some string',
                    'some another string',
                    'there are just too many stringsup in',
                    'here',
                    'yall ghonna make me lose my mind',
                ],
                [
                    'the little piping piper piped a piping pipper papper',
                    'the kid knows how to write poems, what can I say -- I guess theres a lot I could say to try to fill this line with a lot of text.',
                ],
                [],
            ], // n
            [
                new BigNumber(4037824789),
                'the kid knows how to write poems, what can I say -- I guess theres a lot I could say to try to fill this line with a lot of text.',
            ], // o
            [
                new BigNumber('239048320948320948230', 10),
                'akdhjasjkdhasjkldshdjahdkjsahdajksdhsajkdhsajkdhadjkashdjksadhajkdhsajkdhsadjk',
                /*[
                    [
                        '23432423342',
                        'skdjfhdsjkfdhsfkjsdhfjkdshfdsjkfhsdjkfhsdjkfhdsjkfhdsjfhsdfjdshjkfsdhf',
                        'sdfsdfdfdffsdf',
                    ],
                    [],
                    [],
                    ['23ehsdjkfhsiufhwfuefhesfhauhesufheuifhsefushfsufehfeuif'],
                ],*/
                '0xf74848484848484848484848484848484848483847576879809433994458585848932091',
                '0xe41d2489571d322189246dafa5ebde1f4699f498',
            ], // p
                /*[
                    [
                        new BigNumber('23904848320948230', 10),
                        'akdhjasshdjahdkjsahdajksdhsajkdhsajkdhadjkashdjksadhajkdhsajkdhsadjk',
                        [
                            [
                                '234324342',
                                'skdjfhdsjkfdhsfkjsjkfhsdjkfhsdjkfhdsjkfhdsjfhsdfjdshjkfsdhf',
                                'sdffdfdffsdf',
                            ],
                            [],
                            [],
                            ['23ehsdjkfhsiufhwfuefsufheuifhsefushfsufehfeuif'],
                        ],
                        '0xf7484848484848484848484848484876879809433994458585848932091',
                        '0xe41d2489571d322189246dafa6ebde1f4699f498',
                    ],
                    [
                        new BigNumber('23904832094832030', 10),
                        'akdhjasjkdhasjkldshdjahdkjsahdajksdhsajkdhsajkdhadjkashdkdhsajkdhsadjk',
                        [
                            [
                                '2343342',
                                'skdjfhdsjkfdhsfkjsdhfjkdshfdsjkfhsdjkfhsdjkfhdssjfhsdfjdshjkfsdhf',
                                'sdfsdfdfdffsf',
                            ],
                            [],
                            [],
                            ['jkfhsiufhwfuefhesfhauhesufhefeuif'],
                        ],
                        '0xf7484848484848484848484848484848484848384757687980943091',
                        '0xe41d2489571d322189246dafa5ebde1f469af498',
                    ],
                    [],
                    [],
                ],*/
            ];

            const calldata = method.encode(args);
            console.log(calldata);
            console.log('*'.repeat(40));
            console.log(JSON.stringify(args));
            console.log(method.getSignature());

            /*
            const expectedCalldata =
                '0x30e1f844000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000003600000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000042000000000000000000000000000000000000000000000000000000000000008600000000000000000000000000000000000000000000000000000000000000960000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000034746865206c6974746c6520706970696e67207069706572207069706564206120706970696e6720706970706572207061707065720000000000000000000000000000000000000000000000000000000000000000000000000000000000000081746865206b6964206b6e6f777320686f7720746f20777269746520706f656d732c20776861742063616e204920736179202d2d2049206775657373207468657265732061206c6f74204920636f756c642073617920746f2074727920746f2066696c6c2074686973206c696e6520776974682061206c6f74206f6620746578742e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000163874563783498732482743928742389723894723984700000000000000000000000000000000000000000000000000000000000000000000000000000000006e72834723982374239847239847298472489274987489742847289472394874987498478743294237434923473298472398423748923748923748923472389472894789474893742894728947389427498237432987423894723894732894723894372498237498237428934723980000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027283473298473248923749238742398742398472894729843278942374982374892374892743982000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000000b736f6d6520737472696e670000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013736f6d6520616e6f7468657220737472696e67000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024746865726520617265206a75737420746f6f206d616e7920737472696e6773757020696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000046865726500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002079616c6c2067686f6e6e61206d616b65206d65206c6f7365206d79206d696e640000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000034746865206c6974746c6520706970696e67207069706572207069706564206120706970696e6720706970706572207061707065720000000000000000000000000000000000000000000000000000000000000000000000000000000000000081746865206b6964206b6e6f777320686f7720746f20777269746520706f656d732c20776861742063616e204920736179202d2d2049206775657373207468657265732061206c6f74204920636f756c642073617920746f2074727920746f2066696c6c2074686973206c696e6520776974682061206c6f74206f6620746578742e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0ac511500000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000081746865206b6964206b6e6f777320686f7720746f20777269746520706f656d732c20776861742063616e204920736179202d2d2049206775657373207468657265732061206c6f74204920636f756c642073617920746f2074727920746f2066696c6c2074686973206c696e6520776974682061206c6f74206f6620746578742e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000cf5763d5ec63d500600000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000100000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498000000000000000000000000000000000000000000000000000000000000004e616b64686a61736a6b646861736a6b6c647368646a6168646b6a73616864616a6b73646873616a6b646873616a6b646861646a6b617368646a6b73616468616a6b646873616a6b64687361646a6b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f7484848484848484848484848484848484848384757687980943399445858584893209100000000000000000000000000000000000000000000000000000000';
            expect(calldata).to.be.equal(expectedCalldata);*/

            /*const calldata = method.encode([{ someUint: new BigNumber(5), someStr: 'five' }]);
            console.log(method.getSignature());
            console.log(method.selector);

            console.log(calldata);
            const expectedCalldata =
                '0x5b998f3500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000046669766500000000000000000000000000000000000000000000000000000000';
            expect(calldata).to.be.equal(expectedCalldata);*/
        });

        it.only('Fixed Lenfgth Array / Dynamic Members', async () => {
            const method = new AbiEncoder.Method(AbiSamples.staticArrayDynamicMembersAbi);
            const args = [["Brave", "New", "World"]];
            const calldata = method.encode(args);
            console.log(calldata);
            console.log('*'.repeat(40));
            console.log(JSON.stringify(args));
            const expectedCalldata =
                '0x243a6e6e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000005427261766500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000034e657700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005576f726c64000000000000000000000000000000000000000000000000000000';
            expect(calldata).to.be.equal(expectedCalldata);
        });

        it.only('Unfixed Length Array / Dynamic Members ABI', async () => {
            const method = new AbiEncoder.Method(AbiSamples.dynamicArrayDynamicMembersAbi);
            const args = [["Brave", "New", "World"]];
            const calldata = method.encode(args);
            console.log(calldata);
            console.log('*'.repeat(40));
            console.log(JSON.stringify(args));
            const expectedCalldata = '0x13e751a900000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000005427261766500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000034e657700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005576f726c64000000000000000000000000000000000000000000000000000000';
            expect(calldata).to.be.equal(expectedCalldata);
        });

        it.only('Unfixed Length Array / Static Members ABI', async () => {
            const method = new AbiEncoder.Method(AbiSamples.dynamicArrayStaticMembersAbi);
            const args = [[new BigNumber(127), new BigNumber(14), new BigNumber(54)]];
            const calldata = method.encode(args);
            const expectedCalldata = '0x4fc8a83300000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000036';
            expect(calldata).to.be.equal(expectedCalldata);
        });


        it.only('Fixed Length Array / Static Members ABI', async () => {
            const method = new AbiEncoder.Method(AbiSamples.staticArrayAbi);
            const args = [[new BigNumber(127), new BigNumber(14), new BigNumber(54)]];
            const calldata = method.encode(args);
            const expectedCalldata =
                '0xf68ade72000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000036';
            expect(calldata).to.be.equal(expectedCalldata);
        });


        it('Simple ABI 2', async () => {
            const method = new AbiEncoder.Method(AbiSamples.simpleAbi2);

            const args = [
                '0xaf', // e (bytes1)
                '0x0001020304050607080911121314151617181920212223242526272829303132', // f (bytes32)
                '0x616161616161616161616161616161616161616161616161616161616161616161616161616161611114f324567838475647382938475677448899338457668899002020202020', // g
                'My first name is Greg and my last name is Hysen, what do ya know!', // h
            ];

            const calldata = method.encode(args);
            const expectedCalldata =
                '0x7ac2bd96af000000000000000000000000000000000000000000000000000000000000000001020304050607080911121314151617181920212223242526272829303132000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000047616161616161616161616161616161616161616161616161616161616161616161616161616161611114f3245678384756473829384756774488993384576688990020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000414d79206669727374206e616d65206973204772656720616e64206d79206c617374206e616d6520697320487973656e2c207768617420646f207961206b6e6f772100000000000000000000000000000000000000000000000000000000000000';
            expect(calldata).to.be.equal(expectedCalldata);
        });

        it('Yessir', async () => {
            const method = new AbiEncoder.Method(AbiSamples.simpleAbi);
            const calldata = method.encode([new BigNumber(5), 'five']);
            console.log(calldata);
            expect(true).to.be.true();
        });

        it('Array ABI', async () => {
            const method = new AbiEncoder.Method(AbiSamples.stringAbi);
            const calldata = method.encode([['five', 'six', 'seven']]);
            console.log(method.getSignature());
            console.log(method.selector);

            console.log(calldata);
            const expectedCalldata =
                '0x13e751a900000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000046669766500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000373697800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005736576656e000000000000000000000000000000000000000000000000000000';
            expect(calldata).to.be.equal(expectedCalldata);
        });

        it('Object ABI (Array input)', async () => {
            const method = new AbiEncoder.Method(AbiSamples.tupleAbi);
            const calldata = method.encode([[new BigNumber(5), 'five']]);
            console.log(method.getSignature());
            console.log(method.selector);

            console.log(calldata);
            const expectedCalldata =
                '0x5b998f3500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000046669766500000000000000000000000000000000000000000000000000000000';
            expect(calldata).to.be.equal(expectedCalldata);
        });

        it('Object ABI (Object input)', async () => {
            const method = new AbiEncoder.Method(AbiSamples.tupleAbi);
            const calldata = method.encode([{ someUint: new BigNumber(5), someStr: 'five' }]);
            console.log(method.getSignature());
            console.log(method.selector);

            console.log(calldata);
            const expectedCalldata =
                '0x5b998f3500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000046669766500000000000000000000000000000000000000000000000000000000';
            expect(calldata).to.be.equal(expectedCalldata);
        });

        it.skip('Object ABI (Object input - Missing Key)', async () => {
            const method = new AbiEncoder.Method(AbiSamples.tupleAbi);
            const calldata = method.encode([{ someUint: new BigNumber(5) }]);
            console.log(method.getSignature());
            console.log(method.selector);

            console.log(calldata);
            const expectedCalldata =
                '0x5b998f3500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000046669766500000000000000000000000000000000000000000000000000000000';

            // @TODO: Figure out how to catch throw
            expect(calldata).to.be.equal(expectedCalldata);
        });

        it.skip('Object ABI (Object input - Too Many Keys)', async () => {
            const method = new AbiEncoder.Method(AbiSamples.tupleAbi);
            const calldata = method.encode([{ someUint: new BigNumber(5), someStr: 'five', unwantedKey: 14 }]);
            console.log(method.getSignature());
            console.log(method.selector);

            console.log(calldata);
            const expectedCalldata =
                '0x5b998f3500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000046669766500000000000000000000000000000000000000000000000000000000';

            // @TODO: Figure out how to catch throw
            expect(calldata).to.be.equal(expectedCalldata);
        });
    });

    describe('Array', () => {
        it('sample', async () => {
            const testDataItem = { name: 'testArray', type: 'int[2]' };
            const dataType = new AbiEncoder.SolArray(testDataItem);
            console.log(JSON.stringify(dataType, null, 4));
            console.log('*'.repeat(60));
            dataType.assignValue([new BigNumber(5), new BigNumber(6)]);
            console.log(JSON.stringify(dataType, null, 4));
            const hexValue = dataType.getHexValue();
            console.log('*'.repeat(60));
            console.log(hexValue);
        });

        it('sample undefined size', async () => {
            const testDataItem = { name: 'testArray', type: 'int[]' };
            const dataType = new AbiEncoder.SolArray(testDataItem);
            console.log(JSON.stringify(dataType, null, 4));
            console.log('*'.repeat(60));
            dataType.assignValue([new BigNumber(5), new BigNumber(6)]);
            console.log(JSON.stringify(dataType, null, 4));
            const hexValue = dataType.getHexValue();
            console.log('*'.repeat(60));
            console.log(hexValue);
        });

        it('sample dynamic types', async () => {
            const testDataItem = { name: 'testArray', type: 'string[]' };
            const dataType = new AbiEncoder.SolArray(testDataItem);
            console.log(JSON.stringify(dataType, null, 4));
            console.log('*'.repeat(60));
            dataType.assignValue(['five', 'six', 'seven']);
            console.log(JSON.stringify(dataType, null, 4));
            const hexValue = dataType.getHexValue();
            console.log('*'.repeat(60));
            console.log(hexValue);
            const calldata = new AbiEncoder.Calldata('0x01020304', 1);
            dataType.bind(calldata, AbiEncoder.CalldataSection.PARAMS);
            console.log('*'.repeat(60));
            console.log(calldata.getHexValue());
        });
    });

    describe('Address', () => {
        const testAddressDataItem = { name: 'testAddress', type: 'address' };
        it('Valid Address', async () => {
            const addressDataType = new AbiEncoder.Address(testAddressDataItem);
            addressDataType.assignValue('0xe41d2489571d322189246dafa5ebde1f4699f498');
            const expectedAbiEncodedAddress = '0x000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498';

            console.log(addressDataType.getHexValue());
            console.log(expectedAbiEncodedAddress);
            expect(addressDataType.getHexValue()).to.be.equal(expectedAbiEncodedAddress);
        });
    });

    describe('Bool', () => {
        const testBoolDataItem = { name: 'testBool', type: 'bool' };
        it('True', async () => {
            const boolDataType = new AbiEncoder.Bool(testBoolDataItem);
            boolDataType.assignValue(true);
            const expectedAbiEncodedBool = '0x0000000000000000000000000000000000000000000000000000000000000001';
            expect(boolDataType.getHexValue()).to.be.equal(expectedAbiEncodedBool);
        });

        it('False', async () => {
            const boolDataType = new AbiEncoder.Bool(testBoolDataItem);
            boolDataType.assignValue(false);
            const expectedAbiEncodedBool = '0x0000000000000000000000000000000000000000000000000000000000000000';
            expect(boolDataType.getHexValue()).to.be.equal(expectedAbiEncodedBool);
        });
    });

    describe('Integer', () => {
        const testIntDataItem = { name: 'testInt', type: 'int' };
        it('Positive - Base case', async () => {
            const intDataType = new AbiEncoder.Int(testIntDataItem);
            intDataType.assignValue(new BigNumber(1));
            const expectedAbiEncodedInt = '0x0000000000000000000000000000000000000000000000000000000000000001';
            expect(intDataType.getHexValue()).to.be.equal(expectedAbiEncodedInt);
        });

        it('Positive', async () => {
            const intDataType = new AbiEncoder.Int(testIntDataItem);
            intDataType.assignValue(new BigNumber(437829473));
            const expectedAbiEncodedInt = '0x000000000000000000000000000000000000000000000000000000001a18bf61';
            expect(intDataType.getHexValue()).to.be.equal(expectedAbiEncodedInt);
        });

        it('Negative - Base case', async () => {
            const intDataType = new AbiEncoder.Int(testIntDataItem);
            intDataType.assignValue(new BigNumber(-1));
            const expectedAbiEncodedInt = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
            expect(intDataType.getHexValue()).to.be.equal(expectedAbiEncodedInt);
        });

        it('Negative', async () => {
            const intDataType = new AbiEncoder.Int(testIntDataItem);
            intDataType.assignValue(new BigNumber(-437829473));
            const expectedAbiEncodedInt = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5e7409f';
            expect(intDataType.getHexValue()).to.be.equal(expectedAbiEncodedInt);
        });

        // TODO: Add bounds tests + tests for different widths
    });

    describe('Unsigned Integer', () => {
        const testIntDataItem = { name: 'testUInt', type: 'uint' };
        it('Lower Bound', async () => {
            const uintDataType = new AbiEncoder.UInt(testIntDataItem);
            uintDataType.assignValue(new BigNumber(0));
            const expectedAbiEncodedUInt = '0x0000000000000000000000000000000000000000000000000000000000000000';
            expect(uintDataType.getHexValue()).to.be.equal(expectedAbiEncodedUInt);
        });

        it('Base Case', async () => {
            const uintDataType = new AbiEncoder.UInt(testIntDataItem);
            uintDataType.assignValue(new BigNumber(1));
            const expectedAbiEncodedUInt = '0x0000000000000000000000000000000000000000000000000000000000000001';
            expect(uintDataType.getHexValue()).to.be.equal(expectedAbiEncodedUInt);
        });

        it('Random value', async () => {
            const uintDataType = new AbiEncoder.UInt(testIntDataItem);
            uintDataType.assignValue(new BigNumber(437829473));
            const expectedAbiEncodedUInt = '0x000000000000000000000000000000000000000000000000000000001a18bf61';
            expect(uintDataType.getHexValue()).to.be.equal(expectedAbiEncodedUInt);
        });

        // TODO: Add bounds tests + tests for different widths
    });

    describe('Static Bytes', () => {
        it('Byte (padded)', async () => {
            const testByteDataItem = { name: 'testStaticBytes', type: 'byte' };
            const byteDataType = new AbiEncoder.Byte(testByteDataItem);
            byteDataType.assignValue('0x05');
            const expectedAbiEncodedByte = '0x0500000000000000000000000000000000000000000000000000000000000000';
            expect(byteDataType.getHexValue()).to.be.equal(expectedAbiEncodedByte);
        });

        it.skip('Byte (no padding)', async () => {
            const testByteDataItem = { name: 'testStaticBytes', type: 'byte' };
            const byteDataType = new AbiEncoder.Byte(testByteDataItem);

            // @TODO: This does not catch the Error
            expect(byteDataType.assignValue('0x5')).to.throw();
        });

        it('Bytes1', async () => {
            const testByteDataItem = { name: 'testStaticBytes', type: 'bytes1' };
            const byteDataType = new AbiEncoder.Byte(testByteDataItem);
            byteDataType.assignValue('0x05');
            const expectedAbiEncodedByte = '0x0500000000000000000000000000000000000000000000000000000000000000';
            expect(byteDataType.getHexValue()).to.be.equal(expectedAbiEncodedByte);
        });

        it('Bytes32 (padded)', async () => {
            const testByteDataItem = { name: 'testStaticBytes', type: 'bytes32' };
            const byteDataType = new AbiEncoder.Byte(testByteDataItem);
            byteDataType.assignValue('0x0001020304050607080911121314151617181920212223242526272829303132');
            const expectedAbiEncodedByte = '0x0001020304050607080911121314151617181920212223242526272829303132';
            expect(byteDataType.getHexValue()).to.be.equal(expectedAbiEncodedByte);
        });

        it('Bytes32 (unpadded)', async () => {
            const testByteDataItem = { name: 'testStaticBytes', type: 'bytes32' };
            const byteDataType = new AbiEncoder.Byte(testByteDataItem);
            byteDataType.assignValue('0x1a18bf61');
            const expectedAbiEncodedByte = '0x1a18bf6100000000000000000000000000000000000000000000000000000000';
            expect(byteDataType.getHexValue()).to.be.equal(expectedAbiEncodedByte);
        });

        it.skip('Bytes32 - Too long', async () => {
            const testByteDataItem = { name: 'testStaticBytes', type: 'bytes32' };
            const byteDataType = new AbiEncoder.Byte(testByteDataItem);

            // @TODO: This does not catch the Error
            expect(
                byteDataType.assignValue('0x000102030405060708091112131415161718192021222324252627282930313233'),
            ).to.throw(
                `Tried to assign 0x000102030405060708091112131415161718192021222324252627282930313233 (33 bytes), which exceeds max bytes that can be stored in a bytes32`,
            );
        });
    });

    describe('Bytes (Dynamic)', () => {
        const testBytesDataItem = { name: 'testBytes', type: 'bytes' };
        it('Less than 32 bytes', async () => {
            const bytesDataType = new AbiEncoder.Bytes(testBytesDataItem);
            bytesDataType.assignValue('0x010203');
            const expectedAbiEncodedBytes =
                '0x00000000000000000000000000000000000000000000000000000000000000030102030000000000000000000000000000000000000000000000000000000000';

            expect(bytesDataType.getHexValue()).to.be.equal(expectedAbiEncodedBytes);
        });

        it('Greater than 32 bytes', async () => {
            const bytesDataType = new AbiEncoder.Bytes(testBytesDataItem);
            const testValue = '0x' + '61'.repeat(40);
            bytesDataType.assignValue(testValue);
            const expectedAbiEncodedBytes =
                '0x000000000000000000000000000000000000000000000000000000000000002861616161616161616161616161616161616161616161616161616161616161616161616161616161000000000000000000000000000000000000000000000000';
            expect(bytesDataType.getHexValue()).to.be.equal(expectedAbiEncodedBytes);
        });

        // @TODO: Add test for throw on half-byte
        // @TODO: Test with no 0x prefix
        // @TODO: Test with Buffer as input
    });

    describe('String', () => {
        const testStringDataItem = { name: 'testString', type: 'string' };
        it('Less than 32 bytes', async () => {
            const stringDataType = new AbiEncoder.SolString(testStringDataItem);
            stringDataType.assignValue('five');
            const expectedAbiEncodedString =
                '0x00000000000000000000000000000000000000000000000000000000000000046669766500000000000000000000000000000000000000000000000000000000';

            console.log(stringDataType.getHexValue());
            console.log(expectedAbiEncodedString);
            expect(stringDataType.getHexValue()).to.be.equal(expectedAbiEncodedString);
        });

        it('Greater than 32 bytes', async () => {
            const stringDataType = new AbiEncoder.SolString(testStringDataItem);
            const testValue = 'a'.repeat(40);
            stringDataType.assignValue(testValue);
            const expectedAbiEncodedString =
                '0x000000000000000000000000000000000000000000000000000000000000002861616161616161616161616161616161616161616161616161616161616161616161616161616161000000000000000000000000000000000000000000000000';
            expect(stringDataType.getHexValue()).to.be.equal(expectedAbiEncodedString);
        });
    });
});
