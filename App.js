import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import {
  NativeBaseProvider,
  Center,
  Divider,
  Heading,
  HStack,
} from "native-base"

import SliderData from "./components/SliderData"
import BoxInfos from "./components/BoxInfos"

export default function App() {
  const [taille, setTaille] = useState(150)
  const [poids, setPoids] = useState(50)
  const [imc, setImc] = useState(0)
  const [diag, setDiag] = useState("")

  const diagnostique = (imc) => {
    if (imc < 18.5) return "Insuffisance pondérale"
    if (imc >= 18.5 && imc < 24.9) return "Poids normal"
    if (imc >= 25 && imc < 29.9) return "Surpoids"
    if (imc > 30) return "Obésité"

    return null
  }

  const diagnostiqueColor = (imc) => {
    if (imc < 18.5) return "cyan"
    if (imc >= 18.5 && imc < 24.9) return "green"
    if (imc >= 25 && imc < 29.9) return "orange"
    if (imc > 30) return "red"

    return null
  }

  useEffect(() => {
    const tailleM = parseInt(taille) / 100
    const res = parseInt(poids) / (tailleM * tailleM)
    setImc(res.toFixed(1))
  }, [taille, poids])

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Heading size="xl" mb="4">
          Application IMC
        </Heading>

        <SliderData
          label="Sélectionnez la taille en cm"
          min={100}
          max={230}
          color="emerald"
          step={1}
          model={taille}
          setmodel={setTaille}
        />

        <Divider my="2" />

        <SliderData
          label="Sélectionnez le poids en kg"
          min={20}
          max={250}
          color={"cyan"}
          step={1}
          model={poids}
          setmodel={setPoids}
        />

        <Divider my="2" />

        <HStack>
          <BoxInfos
            model={taille}
            w={"50%"}
            color={"emerald"}
            label={"Taille (cm)"}
          />
          <BoxInfos
            model={poids}
            w={"50%"}
            color={"cyan"}
            label={"Poids (kg)"}
          />
        </HStack>

        <BoxInfos
          model={imc}
          w={"100%"}
          color={diagnostiqueColor(imc)}
          label={"IMC"}
          label2={diagnostique(imc)}
        />
      </Center>
    </NativeBaseProvider>
  )
}
