function managerEntries(entry = []) {
  return [...entry, require.resolve('./storybook-addon-iframe.esm.js')];
}

module.exports = { managerEntries };
