import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | test/nested', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:test/nested');
    assert.ok(route);
  });
});
