import React from 'react'

export default function ImageCard({ post, deleteHandler }) {
  return (
    <div className="card text-bg-warning">
  <div className="card-header">{post?.title}</div>
  <img src={`/images/${post?.img}`} className="card-img-bottom" alt="..." />
  <div className="card-body">
    <p className="card-text">{post?.text}</p>
  </div>
</div>
  )
}
