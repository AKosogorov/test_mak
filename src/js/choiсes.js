window.addEventListener('DOMContentLoaded', function() {

  // данные
  const regions = {
    tyumen: [
      'Тюмень',
      'Сургут',
      'Нижневартовск',
      'Нефтеюганск',
      'Новый Уренгой',
      'Ноябрьск',
      'Тобольск',
      'Ханты-Мансийск',
      'Ишим',
      'Когалым'
    ],

    kurgan: [
      'Курган',
      'Шадринск'
    ],

    omsk: [
      'Омск',
      'Тара'
    ],

    tomsk: [
      'Томск',
      'Северск',
      'Стрежевой'
    ]
  };

  // selects
  const selectRegion = document.querySelector('.select-region');
  const selectCity = document.querySelector('.select-city');

  const choicesRegion = new Choices(selectRegion, {
    position: 'bottom',
    searchEnabled: false,
    itemSelectText: '',
  });

  const choicesCity = new Choices(selectCity, {
    position: 'bottom',
    noResultsText: 'Нет результатов',
    noChoicesText: 'Выберете регион',
    itemSelectText: '',
  });

  choicesCity.disable();
  choicesCity.setValue(['Выберите регион']);

  selectRegion.addEventListener('choice', event => {
    let region;

    switch(event.detail.choice.value) {
      case('Курганская'):
        region = regions.kurgan;
        break
      case('Тюменская'):
        region = regions.tyumen;
        break
      case('Омская'):
        region = regions.omsk;
        break
      case('Томская'):
        region = regions.tomsk;
        break
    };

    choicesCity.clearStore();
    choicesCity.setValue(region);
    choicesCity.enable();
  });

  // кнопки
  const btnAdd = document.querySelector('.btn--add');
  const btnClean = document.querySelector('.btn--clean');
  const list = document.querySelector('.list');

  btnAdd.addEventListener('click', () => {
    const city = choicesCity.getValue().value;

    if (city === 'Выберите регион') return

    const region = choicesRegion.getValue().value;

    const li = document.createElement('li');
    li.classList.add('list__item', 'hero__item');
    li.textContent = `${region} область, г. ${city}`;

    list.append(li);
  });

  btnClean.addEventListener('click', () => {
    list.innerHTML = ''
  });
});
