const linksSocialMedia = {
  github: 'GuilhermeCardoso93',
  linkedin: 'in/guilherme-cardoso-35710b103/',
  instagram: 'guicardoso93',
  facebook: 'gui1cs',
  twitter: 'cardoso_gui'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
