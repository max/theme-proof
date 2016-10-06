import Ember from 'ember';
import Themeable from 'theme-proof/mixins/themeable';

export default Ember.Component.extend(Themeable, {
  localClassNames: ['fancy-pants'],
});
