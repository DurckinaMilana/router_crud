import React from 'react';
import { getTime } from './utils/getTime';

type PostsItemProps = {
  created: number,
  close?: React.ReactNode,
  content: React.ReactNode,
  reaction?: React.ReactNode
}

const PostsItem: React.FC<PostsItemProps> = ({ created, close, content, reaction }) => {

  return (
    <div 
      className='post'
    >
      {close && close}
      <div className="post__row">
        <div className="post__avatar"></div>
        <div className="post__info">
          <span className='post__name'>User Иванович</span>
          <span className='post__role'>Админ</span>
          <span className='post__time'>{getTime(created || 0)}</span>
        </div>
      </div>
      {content}
      {reaction && <div className="post__row post__reaction">
        {reaction}
      </div>}
    </div>
  )
}

export default PostsItem