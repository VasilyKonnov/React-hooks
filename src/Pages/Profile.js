import React, { useContext, useEffect, Fragment } from "react";
import { GithubContext } from "../context/github/githubContext"
import { Link } from "react-router-dom";
import { Repos } from '../components/Repos'

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const urlName = match.params.name;
  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url, location, bio, blog, login,
    html_url, followers, public_repos, public_gists, following
  } = user;
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{ width: "150px" }}
              />
              <h2>{name}</h2>
              {location && <p>Место положение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Открыть профиль</a>
              <ul>
                {login && <li>
                  <b>User name: </b> {login}</li>}
                {company && <li>
                  <b>Компания: </b> {company}</li>}
                {blog && <li>
                  <b>Web site: </b> {blog}</li>}
              </ul>
              <div className="badge badge-primary">Подписчики:  {followers}</div>
              <div className="badge badge-success">Подписан:  {following}</div>
              <div className="badge badge-info">Репозитории:  {public_repos}</div>
              <div className="badge badge-darck">Gists:  {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment >
  );

};

// Origin