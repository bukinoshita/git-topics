# git-topics

> Auto create Github topics for repositories


## Install

```bash
yarn add git-topics
```


## Usage

```js
const gitTopics = require('git-topics')

const token = 'foo'

gitTopics(token, {
  topics: ['github', 'git'],
  project: 'bukinoshita/git-topics'
}).then(res => res)
// => "['github', 'git']"
```


## API

### gitTopics(token, [options])

Returns a `promise`

#### token

Type: `string`<br/>
Required

[Github access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

#### options

Type: `object`

#####  topics

Type: `array`<br/>
Default: It will try to get `keywords` from `package.json`

Array of topics to be added to Github

##### project

Type: `string`<br/>
Default: It will try to get `repository` from `package.json`

Github project to add topics


## Related

- [git-topics-cli](htts://github.com/bukinoshita/git-topics-cli) — CLI for this module


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
