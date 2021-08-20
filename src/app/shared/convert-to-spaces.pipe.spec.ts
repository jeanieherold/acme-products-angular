import { ConvertToSpacesPipe } from './convert-to-space.pipe';

describe('ConvertToSpacesPipe', () => {
  it('should display abc 123 if input string is abc-123', () => {
    let pipe = new ConvertToSpacesPipe();

    expect(pipe.transform('abc-123', '-')).toEqual('abc 123');
  });
  it('should display abc 12-3 if input string is abc-12-3', () => {
    let pipe = new ConvertToSpacesPipe();

    expect(pipe.transform('abc-12-3', '-')).toEqual('abc 12-3');
  });
});
