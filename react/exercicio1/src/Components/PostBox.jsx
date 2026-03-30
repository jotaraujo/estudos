import { useState } from "react"
import Button from "./ui/Button"

const PostBox = () => {
  const [text, setText] = useState('')
  return (
    <div>
      <textarea
        name="post"
        id="post"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Me fala o que passa..."
        cols={50}
        rows={10}>
      </textarea>
      {text.length > 280 ? <p style={{ color: 'red' }}>-{text.length - 280}</p> : <p style={{ color: 'green' }}>{280 - text.length}</p>}
      <Button disabled={text.length > 280 || text.length === 0} />
    </div>
  )
}

export default PostBox