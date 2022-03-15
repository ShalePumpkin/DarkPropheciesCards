import {Discipline} from "../lib/types";

export default function DisciplineIcon (d: Discipline) {
	return <span className={"discipline-icon " + d.key} style={{backgroundImage: `url(${d.iconURL})`}}></span>
}
