import React from 'react'
import document from '../assets/documents/format_C2.pdf'
function FormatC2() {
  return (
    <embed src={document} type="application/pdf" width="100%" height="830px"/>
  )
}

export default FormatC2