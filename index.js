import http from "http";
import read_Pdf_File from "./app.js";

read_Pdf_File()
.then(
    (data) => {
        const portal = http.createServer(
            (req, res) => {
                console.log(req.url);
                console.log(data);
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("PDF Details: " + data);
                res.end();
            }
        );
        const PORT = process.env.PORT || 8000;
        const LOCALHOST = process.env.HOST || "127.0.0.1";
        portal.listen(PORT, LOCALHOST);
        console.log(
            `App, Listening on LOCALHOST: ${LOCALHOST}; PORT: ${PORT}...`
        );
})
.catch(err => console.error(err))