import React, { useContext } from "react";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import styled from "styled-components";
import { GuthubContext } from "../context/context";

const Card = () => {
  const { gitHubUser } = useContext(GuthubContext);
  console.log(gitHubUser);
  const {
    avatar_url,
    html_url,
    name,
    blog,
    company,
    twitter_username,
    followers_url,
    followers,
    bio,
    location,
  } = gitHubUser;
  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div className="">
          <h4>{name}</h4>
          <p>@{twitter_username || "Nikesh Kumar"}</p>
          <p>
            <strong>Follower</strong> : {followers}
          </p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn /> {location || "earth"}
        </p>
        <a href={`https://${blog}`}>
          <MdLink /> {blog}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
      strong {
        font-family: "Times New Roman", Times, serif;
      }
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio{
    color: var(--clr-grey-3);
  }
  .links{
    p,a{
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      padding-right: 1rem;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a{
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg{
        color: var(--clr-grey-5);
      }
      &:hover{
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
