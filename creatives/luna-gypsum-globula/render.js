const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const dir = path.resolve(process.argv[2] || __dirname);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 985 }, deviceScaleFactor: 2 });
  await p.goto('file://' + dir + '/luna-gypsum-globula.html');
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  await p.screenshot({ path: dir + '/luna-gypsum-globula-10w-smart-cct.png' });
  await b.close();
})();
