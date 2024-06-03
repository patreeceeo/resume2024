import './style.css'
import data from './data.json'

declare const divExperience: HTMLElement;

// TODO use other fields
for(const {company, location, position, start, end, description, employmentType, remote, skills} of data.experience) {
  const div = document.createElement('div')
  div.innerHTML = [
    `<h3><b>${company},</b> ${location} &mdash; <i>${position}</i> (${ remote ? "remote " : ""}${employmentType})</h3>`,
    `<date>${start && end ? `${start} &mdash; ${end}` : start ? `${start} &mdash; PRESENT` : ''}</date>`,
    renderSkills(skills),
    description ? `<div class="list">${description!.map(d => `<div class="list-item">${d}</div>`).join('')}</div>` : '',
  ].join('')
  divExperience.appendChild(div)
}

declare const divEducation: HTMLElement;
for(const {school, location, degree, start, end, description, skills} of data.education) {
  const div = document.createElement('div')
  div.innerHTML = [
    `<h3><b>${school},</b> ${location} &mdash; <i>${degree}</i></h3>`,
    `<date>${start && end ? `${start} &mdash; ${end}` : start ? `${start} &mdash; PRESENT` : ''}</date>`,
    renderSkills(skills),
    description ? `<div class="list">${description!.map(d => `<div class="list-item">${d}</div>`).join('')}</div>` : '',
  ].join('')
  divEducation.appendChild(div)
}

function renderSkills(skills: string[]): string {
  const results = []
  for(const skill of skills) {
    results.push(`<span class="skill">${skill}</span>`)
  }
  return results.join("")
}

declare const divProjects: HTMLElement;

for(const project of data.projects) {
  const el = document.createElement('p')
  el.innerHTML = [
    `<a href="${project.href}"><b>${project.name}</b></a> `,
    project.description
  ].join('')
  divProjects.appendChild(el)
}
