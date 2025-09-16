# Exploring OpenAPI Explorer

[Issue 288 demo](288) (resolved):  info headings not being navigable.  Plus H1 headings not shifting the highlight, also fixed.

[Issue 289 demo](289) (fixed):  request body example descriptions not changing with the example.

[Not handing <<-style merge keys demo](mergekey) ([github issue
290](https://github.com/Authress-Engineering/openapi-explorer/issues/290), closed with no action
taken but a good explanation): the YAML parser not supporting merge keys, an originally-optional
now-obsolete extension to the YAML spec which I grew to rely on :-(

[Wrong default for parameter `explode` demo](explode): assuming a default of 'false' for 'explode'
on query parameters when it [weas true in
3.0](https://swagger.io/docs/specification/v3_0/serialization/#query-parameters) and [might be the
same in 3.1](https://swagger.io/specification/#parameter-object).

<hr/>

[Source repo](https://github.com/andrewdonkin/oae) if you are
looking at the github.io page.
[github.io page](https://andrewdonkin.github.io/oae/) if you are
looking at the source repo.


