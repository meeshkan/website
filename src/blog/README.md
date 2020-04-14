# 📅 Meeshkan Content Calendar

Welcome to our blog!

This README walks through everything you need to know to publish an article on the [Meeshkan blog](https://meeshkan.com/blog/) 💫 

## What's in this document

- ["The Calendar"](#the-calendar)
- [Where does Meeshkan content live?](#where-does-meeshkan-content-live)
  - [Distributing content](#distributing-content)
  - [Submitting articles to external publications](#submitting-articles-to-external-publications)
- [Our content workflow](#our-content-workflow)
- [Submitting your article](#submitting-a-new-article)
  - [Frontmatter data](#frontmatter-data)
- [Tools for writers](#tools-for-writers)
  - [English](#english)

## "The Calendar"

| Date            | Article                                                    | Author ✍️         | Blog 🔖 | DEV 📓 | [Other ↗️](.EXTERNAL.md)                                                                        |
| --------------- | ---------------------------------------------------------- | ----------------- | ------- | ------ | ----------------------------------------------------------------------------------------------- |
| Wednesday 22.04    | Property-based Testing for JS devs                         | Carolyn           |         |        |                                                                                                 |
| Monday 20.04   | OP Bank Tutorial                                           | Nikolay           |         |        |                                                                                                 |
| Friday 17.04   | Stateful property-based testing with QuickCheck State Machine  | Mike           |         |        |                                                                                                 |
| Tuesday 14.04  | Telemetry in Open Source - Part 2                          | Carolyn           |    ✔️     |    ✔️    |                                                                                                 |
| Wednesday 08.04 | Word embeddings with code2vec, GloVe and spaCy             | Maria             |         |   ✔️     |                                                                                                 |
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

All of our content is published on the [Meeshkan blog](http://meeshkan.com/blog/). In most cases, technical articles will also be posted on the [Meeshkan DEV page](https://dev.to/meeshkan/) with a [`canonical_url`](https://yoast.com/rel-canonical/) variable pointing back to the blog.

### Distributing content

Every piece of content is 20% actual creation and 80% distribution. Which is unfortunate for us because this is our weakest area :sweat_smile: We're working on it though!

Ideally, everything we publish will be shared on the [Meeshkan Twitter account](https://twitter.com/meeshkanml?lang=en) and [Meeshkan LinkedIn page](https://www.linkedin.com/company/meeshkan/). The top articles will be shared through [our newsletter](https://www.subscribepage.com/meeshkan) whenever we figure that out.

### Submitting articles to external publications

Sometimes it makes sense to try to get our articles published in external publications. In these cases, we'll look at the publication's requirements for submitted articles and adjust the procress accordingly.

Submissions are tracked here in this handy table:

| Date Submitted | Article                                        | Author | Publication                                             | Writing Guidelines                                                                     | Accepted           | Rejected | Date Published | Link                                                                                            |
| -------------- | ---------------------------------------------- | ------ | ------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------ | -------- | -------------- | ----------------------------------------------------------------------------------------------- |
| 16.03          | Word embeddings with code2vec, GloVe and spaCy | Maria  | [Towards Data Science](https://towardsdatascience.com/) | [Write for Towards Data Science](https://towardsdatascience.com/questions-96667b06af5) | :white_check_mark: |          | 18.03          | [🔗](https://towardsdatascience.com/word-embeddings-with-code2vec-glove-and-spacy-5b26420bf632) |
| 09.04          | A Beginner's Guide to PBT | Fredrik & Carolyn  | [DZone](https://dzone.com/) | [Become a DZone Contributor](https://dzone.com/pages/contribute) |  |    :x:      |        |    |

## Our content workflow

Like good nerds, we have a kanban board and tickets for this! Everything's in Linear, but here's an overview of how the process works:

- **Have an idea**: Talk to Carolyn about it or open a ticket on Linear.
- **Write your article**: If you run into any blockers, comment in the Linear ticket. If additional development needs to be done before publishing, create a subtask in the Linear ticket. Feel free to reach out to Carolyn any time for help. 
- **Open a PR**: Follow the instructions below to add your article to the blog.
- **Review**: You and Carolyn will work together to make your article niiiiiice.
- **Publish**: Your PR was merged! It's up on the website! Celebrate 🎉
- **Distribute**: Once your article is on the blog, you can publish it on other platforms as long as there is a canonical url linking back to the original post. 
- **Promote**: Share your article on social media (if you want).

### Submitting a new article

Before beginning to write your article, please open a ticket in the `Content Creation` Linear project with the `Blog` label.

After you have a draft ready, follow the steps below to get your article published:
1. In a branch named after your ticket ID, add your article to the `./blog/posts` directory of this repo. Make sure that is has the appropriate [Frontmatter data](#frontmatter-data).
1. Open a PR and in the description, include a short description of what the article is about, why you wrote it and who the intended audience is. Add Carolyn as a reviewer.

After that, you'll work together with Carolyn to get your article published.

### Frontmatter data

Every article needs to have Frontmatter data at the top with the following information:

```
---
title: 
description: 
slug:
date:
authors: [""]
tags:
  - 
  - 
  - 
---
```

Here's what to consider for each field:
* `title`: Try to keep this 9 words or less. You can use [Headline Analyzer](https://coschedule.com/headline-analyzer) to check for SEO as well.
* `description`: A short sentence previewing the blog post. This shows up under the title on our [blog homepage](https://meeshkan.com/blog).
* `slug`: A kebab-case string based on the title (example: `oss-telemetry-part-1`).
* `date`: The date the post will be published on, written in `YYYY-MM-DD` format.
* `authors`: Please refer to [`./data/author.yaml`](https://github.com/meeshkan/website/blob/master/data/author.yaml) and use your `id` or add yourself. If there's more than one author, please separate these `id`s by commas.
* `tags`: Minimum of 1 and maximum of 4. If you're stuck, you can reference the [Top 100 tags on DEV](https://dev.to/tags).

## Tools for writers

Writing is hard, particularly if you're not writing in your native language. But there are tools that can help!

### English

- [Grammarly](https://www.grammarly.com)
- [Hemingway App](hemingwayapp.com/)
- [Headline Analyzer](https://coschedule.com/headline-analyzer)
