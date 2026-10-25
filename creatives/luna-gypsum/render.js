const { chromium } = require('playwright');
(async () => {
  const dir = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 985 }, deviceScaleFactor: 2 });
  await p.goto('file://' + dir + '/luna-gypsum.html');
  await p.waitForTimeout(300);
  await p.screenshot({ path: dir + '/luna-gypsum-10w-smart-cct.png' });
  await b.close();
})();
