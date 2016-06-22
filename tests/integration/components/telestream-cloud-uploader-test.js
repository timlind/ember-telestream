import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('telestream-cloud-uploader', 'Integration | Component | telestream cloud uploader', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{telestream-cloud-uploader}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#telestream-cloud-uploader}}
      template block text
    {{/telestream-cloud-uploader}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
