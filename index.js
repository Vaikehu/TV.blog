const card = (title, description, image) => `
  <div class="col-lg-4 col-sm-12">
    <div class="card mb-5 shadow-sm">
      <img src= ${image} class="img-fluid" />

      <div class="card-body">
        <div class="card-title">
          <h2>${title}</h2>
        </div>
        <div class="card-text">
          <p>
            ${description}
          </p>
        </div>
        <a href="#" class="btn btn-outline-info rounded-0 float-end">Read More</a>
        </div>
      </div>
    </div>
  </div>
`;

(async () => {
  const apiData = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json());

  const myData = [
    {
      title: 'LUNDI',
      description:
        'UNIVER DU WEB <br> Découvert du deuxieme module avec notre Formation FABRICE, puis initiation du navigateur, des langage HTML CSS JAVASCRIP... <br>  ',
      image: 'https://picsum.photos/seed/picsum/200/300',
    },
    {
      title: 'MARDI',
      description: 'HTML_CSS_JAVASCRIPTE',
      image: 'https://picsum.photos/200/300?grayscale',
    },
    {
      title: 'MERCREDI',
      description: 'DISGNE_CSS_TEMPLATE',
      image: 'https://picsum.photos/seed/picsum/200/300',
    },
    {
      title: 'JEUDI',
      description: 'BOOTSTRAP_PORTFOLIO_BLOG <br>',
      image: 'https://picsum.photos/200/300?grayscale',
    },
    {
      title: 'VENDREDI',
      description: 'FINISH_DU_BLOG',
      image: 'https://picsum.photos/seed/picsum/200/300',
    },
  ];
  myData.forEach((post) => {
    document.getElementById((id = 'card-list')).innerHTML += card(
      post.title,
      post.description,
      post.image
    );
  });
})();
