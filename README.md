## objective of pullsnap

The goal of this project is to create a customized banner to highlight your contributions through pull requests in open-source projects hosted on GitHub. With this tool, you'll be able to showcase your achievements and involvement in the developer community in a unique and engaging way.

## Configuring Environment Variables

1.  Access this link for information on how to create a Personal Access Token on GitHub.

2.  Make sure to grant the token the necessary permissions to access the specific resources your project requires.

3. Copy the generated token to your clipboard.

4.  In the root directory of this project, create a file named .env if it doesn't already exist.

5.  Inside the .env file, add your environment variables in the following format:


```js
NEXT_PUBLIC_GITHUB_TOKEN=YOUR_PERSONAL_ACCESS_KEY_HERE
```

6. Replace YOUR_PERSONAL_ACCESS_KEY_HERE with the Personal Access Token you generated on GitHub and set other environment variables as needed.

7. Ensure you add the .env file to your .gitignore so that it is not included in commits and kept secure.

8. Save the .env file.

## Getting Started

First, run the development server:

you
```bash
yarn && yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
123 123
