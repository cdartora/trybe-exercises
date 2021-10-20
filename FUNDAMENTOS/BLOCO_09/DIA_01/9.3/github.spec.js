const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
describe('Testa getRepos com github da Trybe', () => {

  test('testa se toDoList está na lista de repos', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
  })

  test('testa se memeGenerator está na lsita de repos', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  })

  test('testa em caso de falso positivo'), async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repos).toContain('test');
  };
});