import React, { useState } from "react"
import meeshkanTheme from "./codeTheme"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { mdx } from "@mdx-js/react"
import * as Chakra from "@chakra-ui/core"
import * as Formik from "formik"
import FocusLock from "react-focus-lock"

const { Box, Button, useClipboard } = Chakra

export const liveEditorStyle = {
  fontSize: 16,
  fontFamily: `'Operator Mono Lig', Fira Code, SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New", monospace`,
  marginBottom: 16,
  marginTop: 16,
  overflow: "auto",
  borderRadius: 4,
  maxHeight: 300,
  lineHeight: "1.5",
  padding: 8,
}

export const liveErrorStyle = {
  fontFamily: "Fira Code, monospace",
  fontSize: 14,
  padding: "1em",
  overflowX: "auto",
  color: "white",
  backgroundColor: "red",
}

const LiveCodePreview = (props) => (
  <Box
    as={LivePreview}
    fontFamily="body"
    mt={5}
    p={4}
    border="1px"
    borderColor="gray.300"
    rounded="lg"
    {...props}
  />
)

const CopyButton = (props) => (
  <Button
    size="sm"
    rounded="sm"
    position="absolute"
    textTransform="uppercase"
    fontWeight={900}
    variantColor="red"
    variant="solid"
    height={6}
    top={4}
    zIndex="1"
    right={4}
    {...props}
  />
)

const EditableNotice = (props) => {
  return (
    <Box
      position="absolute"
      width="full"
      top="0.5em"
      rounded="sm"
      zIndex="0"
      letterSpacing="wide"
      color="gray.500"
      fontSize="sm"
      fontWeight="700"
      textAlign="center"
      textTransform="uppercase"
      pointerEvents="none"
      {...props}
    >
      Editable Example
    </Box>
  )
}

type CodeBlockProps = {
  className?: string
  live?: Boolean
  isManual?: boolean
  render?: Boolean
  children?: string
  copyButton?: Boolean
  maxH?: string
}

const CodeBlock = ({
  className,
  live = true,
  isManual,
  render,
  children,
  copyButton = true,
  maxH,
  ...props
}: CodeBlockProps) => {
  const [editorCode, setEditorCode] = useState(children.trim())

  const language = className && className.replace(/language-/, "")
  const { onCopy, hasCopied } = useClipboard(editorCode)

  const liveProviderProps = {
    theme: meeshkanTheme,
    language,
    code: editorCode,
    transformCode: (code) =>
      "/** @jsx tsx json graphql python bash yaml scheme latex haskell */" +
      code,
    scope: {
      ...Chakra,
      ...Formik,
      mdx,
      FocusLock,
    },
    noInline: isManual,
    ...props,
  }

  const handleCodeChange = (newCode) => setEditorCode(newCode.trim())

  if (language === "jsx" && live === true) {
    return (
      <LiveProvider {...liveProviderProps}>
        <LiveCodePreview />
        <Box position="relative">
          <LiveEditor
            onChange={handleCodeChange}
            // @ts-ignore
            style={liveEditorStyle}
          />
          {copyButton === true ? (
            <CopyButton onClick={onCopy}>
              {hasCopied ? "copied" : "copy"}
            </CopyButton>
          ) : null}

          <EditableNotice />
        </Box>
        <LiveError
          // @ts-ignore
          style={liveErrorStyle}
        />
      </LiveProvider>
    )
  }

  if (render) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider {...liveProviderProps}>
          <LiveCodePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <Box position="relative">
        <LiveEditor padding={20} style={liveEditorStyle} />

        {copyButton === true ? (
          <CopyButton top="1.25em" onClick={onCopy}>
            {hasCopied ? "copied" : "copy"}
          </CopyButton>
        ) : null}
      </Box>
    </LiveProvider>
  )
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
}

export default CodeBlock
