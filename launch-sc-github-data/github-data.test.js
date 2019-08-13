const { numOfRepos, largestRepo, mostRecentRepo, noGazers, maxGazers, hasDescriptions, newDescriptionsArray, keyInfo, monkeyKeys, urlValue } = require('./github-data')
const data = require('./data')

test('returns number of repos', () => {
  expect(numOfRepos(data)).toBe(30)
})

test('returns largest repo', () => {
  expect(largestRepo(data)).toBe('discourse')
})

test('returns most recent repo', () => {
  expect(mostRecentRepo(data)).toBe('dog_park')
})

test('returns count of repos with no stargazers', () => {
  expect(noGazers(data)).toBe(21)
})

test('returns repos with most stargazers', () => {
  expect(maxGazers(data)).toBe('roboto')
})

test('returns count of repos with descriptions that are not null', () => {
  expect(hasDescriptions(data).length).toBe(21)
})

test('returns an array of descriptions', () => {
  expect(newDescriptionsArray(data)).toContain('No description given')
  expect(newDescriptionsArray(data)).toContain('A set of Koans to teach the Ruby language')
  expect(newDescriptionsArray(data)).not.toContain(null)
})

test('returns an array of key info', () => {
  expect(keyInfo(data)).toContain('Repo name is monkey_party, 4 watchers, owner is LaunchAcademy')
  expect(keyInfo(data)).toContain('Repo name is codecabulary, 19 watchers, owner is LaunchAcademy')
  expect(keyInfo(data)).not.toContain('Repo name is booster, 44 watchers, owner is [object Object]')
})

test('returns the keys for the monkey_party\'s license object', () => {
  expect(monkeyKeys(data)).toContain('key')
  expect(monkeyKeys(data)).toContain('url')
})

test('returns the URL value for the monkey_party\'s licence object', () => {
  expect(urlValue(data)).toContain('https://api.github.com/licenses/mit')
} )
