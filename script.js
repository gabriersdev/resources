"use strict"

(() => {
  const resources = {
    'resume': '',
    'portfolio': '',
    'linkedin': '',
    'github-profile': '',
    'gist-profile': '',
  }

  const params = new URL(window.location).searchParams
  if (params.has('resource') && params.get('resource').toLowerCase() in resources) {
    
  } else if (params.has('resource') && !(params.get('resource').toLowerCase() in resources)) {
    alert('There is no action for the reported resource! Redirecting to github.io/gabriersdev...')
    setTimeout(() => { window.location.href = 'https://www.github.com/gabriersdev' }, 3000)
  } else {
    alert('Valid parameter not provided! Redirecting to github.io/gabriersdev...')
    setTimeout(() => { window.location.href = 'https://www.github.com/gabriersdev' }, 3000)
  }
})();