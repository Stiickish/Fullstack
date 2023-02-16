import { getPeople } from "./people.js";
import { renderPeopleList } from "./peopleList.js";

const people = getPeople()

const container = document.getElementById("app")
renderPeopleList(container!, await people)
