module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['.stories.jsx', '/fixture/'],
  setupFiles: [
    '<rootDir>/config/jest/register-context.js',
    `<rootDir>/config/jest/loadershim.js`
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.js'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|mobile-app|static|www|docs|node_modules|scripts|.cache|public)[/\\\\]'
  ],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': `<rootDir>/config/jest/jest-preprocess.js`,
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/file-transform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
    `node_modules/(?!(gatsby)/)`,
    `\\.cache`
  ],
  globals: {
    __PATH_PREFIX__: ``
  },
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/config/jest/mock/file-mock.js`,
    '\\.svg$': '<rootDir>/config/jest/mock/svg.js',
    'Primitive/(.*)$': '<rootDir>/src/components/Primitive/$1',
    'Common/(.*)$': '<rootDir>/src/components/Common/$1',
    'Section/(.*)$': '<rootDir>/src/components/Section/$1',
    'Context/(.*)$': '<rootDir>/src/components/Context/$1',
    'libs/(.*)$': '<rootDir>/src/libs/$1',
    'hooks/(.*)$': '<rootDir>/src/hooks/$1'
  },
  coverageReporters: ['text'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
