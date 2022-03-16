# SAC Research Group

URL: https://users.encs.concordia.ca/~sac

This is the source code for SAC Research Group homepage.

The group is based at Concordia University, Montreal, QC.

## Requirements

Current nodejs stable or nodejs latest.

## Development

1. Clone, change dir, install node dependencies

    ```sh
    git clone https://github.com/aaanh/sac-home && cd sac-home && npm i
    ```

2. Start dev server

    ```sh
    npm run dev
    ```

3. Build for nodejs serving

    ```sh
    npm run build
    ```

4. Export for static html

    ```sh
    npx next export
    ```

5. CSS Pathing

    In `index.html`, for all link tags, add `.` in at the beginning of `href` url.

    Or run this shell command:

    ```sh
    sed -i 's;/_next;./_next' ./out/index.html
    ```

6. `scp` or `rsync` to homedir of web server (ENCS)

    ```sh
    scp /path/to/local/build-and-export/output-folder <encs-account>@computation.encs.concordia.ca:/www/groups/s/sac
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
-   Professor Liu has custom content layout with custom data in the case of `brief_intro` attribute. For the CSS to render correctly, tailwind must be configured to encompass the data folder.

Based on this data design template, the other data objects should follow suite.
