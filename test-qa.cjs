const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function runStudioQA() {
  console.log('=====================================================');
  console.log('PROJECT 09: OBJECTS & STORIES — COMPREHENSIVE QA AUDIT');
  console.log('=====================================================');

  let passedChecks = 0;
  let failedChecks = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✓ [PASS] ${message}`);
      passedChecks++;
    } else {
      console.error(`  ✗ [FAIL] ${message}`);
      failedChecks++;
    }
  }

  // 1. Production Build & Assets Check
  console.log('\n[1/5] Verifying Production Build & Assets...');
  assert(fs.existsSync('./dist/index.html'), 'dist/index.html exists');
  const indexHtml = fs.readFileSync('./dist/index.html', 'utf8');
  assert(indexHtml.includes('OBJECTS & STORIES'), 'dist/index.html contains masthead publication title');
  assert(indexHtml.includes('id="root"'), 'dist/index.html contains #root mounting div');
  assert(indexHtml.includes('Cormorant+Garamond'), 'dist/index.html contains Cormorant Garamond font link');
  assert(indexHtml.includes('Libre+Bodoni'), 'dist/index.html contains Libre Bodoni font link');
  assert(indexHtml.includes('Plus+Jakarta+Sans'), 'dist/index.html contains Plus Jakarta Sans font link');

  const assets = fs.readdirSync('./dist/assets');
  const jsChunk = assets.find(f => f.endsWith('.js'));
  const cssChunk = assets.find(f => f.endsWith('.css'));
  assert(Boolean(jsChunk), `Compiled JavaScript bundle exists (${jsChunk})`);
  assert(Boolean(cssChunk), `Compiled CSS stylesheet exists (${cssChunk})`);

  // 2. Original AI-Generated Studio Image Check
  console.log('\n[2/5] Verifying Original Generated & Studio Assets...');
  assert(fs.existsSync('./public/images/ceramic-vessel.jpg'), 'public/images/ceramic-vessel.jpg exists');
  const vesselStat = fs.statSync('./public/images/ceramic-vessel.jpg');
  assert(vesselStat.size > 100000, `AI-generated ceramic vessel still life is high resolution (${Math.round(vesselStat.size / 1024)} KB)`);

  // 3. Source Code Architecture & Data Model Integrity
  console.log('\n[3/5] Verifying Data Model & Editorial Content...');
  const dataContent = fs.readFileSync('./src/data/objectsData.ts', 'utf8');
  
  // Verify 12 objects exist
  const objMatches = dataContent.match(/id:\s*['"]([^'"]+)['"]/g) || [];
  assert(objMatches.length >= 12, `All 12 design objects defined in registry (${objMatches.length} found)`);

  assert(dataContent.includes('kanso-iron-kettle'), 'Contains Kanso Nambu Cast Iron Kettle monograph');
  assert(dataContent.includes('orix-bench'), 'Contains Orix Smoked Oak & Basalt Bench monograph');
  assert(dataContent.includes('vesper-lamp'), 'Contains Vesper Bronze & Alabaster Lamp monograph');
  assert(dataContent.includes('grogg-stoneware'), 'Contains Grogg Slip-Cast Stoneware Vessel monograph');
  assert(dataContent.includes('scribe-brass-tool'), 'Contains Scribe Solid Brass Measuring Instrument monograph');
  assert(dataContent.includes('strata-glass-vessel'), 'Contains Strata Borosilicate Charcoal Vessel monograph');
  assert(dataContent.includes('torsion-lounge-chair'), 'Contains Torsion Bent Ash Lounge Chair monograph');
  assert(dataContent.includes('nocturne-pendant'), 'Contains Nocturne Fluted Opal Pendant monograph');
  assert(dataContent.includes('tenon-cypress-caddy'), 'Contains Tenon Hinoki Cypress Bath Caddy monograph');
  assert(dataContent.includes('curva-aluminum-tray'), 'Contains Curva Bead-Blasted Aluminum Tray monograph');
  assert(dataContent.includes('terracotta-mortar'), 'Contains Volcanic Andesite & Terracotta Mortar monograph');
  assert(dataContent.includes('resona-felt-screen'), 'Contains Resona Acoustic Wool Felt Screen monograph');

  // Verify Fictional Studio Indicators
  assert(dataContent.includes('Fictional Concept'), 'Clearly identifies conceptual products as fictional');
  assert(dataContent.includes('isAiGenerated: true'), 'Discloses AI-generated asset on Grogg stoneware');

  // 4. Accessibility & Anti-AI Slop CSS Checks
  console.log('\n[4/5] Verifying Accessibility & CSS Engineering...');
  const cssContent = fs.readFileSync('./src/index.css', 'utf8');
  assert(cssContent.includes('prefers-reduced-motion'), 'Includes prefers-reduced-motion media query');
  assert(cssContent.includes('.drop-cap'), 'Includes editorial drop-cap styling');

  const modalContent = fs.readFileSync('./src/components/LightboxModal.tsx', 'utf8');
  const drawerContent = fs.readFileSync('./src/components/QuickViewDrawer.tsx', 'utf8');
  assert(
    modalContent.includes('role="dialog"') && 
    modalContent.includes('aria-modal="true"') && 
    drawerContent.includes('role="dialog"') && 
    drawerContent.includes('aria-modal="true"'),
    'Modal and drawer implement ARIA dialog semantics'
  );

  // 5. Live Preview Server Verification
  console.log('\n[5/5] Testing Live Preview Server Response (HTTP 200)...');
  const previewProcess = spawn('npx', ['vite', 'preview', '--port', '4179'], {
    shell: true,
    stdio: 'pipe',
  });

  // Give the preview server 2.5 seconds to start
  await new Promise(r => setTimeout(r, 2500));

  try {
    const res = await new Promise((resolve, reject) => {
      http.get('http://localhost:4179/', (response) => {
        let body = '';
        response.on('data', chunk => body += chunk);
        response.on('end', () => resolve({ statusCode: response.statusCode, body }));
      }).on('error', reject);
    });

    assert(res.statusCode === 200, `Vite preview server returned HTTP ${res.statusCode} OK`);
    assert(res.body.includes('OBJECTS & STORIES'), 'Response contains masthead HTML');

    // Test static image serve
    const imgRes = await new Promise((resolve, reject) => {
      http.get('http://localhost:4179/images/ceramic-vessel.jpg', (response) => {
        resolve({ statusCode: response.statusCode, contentType: response.headers['content-type'] });
      }).on('error', reject);
    });

    assert(imgRes.statusCode === 200, `Image asset served with HTTP ${imgRes.statusCode} OK (${imgRes.contentType})`);
  } catch (err) {
    console.error('Preview server test encountered an error:', err.message);
    failedChecks++;
  } finally {
    // Kill preview process
    previewProcess.kill();
  }

  console.log('\n=====================================================');
  console.log(`AUDIT SUMMARY: ${passedChecks} CHECKS PASSED, ${failedChecks} FAILED`);
  console.log('=====================================================');

  if (failedChecks > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runStudioQA().catch(err => {
  console.error('QA Script Error:', err);
  process.exit(1);
});
