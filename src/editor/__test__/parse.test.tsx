import { identifyHeader } from '../parse'


describe('identifyHeader()', () => {
  it('should identify text as a header', () => {
    const text = '#Hello World!'

    const { type } = identifyHeader(text)

    expect(type).toBe('h1')
  })

  it('should identify text as a subheader', () => {
    const text = '###Glory be to the great fungus!'

    const { type } = identifyHeader(text)

    expect(type).toBe('h3')
  })

  it('should not identify text as a header if "#" does not occur at the beginning of the text', () => {
    const text = 'If you cant handle me at my worst, you dont deserve me at my best. #proud #princess'

    const { found } = identifyHeader(text)
    expect(found).toBe(false)
  })
})
