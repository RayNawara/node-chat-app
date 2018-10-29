let expect = require('expect');
let {isRealString} = require('./validation');

describe('generateMessage', () => {
  it('should reject non-string values', () => {
    let res = isRealString(25);
      expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let res = isRealString('     ');
      expect(res).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    let res = isRealString('Ray');
      expect(res).toBe(true);
  });
});
