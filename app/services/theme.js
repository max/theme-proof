import Ember from 'ember';

export default Ember.Service.extend({
  name: 'theme-a',

  setTheme(theme) {
    this.set('name', theme);
  }
});
