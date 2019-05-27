---
path: "/up-and-running-with-gatsby"
date: "2019-05-27"
title: "Up and Running with Gatsby"
tags: ['Gatsby', 'Development']
excerpt: "I'm excited to share my newest (and hopefully final) blog built with Gatsby.
I wanted a simple and modern forum through which to share all of the things I've been learning and decided Gatsby was the way to go.
In this post, I'll share the (somewhat) final results of my work and talk about what I've got."
---

Hey y'all!

Welcome to my official blog built with [Gatsby](https://www.gatsbyjs.org/). For quite some time I've been wanting to build a _simple_ and _lightweight_ site from which 
I could share all of the things I have been learning about web development, and to serve as a sort of focal point for all of my personal web projects. 
I had heard Gatsby offered just this type of solution based on React, so I thought I'd give it a try. The result is blog.rzmy; just the simple and lightweight solution 
I had been looking for.

###Not a Tutorial###

I won't be talking about  how blog.rzmy was built as there are already a ton of tutorials covering this, almost all of which are much more thorough than I could ever be.
That said, you can find the repository for the site here: [#](https://github.com/chickenn00dle/gatbsy-blog)

Feel free to clone and repurpose as you see fit! And of course if you have any feedback about anything, feel free to hit me up.

###Out of the Box###

Cloning the repository mentioned above, you will end up with a Gatsby site which pulls data from markdown files locaed in `src/pages/*/*.md`. Running `gatsby build` pulls post data 
from these files and generates a series of `HTML`, `CSS`, and `Javascript` files in the `public` directory.

I've created a separate github repository to house these files and synced this repository using [Netlify](https://www.netlify.com/) where blog.rzmy.win is hosted.

In the end, the process of adding posts looks like this:

1. After writing up a nifty blog post, create a directory in `src/pages/` with the following format: `YYYY-MM-DD-some-title`
2. Create a `.md` file in this new directory using the same title in step 1 without the date information: `some-title.md`
3. Add meta information to top of this new `.md` file and move blog content over 
4. Run `gatby build`
5. Commit and push changes in the `public` directory to github (master branch)
6. Netlify takes care of updating things on blog.rzmy.win

Code changes to the site are very similar: replace steps 1-3 with merging code changes from xyz feature branch to master, then continue from step 4.

###TODO###

The process of building blog.rzmy.win was very rushed and obviously I am no pro, so there is a bunch to do. But my immediate goals are:

- Find a solution for SEO (likely Helmet)
- Create a simple logo
- Using blog.rzmy.win, bring together the ecosystem of my personal projects
- Continue testing and having fun!

Thanks for reading!

