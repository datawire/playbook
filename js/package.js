
Package.describe({
  name    : 'semantic:ui-icon',
  summary : 'Semantic UI - Icon: Single component release',
  version : '2.1.6',
  git     : 'git://github.com/Semantic-Org/UI-Icon.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    '../css/icon.css',
    '../css/assets/fonts/icons.eot',
    '../css/assets/fonts/icons.svg',
    '../css/assets/fonts/icons.ttf',
    '../css/assets/fonts/icons.woff',
    '../css/assets/fonts/icons.woff2'
  ], 'client');
});
