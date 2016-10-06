import Ember from 'ember';
import ThemeableMixin from 'theme-proof/mixins/themeable';
import { module, test } from 'qunit';

module('Unit | Mixin | themeable');

// Replace this with your real tests.
test('it works', function(assert) {
  let ThemeableObject = Ember.Object.extend(ThemeableMixin);
  let subject = ThemeableObject.create();
  assert.ok(subject);
});
