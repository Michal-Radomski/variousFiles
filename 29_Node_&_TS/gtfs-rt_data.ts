import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import protobuf from "protobufjs";

import * as dotenv from "dotenv";

//* DetEnv config
dotenv.config();

// const url_VP = process.env.URL_VP as string; //* vehiclePositions (GTF-RT)
const url_TU = process.env.URL_TU as string; //* tripUpdates (GTF-RT)
// console.log({ url_VP, url_TU });

//* 1. https://www.npmjs.com/package/gtfs-realtime-bindings
(async (): Promise<void> => {
  try {
    const res: Response = await fetch(url_TU, { headers: {} });
    // console.log("res:", res);

    if (!res.ok) {
      const error: Error = new Error(`${res.url}: ${res.status} ${res.statusText}`);
      // console.log("error:", error);
      // throw new Error(error.toString());
      process.exit(1);
    }

    const buffer: ArrayBuffer = await res.arrayBuffer();
    // console.log({ buffer });

    const feed: GtfsRealtimeBindings.transit_realtime.FeedMessage = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
      new Uint8Array(buffer)
    );
    // console.log({ feed });

    feed.entity.forEach((entity: GtfsRealtimeBindings.transit_realtime.IFeedEntity) => {
      if (entity.tripUpdate) {
        console.log(1, entity.tripUpdate);
      }

      // if (entity) {
      //   console.log("entity:", entity);
      // }
    });
  } catch (error) {
    console.log("error:", error);
    process.exit(1);
  }
})();

//* 2. https://www.npmjs.com/package/protobufjs
// Define GTFS-RT message types manually
const root: protobuf.Root = new protobuf.Root();

root
  .define("transit_realtime")
  .add(
    new protobuf.Type("FeedMessage")
      .add(new protobuf.Field("header", 1, "Header"))
      .add(new protobuf.Field("entity", 2, "Entity", "repeated"))
  )
  .add(
    new protobuf.Type("Header")
      .add(new protobuf.Field("gtfs_realtime_version", 1, "string"))
      .add(new protobuf.Field("incrementality", 2, "int32"))
      .add(new protobuf.Field("timestamp", 3, "uint64"))
  )
  .add(
    new protobuf.Type("Entity")
      .add(new protobuf.Field("id", 1, "string"))
      .add(new protobuf.Field("vehicle", 2, "Vehicle"))
      .add(new protobuf.Field("trip_update", 3, "TripUpdate"))
  );

root.add(
  new protobuf.Type("Vehicle")
    .add(new protobuf.Field("trip", 1, "TripDescriptor"))
    .add(new protobuf.Field("position", 2, "Position"))
    .add(new protobuf.Field("current_stop_sequence", 3, "uint32"))
    .add(new protobuf.Field("stop_id", 4, "string"))
);
// console.log("root:", root);

// Define other necessary types like TripDescriptor and Position similarly...

// Fetch GTFS-RT data
(async function fetchGtfsRtData(url: string): Promise<void> {
  try {
    const response: Response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const buffer: ArrayBuffer = await response.arrayBuffer();
    const message: protobuf.Type = root.lookupType("transit_realtime.FeedMessage");
    // console.log({ buffer, message });

    // Decode the buffer
    const decodedMessage: protobuf.Message<{}> = message.decode(new Uint8Array(buffer));
    console.log(2, "decodedMessage:", decodedMessage);

    const object = message.toObject(decodedMessage, {
      longs: String,
      enums: String,
      bytes: String,
    });

    console.log(2, "object:", object); // Handle the decoded object here
  } catch (error) {
    console.error("Error fetching or decoding GTFS-RT data:", error);
  }
})(url_TU);

//* 3. Buffer vs ArrayBuffer
const buf = Buffer.from("Hello World", "utf-8") as Buffer;
console.log("buf:", buf); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
console.log("buf.toString():", buf.toString()); // "Hello World"

const arrayBuffer = new ArrayBuffer(16) as ArrayBuffer;
console.log("arrayBuffer:", arrayBuffer);
const view = new Uint8Array(arrayBuffer) as Uint8Array;
console.log("view:", view);
view[0] = 255;
console.log("view[0]:", view[0]); // 255
