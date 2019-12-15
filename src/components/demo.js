import React from "react"
import "./header.css"
import "./demo.css"

export default ({ youtubeId }) => {
  return (
    <div className="video">
      <iframe
        className="embed"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </div>
  )
};