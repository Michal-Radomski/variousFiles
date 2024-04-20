import * as tf from "@tensorflow/tfjs-node";
import { plot, Plot } from "nodeplotlib";

// console.log("tf.version", tf.version);
// console.log("tf.getBackend():", tf.getBackend());
// console.log("tf.memory():", tf.memory());

//@ Create a simple model.
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

//@ Linear Regression
interface Car {
  mpg?: number;
  Miles_per_Gallon?: number;
  Horsepower?: number;
  horsepower?: number;
}

interface TensorObj {
  // [key: string]: tf.Tensor<tf.Rank>;
  inputs: tf.Tensor<tf.Rank>;
  labels: tf.Tensor<tf.Rank>;
  inputMax: tf.Tensor<tf.Rank>;
  inputMin: tf.Tensor<tf.Rank>;
  labelMax: tf.Tensor<tf.Rank>;
  labelMin: tf.Tensor<tf.Rank>;
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

  console.log("cleaned.length:", cleaned.length);
  return cleaned;
}

//* Plot the data
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
  model.add(tf.layers.dense({ units: 50, activation: "sigmoid" }));
  // Add an output layer
  model.add(tf.layers.dense({ units: 1, useBias: true }));

  return model;
}

// Create the model
const model = createModel();
model.summary();

function convertToTensor(data: Car[]): TensorObj {
  // Wrapping these calculations in a tidy will dispose any
  // intermediate tensors.

  return tf.tidy(() => {
    // Step 1. Shuffle the data
    tf.util.shuffle(data);

    // Step 2. Convert data to Tensor
    const inputs = data.map((d: Car) => d.horsepower) as number[];
    const labels = data.map((d: Car) => d.mpg) as number[];

    const inputTensor: tf.Tensor2D = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor: tf.Tensor2D = tf.tensor2d(labels, [labels.length, 1]);

    //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs: tf.Tensor<tf.Rank> = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const normalizedLabels: tf.Tensor<tf.Rank> = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    };
  });
}

async function trainModel(model: tf.Sequential, inputs: tf.Tensor2D, labels: tf.Tensor2D): Promise<tf.History> {
  // Prepare the model for training.
  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
    metrics: ["mse"],
  });

  const batchSize = 32;
  const epochs = 50;

  return await model.fit(inputs, labels, {
    batchSize,
    epochs,
    shuffle: true,
    // callbacks: ()=>console.log(onEpochEnd()),
  });
}

function testModel(
  model: tf.Sequential,
  inputData: Car[],
  normalizationData: {
    inputMax: tf.Tensor<tf.Rank>;
    inputMin: tf.Tensor<tf.Rank>;
    labelMin: tf.Tensor<tf.Rank>;
    labelMax: tf.Tensor<tf.Rank>;
  }
) {
  const { inputMax, inputMin, labelMin, labelMax } = normalizationData as TensorObj;

  // Generate predictions for a uniform range of numbers between 0 and 1;
  // We un-normalize the data by doing the inverse of the min-max scaling that we did earlier.

  const [xs, preds] = tf.tidy(() => {
    const xsNorm = tf.linspace(0, 1, 100);
    const predictions = model.predict(xsNorm.reshape([100, 1])) as tf.Tensor<tf.Rank>;

    const unNormXs = xsNorm.mul(inputMax.sub(inputMin)).add(inputMin);

    const unNormPreds = predictions.mul(labelMax.sub(labelMin)).add(labelMin);

    // Un-normalize the data
    return [unNormXs.dataSync(), unNormPreds.dataSync()];
  });

  const predictedPoints = Array.from(xs).map((val: number, i: number) => {
    return { x: val, y: preds[i] };
  });
  // console.log("predictedPoints:", predictedPoints);

  //* Plot original data
  const originalData: Plot[] = [
    {
      x: inputData.map((elem) => elem?.horsepower) as number[],
      y: inputData.map((elem) => elem?.mpg) as number[],
      type: "scatter",
      mode: "markers",
    },
  ];
  plot(originalData);

  //* Plot predicted dta
  const predictedData: Plot[] = [
    {
      x: predictedPoints.map((elem) => elem?.x) as number[],
      y: predictedPoints.map((elem) => elem?.y) as number[],
      type: "scatter",
      mode: "markers",
    },
  ];
  plot(predictedData);
}

// Convert the data to a form we can use for training.
(async function (): Promise<void> {
  const data = (await getData()) as Car[];
  const tensorData = convertToTensor(data) as TensorObj;
  const { inputs, labels } = tensorData as { inputs: tf.Tensor2D; labels: tf.Tensor2D };
  // Train the model

  await trainModel(model, inputs, labels);
  // console.log("Done Training");
  testModel(model, data, tensorData as TensorObj);
})();
