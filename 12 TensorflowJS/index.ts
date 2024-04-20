import * as tf from "@tensorflow/tfjs-node";
import { plot, Plot } from "nodeplotlib";

// console.log("tf.version", tf.version);
// console.log("tf.getBackend():", tf.getBackend());
// console.log("tf.memory():", tf.memory());

//* Create a simple model.
// const model: tf.Sequential = tf.sequential();
// model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// // Prepare the model for training: Specify the loss and the optimizer.
// model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// // Generate some synthetic data for training. (y = 2x - 1)
// const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
// const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

// // Train the model using the data.
// (async function () {
//   await model.fit(xs, ys, { epochs: 1000 });
//   const result = (await model.predict(tf.tensor2d([20], [1, 1]))) as tf.Tensor<tf.Rank>;
//   result.print(); //* Tensor<Rank>
//   model.summary();
// })();

//* Linear Regression

interface Car {
  mpg?: number;
  Miles_per_Gallon?: number;
  Horsepower?: number;
  horsepower?: number;
}

async function getData(): Promise<Car[]> {
  const carsDataResponse = await fetch("https://storage.googleapis.com/tfjs-tutorials/carsData.json");
  const carsData = (await carsDataResponse.json()) as Car[];
  // console.log("carsData:", carsData);

  const cleaned = carsData
    .map((car: Car) => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    }))
    .filter((car: Car) => car.mpg !== null && car.horsepower !== null);

  console.log("cleaned:", cleaned);
  return cleaned;
}

// getData().then((res: Car[]) => {
//   const data: Plot[] = [
//     {
//       x: res.map((elem) => elem?.horsepower) as number[],
//       y: res.map((elem) => elem?.mpg) as number[],
//       type: "scatter",
//       mode: "markers",
//     },
//   ];

//   plot(data);
// });

// Define the model architecture
function createModel(): tf.Sequential {
  // Create a sequential model
  const model: tf.Sequential = tf.sequential();

  // Add a single input layer
  model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));

  // Add an output layer
  model.add(tf.layers.dense({ units: 1, useBias: true }));

  return model;
}

// Create the model
const model = createModel();
model.summary();
