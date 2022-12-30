Trying to clone chatgpt

![Alt Text](https://media.giphy.com/media/kGd4loNLGfJXqafsCF/giphy.gif)

```

// Generates statically like getStaticProps.
fetch(URL, { cache: 'force-cache' });

// Generates server-side upon every request like getServerSideProps.
fetch(URL, { cache: 'no-store' });

// Generates statically but revalidates every 20 seconds
fetch(URL, { next: { revalidate: 20 } });

```
