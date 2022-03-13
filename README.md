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
