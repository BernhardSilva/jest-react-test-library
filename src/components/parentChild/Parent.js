import React from 'react'
import Child from './Child'

const Parent = () => {

const [text, setText] = React.useState('')
const handleTextChange = (newText) => {
    setText(newText)
}

  return (
    <div>
        <h2>Parent Component</h2>
		<p>Text: {text}</p>
        <Child onTextChange={handleTextChange}/>
    </div>
  )
}

export default Parent