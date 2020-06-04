import React from "react"
import { Button, Icon } from "@chakra-ui/core"

type ShareButtonProps = {
  url: string
}

export const TwitterShareButton = ({ url }: ShareButtonProps) => {
  return (
    <Button
      as="a"
      leftIcon="twitter"
      variantColor="socials.twitter"
      variant="outline"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share this article on Twitter"
    >
      Twitter
    </Button>
  )
}

export const LinkedInShareButton = ({ url }: ShareButtonProps) => {
  return (
    <Button
      as="a"
      leftIcon="linkedin"
      variantColor="socials.linkedin"
      variant="outline"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share this article on LinkedIn"
    >
      LinkedIn
    </Button>
  )
}
