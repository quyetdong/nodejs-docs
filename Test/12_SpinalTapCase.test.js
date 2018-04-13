/* eslint no-undef: 0 */

import { spinalCase as t } from '../12_SpinalTapCase';

describe('test funct spinalTapCase', () => {
  it('case 1', () => {
    expect(t('Teletubbies say Eh-oh')).toEqual('teletubbies-say-eh-oh');
  });

  it('case 2', () => {
    expect(t('thisIsSpinalTap')).toEqual('this-is-spinal-tap');
  });
});
