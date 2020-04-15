import React from "react"
import { Box } from "@chakra-ui/core"
const Video = ({ url, title, ...props }) => (
  <Box pos="relative" overflow="hidden" pt="56.25%" borderRadius="sm" my={6}>
    <iframe
      title={title}
      src={url}
      style={{
        borderRadius: 4,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Box>
)
export default Video
