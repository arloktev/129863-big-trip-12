import createTripInfoMarkup from './view/info';
import createTripControlsMarkup from './view/controls';
import createTripFiltersMarkup from './view/filters';
import createTripSortMarkup from './view/sort';
import createTripDays from './view/days';

function renderMarkup(container, markup, position) {
  container.insertAdjacentHTML(position, markup);
}

const tripMain = document.querySelector(`.trip-main`);
const tripContols = document.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

renderMarkup(tripMain, createTripInfoMarkup(), `afterbegin`);
renderMarkup(tripContols, createTripControlsMarkup(), `beforeend`);
renderMarkup(tripContols, createTripFiltersMarkup(), `beforeend`);
renderMarkup(tripEvents, createTripSortMarkup(), `beforeend`);
renderMarkup(tripEvents, createTripDays(), `beforeend`);
