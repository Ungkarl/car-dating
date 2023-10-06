
import suggestion from "./suggestion.service.js";
import matchesList from "./matches.service.js";

const app = {};

app.init = async () => {
    suggestion.init()
    matchesList.init()
}


app.init()