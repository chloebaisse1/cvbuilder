import { Hobby } from "@/type"
import { Plus } from "lucide-react"
import React, { useState } from "react"

type Props = {
  hobbies: Hobby[]
  setHobbies: (hobbies: Hobby[]) => void
}
const HobbyForm: React.FC<Props> = ({ hobbies, setHobbies }) => {
  const [newHobby, setNewHobby] = useState<Hobby>({
    name: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fied: keyof Hobby
  ) => {
    setNewHobby({ ...newHobby, [fied]: e.target.value })
  }

  const handleAddHobby = () => {
    setHobbies([...hobbies, newHobby])
    setNewHobby({
      name: "",
    })
  }
  return (
    <div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="loisir"
          value={newHobby.name}
          onChange={(e) => handleChange(e, "name")}
          className="input input-bordered w-full mt-4"
        />
      </div>
      <button onClick={handleAddHobby} className="btn btn-info mt-4">
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  )
}

export default HobbyForm
