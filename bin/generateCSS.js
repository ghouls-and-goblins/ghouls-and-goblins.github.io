export default `concurrently \"node-sass -o public src/scss/pages/ghouls--1.scss\"
    \"node-sass -o public src/scss/pages/ghouls--contrast.scss\"
    \"node-sass -o public src/scss/pages/ghouls--dark.scss\"
    \"node-sass -o public src/scss/pages/ghouls--high-contrast-dark.scss\"
    \"node-sass -o public src/scss/pages/ghouls--high-contrast-light.scss\"
    \"node-sass -o public src/scss/pages/ghouls--keyboard.scss\"`;
