fetch('/version-control.config')
  .then(response => response.text())
  .then(text => {
    const currentVersion = '1.0.0';
    if (version !== currentVersion) {
      console.log('This is an old version of the site.');
    } else {
      console.log('The site is up-to-date.');
    }
  })
  .catch(error => console.error('Error fetching version.txt:', error));
