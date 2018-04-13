/* eslint no-undef: 0 */

import { convertHTML as t } from '../11_ConvertHTMLEntities';

describe('test funct spinalTapCase', () => {
  it('case 1', () => {
    expect(t('Dolce & Gabbana')).toEqual('Dolce &amp; Gabbana');
  });

  it('case 2', () => {
    expect(t('Hamburgers < Pizza < Tacos')).toEqual('Hamburgers &lt; Pizza &lt; Tacos');
  });
});
