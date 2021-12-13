import React from "react"
import { Box, Slider } from "native-base"

export default function SliderData({
  label,
  min,
  max,
  color,
  step,
  model,
  setmodel,
}) {
  return (
    <>
      <Box>{label}</Box>
      <Box mx="5" mb="5" w="80%">
        <Slider
          defaultValue={model}
          size="md"
          minValue={parseInt(min)}
          maxValue={parseInt(max)}
          step={parseInt(step)}
          colorScheme={color}
          onChange={(e) => {
            setmodel(e)
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </>
  )
}
