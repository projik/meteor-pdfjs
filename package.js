import PackageHelper from 'package-helper.js';

Package.describe({
  name: "jbcase:pdfjs",
  summary: "PDF rendering for your Meteor application (client only)",
  version: "1.1.114",
  git: "https://github.com/jbcase/meteor-pdfjs"
});

Package.on_use(function (api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.add_files(['build/pdf.js', 'web/compatibility.js'], 'client');
  api.add_files(['web/viewer.js', 'web/viewer.css']);
  api.add_files(['build/pdf.worker.js', 'web/compatibility.js', 'web/viewer.html', 'web/l10n.js'],'client', {isAsset: true});
  api.add_files(PackageHelper.allFilesInDir('web/images'), 'client', {isAsset: true}); 
  api.add_files(PackageHelper.allFilesInDir('web/cmaps'), 'client', {isAsset: true}); 
  api.add_files(PackageHelper.allFilesInSubfolders('web/locale'), 'client', {isAsset: true});
  api.export('PDFJS'); 
});
