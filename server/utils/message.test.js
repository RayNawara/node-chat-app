let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let from = 'Ray';
    let text = 'That sounds good'
    message = generateMessage(from, text);
      expect(message.from).toBe(from);
      expect(message.text).toBe(text);
      expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct message object', () => {
    let from = 'Ray';
    let latitude = '12345';
    let longitude = '12345';
    let url = 'https://www.google.com/maps?q='
    message = generateLocationMessage(from, latitude, longitude);
    
      expect(message.from).toBe(from);
      expect(message.url).toBe(`${url}${latitude},${longitude}`);
      expect(typeof message.createdAt).toBe('number');
  });
});
