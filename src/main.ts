import './style.css'
import data from './data.json'

declare const divExperience: HTMLElement;

// TODO use other fields
for(const {company, location, position, start, end, description} of data.experience) {
  const div = document.createElement('div')
  div.innerHTML = [
    `<h3><b>${company},</b> ${location} &mdash; <i>${position}</i></h3>`,
    `<date>${start && end ? `${start} &mdash; ${end}` : start ? `${start} &mdash; PRESENT` : ''}</date>`,
    description ? `<div class="list">${description!.map(d => `<div class="list-item">${d}</div>`).join('')}</div>` : ''
  ].join('')
  divExperience.appendChild(div)
}

declare const divEducation: HTMLElement;
for(const {school, location, degree, start, end, description} of data.education) {
  const div = document.createElement('div')
  div.innerHTML = [
    `<h3><b>${school},</b> ${location} &mdash; <i>${degree}</i></h3>`,
    `<date>${start && end ? `${start} &mdash; ${end}` : start ? `${start} &mdash; PRESENT` : ''}</date>`,
    description ? `<div class="list">${description!.map(d => `<div class="list-item">${d}</div>`).join('')}</div>` : ''
  ].join('')
  divEducation.appendChild(div)
}

declare const divSkills: HTMLElement;

function renderSkill(name: string, type: 'programming' | 'tool' | 'language' | 'concept' | 'soft') {
  const el = document.createElement('span')
  el.className = 'skill skill-' + type
  el.textContent = name
  divSkills.appendChild(el)
}

for(const name of data.skillProgramming) {
  renderSkill(`${name}`, 'programming')
}

for(const name of data.skillTools) {
  renderSkill(`${name}`, 'tool')
}

for(const name of data.skillConcepts) {
  renderSkill(`${name}`, 'concept')
}

for(const name of data.skillSoft) {
  renderSkill(`${name}`, 'soft')
}

for(const name of data.skillLanguages) {
  renderSkill(`${name}`, 'language')
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
