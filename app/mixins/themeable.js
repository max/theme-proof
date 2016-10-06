import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Mixin.create({
  classNameBindings: ['themeClass'],
  theme: inject.service(),

  themeClass: computed('theme', function() {
    const theme = this.get('theme.name');
    return this.get(`styles.${theme}`);
  })
});
