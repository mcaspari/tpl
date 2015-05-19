Package.describe({
  name: 'mcaspari:tpl',
  version: '0.0.4',
  summary: 'Template1',
  git: 'https://github.com/mcaspari/tpl.git',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating'],'client');
  api.addFiles('template.html','client');
});
