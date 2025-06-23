const RedWidgetOffer = require('../offers/RedWidgetOffer');

const availableOffers = {
  buy_red_get_2nd_half_price: RedWidgetOffer,
};

class OfferFactory {
  static create(key) {
    const OfferClass = availableOffers[key];
    if (!OfferClass) {
      throw new Error(`Unknown offer key: ${key}`);
    }
    return new OfferClass(); // enforcement happens inside constructor
  }
}

module.exports = OfferFactory;
