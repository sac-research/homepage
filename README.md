# SAC Research Group

URL: https://users.encs.concordia.ca/~sac
Upstream preview: https://sac-home.vercel.app

This is the source code for SAC Research Group homepage.

For members, add your information by following the instructions in [CONTRIBUTING](/CONTRIBUTING).

The group is based at Concordia University, Montreal, QC.

## Requirements

Current nodejs stable or nodejs latest.

## Development

### Quickstart

- Clone the project
```
git clone https://github.com/aaanh/sac-home
```
- Install dependencies
```
npm i
```
- Start dev server
```
npm run dev
```

### Docker

Containerize and build with Docker is a good step to test if your changes are ready to deployed to production. Because all if any errors and lint violations will be caught during the build step.

> ⚠ Building the image might take a while and a considerable amount of network traffic due to lack of optimization from Nextjs official image.
>  
> 🛑 As of last testing on 2022-05-31, the build steps are throwing an arbitrary error, currently investigating.


```
docker build . -t sac-home && docker run -dp 3000:3000 sac-home --name sac-home-test-server
```

- To stop, delete container, delete image

```
docker stop sac-home-test-server && docker container rm sac-home-test-server && docker image rm sac-home-test-server
```


## Data Structure and Design Rationale

Take for example the members being listed on the site.

1.  The `member` object literal is created and initialized in `/data/members.js`
1.  The return function has an array of `member` objects which is then exported from the data module.
1.  The `member` object array is then imported into a page or component, which is the case of `/pages/members.js`
1.  Array of `member` objects is then mapped to systematically generate the entries displayed on the rendered `localhost:3000/members` page.

There are few details to remember:

-   There are several layers to map:
    -   Layer 0: Mapping function with conditional for `member.type`, i.e. member is faculty | grad | undergrad | etc.
    -   Layer 1: Within mapping function, there are conditionals to render the attributes based on whether or not the attribute is instantiated in the database.
    -   Layer 2: Several attributes are in form of array, so there are mapping functions for those as well, like in the case of `projects`
-   Professor Liu has custom content layout with custom data in the case of `brief_intro` attribute. For the CSS to render correctly, tailwind must be configured to encompass the data folder. `Moving to deprecate this type of data as it does not play well with dynamic routing`

Based on this data design template, the other data objects should follow suite.
