class EmbeddingTask {
  constructor(text, embeddingModel) {
    this.text = text;
    this.embedding = null;
    this.embeddingModel = embeddingModel;
  }

  async start() {
    console.log("Starting embedding task")
    const embeddings = this.embeddingModel.embed([this.text]);
    for await (const embed of embeddings) {
      this.embedding = embed;
    }
    console.log(this.embedding)
  }
}

module.exports = EmbeddingTask;
