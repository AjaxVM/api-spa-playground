# api-spa-playground API
Documentation for the API.

## Deployments
Deployments are hosted at Vercel.
After much frustration/attempts I have settled on a basic setup that just ships the typescript files and configures Vercel to treat it as a build and send routes to it.
This is not ideal, as it is running the typescript directly, as opposed to having a build step.

Part of the reason for this is that Vercel is running serverless runners, and expects that we are exporting a handler for each function for it to do the routing and such. I do not want this, I want to use Express to handle routing and such. Because of this, it is limited in terms of finding the serverless functions properly.
We also cannot use the builds/routes combo if we want to use an actual build step (Vercel is not executing `npm run build` because we have builds configured - it is there for reference), so we can't point to the distributed JS files.

Also, we are using builds and routes in `vercel.json`, which are considered legacy, but encountered some frustration/futility in configuring the functions attribute against our TS files.