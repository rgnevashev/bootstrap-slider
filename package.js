Package.describe({
  name: 'rgnevashev:bootstrap-slider',
  version: '6.0.6',
  summary: 'a slider element for bootstrap 2/3',
  git: 'https://github.com/seiyria/bootstrap-slider',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  //api.versionsFrom('1.2.1');
  api.addFiles([
    "dist/bootstrap-slider.js",
    "dist/css/bootstrap-slider.css"
  ], 'client');
});
