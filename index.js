import highway from "@dogstudio/highway";
import Fade from "./transitions"

const H = new highway.Core({
    transitions: {
        default: Fade
    }
})