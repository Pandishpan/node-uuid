import { v1 as uuidv1 } from 'uuid';

import testpage from '../utils/testpage';

testpage((addTest) => {
  addTest('uuidv1()', uuidv1());
});
