import { Skills } from '../Constants/Skills'
import { Skill } from '../types'

export function isSkill(skill: any): skill is Skill {
  return skill in Skills
}
