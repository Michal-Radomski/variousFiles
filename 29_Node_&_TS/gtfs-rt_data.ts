import GtfsRealtimeBindings from "gtfs-realtime-bindings";

import * as dotenv from "dotenv";

//* DetEnv config
dotenv.config();

// const url_VP = process.env.URL_VP as string; //* vehiclePositions (GTF-RT)
const url_TU = process.env.URL_TU as string; //* tripUpdates (GTF-RT)
// console.log({ url_VP, url_TU });

//* https://www.npmjs.com/package/gtfs-realtime-bindings
(async (): Promise<void> => {
  try {
    const res: Response = await fetch(url_TU, { headers: {} });
    console.log("res:", res);

    if (!res.ok) {
      const error: Error = new Error(`${res.url}: ${res.status} ${res.statusText}`);
      console.log("error:", error);
      // throw new Error(error.toString());
      process.exit(1);
    }

    const buffer: ArrayBuffer = await res.arrayBuffer();
    console.log({ buffer });

    const feed: GtfsRealtimeBindings.transit_realtime.FeedMessage = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
      new Uint8Array(buffer)
    );
    console.log({ feed });

    feed.entity.forEach((entity: GtfsRealtimeBindings.transit_realtime.IFeedEntity) => {
      if (entity.tripUpdate) {
        console.log(entity.tripUpdate);
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
