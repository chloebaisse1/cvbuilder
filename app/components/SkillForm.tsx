import { Skill } from "@/type"
import { Plus } from "lucide-react"
import React, { useState } from "react"

type Props = {
  skills: Skill[]
  setSkills: (skills: Skill[]) => void
}
const SkillForm: React.FC<Props> = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState<Skill>({
    name: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fied: keyof Skill
  ) => {
    setNewSkill({ ...newSkill, [fied]: e.target.value })
  }

  const handleAddSkill = () => {
    setSkills([...skills, newSkill])
    setNewSkill({
      name: "",
    })
  }
  return (
    <div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="compétence"
          value={newSkill.name}
          onChange={(e) => handleChange(e, "name")}
          className="input input-bordered w-full mt-4"
        />
      </div>
      <button onClick={handleAddSkill} className="btn btn-info mt-4">
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  )
}

export default SkillForm
