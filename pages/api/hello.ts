export default function HelloAPI(req: Request) {
  return Response.json({
    message: "Hello from Apeze API! ⚡",
    timestamp: Date.now(),
    method: req.method,
    url: req.url,
  });
}
