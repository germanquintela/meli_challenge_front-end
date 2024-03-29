module.exports = api => {
  const presets = [['next/babel']];
  const plugins = [['styled-components'], ['inline-react-svg']];

  if (api.env('production')) {
    plugins.push(['babel-plugin-jsx-remove-data-test-id']);
  }

  return {
    presets,
    plugins,
  };
};
