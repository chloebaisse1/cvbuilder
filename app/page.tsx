"use client"
import {
  educationsPreset,
  experiencesPreset,
  hobbiesPreset,
  languagesPreset,
  personalDetailsPreset,
  skillsPreset,
} from "@/presets"
import {
  Education,
  Experience,
  Hobby,
  Language,
  PersonalDetails,
  Skill,
} from "@/type"
import { Eye, RotateCw } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import CVPreview from "./components/CVPreview"
import EducationForm from "./components/EducationForm"
import ExperienceForm from "./components/ExperienceForm"
import HobbyForm from "./components/HobbyForm"
import LanguageForm from "./components/LanguageForm"
import PersonalDetailsFrom from "./components/PersonalDetailsFrom"
import SkillForm from "./components/SkillForm"

export default function Home() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
    personalDetailsPreset
  )
  const [file, setFile] = useState<File | null>(null)
  const [theme, setTheme] = useState<string>("cupcake")
  const [zoom, setZoom] = useState<number>(163)
  const [experiences, setExperience] = useState<Experience[]>(experiencesPreset)
  const [educations, setEducations] = useState<Education[]>(educationsPreset)
  const [languages, setLanguages] = useState<Language[]>(languagesPreset)
  const [skills, setSkills] = useState<Skill[]>(skillsPreset)
  const [hobbies, setHobbies] = useState<Hobby[]>(hobbiesPreset)

  useEffect(() => {
    const defaultImageUrl = "/profile.jpg"
    fetch(defaultImageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const defaultFile = new File([blob], "profile.jpg", { type: blob.type })
        setFile(defaultFile)
      })
  }, [])

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ]

  const handleResetPersonalDetails = () =>
    setPersonalDetails({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      photoUrl: "",
      postSeeking: "",
      description: "",
    })

  const handleResetExperiences = () => setExperience([])
  const handleResetEducations = () => setEducations([])
  const handleResetLanguages = () => setLanguages([])
  const handleResetSkills = () => setSkills([])
  const handleResetHobbies = () => setHobbies([])

  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">
                CV
                <span className="text-info">Builder</span>
              </h1>
              <button className="btn btn-info">
                Prévisualiser
                <Eye className="w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="badge badge-info badge-outline">
                  Qui êtes-vous
                </h1>
                <button
                  onClick={handleResetPersonalDetails}
                  className="btn btn-info btn-sm"
                >
                  <RotateCw className="w-4" />
                </button>
              </div>

              <PersonalDetailsFrom
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                setFile={setFile}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-info badge-outline">Expériences</h1>
                <button
                  onClick={handleResetExperiences}
                  className="btn btn-info btn-sm"
                >
                  <RotateCw className="w-4" />
                </button>
              </div>

              <ExperienceForm
                experience={experiences}
                setExperiences={setExperience}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-info badge-outline">Education</h1>
                <button
                  onClick={handleResetEducations}
                  className="btn btn-info btn-sm"
                >
                  <RotateCw className="w-4" />
                </button>
              </div>

              <EducationForm
                educations={educations}
                setEducations={setEducations}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-info badge-outline">Langues</h1>
                <button
                  onClick={handleResetLanguages}
                  className="btn btn-info btn-sm"
                >
                  <RotateCw className="w-4" />
                </button>
              </div>
              <LanguageForm languages={languages} setLanguages={setLanguages} />

              <div className="flex justify-between">
                <div className="w-1/2">
                  <div className="flex justify-between items-center">
                    <h1 className="badge badge-info badge-outline">
                      Compétences
                    </h1>
                    <button
                      onClick={handleResetSkills}
                      className="btn btn-info btn-sm"
                    >
                      <RotateCw className="w-4" />
                    </button>
                  </div>
                  <SkillForm skills={skills} setSkills={setSkills} />
                </div>

                <div className="ml-4 w-1/2">
                  <div className="flex justify-between items-center">
                    <h1 className="badge badge-info badge-outline">Loisirs</h1>
                    <button
                      onClick={handleResetHobbies}
                      className="btn btn-info btn-sm"
                    >
                      <RotateCw className="w-4" />
                    </button>
                  </div>
                  <HobbyForm hobbies={hobbies} setHobbies={setHobbies} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-full bg-base-100 bg-[url('/file.svg')] bg-cover bg-center scrollable-preview relative">
            <div className="flex items-center justify-center fixed z-[999] top-5 right-5">
              <input
                type="range"
                min={50}
                max={200}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="range range-xs range-info"
              />
              <p className="ml-4 text-sm text-info">{zoom}%</p>
            </div>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="select select-bordered fixed z-[999] select-sm top-12 right-5"
            >
              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>

            <div
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom / 200})`,
              }}
            >
              <CVPreview
                personalDetails={personalDetails}
                file={file}
                theme={theme}
                experiences={experiences}
                educations={educations}
                languages={languages}
                skills={skills}
                hobbies={hobbies}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">
                Désolé, le CV Builder est uniquement accessible sur ordinateur.
              </h1>
              <Image
                src="/redirection.png"
                width={500}
                height={500}
                alt="Image affichant l'erreur 404 redirection"
                className="mx-auto my-6"
              />
              <p className="py-6">
                Pour créer et personnaliser votre CV, veuillez utiliser un
                ordinateur. Nous vous remercions pour votre compréhesion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
