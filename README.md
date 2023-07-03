# Next Auth - Github & Credentials Example

The purpose of this project is to demonstrate how to integrate NextAuth.js into your application and utilize various credential providers for authentication. It showcases the setup and configuration process for the following providers:

- Github Provider
- Credentials Provider

For any extra info refer to: [NextAuth.js Documentation](ht.tps://next-auth.js.org/getting-started/introduction)

## Providers Setup

### Github Provider

You will need to create a new Github application by going here : [github.com/settings/applications/new](https://github.com/settings/applications/new)

After you create a new app you will have to:

1. Go to [github.com/settings/developers](https://github.com/settings/developers).
2. On the right side click on `OAuth Apps`
3. Select the app you created
4. Copy the `Client ID` and save it.
5. Generate a new `Client Secret` and save it.

Now rename the file `.env.example` to `.env.local` and paste your `Client ID` and ``Client Secret` to their respective variables.

### Credentials Provider

Credentials provider doesn't really need any settings all you need to do is go to `src/configs/next-auth.ts` and implement your authentication with your database:

```ts
CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validate credentials with your database here and return the user object
        const user = {
          id: "1",
          name: "Admin",
          email: "admin@example.com",
          image: "https://avatars.githubusercontent.com/u/80968727?v=4",
          username: "admin",
          password: "admin",
        };

        if (
          credentials?.username == user.username &&
          credentials.password == user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
```

## Running The Server

**Note** : Don't forget to set your `JWT_SECRET` and `AUTH_SECRET` in `.env.local`. 

As for `NEXTAUTH_URL` you can refer to [NextAuth.js Configuration Documentation](https://next-auth.js.org/configuration/options#nextauth_url).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
