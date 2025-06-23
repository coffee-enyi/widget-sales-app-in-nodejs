class OfferInterface {
  constructor() {
    if (this.constructor === OfferInterface) {
      throw new Error('OfferInterface is abstract and cannot be instantiated directly');
    }
    if (typeof this.applyTo !== 'function') {
      throw new Error('Classes extending OfferInterface must implement applyTo()');
    }
  }
}

module.exports = OfferInterface;