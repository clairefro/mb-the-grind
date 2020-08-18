import React from 'react'

import { prettyTime } from '../../utils/date'

const Message = ({ username, body, createdAt }) => (
  <>
    <header className="flex justify-between mt-2">
      <span className="font-semibold">{username}</span>
      {prettyTime(createdAt)}
    </header>
    <div>{body}</div>
  </>
)

export default Message
