//init
getLocation()
    .then(assignPosition)
    .then(generateUrl)
    .then(request)
    .then(infoUi)
    .then(compareSunsetTime);