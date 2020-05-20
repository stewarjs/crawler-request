# CHANGELOG
Here you can find the changes that have been implemented pre- and post- fork from the original source.
* Nice to be able to return Open Office plaintext with response.

## 1.4.2
* Drop dependency
* No longer return HTML with response. Anything requiring HTML manipulation should occur within this module.
* Clean up plaintext returned with PDFs and HTML files. Remove whitespace and only grab #main HTML content.

## 1.4.1
* Standardize metadata

## 1.4.0
* Added support for Open Office documents (metadata only)

## 1.3.0
* forked from https://gitlab.com/autokent/crawler-request
* return HTML and PDF metadata with response

## 1.2.2
* co dependency removed.

## 1.2.0 - 1.2.1
* files organized.

## 1.1.9
* pdf parsing issue fixed.

## 1.1.3 - 1.1.8
* files organized.

## 1.1.1 & 1.1.2
* ci token security issue fixed

## 1.1.0
* initial release