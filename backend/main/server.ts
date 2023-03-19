import cors from "cors";
import app from "./config"
import CONFIG from "./env"
import routes from "./routes"

const {PORT} = CONFIG;

app.use(cors())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
}).on("error", (error) => {
  console.log('Server error:', error);
});
