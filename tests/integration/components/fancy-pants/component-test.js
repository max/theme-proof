import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fancy-pants', 'Integration | Component | fancy pants', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fancy-pants}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fancy-pants}}
      template block text
    {{/fancy-pants}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
