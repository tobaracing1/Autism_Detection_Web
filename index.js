import express from 'express'
import userRoutes from './api/routes/user.js'
import childInformationRoutes from './api/routes/childInformation.js'
import cors from 'cors'
const app  = express()

const port = process.env.PORT || 8082

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoutes)
app.use("/api/childInformation", childInformationRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export default app