const { EmbeddingModel, FlagEmbedding } = require('fastembed');

const content = "Hello, World!";



async function run() {
  const embeddingModel = await FlagEmbedding.init({
    model: EmbeddingModel.BGEBaseEN
  });
  const embedding = embeddingModel.embed([content]);

  for await (const embed of embedding) {
    console.log(embed);
  }
  console.log(embedding);
}

run();