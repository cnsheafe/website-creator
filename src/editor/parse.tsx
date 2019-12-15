interface MarkdownSymbol {
  html: React.ReactElement
  rawText: string
}

export default function parseMd() {

}

type MarkdownType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'img' | 'p' // TODO: Add remaining supported markdown types

// function identifyMd() {
//   // const header = identifyHeader(text)
// }

interface MarkdownIdentifier {
  found: boolean
  type?: MarkdownType
}

/**
 * Header is identified under the following conditions:
 * - Begins at the beginning of the text with character `#`
 *   - With the exception of whitespace preceding the first `#`
 * - Ignores all '#' afterward with the exception of consecutive `#` following the first valid `#`
 * @param text
 */
export function identifyHeader(text: string): MarkdownIdentifier {
  const re = /(^#{1,5})/

  const trimmed = text.trim()

  // const [, firstMatch] = re.exec(trimmed)
  const result = re.exec(trimmed)

  if (!result) {
    return { found: false }
  }

  const [, firstMatch] = result

  const len = firstMatch.length

  return {
    found: true,
    type: `h${len}` as MarkdownType,
  }
}
