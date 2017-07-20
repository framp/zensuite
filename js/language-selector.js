(function(){
  var valueOf = function(element){
    return $(element).val();
  }
  var redirectMaybe = function(currentLanguage, newLanguage, defaultLanguage){
    newLanguage = newLanguage.replace(defaultLanguage, '');
    if (newLanguage === currentLanguage)
      return;
    var path = location.pathname;
    path = path.replace('/' + currentLanguage, '/' + newLanguage + (!currentLanguage ? '/' : ''));
    path = path.replace('//', '/');
    location.href = path;
  }
  
  var languageSelector = $('#language');
  var languages = languageSelector.find('option').toArray().map(valueOf);
  
  var defaultLanguage = 'en-US';
  var selectedLanguage = store.get('language') || '';
  var currentLanguage = location.pathname.substr(1, 5);
  if (languages.indexOf(currentLanguage) === -1) 
    currentLanguage = '';
  //If not already stored in the browser, try to guess
  if (!selectedLanguage){
    //TODO: use accept header instead of navigator.language maybe?
    //http://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
    var userLang = (navigator.language || navigator.userLanguage || 'en-us').toLowerCase();
    selectedLanguage = defaultLanguage;
    if (userLang.match(/^it/))
      selectedLanguage = 'it-IT';
    if (languages.indexOf(currentLanguage) === -1)
      selectedLanguage = defaultLanguage;
    store.set('language', selectedLanguage);
  }
  if (languages.length)
    redirectMaybe(currentLanguage, selectedLanguage, defaultLanguage);
  
  languageSelector.on('change', function() {
    var newLanguage = languageSelector.val();
    store.set('language', newLanguage);
    redirectMaybe(currentLanguage, newLanguage, defaultLanguage);
  });
  
  languageSelector.val(selectedLanguage);
})()