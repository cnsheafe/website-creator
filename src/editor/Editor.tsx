import React, { useState } from 'react'


interface EditorProps {
  initialDoc?: string[] // TODO: What data structure should be used to keep track of document lines?
}

export default function Editor({ initialDoc = [] }: EditorProps) {
  const [doc] = useState<string[]>(initialDoc)
  const [focusedLineIndex] = useState<number>(0)

  return (
    <>
      {doc.map((line, i) => {
        if (focusedLineIndex === i) {
          return <input type="text" value={line} /> // TODO: Support Markdown
        }

        // Make a <Line /> to handle focus
        return line // TODO: Add a click handler to make the new line focused
      })}
    </>
  )
}

// interface Symbol {
//   html: React.ReactElement
//   rawText: string
// }

// function parseMd(text: string) {

// }
// interface SymbolProps { // A symbol can represent markdown or plain text
//   type?: MarkdownTypes
//   rawText: string
// }

// export function Symbol({ type, rawText }: SymbolProps) { // TODO: lookup hidden input fields
//   switch (type) {
//     case 'h1':
//       return <h1>{rawText}</h1>// TODO: parse and remove the symbol indicators i.e. `# `
//     default:
//       /** Currently just a span. Might have to change later */
//       return <span>{rawText}</span>
//   }
// }
