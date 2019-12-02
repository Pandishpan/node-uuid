import { v4 as uuidv4 } from 'uuid';

import testpage from '../utils/testpage';

testpage((addTest) => {
  addTest('uuidv4()', uuidv4());
});
