import fs from 'fs';
import path from 'path';
import url from 'url';
import glob from 'glob';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

const main = () => {
    const root = path.join(dirname, '..');
    const svgFiles = glob.sync(`${root}/src/**/*.svg`, {nodir: true});
    svgFiles.forEach(file => {
        const suffix = file.slice(`${root}/src/`.length);
        fs.cpSync(file, `${root}/es/${suffix}`)
    });
};

main();
