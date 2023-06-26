// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const cors = require ('cors');


// app.use(cors());

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }



import * as cors from "cors";
const corsHandler = cors({ origin: true });

// allow cors in http function
export const myFunction = functions.https.onRequest((req, res) => {
corsHandler(req, res, async () => {
  res.status (200).json ({name:'John Doe'})

// your method body

 });
});