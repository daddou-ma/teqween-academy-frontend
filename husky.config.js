const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks(['yarn eslint-pretest', 'yarn flow-pretest']),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
