async function* asyncGenerator() {
  const languages = ['JavaScript', 'Python', 'Java', 'C#']
  for (const lang of languages) {
    yield `Hello, ${lang}!\n`
  }
}

const streamFromGenerator = stream.Readable.from(asyncGenerator())
streamFromGenerator.pipe(fs.createWriteStream('dest.txt'))
