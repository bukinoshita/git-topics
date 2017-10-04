'use strict'

const readPackage = require('read-package')
const gitUrlUglify = require('git-url-uglify')
const isGithubRepo = require('is-github-repo')
const axios = require('axios')

module.exports = async (token, { topics, project } = {}) => {
  const { repository, keywords } = await readPackage()

  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new TypeError('Token required'))
    }

    if (!project) {
      const repo = repository.url ? repository.url : repository
      const isGit = isGithubRepo(repo, { withType: true })

      project =
        isGit.type === 'repo'
          ? repo
          : `${gitUrlUglify(repo).owner}/${gitUrlUglify(repo).repository}`
    }

    if (!topics) {
      if (!keywords) {
        reject(new TypeError('Topics is required'))
      }

      topics = keywords
    }

    return axios({
      method: 'put',
      url: `https://api.github.com/repos/${project}/topics`,
      data: { names: topics },
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
        Authorization: `token ${token}`
      }
    })
      .then(res => resolve(res.data.names))
      .catch(err => reject(err.response.data.message))
  })
}
