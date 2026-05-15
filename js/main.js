/* main.js
   Данные для карточек и простые интеракции страниц. */

(function () {
    'use strict';

    /* Карточки блока на главной. */
    const plantsNow = [
        {
            img:    'img/plants/anemone.jpg',
            name:   'Анемона дубравная | Alba Plena',
            period: 'апрель — май',
            light:  'полутень',
            height: '5 см',
            price:  '700 ₽',
        },
        {
            img:    'img/plants/syringa.jpg',
            name:   'Бадан сердцелистный | Bressingham White',
            period: 'май',
            light:  'полутень / тень / свет',
            height: '30 см',
            price:  '590 ₽',
        },
        {
            img:    'img/plants/phlox.jpg',
            name:   'Рододендрон Даурский',
            period: 'апрель — июнь',
            light:  'полутень / свет',
            height: '2 м',
            price:  '2500 ₽',
        },
        {
            img:    'img/plants/landysh.jpg',
            name:   'Ландыш майский',
            period: 'май',
            light:  'полутень / тень / свет',
            height: '20 см',
            price:  '320 ₽',
        },
        {
            img:    'img/plants/crocus.png',
            name:   'Крокус | Jeanne d’Arc',
            period: 'март - апрель',
            light:  'свет / полутень',
            height: '8 - 15 см',
            price:  '350 ₽',
        },
        {
            img:    'img/plants/grey_spirea.jpg',
            name:   'Спирея Серая | Grefsheim',
            period: 'май - июнь',
            light:  'свет / полутень',
            height: '1,5 - 2 м',
            price:  '850 ₽',
        },
        {
            img:    'img/plants/lilac.jpg',
            name:   'Сирень | Красавица Москвы',
            period: 'май - июнь',
            light:  'свет',
            height: '3 - 4 м',
            price:  '670 ₽',
        },
    ];

    /* Один шаблон для обеих подборок с карточками. */
    const renderCards = (container, data) => {
        if (!container) return;
        container.innerHTML = data.map((p) => `
            <article class="card">
                <div class="card__media">
                    <img class="card__photo" src="${p.img}" alt="${p.name}" loading="lazy">
                    <button class="card__fav" type="button" aria-label="В избранное">
                        <img src="img/icons/favorites.svg" alt="" aria-hidden="true">
                    </button>
                    <button class="card__cart" type="button" aria-label="В корзину">
                        <img src="img/icons/cart.svg" alt="" aria-hidden="true">
                    </button>
                </div>
                <div class="card__body">
                    <h3 class="card__name">${p.name}</h3>
                    <ul class="card__info">
                        <li class="card__info-row">
                            <img class="card__info-icon" src="img/icons/calendar.svg" alt="">
                            <span>${p.period}</span>
                        </li>
                        <li class="card__info-row">
                            <img class="card__info-icon" src="img/icons/light.svg" alt="">
                            <span>${p.light}</span>
                        </li>
                        <li class="card__info-row card__info-row--price">
                            <span class="card__meta">
                                <img class="card__info-icon" src="img/icons/pot.svg" alt="">
                                ${p.height}
                            </span>
                            <span class="card__price">${p.price}</span>
                        </li>
                    </ul>
                </div>
            </article>
        `).join('');
    };

    /* Подборка для страницы каталога. */
    const plantingTime = [
        { img: 'img/plants/vinca.png',    name: 'Барвинок малый | Blue and Gold',      period: 'май — июнь',    light: 'полутень / тень', height: '10–20 см', price: '650 ₽' },
        { img: 'img/plants/cherry.jpg',   name: 'Черемуха виргинская | Shubert',        period: 'май',           light: 'свет / полутень', height: '4–8 м',    price: '1 500 ₽' },
        { img: 'img/plants/hosta.png',    name: 'Хоста | Big Daddy',                    period: 'июль — август', light: 'тень / полутень', height: '60–65 см', price: '1 200 ₽' },
        { img: 'img/plants/astilbe.png',  name: 'Астильба | Country and Western',       period: 'июль',          light: 'полутень / тень', height: '30–60 см', price: '890 ₽' },
    ];

    /* Категории каталога. */
    const categoriesList = [
        { img: 'img/categories/trees.jpg',       name: 'Декоративные деревья' },
        { img: 'img/categories/shrubs.jpg',      name: 'Декоративные кустарники' },
        { img: 'img/categories/conifers.jpg',    name: 'Хвойные растения' },
        { img: 'img/categories/bulbs.jpg',       name: 'Луковичные' },
        { img: 'img/categories/grasses.jpg',     name: 'Злаки' },
        { img: 'img/categories/groundcover.jpg', name: 'Почвопокровные' },
        { img: 'img/categories/perennials.jpg',  name: 'Многолетники' },
        { img: 'img/categories/lianas.jpg',      name: 'Лианы' },
    ];

    /* Категории собираются простой сеткой из картинки и подписи. */
    const renderCategories = (container, data) => {
        if (!container) return;
        container.innerHTML = data.map((c) => `
            <a href="#" class="cat-card">
                <img class="cat-card__img" src="${c.img}" alt="${c.name}" loading="lazy">
                <div class="cat-card__label">${c.name}</div>
            </a>
        `).join('');
    };

    /* Фото для полосы с садами пользователей. */
    const gardensList = [
        {
            img: 'img/gardens/anna-garden.jpg',
            alt: 'Сад в Сестрорецке',
            name: 'Яктушева Анна',
            review: 'Сад получился именно таким, о каком мечтаешь долгими зимними вечерами: живым, мягким, наполненным цветом и настроением. Растения из питомника прекрасно прижились, и теперь каждый уголок выглядит продуманным, но совсем не нарочитым. Спасибо за эту красоту, которая с каждым днем становится только лучше.',
            avatar: 'img/gardens/garden-avatar-1.jpg',
        },
        {
            img: 'img/gardens/mikhail-garden.jpg',
            alt: 'Сад во Всеволожске',
            name: 'Бержева Инга',
            review: 'Покупка растений у вас стала одним из лучших решений для нашего сада. Все прижилось превосходно, растения выглядят здоровыми, выразительными и уже создают ту самую атмосферу ухоженного, зрелого сада. Спасибо за качество, которому действительно хочется доверять.',
            avatar: 'img/gardens/garden-avatar-2.jpg',
        },
        {
            img: 'img/gardens/olga-garden.jpg',
            alt: 'Сад в Парголово',
            name: 'Кинчев Георгий',
            review: 'Мне хотелось, чтобы сад выглядел естественно и благородно, будто он всегда был здесь. Так и вышло. Растения прижились чудесно, выросли сильными и гармонично сложились в очень красивое пространство. Спасибо питомнику за качество, вкус и то редкое чувство, когда результат оказывается даже лучше ожиданий.',
            avatar: 'img/gardens/garden-avatar-3.jpg',
        },
        {
            img: 'img/gardens/nona-garden.jpg',
            alt: 'Сад в Сестрорецке',
            name: 'Бажевская Нона',
            review: 'С тех пор как в саду появились ваши растения, он словно обрел собственный голос. Все выглядит удивительно цельно, спокойно и по-настоящему красиво. Очень благодарна питомнику за прекрасный посадочный материал и за то, что помогли создать место, куда хочется выходить каждое утро с чашкой чая.',
            avatar: 'img/gardens/garden-avatar-4.jpg',
        },
        {
            img: 'img/gardens/andrey-garden.jpg',
            alt: 'Сад во Всеволожске',
            name: 'Климов Андрей',
            review: 'Теперь у нас не просто участок, а настоящий сад — живой, уютный и очень красивый. Ваши растения прекрасно адаптировались, быстро пошли в рост и удивительно хорошо смотрятся вместе. Спасибо питомнику за внимательный подход и за красоту, которая останется с нами надолго.',
            avatar: 'img/gardens/garden-avatar-5.jpg',
        },
    ];

    /* Полоса садов рендерится отдельно, чтобы не дублировать HTML. */
    const renderGardens = (container, data) => {
        if (!container) return;
        container.innerHTML = data.map((g) => `
            <article class="gardens__item" tabindex="0" aria-label="${g.alt}">
                <img src="${g.img}" alt="${g.alt}" loading="lazy">
                <div class="gardens__overlay">
                    <div class="gardens__avatar-box">
                        <img class="gardens__avatar" src="${g.avatar}" alt="${g.name}" loading="lazy">
                    </div>
                    <div class="gardens__content">
                        <h3 class="gardens__name">${g.name}</h3>
                        <p class="gardens__text">${g.review}</p>
                    </div>
                </div>
            </article>
        `).join('');
    };

    /* Контейнер для тостов создаётся один раз. */
    let toastHost = null;

    const showToast = (text) => {
        if (!toastHost) {
            toastHost = document.createElement('div');
            toastHost.className = 'toast-host';
            document.body.appendChild(toastHost);
        }
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = text;
        toastHost.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('is-visible'));
        setTimeout(() => {
            toast.classList.remove('is-visible');
            setTimeout(() => toast.remove(), 300);
        }, 1600);
    };

    /* Один обработчик работает и для уже готовых, и для новых карточек. */
    const initCardActions = () => {
        document.addEventListener('click', (e) => {
            // Тут просто переключается состояние избранного.
            const favBtn = e.target.closest('.card__fav');
            if (favBtn) {
                e.preventDefault();
                favBtn.classList.toggle('is-active');
                return;
            }
            // Пока без корзины, только локальное уведомление.
            const cartBtn = e.target.closest('.card__cart');
            if (cartBtn) {
                e.preventDefault();
                const card = cartBtn.closest('.card');
                const name = card?.querySelector('.card__name')?.textContent.trim() || 'Товар';
                showToast(`✓ ${name} — в корзине`);
            }
        });
    };

    /* Плавный скролл нужен только для внутренних якорей. */
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach((a) => {
            const href = a.getAttribute('href');
            if (href.length < 2) return;
            a.addEventListener('click', (e) => {
                const target = document.querySelector(href);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    };

    /* Каждая страница использует только свои контейнеры. */
    document.addEventListener('DOMContentLoaded', () => {
        renderCards(document.getElementById('bloomNow'), plantsNow);
        renderGardens(document.getElementById('gardensList'), gardensList);
        renderCategories(document.getElementById('categoriesList'), categoriesList);
        renderCards(document.getElementById('plantingTime'), plantingTime);
        initCardActions();
        initSmoothScroll();
    });
})();
