import React from "react"
import { Box, Alert, VStack, HStack, Text } from "native-base"

export default function BoxInfos({ model, w, color, label, label2 }) {
  return (
    <Alert mt="5" mb="5" w={w} status="info" colorScheme={color}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          space={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack flexShrink={1} space={2} alignItems="center">
            <Text fontSize="20px" fontWeight="medium" color="coolGray.800">
              {label}
            </Text>
          </HStack>
        </HStack>
        <Box pl="6">
          <Text fontSize="25px">{model}</Text>
          <Text fontSize="30px">{label2}</Text>
        </Box>
      </VStack>
    </Alert>
  )
}
