import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,

    category,
    cover,
  },
}) => (
  <div className="blogItem-wrap">
    <img src={cover} alt="cover" className="img-cover" />
    <Chip label={category} />
    <h3>{title}</h3>
    <p className="blogItem-desc">{description}</p>
    <footer>
      <div className="blogItem-author">
        <img src={authorAvatar} alt="avtar" />
        <div>
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
          <Link className="blog-item-link" to={`/blog/${id}`}>
            <BsFillArrowRightCircleFill />
          </Link>
        </div>
      </div>
    </footer>
  </div>
);
export default BlogItem;
