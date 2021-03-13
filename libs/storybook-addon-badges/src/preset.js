function managerEntries(entry = []) {
  return [...entry, require.resolve('./storybook-addon-badges.esm.js')];
}

module.exports = { managerEntries };
