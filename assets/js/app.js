// Replaced '' into ``
const baseEndpoint = `https://api.github.com`;
const usersEndpoint = `${baseEndpoint}/users`;
// Improved readability
const $name = document.querySelector('.name');
// Cahnged # to . on blog
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

// Added async and a try - catch declaration
async function displayUser(username) {
  try {
    $name.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();

// Removed data call of name, blog and location
    $name.textContent = data.name;
    $blog.textContent = data.blog;
    $location.textContent = data.location;
  } catch (error) {
    handleError(error);
  }
  }

  // Improved readability
function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  // Calling name 
  $name.textContent = `Algo salió mal: ${error}`
}

displayUser('stolinski').catch(handleError);