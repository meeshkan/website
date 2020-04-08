# 📅 Meeshkan Content Calendar

Welcome to our content-calendar repository!

The dream is that this will be a place to hold all of our content-related work for Meeshkan 💫 Right now though, it's more of vague idea of when/where we'll publish things in the pipeline and instructions for how to submit new articles or ideas.

## What's in this document

- ["The Calendar"](#the-calendar)
- [Where does Meeshkan content live?](#where-does-meeshkan-content-live)
  - [Distributing content](#distributing-content)
  - [Submitting articles to external publications](#submitting-articles-to-external-publications)
- [Our content workflow](#our-content-workflow)
- [I have an idea!](#i-have-an-idea)
  - [Submitting your article](#submitting-a-new-article)
- [Tools for writers](#tools-for-writers)
  - [English](#english)

## "The Calendar"

| Date            | Article                                                    | Author ✍️         | Blog 🔖 | DEV 📓 | [Other ↗️](.EXTERNAL.md)                                                                        |
| --------------- | ---------------------------------------------------------- | ----------------- | ------- | ------ | ----------------------------------------------------------------------------------------------- |
| Friday 17.04    | Property-based Testing for JS devs                         | Carolyn           |         |        |                                                                                                 |
| Tuesday 14.04   | OP Bank Tutorial                                           | Nikolay           |         |        |                                                                                                 |
| Saturday 11.04  | Telemetry in Open Source - Part 2                          | Carolyn           |         |        |                                                                                                 |
| Wednesday 08.04 | Word embeddings with code2vec, GloVe and spaCy             | Maria             |         |        |                                                                                                 |
| Monday 06.04    | Property-based testing - Part 1                            | Fredrik & Carolyn | ✔️      | ✔️     |                                                                                                 |
| Friday 03.04    | Vanity announcement                                        | Nikolaos          | ✔️      | ✔️     |                                                                                                 |
| Thursday 02.04  | Word embeddings with code2vec, GloVe and spaCy             | Maria             | ✔️      |        |                                                                                                 |
| Friday 27.03    | TypedDict vs Dataclass in Python                           | Mike              | ✔️      | ✔️     |                                                                                                 |
| Wednesday 18.03 | Telemetry in Open Source - Part 1                          | Carolyn           | ✔️      | ✔️     |                                                                                                 |
| Wednesday 18.03 | Word embeddings with code2vec, GloVe and spaCy             | Maria             |         |        | [✔️](https://towardsdatascience.com/word-embeddings-with-code2vec-glove-and-spacy-5b26420bf632) |
| Friday 13.03    | On-device mocking of REST APIs in React Native             | Mike              | ✔️      | ✔️     |                                                                                                 |
| Tuesday 10.03   | Building a real-time HTTP traffic stream with Apache Kafka | Kimmo             | ✔️      | ✔️     |                                                                                                 |
| Monday 02.03    | Getting started with Meeshkan                              | Mike              | ✔️      | ✔️     |                                                                                                 |
| Friday 28.02    | Announcing Meeshkan, a new tool for mocking HTTP APIs      | Mike              | ✔️      | ✔️     |                                                                                                 |

## Where does Meeshkan content live?

All of our content is published on the [Meeshkan blog](http://meeshkan.com/blog/). In most cases, technical articles will also be posted on the [Meeshkan DEV page](https://dev.to/meeshkan/) using a [canonical url](https://yoast.com/rel-canonical/) pointing back to the blog.

### Distributing content

Every piece of content is 20% actual creation and 80% distribution. Which is unfortunate for us because this is our weakest area :sweat_smile: We're working on it though!

Ideally, everything we publish will be shared on the [Meeshkan Twitter account](https://twitter.com/meeshkanml?lang=en) and [Meeshkan LinkedIn page](https://www.linkedin.com/company/meeshkan/). The top articles will be shared through [our newsletter](https://www.subscribepage.com/meeshkan) whenever we figure that out.

## Our content workflow

Like good nerds, we have a kanban board for this! It's a [GitHub project board called Content Plan](https://github.com/orgs/meeshkan/projects/3) and the lanes are divided like so:

- **Ideas**: Submitted issues that haven't been started yet.
- **Development Needed**: Started articles that need any development work or changes to the product before it can be published.
- **Writing in Progress**: There are no blockers and the article is currently being written.
- **Ready for Review**: Draft is done, the PR is open - waiting for Carolyn to review.
- **Draft in Review**: Author and Carolyn are working together to make it niiiiiice.
- **Ready to Publish**: PR is merged into this repo and a PR is open on the [Meeshkan website](https://github.com/Meeshkan/worlds-greatest-website).
- **Published**: It's live on the website! And anywhere else we want to publish it.
- **Promoted**: We did that [distribution thing](#distributing-content) mentioned earlier.

## I have an idea!

That's really great, we want to hear it and almost definitely publish it. Please [open an issue](https://github.com/meeshkan/content-calendar/issues) describing your content idea. We'll use this issue to track the progress throughout, so try to make it as detailed as possible.

Some points to include:

- A short description of what the article will be about
- Why you want to write it
- Who the intended audience is

### Submitting a new article

If you have an article that you want to publish, please [open a pull request](https://github.com/meeshkan/content-calendar/pulls) adding your article to the `drafts` directory. Your article should be a markdown file.

Your PR should link to the [issue you previously created](#i-have-an-idea) or include a short description of what the article is about, why you wrote it and who the intended audience is.

## Tools for writers

Writing is hard, particularly if you're not writing in your native language. But there are tools that can help!

### English

- [Grammarly](https://www.grammarly.com)
- [Hemingway App](hemingwayapp.com/)

## Submitting articles to external publications

Sometimes it makes sense to try to get our articles published in external publications. In these cases, we'll look at the publication's requirements for submitted articles and adjust the procress accordingly.

Sometimes, we try to get our content published in external publications! And then we track those here in a handy table.

| Date Submitted | Article                                        | Author | Publication                                             | Writing Guidelines                                                                     | Accepted           | Rejected | Date Published | Link                                                                                            |
| -------------- | ---------------------------------------------- | ------ | ------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------ | -------- | -------------- | ----------------------------------------------------------------------------------------------- |
| 16.03          | Word embeddings with code2vec, GloVe and spaCy | Maria  | [Towards Data Science](https://towardsdatascience.com/) | [Write for Towards Data Science](https://towardsdatascience.com/questions-96667b06af5) | :white_check_mark: |          | 18.03          | [🔗](https://towardsdatascience.com/word-embeddings-with-code2vec-glove-and-spacy-5b26420bf632) |
