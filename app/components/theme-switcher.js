import Ember from 'ember';

export default Ember.Component.extend({
  theme: Ember.inject.service(),

  actions: {
    setTheme(theme) {
      this.get('theme').setTheme(theme);
    }
  }
});
