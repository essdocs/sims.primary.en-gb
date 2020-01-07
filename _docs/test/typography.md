---
title: Typography
---


## Headers

We start at Level 2 (##), the main header is provided by the title.

## Header two

### Header three

## Lead

Here is a Lead: a short introductory blurb
{:.lead}

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

Like this...

## Emphasis

**Bold**  
*Italic*

## Code

Use the back ticks to show something is code, e.g. a command line action:

`This is code`

## Blockquotes

To create a blockquote, add a > in front of a paragraph. Add `{:.note}`, `{:.tip}` or .
`{:.warning}` after to change the style:

> Basic blockquote.

> A note blockquote
{:.note}

> A tip blockquote
{:.tip}

> A warning blockquote
{:.warning}

## Lists
You can organize items into ordered and unordered lists.

### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

The default will display the number as steps:

1. Step one
1. Step two
1. Step three
1. Step four

If you want a normal list add `{:.list}` to the end:

1. First item
1. Second item
1. Third item
1. Fourth item
{:.list}

### Unordered Lists

To create an unordered list use the asterisk (*) in front of line items. Indent one or more items to create a nested list.

* First item
* Second item
* Third item
* Fourth item

* First item
* Second item
* Third item
  * Indented item
  * Indented item
* Fourth item

## Horizontal Rules

To create a horizontal rule, use three or more asterisks (***) on a line by themselves.

***

## Links

To create a link, enclose the link text in brackets (e.g., [Link Title]) and then follow it immediately with the URL in parentheses (e.g., (./)).

Click here to go to the [Test Page](./).

For external links add `{:target="_blank"}` to the end, this tells the browser to open the page in a new tab and adds the icon showing it's an external link:

Here's a link to [Google](https://google.com){:target="_blank"}
