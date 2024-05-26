import { Application, Context } from "@oakserver/oak";

const app: Application = new Application();

(async function aokServer(): Promise<void> {
  app.use(async (ctx: Context) => {
    // console.log("ctx.request.ip:", ctx.request.ip);

    if (ctx?.request?.body?.has) {
      console.log("ctx.request.body:", ctx.request.body);

      const reqBody = await ctx.request.body.json();
      console.log(reqBody, typeof reqBody);
    }

    ctx.response.status = 200;
    ctx.response.body = "Hello World from Oak Sever!";
  });

  await app.listen({ port: 8000 });
})();
