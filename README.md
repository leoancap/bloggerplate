# Rescript / Relay / Ancestor / Prisma / Typegraphql / NextJs Starter Project

This is a NextJS based template with following setup:

- Apollo-server-micro to serve the generated Typegraphql-prisma schema
- [ReScript](https://rescript-lang.org) + React
- Rescript-Relay to deal with server data
- Some ReScript Bindings for Next to get you started

## Development

Run ReScript in dev mode:

```
yarn res:watch
```

In another tab, run the Relay-Compiler:

```
yarn relay:watch
```

In another tab, run the Next dev server:

```
yarn dev
```

Update the typegraphql schema:

```
yarn prisma:gen
```


