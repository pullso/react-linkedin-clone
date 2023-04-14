import React, {forwardRef} from 'react';
import './Post.css'
import {Avatar} from "@mui/material";
import InputOption from "./InputOption";
import {ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOffAltOutlined} from "@mui/icons-material";

const Post = forwardRef(({name, description, message, photoURL}, ref) => {

  return (
    <div className='post' ref={ref}>
      <div className="post__header">
        <Avatar src={photoURL}>{!!name && name[0].toUpperCase()}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__info">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltOutlined} title='Like' color='gray'/>
        <InputOption Icon={ChatOutlined} title='Comment' color='gray'/>
        <InputOption Icon={ShareOutlined} title='Share' color='gray'/>
        <InputOption Icon={SendOutlined} title='Send' color='gray'/>
      </div>
    </div>
  );
});

export default Post;
