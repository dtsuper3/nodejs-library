import puppeteer from "puppeteer";
import path from "path";
import { OUT_FILE_PATH } from "../constants";
async function generateWebpageScreenshot(options = {}, filename = "chart.png") {
    const filepath = path.join(OUT_FILE_PATH, filename);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // load billboard.js assets from CDN
    await page.addStyleTag({ url: "https://cdn.jsdelivr.net/npm/billboard.js/dist/theme/datalab.min.css" });
    await page.addScriptTag({ url: "https://cdn.jsdelivr.net/npm/billboard.js/dist/billboard.pkgd.min.js" });

    await page.evaluate(options => {
        (window as any).bb.generate(options);
    }, options);

    const content = await page.$(".bb");

    // https://pptr.dev/#?product=Puppeteer&show=api-pagescreenshotoptions
    await content?.screenshot({
        path: filepath,
        // omitBackground: true
    });

    await page.close();
    await browser.close();
}

export default generateWebpageScreenshot;