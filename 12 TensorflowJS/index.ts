import * as tf from "@tensorflow/tfjs-node";

// console.log("tf.version", tf.version);
// console.log("tf.getBackend():", tf.getBackend());
// console.log("tf.memory():", tf.memory());

// Create a simple model.
const model: tf.Sequential = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// Generate some synthetic data for training. (y = 2x - 1)
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

// Train the model using the data.
(async function () {
  await model.fit(xs, ys, { epochs: 1000 });
  const result = (await model.predict(tf.tensor2d([20], [1, 1]))) as tf.Tensor<tf.Rank>;
  result.print(); //* Tensor<Rank>
})();
