# Vssue Options

## platform

`@vssue/vuepress-plugin-vssue` will auto resolve the corresponding api package according to the value of `platform`:

- platform `github` - api package `@vssue/api-github-v3`
- platform `github-v4` - api package `@vssue/api-github-v4`
- platform `gitlab` - api package `@vssue/api-gitlab-v4`
- platform `bitbucket` - api package `@vssue/api-bitbucket-v2`
- platform `gitee` - api package `@vssue/api-gitee-v5`

## owner

- __Type__: `string`
- __Details__:

  The owner's name of repository to store the issues and comments. Could be the name of a __user__ or an organization (__Github Organization__ / __Gitlab Group__ / __Bitbucket Team__).

  Together with `repo`, Vssue could locate the repository on the platform.

- __Reference__: [repo](#repo)

## repo

- __Type__: `string`
- __Details__:

  The name of repository to store the issues and comments.

  Together with `owner`, Vssue could locate the repository on the platform.

- __Reference__: [owner](#owner)

::: tip
The common pattern of repository's URL is `` `${baseURL}/${owner}/${repo}`  ``:

- Github: `https://github.com/${owner}/${repo}`
- Gitlab: `https://gitlab.com/${owner}/${repo}`
- Bitbucket: `https://bitbucket.org/${owner}/${repo}`
- Gitee: `https://gitee.com/${owner}/${repo}`
:::

## clientId

- __Type__: `string`
- __Details__:

  The `client_id` introduced in [OAuth2 spec](https://tools.ietf.org/html/rfc6749#section-2.3.1).

  It is the client identifier that issued by the platform. You will get it after you set up OAuth App.

  Vssue will use it to get user's access token.

- __Reference__:
  - [Set up OAuth App](../guide/supported-platforms.md)

## clientSecret

- __Type__: `string`
- __Default__: `undefined`
- __Details__:

  The `client_secret` introduced in [OAuth2 spec](https://tools.ietf.org/html/rfc6749#section-2.3.1).

  It is the client secret that generated by the platform. You will get it after you set up OAuth App.

  When work with some of the platforms, Vssue will use it together with `clientId` to get user's access token.

  ::: tip
  Some platforms (e.g. Bitbucket and GitLab) support [Implicit Grant](https://tools.ietf.org/html/rfc6749#section-4.2), so we don't need `clientSecret` for those platforms.

  However, some platforms (e.g. GitHub and Gitee) do not support it now, so `clientSecret` is required for those platforms.
  :::

- __Reference__:
  - [clientId](#clientid)
  - [proxy](#proxy)
  - [Set up OAuth App](../guide/supported-platforms.md)

## baseURL

- __Type__: `string`
- __Default__: `undefined` (according to the platform)
- __Details__:

  This is the base URL of your platform.

  Default values for supported platforms are:

  - `'https://github.com'` for Github
  - `'https://gitlab.com'` for Gitlab
  - `'https://bitbucket.org'` for Bitbucket
  - `'https://gitee.com'` for Gitee

  ::: warning ATTENTION
  Only when you choose to use __self-hosted__ platform should you set this option. (e.g. __GitLab Community / Enterprise Edition__ or __GitHub Enterprise Server__)
  :::

- __Reference__:
  - [GitHub OAuth App](../guide/github.md)
  - [GitLab Application](../guide/gitlab.md)

## state

- __Type__: `string`
- __Default__: `'Vssue'`
- __Details__:

  The `state` element introduced in [OAuth2 spec](https://tools.ietf.org/html/rfc6749#section-4.1.1).
  
  Vssue will send it with OAuth redirection and check if it is matched in callback.

  It's designed for preventing [CSRF](https://tools.ietf.org/html/rfc6749#section-10.12), but it's not so useful here as we put everything in a static page. So just ignore it or set it to anything you like.

## labels

- __Type__: `string`
- __Default__: `['Vssue']`
- __Details__:

  To set the labels of issues that Vssue uses.

  Vssue will only request those issues with the labels and ignore others. Together with `title`, `labels` will help to identify the corresponding issue of Vssue. If you use multiple labels by setting more strings, only issues with all those labels will be requested by Vssue.

  ::: tip
  Bitbucket does not support issue labels for now, so this option will be ignored if you are using Bitbucket.

  Github supports emoji in labels' name, e.g. `[':heart:Vssue', ':mailbox:Comments']`.
  :::

- __Reference__: [title](#title)

## prefix

- __Type__: `string`
- __Default__: `'[Vssue]'`
- __Details__:

  The title prefix for issues. Used for generating the actual title of the corresponding issue.

  For example, if the `prefix` is `'[Vssue]'` and the `title` is `'Vssue Demo'`, the actual title of the corresponding issue is `'[Vssue]Vssue Demo'`.

  It will be ignored if the type of `title` is `Function`.

- __Reference__: [title](#title)

## admins

- __Type__: `Array<string>`
- __Default__: `[]`
- __Details__:

  Array of username that has admin access to Vssue. The `owner` always has admin access.

  Users with admin access can delete all comments, while other users can only delete their own comments.

  Only `admins` can auto create corresponding issue if it does not exist.

  ::: tip
  If you want to auto create the issue when the `owner` is a organization rather than a user, you can add your username into `admins`.
  :::

- __Reference__: [owner](#owner)

## perPage

- __Type__: `number`
- __Default__: `10`
- __Details__:

  The default value of how many comments to show per page.

## locale

- __Type__: `string`
- __Default__: `undefined`
- __Details__:

  The locale language.

  If not set, Vssue will use one of `window.navigator.languages`, or fallback to `'en'`.

  ::: tip
  Vssue uses [vue-i18n](https://kazupon.github.io/vue-i18n/) for i18n, but it will not affect other parts of your Vue App.
  And if you already have vue-i18n in your project, it will not affect Vssue.

  Language packages locate in [src/i18n/langs](https://github.com/meteorlxy/vssue/tree/master/packages/vssue/src/i18n/langs) directory. Currently we have supported:

  - `'en'` (`'en-US'`)
  - `'zh'` (`'zh-CN'`)
  - `'pt'` (`'pt-BR'`)
  - `'ja'` (`'ja-JP'`)

  Contributions welcome for more languages support.
  :::

## proxy

- __Type__: `string | ((url: string) => string)`
- __Default__: `` url => `https://cors-anywhere.herokuapp.com/${url}` ``
- __Details__:

  Some platforms (e.g. GitHub and Gitee) do not support Implicit Grant, so we have to request the API of the platform to get the access token.
  
  However, the access token API of the platforms do not support CORS (see [related issue of GitHub](https://github.com/isaacs/github/issues/330)). As Vssue is a pure front-end plugin, we have to use a proxy to request access token.

  By default, we use an open source CORS proxy service [cors-anywhere](https://github.com/Rob--W/cors-anywhere) for that.
  
  If you want to use your own proxy, you need to set this option.

  If the platform you use does not require `clientSecret`, this option will be ignored.

- __Example__:

  ```js
  proxy: url => `https://your.cors.porxy?target=${url}`
  ```

- __Reference__:
  - [clientSecret](#clientsecret)

## issueContent

- __Type__: `((param: { options: Vssue.Options, url: string }) => string | Promise<string>)`
- __Default__: `({ url }) => url`
- __Details__:

  The content of issue that auto created by Vssue.

  Vssue will use the return value of the function as the content.
  
  The parameter includes two properties:

  - `options` is the options of Vssue.
  - `url` is the URL of current page, which is the default content.

- __Example__:

  ```js
  issueContent: ({ url }) => `This issue is auto created by Vssue to store comments of this page: ${url}`
  ```

  ::: tip
  The `issueContent` option is only used to auto create the corresponding issue when it does not exist.

  If the issue already exists, Vssue will not try to update the content.
  :::

## autoCreateIssue

- __Type__: `boolean`
- __Default__: `false`
- __Details__:

  If `autoCreateIssue` is set to `true`, Vssue will try to create an issue automatically when the corresponding issue does not exist. Notice that if you have not logged-in, Vssue will redirect to the authorization page automatically.

  If `autoCreateIssue` is set to `false`, you need to create the issue manually.